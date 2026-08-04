import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Politica de confidențialitate"
      intro="Ce date colectăm de la tine, de ce, cât timp le păstrăm și cine altcineva le mai vede."
      sections={[
        {
          heading: "Operatorul de date și datele de contact",
          note: "Identificarea societății, adresa, adresa de contact pentru chestiuni de protecția datelor. De stabilit cu specialistul dacă e nevoie de un responsabil cu protecția datelor desemnat.",
        },
        {
          heading: "Datele colectate direct de la tine",
          note: "Formularul de acces timpuriu: nume, email, organizație, aria de interes, momentul consimțământului. Ulterior, la cont: datele de facturare și dosarele adăugate la monitorizare.",
        },
        {
          heading: "Datele despre terți care apar în rezultate",
          note: "Partea sensibilă. Rezultatele de căutare conțin nume de părți adverse, martori și terți care nu au nicio relație cu noi. De descris temeiul, minimizarea și retenția scurtă pe candidații neselectați.",
        },
        {
          heading: "Temeiul legal al prelucrării",
          note: "Consimțământ pentru comunicările de marketing; executarea contractului pentru serviciul propriu-zis; interes legitim pentru monitorizarea dosarelor în care clientul e parte sau reprezentant.",
        },
        {
          heading: "Durata de stocare",
          note: "Termene concrete per categorie de date, nu formulări de tipul „cât este necesar”.",
        },
        {
          heading: "Cine mai are acces",
          note: "Lista subîmputerniciților: găzduire, bază de date, email tranzacțional, analiza traficului. Toți în Uniunea Europeană; de precizat dacă vreun transfer iese din UE și pe ce mecanism.",
        },
        {
          heading: "Drepturile tale",
          note: "Acces, rectificare, ștergere, restricționare, portabilitate, opoziție, retragerea consimțământului, plângere la Autoritatea Națională de Supraveghere. Plus cum se exercită practic și în cât timp răspundem.",
        },
        {
          heading: "Cookie-uri și măsurare a traficului",
          note: "Folosim o soluție de analiză fără cookie-uri și fără identificatori persistenți, tocmai ca să nu fie nevoie de un banner de consimțământ. De confirmat cu specialistul.",
        },
        {
          heading: "Securitate",
          note: "Criptare în tranzit și în repaus, controlul accesului, jurnalizare, procedura în caz de incident de securitate.",
        },
      ]}
    />
  );
}
