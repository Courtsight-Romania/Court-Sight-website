/** Sursa unică pentru FAQ: alimentează și secțiunea vizibilă, și datele
 *  structurate `FAQPage` din <head>. Dacă textele diferă între ele, Google
 *  tratează marcajul ca înșelător — de aceea stau într-un singur loc. */
export const FAQ = [
  {
    q: "De unde vin datele?",
    a: "Din serviciul public al portalului instanțelor (sistemul ECRIS), care expune dosarele aflate pe rol: părțile, termenele, soluțiile pronunțate și căile de atac declarate. Pentru jurisprudență folosim ReJust, care publică textul integral anonimizat al hotărârilor motivate. Sunt surse oficiale, deschise, pe care nu le modificăm — doar le interogăm mai bine.",
  },
  {
    q: "Cât de proaspete sunt informațiile?",
    a: "Dosarele urmărite sunt verificate cu o cadență care depinde de starea lor: la câteva ore când termenul e în următoarele două zile, zilnic pentru dosarele active, mai rar pentru cele fără termen stabilit. Când portalul e indisponibil — și se întâmplă — servim ultima variantă din memorie și marcăm explicit că datele pot fi neactualizate. Preferăm să spunem asta decât să afișăm o informație veche ca și cum ar fi de acum.",
  },
  {
    q: "Calculați exact termenul de apel?",
    a: "Nu, și nu vom face asta. Începutul termenului depinde de procedură și de actele comunicate, iar data comunicării nu există în datele publice. Ce putem face este să detectăm momentul în care apare soluția și să te anunțăm, ca să verifici comunicarea și termenul. Orice sistem care îți afișează o zi exactă pe baza datelor publice îți vinde o certitudine pe care nu o are.",
  },
  {
    q: "Pot vedea actele din dosar?",
    a: "Nu prin noi. Cererea de chemare în judecată, întâmpinarea, probele și expertizele nu sunt disponibile în datele publice — se accesează doar prin dosarul electronic, cu autorizare separată pentru fiecare dosar. Nu construim roboți care se autentifică în locul tău. Ce putem face este să preiei tu documentul, cu accesul pe care îl ai deja, iar noi să automatizăm prelucrarea lui.",
  },
  {
    q: "Ce se întâmplă cu datele clienților mei?",
    a: "Semnăm un acord de prelucrare a datelor cu fiecare client, găzduim în Uniunea Europeană și aplicăm retenție scurtă asupra rezultatelor de căutare care nu au fost selectate — pentru că acelea conțin date despre terți care nu au nicio legătură cu tine. Modelul e construit în jurul dosarelor pe care le urmărești efectiv, nu în jurul colectării nediscriminate.",
  },
  {
    q: "Se sincronizează cu Google Calendar?",
    a: "Da, opțional. Din Setări îți conectezi contul Google, iar CourtSight creează calendare separate — câte unul pentru fiecare avocat din cabinet — și scrie în ele termenele dosarelor urmărite. Cerem acces numai la calendarele create de noi: nu vedem și nu modificăm restul agendei tale. Poți deconecta oricând, iar calendarele create de noi se șterg. Detaliile sunt în politica de confidențialitate, la secțiunea despre datele din contul Google. Pentru Apple Calendar sau Outlook există abonament ICS.",
  },
  {
    q: "Când este disponibil?",
    a: "Produsul e în dezvoltare. Pornim cu un pilot cu un număr limitat de case de avocatură, pentru că vrem să construim pe utilizare reală, nu pe presupuneri. Dacă lași o adresă în formularul de acces timpuriu, te anunțăm când deschidem locuri.",
  },
  {
    q: "Cât costă?",
    a: "Prețul nu e stabilit încă și îl vom construi împreună cu participanții la pilot, în funcție de ce se dovedește că folosesc efectiv. Pilotul e gratuit. Preferăm asta în locul unui preț ales din birou, pe care l-am schimba oricum după primele trei luni.",
  },
] as const;
