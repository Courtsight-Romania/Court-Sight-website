/**
 * Forma unui document legal: secțiuni cu blocuri simple.
 *
 * Textele stau în date, nu în JSX, ca versiunea română și cea engleză să aibă
 * aceeași structură și să poată fi comparate secțiune cu secțiune. În șiruri
 * se acceptă doar două marcaje: **îngroșat** și [text](adresă).
 */
export type LegalBlock =
  | string
  | { list: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { callout: string };

export type LegalSection = {
  /** Ancora din adresă; stabilă, pentru linkuri din aplicație și din formularul Google. */
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  lang: "ro" | "en";
  title: string;
  intro: string;
  sections: LegalSection[];
  /** Aceeași pagină în cealaltă limbă. */
  alternate: { href: string; label: string };
};
