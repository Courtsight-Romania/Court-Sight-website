/**
 * Variantele de scriere ale unui nume — regulile reale ale motorului.
 *
 * Portat din `Court-Sight-dashboard/src/normalize.ts` (L0, normalizare
 * deterministă). NU e o simplificare făcută pentru site: dacă widgetul din
 * pagină ar arăta altceva decât face motorul, ar minți despre produs.
 *
 * De unde vine problema, pe scurt: ECRIS amestecă două seturi de diacritice
 * românești — cu SEDILĂ (moștenit din Windows-1250: ş U+015F, ţ U+0163) și cu
 * VIRGULĂ (corect Unicode: ș U+0219, ț U+021B). Sunt code-point-uri diferite,
 * deci „Ştefan” și „Ștefan” nu se potrivesc la o comparație brută, iar căutarea
 * portalului nu face echivalența. Confirmat în datele oficiale: pe
 * portal.just.ro apar în același tabel „Curtea de Apel BUCUREŞTI” (sedilă) și
 * „Curtea de Apel PLOIEȘTI” (virgulă).
 *
 * Când schimbi ceva aici, schimbă în ambele locuri — altfel pagina promite o
 * căutare pe care motorul n-o face.
 */

const HARTA_DIACRITICE: Readonly<Record<string, string>> = Object.freeze({
  ş: "s", Ş: "S", ș: "s", Ș: "S",
  ţ: "t", Ţ: "T", ț: "t", Ț: "T",
  ă: "a", Ă: "A", â: "a", Â: "A",
  î: "i", Î: "I",
});

/* Doar S și T diferă între cele două convenții. A-breve, A-circumflex și
   I-circumflex au același code-point în ambele, deci nu apar aici. */
const SEDILA_LA_VIRGULA: Readonly<Record<string, string>> = Object.freeze({
  ş: "ș", Ş: "Ș", ţ: "ț", Ţ: "Ț",
});
const VIRGULA_LA_SEDILA: Readonly<Record<string, string>> = Object.freeze({
  ș: "ş", Ș: "Ş", ț: "ţ", Ț: "Ţ",
});

function converteste(text: string, harta: Readonly<Record<string, string>>) {
  let rezultat = "";
  for (const caracter of text) rezultat += harta[caracter] ?? caracter;
  return rezultat;
}

export function laVirgula(text: string) {
  return converteste(text, SEDILA_LA_VIRGULA);
}

export function laSedila(text: string) {
  return converteste(text, VIRGULA_LA_SEDILA);
}

export function eliminaDiacritice(text: string) {
  if (!text) return "";
  let rezultat = "";
  for (const caracter of text) rezultat += HARTA_DIACRITICE[caracter] ?? caracter;
  /* NFD plus ștergerea semnelor combinate prinde restul: é, ü, ç. */
  return rezultat.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* „S.R.L.” → „SRL”. Înlocuirea se face cu spații de gardă: „S.C.ALFA S.R.L.”,
   scris frecvent fără spațiu după punct, ar deveni altfel „SCALFA SRL” — un
   token lipit care nu s-ar mai potrivi niciodată. */
const FORME_JURIDICE: ReadonlyArray<readonly [RegExp, string]> = [
  [/\bS\s*\.\s*C\s*\.?/gi, "SC"],
  [/\bS\s*\.\s*R\s*\.\s*L\s*\.?/gi, "SRL"],
  [/\bS\s*\.\s*A\s*\.?/gi, "SA"],
  [/\bP\s*\.\s*F\s*\.\s*A\s*\.?/gi, "PFA"],
  [/\bS\s*\.\s*N\s*\.\s*C\s*\.?/gi, "SNC"],
  [/\bR\s*\.\s*A\s*\.?/gi, "RA"],
];

const MARCATORI_PERSOANA_JURIDICA: ReadonlySet<string> = new Set([
  "SC", "SRL", "SA", "PFA", "II", "IF", "SNC", "SCS", "RA", "ONG", "CAR",
]);

export function normalizeazaFormaJuridica(text: string) {
  let rezultat = text;
  for (const [tipar, inlocuire] of FORME_JURIDICE) {
    rezultat = rezultat.replace(tipar, ` ${inlocuire} `);
  }
  return rezultat.replace(/\s+/g, " ").trim();
}

/** Forma canonică: fără diacritice, forme juridice uniformizate, majuscule. */
export function normalizeazaNume(text: string) {
  if (!text) return "";
  const fara = eliminaDiacritice(text);
  const forme = normalizeazaFormaJuridica(fara);
  return forme
    .toUpperCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeaza(text: string) {
  return normalizeazaNume(text).split(" ").filter(Boolean);
}

function pareePersoanaJuridica(text: string) {
  return tokenizeaza(text).some((t) => MARCATORI_PERSOANA_JURIDICA.has(t));
}

export interface Varianta {
  text: string;
  motiv: string;
}

/**
 * Scrierile pe care motorul le caută în paralel pentru un nume.
 *
 * Ordinea e cea în care le-ar trimite: textul introdus, formele de diacritice,
 * forma canonică, ordinea inversată a numelui, iar pentru firme și varianta
 * fără marcatorii de formă juridică.
 */
export function genereazaVariante(intrare: string): Varianta[] {
  const original = intrare.trim();
  if (!original) return [];

  const vazute = new Set<string>();
  const iesire: Varianta[] = [];
  const adauga = (text: string, motiv: string) => {
    const curat = text.trim();
    if (!curat || vazute.has(curat)) return;
    vazute.add(curat);
    iesire.push({ text: curat, motiv });
  };

  adauga(original, "textul introdus");

  if (/[şŞţŢșȘțȚ]/.test(original)) {
    adauga(laVirgula(original), "diacritice cu virgulă (Unicode)");
    adauga(laSedila(original), "diacritice cu sedilă (Windows-1250)");
  }

  adauga(normalizeazaNume(original), "formă canonică, fără diacritice");

  const tokenuri = tokenizeaza(original);
  if (tokenuri.length === 2) {
    adauga(`${tokenuri[1]} ${tokenuri[0]}`, "nume și prenume inversate");
  }

  if (pareePersoanaJuridica(original) && tokenuri.length > 0) {
    adauga(
      tokenuri.filter((t) => !MARCATORI_PERSOANA_JURIDICA.has(t)).join(" "),
      "fără forma juridică",
    );
  }

  return iesire;
}
