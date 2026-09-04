/**
 * Generează datele hărții punctate: `lib/harta.ts`.
 *
 * Se rulează DE MÂNĂ, nu la fiecare build: `node scripts/genereaza-harta.mjs`.
 * Rezultatul se comite. Motivul e simplu — conturul României nu se schimbă, iar
 * un site de prezentare n-are de ce să calculeze la fiecare pornire aceleași
 * opt sute de puncte.
 *
 * Sursa conturului: georgique/world-geojson, descărcat pe 4 septembrie 2026 în
 * `scripts/date/romania.geo.json`. Poligon cu 1209 puncte, limite
 * lon 20.262–29.775, lat 43.619–48.264.
 *
 * Proiecția e echidreptunghiulară cu corecție de latitudine: la scara unei
 * singure țări, diferența față de Mercator e sub un pixel, iar formula încape
 * în trei rânduri și se poate verifica din ochi.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const AICI = dirname(fileURLToPath(import.meta.url));
const RADACINA = join(AICI, "..");

/* Cât de des punem puncte, pe orizontală. Mai mare = hartă mai densă și mai
   multe elemente în pagină. 46 dă ~800 de puncte, adică un desen citibil fără
   să umplem DOM-ul. */
const COLOANE = 46;

/* Orașele. Curțile de apel poartă etichetă; reședințele de județ sunt puncte
   mai mici, fără text — altfel harta devine ilizibilă.
   Coordonatele sunt scrise de mână și VERIFICATE mai jos: fiecare trebuie să
   cadă în interiorul poligonului, iar patru distanțe cunoscute trebuie să iasă
   la câțiva kilometri de realitate. */
const ORASE = [
  // Cele 15 curți de apel. Înalta Curte e tot în București.
  { nume: "București", lat: 44.4268, lon: 26.1025, curte: true },
  { nume: "Cluj-Napoca", lat: 46.7712, lon: 23.6236, curte: true },
  { nume: "Iași", lat: 47.1585, lon: 27.6014, curte: true },
  { nume: "Timișoara", lat: 45.7489, lon: 21.2087, curte: true },
  { nume: "Craiova", lat: 44.3302, lon: 23.7949, curte: true },
  { nume: "Constanța", lat: 44.1598, lon: 28.6348, curte: true },
  { nume: "Brașov", lat: 45.6579, lon: 25.6012, curte: true },
  { nume: "Alba Iulia", lat: 46.0733, lon: 23.5805, curte: true },
  { nume: "Oradea", lat: 47.0465, lon: 21.9189, curte: true },
  { nume: "Galați", lat: 45.4353, lon: 28.008, curte: true },
  { nume: "Ploiești", lat: 44.9469, lon: 26.0367, curte: true },
  { nume: "Pitești", lat: 44.8565, lon: 24.8692, curte: true },
  { nume: "Bacău", lat: 46.567, lon: 26.9146, curte: true },
  { nume: "Suceava", lat: 47.6635, lon: 26.2732, curte: true },
  { nume: "Târgu Mureș", lat: 46.5455, lon: 24.5627, curte: true },

  // Restul reședințelor de județ, unde stau tribunalele.
  { nume: "Arad", lat: 46.1866, lon: 21.3123 },
  { nume: "Bistrița", lat: 47.1327, lon: 24.4915 },
  { nume: "Botoșani", lat: 47.7486, lon: 26.6694 },
  { nume: "Brăila", lat: 45.2692, lon: 27.9575 },
  { nume: "Buzău", lat: 45.15, lon: 26.8333 },
  { nume: "Călărași", lat: 44.2058, lon: 27.3106 },
  { nume: "Reșița", lat: 45.3008, lon: 21.889 },
  { nume: "Sfântu Gheorghe", lat: 45.8667, lon: 25.7833 },
  { nume: "Târgoviște", lat: 44.9247, lon: 25.457 },
  { nume: "Giurgiu", lat: 43.9037, lon: 25.9699 },
  { nume: "Târgu Jiu", lat: 45.0353, lon: 23.2745 },
  { nume: "Miercurea Ciuc", lat: 46.36, lon: 25.8019 },
  { nume: "Deva", lat: 45.8779, lon: 22.9142 },
  { nume: "Slobozia", lat: 44.5647, lon: 27.3661 },
  { nume: "Baia Mare", lat: 47.6573, lon: 23.5681 },
  { nume: "Drobeta-Turnu Severin", lat: 44.6369, lon: 22.6597 },
  { nume: "Piatra Neamț", lat: 46.9275, lon: 26.3708 },
  { nume: "Slatina", lat: 44.43, lon: 24.3708 },
  { nume: "Satu Mare", lat: 47.79, lon: 22.8858 },
  { nume: "Zalău", lat: 47.1911, lon: 23.0572 },
  { nume: "Sibiu", lat: 45.7983, lon: 24.1256 },
  { nume: "Alexandria", lat: 43.9861, lon: 25.3331 },
  { nume: "Tulcea", lat: 45.1787, lon: 28.805 },
  { nume: "Vaslui", lat: 46.6407, lon: 27.7276 },
  { nume: "Râmnicu Vâlcea", lat: 45.1047, lon: 24.3754 },
  { nume: "Focșani", lat: 45.696, lon: 27.1838 },
];

/* Distanțe cunoscute, în linie dreaptă, pentru control. Toleranță 25 km:
   destul cât să treacă rotunjirile, prea puțin cât să lase o coordonată greșită
   să se strecoare. */
