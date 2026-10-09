/**
 * Identificarea furnizorului, într-un singur loc.
 *
 * O citesc paginile legale (română și engleză) și subsolul. Când ONRC aprobă
 * înregistrarea, se completează `cui` și `onrc` aici și nicăieri altundeva;
 * până atunci paginile spun deschis că societatea e în curs de înregistrare.
 *
 * Google verifică la aplicația OAuth că operatorul din politica de
 * confidențialitate e identificat, deci câmpurile goale nu se lasă la
 * nesfârșit: cererea de verificare se retrimite după completarea lor.
 */
export const COMPANY = {
  name: "CourtSight S.R.L.",
  /** Codul unic de înregistrare; null cât timp dosarul e la ONRC. */
  cui: null as string | null,
  /** Numărul de ordine în Registrul Comerțului; null cât timp dosarul e la ONRC. */
  onrc: null as string | null,
  address: "Strada Principală nr. 398, sat Luna de Sus, comuna Florești, județul Cluj, România",
  addressEn: "398 Strada Principală, Luna de Sus, Florești, Cluj County, Romania",
  email: "contact@courtsight.ro",
  phone: "+40 732 401 015",
} as const;

/** Rândul de identificare, în limba cerută. */
export function companyRegistration(lang: "ro" | "en"): string {
  if (COMPANY.cui && COMPANY.onrc) {
    return lang === "ro"
      ? `CUI ${COMPANY.cui}, nr. de ordine în Registrul Comerțului ${COMPANY.onrc}`
      : `Tax ID (CUI) ${COMPANY.cui}, Trade Register no. ${COMPANY.onrc}`;
  }
  return lang === "ro"
    ? "societate în curs de înregistrare la Oficiul Național al Registrului Comerțului; CUI și numărul de ordine se publică aici după înregistrare"
    : "company pending registration with the Romanian National Trade Register Office; the tax ID and registration number will be published here once issued";
}

/** Versiunea și data intrării în vigoare a documentelor legale. */
export const LEGAL_VERSION = "1.0";
export const LEGAL_EFFECTIVE = { ro: "9 octombrie 2026", en: "9 October 2026" } as const;
