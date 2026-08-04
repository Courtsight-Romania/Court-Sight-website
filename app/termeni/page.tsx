import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      title="Termeni și condiții"
      intro="Condițiile în care se poate folosi CourtSight, ce garantăm și, mai important, ce nu garantăm."
      sections={[
        {
          heading: "Cine suntem și ce oferim",
          note: "Identificarea societății, datele de înregistrare, descrierea serviciului: căutare și monitorizare peste date publice din portalul instanțelor.",
        },
        {
          heading: "Serviciul nu constituie consultanță juridică",
          note: "Delimitare explicită. CourtSight prezintă informații publice reorganizate; nu interpretează, nu recomandă o conduită procesuală și nu înlocuiește avocatul.",
        },
        {
          heading: "Prospețimea datelor și disponibilitate",
          note: "Datele provin dintr-un serviciu public terț, fără garanție de disponibilitate. De precizat că întârzierile sau indisponibilitatea sursei nu ne sunt imputabile și că marcăm explicit datele posibil neactualizate.",
        },
        {
          heading: "Alertele pe termene procedurale",
          note: "Cea mai importantă clauză din document. Alertele sunt un ajutor, nu o garanție. Termenul căii de atac curge de la comunicare, iar data comunicării nu există în datele publice — utilizatorul rămâne singurul răspunzător pentru verificarea și respectarea termenelor.",
        },
        {
          heading: "Limitarea răspunderii",
          note: "Plafonul de răspundere, excluderea daunelor indirecte, raportarea la contravaloarea abonamentului. De discutat împreună cu asigurarea de răspundere profesională.",
        },
        {
          heading: "Obligațiile utilizatorului",
          note: "Utilizare conformă cu legea, interdicția de a extrage masiv datele, de a le revinde sau de a le folosi pentru profilarea persoanelor fizice.",
        },
        {
          heading: "Abonament, plată, încetare",
          note: "Durata, reînnoirea, rezilierea, ce se întâmplă cu datele după încetare. Pe durata pilotului, gratuit și fără obligații.",
        },
        {
          heading: "Modificarea termenilor, lege aplicabilă, litigii",
          note: "Cum anunțăm modificările, legea română aplicabilă, instanța competentă.",
        },
      ]}
    />
  );
}