const CONTROL = [
  ["București", "Cluj-Napoca", 325],
  ["Timișoara", "Iași", 500],
  ["Constanța", "Oradea", 605],
  ["Suceava", "Craiova", 400],
];

const geo = JSON.parse(
  readFileSync(join(AICI, "date", "romania.geo.json"), "utf8"),
);
const geometrie = geo.features[0].geometry;
const inele =
  geometrie.type === "Polygon"
    ? [geometrie.coordinates]
    : geometrie.coordinates;

/* Ray casting: numărăm de câte ori o semidreaptă spre est taie conturul.
   Impar = înăuntru. Verificăm doar inelul exterior al fiecărui poligon —
   România n-are enclave, iar Delta nu are goluri care să conteze la scara asta. */
function inInterior(lon, lat) {
  for (const poligon of inele) {
    const contur = poligon[0];
    let inauntru = false;
    for (let i = 0, j = contur.length - 1; i < contur.length; j = i++) {
      const [xi, yi] = contur[i];
      const [xj, yj] = contur[j];
      if (
        yi > lat !== yj > lat &&
        lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
      ) {
        inauntru = !inauntru;
      }
    }
    if (inauntru) return true;
  }
  return false;
}

function distanta(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const la1 = (a.lat * Math.PI) / 180;
  const la2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// ---------------------------------------------------------------- verificări

const erori = [];

for (const oras of ORASE) {
  if (!inInterior(oras.lon, oras.lat)) {
    erori.push(`${oras.nume} cade ÎN AFARA conturului României`);
  }
}

const dupaNume = new Map(ORASE.map((o) => [o.nume, o]));
for (const [a, b, asteptat] of CONTROL) {
  const real = distanta(dupaNume.get(a), dupaNume.get(b));
  const abatere = Math.abs(real - asteptat);
  if (abatere > 25) {
    erori.push(
      `${a}–${b}: ${real.toFixed(0)} km, aşteptat ~${asteptat} km (abatere ${abatere.toFixed(0)})`,
    );
  }
}

const nume = ORASE.map((o) => o.nume);
if (new Set(nume).size !== nume.length) erori.push("există orașe duplicate");

if (erori.length) {
  console.error("VERIFICĂRI PICATE:\n - " + erori.join("\n - "));
  process.exit(1);
}

// ----------------------------------------------------------------- proiecția

const lons = inele.flatMap((p) => p[0].map((c) => c[0]));
const lats = inele.flatMap((p) => p[0].map((c) => c[1]));
const lonMin = Math.min(...lons);
const lonMax = Math.max(...lons);
const latMin = Math.min(...lats);
const latMax = Math.max(...lats);

/* Un grad de longitudine e mai scurt decât unul de latitudine, cu atât mai mult
   cu cât urcăm spre nord. Fără corecția asta, România iese lățită. */
const COS = Math.cos((((latMin + latMax) / 2) * Math.PI) / 180);

const LATIME = 1000;
const pasLon = (lonMax - lonMin) / COLOANE;
const pasLat = pasLon * COS;
const RANDURI = Math.round((latMax - latMin) / pasLat);
const INALTIME = Math.round((LATIME * (latMax - latMin)) / ((lonMax - lonMin) * COS));

const laX = (lon) => ((lon - lonMin) / (lonMax - lonMin)) * LATIME;
const laY = (lat) => ((latMax - lat) / (latMax - latMin)) * INALTIME;

const puncte = [];
for (let r = 0; r <= RANDURI; r++) {
  for (let c = 0; c <= COLOANE; c++) {
    const lon = lonMin + c * pasLon;
    const lat = latMax - r * pasLat;
    if (inInterior(lon, lat)) {
      puncte.push([Math.round(laX(lon)), Math.round(laY(lat))]);
    }
  }
}

const orase = ORASE.map((o) => ({
  nume: o.nume,
  x: Math.round(laX(o.lon)),
  y: Math.round(laY(o.lat)),
  curte: Boolean(o.curte),
}));

const iesire = `/* GENERAT de scripts/genereaza-harta.mjs — nu se editează de mână.
 * Regenerare: node scripts/genereaza-harta.mjs
 *
 * Contur: georgique/world-geojson, descărcat 4 septembrie 2026.
 * Coordonatele orașelor sunt verificate de script: fiecare cade în interiorul
 * conturului, iar patru distanțe cunoscute ies la mai puțin de 25 km. */

export const HARTA_LATIME = ${LATIME};
export const HARTA_INALTIME = ${INALTIME};

/** Punctele care desenează țara. Perechi [x, y] în sistemul de mai sus. */
export const PUNCTE: readonly (readonly [number, number])[] = ${JSON.stringify(puncte)};

export interface OrasHarta {
  nume: string;
  x: number;
  y: number;
  /** Curte de apel: punct mai mare, cu etichetă. */
  curte: boolean;
}

export const ORASE_HARTA: readonly OrasHarta[] = ${JSON.stringify(orase, null, 2)};
`;

writeFileSync(join(RADACINA, "lib", "harta.ts"), iesire, "utf8");

console.log(
  `Verificări trecute. ${puncte.length} puncte, ${orase.length} orașe ` +
    `(${orase.filter((o) => o.curte).length} curți de apel). ` +
    `Cadru ${LATIME}x${INALTIME}, grilă ${COLOANE}x${RANDURI}.`,
);
