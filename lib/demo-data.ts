/**
 * DATE ILUSTRATIVE pentru demo-ul din hero.
 *
 * Nu sunt dosare reale și nu provin din ECRIS — sunt scrise de mână ca să arate
 * forma pe care o are răspunsul motorului. Ce este însă real:
 *
 *  - formatul numărului unic `NNNNN/CCC/AAAA`;
 *  - segmentul din mijloc e codul instanței, iar `117` chiar e Tribunalul Cluj
 *    (portalul oficial al instanței e portal.just.ro/117);
 *  - obiectele („pretenții", „contestație la executare") sunt din nomenclatorul
 *    ECRIS;
 *  - traseul fond → apel reflectă cum urcă efectiv un dosar în căile de atac.
 *
 * Când motorul e gata, fișierul ăsta dispare și demo-ul se leagă la date reale.
 */

export const DEMO_QUERY = "Popescu Ion";

/** Expansiunea de variante din L2: dintr-un nume ies mai multe interogări. */
export const DEMO_VARIANTS = [
  "POPESCU ION",
  "Ion Popescu",
  "POPESCU IOAN",
  "fără diacritice",
] as const;

export const DEMO_TOTALS = { results: 47, courts: 12 };

/** Discriminatorul de entropie maximă din L4: cealaltă parte. */
export const DEMO_QUESTION = "Cu cine e procesul?";

export const DEMO_OPTIONS = [
  { id: "bcr", label: "BCR", hint: "Banca Comercială Română SA" },
  { id: "anaf", label: "ANAF", hint: "Administrația Județeană a Finanțelor" },
  { id: "pf", label: "o persoană fizică", hint: "" },
] as const;

export const DEMO_RESULT = {
  numar: "1234/117/2024",
  instanta: "Tribunalul Cluj",
  sectie: "Secția civilă",
  obiect: "pretenții",
  stadiu: "Fond · în curs",
  parti: [
    { nume: "POPESCU ION", calitate: "Reclamant" },
    { nume: "BANCA COMERCIALĂ ROMÂNĂ SA", calitate: "Pârât" },
  ],
} as const;

export const DEMO_ALERT = {
  tip: "Termen nou",
  data: "12 septembrie",
  ora: "09:00",
  complet: "Completul C4",
} as const;
