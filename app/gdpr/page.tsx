import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "GDPR",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="GDPR"
      intro="Pagina pentru clienții profesionali: cum ne încadrăm în relația cu tine, ce conține acordul de prelucrare și ce garanții îți putem da în scris."
      sections={[
        {
          heading: "Rolurile: operator și persoană împuternicită",
          note: "Când monitorizezi dosarele clienților tăi, tu ești operatorul, iar noi persoana împuternicită. Pentru datele contului tău, noi suntem operator. Delimitarea trebuie să fie foarte clară, pentru că din ea decurge tot restul.",
        },
        {
          heading: "Acordul de prelucrare a datelor",
          note: "Model de acord pus la dispoziție înainte de semnarea contractului, cu obiectul, durata, natura și scopul prelucrării, categoriile de persoane vizate și obligațiile fiecărei părți.",
        },
        {
          heading: "Categorii speciale de date",
          note: "Dosarele penale intră sub articolul 10 din Regulament, privind datele referitoare la condamnări și infracțiuni. De descris tratamentul separat și restricțiile de acces.",
        },
        {
          heading: "Subîmputerniciții",
          note: "Lista completă, actualizată, cu localizarea fiecăruia. Angajamentul de a anunța din timp orice schimbare și dreptul clientului de a obiecta.",
        },
        {
          heading: "Localizarea datelor",
          note: "Infrastructura și copiile de siguranță se află în Uniunea Europeană. De precizat regiunea exactă și ce se întâmplă dacă vreodată apare un transfer în afara ei.",
        },
        {
          heading: "Măsuri tehnice și organizatorice",
          note: "Anexa cu măsurile concrete de securitate — cea pe care o cere orice departament juridic serios înainte să semneze.",
        },
        {
          heading: "Notificarea incidentelor",
          note: "Termenul în care anunțăm clientul, ce informații conține notificarea, cum sprijinim clientul în îndeplinirea propriilor obligații de raportare.",
        },
        {
          heading: "Ștergerea și returnarea datelor",
          note: "Ce se întâmplă la încetarea contractului: termen de export, termen de ștergere definitivă, confirmare scrisă.",
        },
      ]}
    />
  );
}
