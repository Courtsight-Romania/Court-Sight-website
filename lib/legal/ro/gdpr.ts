import { COMPANY } from "@/lib/company";
import { FURNIZORI_HEAD_RO, FURNIZORI_RO } from "@/lib/legal/furnizori";
import type { LegalDoc } from "@/lib/legal/types";

/** Partea C (acordul de prelucrare) și anexele C1–C2 din documentul din 08.10.2026. */
export const GDPR_RO: LegalDoc = {
  lang: "ro",
  title: "GDPR și Acordul privind prelucrarea datelor",
  intro:
    "Pentru clienții profesionali: cum ne împărțim rolurile, ce obligații ne asumăm când prelucrăm date în numele cabinetului și ce furnizori și măsuri de securitate folosim.",
  alternate: { href: "/en/gdpr", label: "English version" },
  sections: [
    {
      id: "roluri",
      title: "Rolurile: operator și persoană împuternicită",
      blocks: [
        "Când cabinetul monitorizează dosare, organizează clienți sau generează documente în CourtSight, **cabinetul este operatorul**, iar CourtSight este persoana împuternicită care prelucrează datele la instrucțiunea lui. Pentru administrarea conturilor, securitate și relația comercială, **CourtSight este operator**, iar prelucrările sunt descrise în [Politica de confidențialitate](/confidentialitate).",
        "Acordul de mai jos se încheie între Clientul identificat în Comandă, în calitate de operator, și Furnizorul identificat în [Termeni și condiții](/termeni), în calitate de persoană împuternicită. Se aplică și pilotului și produce efecte de la acceptarea documentată, înainte de prima prelucrare în numele Clientului. Dacă Clientul este el însuși persoană împuternicită, relația se adaptează în scris, cu autorizarea operatorului inițial.",
      ],
    },
    {
      id: "c1",
      title: "Obiect, durată și instrucțiuni",
      blocks: [
        "C1.1. Obiectul este găzduirea și administrarea spațiului privat, căutarea și monitorizarea solicitate, organizarea informațiilor și generarea notificărilor autorizate. Durata este durata contractului, urmată de returnarea și ștergerea prevăzute la art. 16 din Termeni. Acordul nu autorizează reutilizarea datelor de către Furnizor în alte scopuri.",
        "C1.2. Operațiunile pot include colectarea la cerere din sursele aprobate, înregistrarea, stocarea, căutarea, corelarea, consultarea autorizată, exportul, transmiterea către destinatarii configurați (inclusiv calendarele externe conectate de utilizatori) și ștergerea. Persoanele vizate pot fi utilizatorii, clienții finali, părțile adverse, reprezentanții și alte persoane relevante pentru dosarele selectate legal.",
        "C1.3. Datele pot include nume, date de contact, calități procesuale, numere de dosar, instanțe, termene, soluții, notițe, date de pontaj și facturare. Datele din categoriile prevăzute la art. 9 și art. 10 GDPR sunt excluse din autorizarea generală, până la stabilirea condițiilor din C3.",
        "C1.4. Instrucțiunile documentate sunt Comanda, acest acord, setările făcute de utilizatorii autorizați și solicitările verificabile ale administratorului Clientului. Furnizorul nu stabilește scopuri noi. Dacă o instrucțiune pare nelegală, Furnizorul informează imediat Clientul și suspendă doar operațiunea afectată până la clarificare.",
      ],
    },
    {
      id: "c2",
      title: "Obligațiile Clientului",
      blocks: [
        "C2.1. Clientul stabilește scopurile, temeiurile și persoanele autorizate, respectă minimizarea, informează persoanele acolo unde îi revine această obligație și verifică dreptul de a monitoriza dosarele. Nu este necesar un consimțământ universal pentru fiecare dosar, ci temeiul adecvat situației concrete.",
        "C2.2. Clientul revizuiește periodic monitorizările și drepturile de acces, comunică instrucțiunile de ștergere și verifică destinatarii externi. Furnizorul asigură mijloacele tehnice convenite.",
      ],
    },
    {
      id: "c3",
      title: "Date speciale și date penale",
      blocks: [
        "C3.1. Înainte de activarea prelucrării categoriilor speciale de date, părțile stabilesc într-o anexă acceptată datele, necesitatea, condiția din art. 9 GDPR, accesul și retenția. Necesitatea pentru constatarea, exercitarea sau apărarea unui drept în instanță se analizează concret.",
        "C3.2. Pentru datele privind condamnări penale, infracțiuni ori măsuri conexe se identifică autorizarea legală și garanțiile cerute de art. 10 GDPR. Declarația Clientului și caracterul public al dosarului nu înlocuiesc autorizarea legală. Furnizorul nu construiește registre cuprinzătoare de condamnări.",
        "C3.3. Accesul este limitat la personalul autorizat, datele nu se reproduc în emailuri sau jurnale, iar măsurile suplimentare și eventuala necesitate a unei evaluări de impact se documentează.",
      ],
    },
    {
      id: "c4",
      title: "Confidențialitate și securitate",
      blocks: [
        "C4.1. Furnizorul supune personalul autorizat unor obligații de confidențialitate, acordă acces după necesitate și îl retrage la încetarea sarcinii. Art. 13 din Termeni se aplică integral. Furnizorul nu transmite Datele Clientului către servicii AI și nu le folosește pentru antrenare, demonstrații ori produse destinate altor clienți.",
        "C4.2. Furnizorul aplică măsurile din [anexa C2](#masuri), potrivit art. 32 GDPR. Le poate îmbunătăți fără a reduce nivelul de protecție. O modificare care reduce protecția, schimbă localizarea sau crește riscul se comunică și se supune procedurii din C5.",
      ],
    },
    {
      id: "c5",
      title: "Subîmputerniciți",
      blocks: [
        "C5.1. Clientul autorizează furnizorii din [anexa C1](#furnizori). Autorizarea nu se extinde la furnizori nenumiți. Adăugarea sau înlocuirea unui subîmputernicit se notifică cu cel puțin 30 de zile înainte de accesul lui la date, indicând serviciul, categoriile de date și localizarea.",
        "C5.2. Clientul poate formula obiecții motivate în acest interval. Furnizorul propune o alternativă rezonabilă; dacă problema nu se poate rezolva, Clientul poate înceta serviciul afectat înainte de transmitere, cu export și restituirea taxelor pentru perioada neprestată.",
        "C5.3. Subîmputerniciții au obligații privind datele cel puțin echivalente. Furnizorul rămâne pe deplin răspunzător față de Client pentru îndeplinirea obligațiilor lor, potrivit art. 28 alin. (4) GDPR.",
      ],
    },
    {
      id: "c6",
      title: "Localizare și transferuri",
      blocks: [
        "C6.1. Datele și copiile de siguranță sunt stocate în România. Localizarea furnizorilor și mecanismele de transfer sunt cele din anexa C1. Un acces administrativ dintr-o țară terță se analizează ca posibil transfer.",
        "C6.2. Un transfer în afara Spațiului Economic European se face numai potrivit capitolului V GDPR. La cerere, Clientul primește informațiile și garanțiile relevante. Furnizorul anunță cererile de acces ale autorităților străine, în măsura permisă, și verifică legalitatea divulgării.",
      ],
    },
    {
      id: "c7",
      title: "Incidente de securitate",
      blocks: [
        "C7.1. Furnizorul notifică Clientul fără întârziere nejustificată și, contractual, în cel mult **24 de ore** de când a luat cunoștință de o încălcare a securității Datelor Clientului. Nu așteaptă finalizarea investigației.",
        "C7.2. Notificarea inițială descrie ce se cunoaște: natura incidentului, momentul identificării, categoriile și numărul aproximativ de persoane și înregistrări afectate, consecințele probabile, măsurile luate și persoana de contact. Informațiile lipsă se completează pe măsură ce devin disponibile.",
        "C7.3. Furnizorul izolează incidentul, păstrează proporțional probele și sprijină evaluarea riscului și notificările. Clientul decide notificările care îi revin ca operator. Termenul contractual de 24 de ore nu prelungește termenul legal al operatorului față de autoritate.",
      ],
    },
    {
      id: "c8",
      title: "Drepturile persoanelor, evaluări și cooperare",
      blocks: [
        "C8.1. Furnizorul transmite Clientului, în cel mult 2 zile lucrătoare, cererile persoanelor vizate privind datele prelucrate în numele lui, fără a răspunde pe fond fără instrucțiune, și îl ajută la acces, rectificare, export, restricționare și ștergere.",
        "C8.2. Furnizorul oferă informațiile necesare pentru securitate, evaluarea de impact și consultarea prealabilă și cooperează cu autoritatea competentă.",
        "C8.3. Asistența obișnuită este inclusă. Pentru lucrări excepționale se pot conveni în prealabil costuri rezonabile. Remedierea unei încălcări imputabile Furnizorului nu se taxează.",
      ],
    },
    {
      id: "c9",
      title: "Verificare și audit",
      blocks: [
        "C9.1. Furnizorul pune la dispoziție informațiile necesare pentru a demonstra respectarea acordului și permite audituri efectuate de Client sau de un auditor mandatat, obligat la confidențialitate.",
        "C9.2. Auditurile obișnuite se planifică cu 15 zile lucrătoare înainte, în programul de lucru, fără acces la datele altor clienți, de regulă o dată pe an. Aceste limite nu se aplică dacă există indicii concrete de încălcare, un incident relevant ori o cerere a autorității.",
        "C9.3. Clientul suportă costul propriului auditor. Dacă auditul constată o încălcare materială imputabilă Furnizorului, acesta suportă costurile rezonabile și remediază deficiența după un calendar documentat.",
      ],
    },
    {
      id: "c10",
      title: "Returnare, ștergere și răspundere",
      blocks: [
        "C10.1. La alegerea Clientului, Furnizorul returnează datele, le șterge sau face ambele, potrivit art. 16 din Termeni. O instrucțiune de ștergere anticipată se execută în sistemele active în cel mult 30 de zile, iar copiile de siguranță se elimină în următoarele 90 de zile.",
        "C10.2. Păstrarea impusă de lege se comunică prin categorie, normă și durată, cu izolarea datelor. Anonimizarea nu înlocuiește ștergerea dacă părțile nu au convenit expres altfel.",
        "C10.3. Răspunderea urmează art. 17 din Termeni, inclusiv excepțiile pentru confidențialitate și protecția datelor. Drepturile persoanelor vizate și răspunderea prevăzută de GDPR rămân neafectate.",
      ],
    },
    {
      id: "furnizori",
      title: "Anexa C1 — Subîmputerniciți și localizare",
      blocks: [
        { table: { head: FURNIZORI_HEAD_RO, rows: FURNIZORI_RO } },
        `Lista se actualizează înaintea oricărei schimbări, cu preavizul din C5.1. Garanțiile pentru transferuri se pot cere la [${COMPANY.email}](mailto:${COMPANY.email}).`,
      ],
    },
    {
      id: "masuri",
      title: "Anexa C2 — Măsuri tehnice și organizatorice",
      blocks: [
        {
          table: {
            head: ["Domeniu", "Măsura aplicată"],
            rows: [
              ["Acces și identități", "Conturi nominale, roluri în cadrul organizației, revocarea accesului și a sesiunilor. Serverul se administrează numai prin rețea privată, cu autentificare pe chei, fără acces direct al contului root."],
              ["Separarea organizațiilor", "Politici de securitate la nivel de rând în baza de date: apartenența la organizație este verificată la fiecare acces la date."],
              ["Criptare", "Tot traficul către site și aplicație este criptat (HTTPS). Secretele sensibile, precum tokenurile Google, sunt criptate de aplicație înainte de stocare. Copiile de siguranță sunt transferate criptat."],
              ["Parole și secrete", "Parolele sunt stocate numai sub formă de hash. Cheile și secretele stau în fișiere de configurare cu acces restrâns, separate de cod și de jurnale."],
              ["Acces de suport", "Aprobare documentată, scop și durată limitate, jurnalizarea accesului la conținut; excepțiile urgente se documentează."],
              ["Jurnalizare", "Evidența autentificărilor și a operațiunilor administrative, cu jurnal administrativ care nu poate fi modificat retroactiv; retenție uzuală de 90 de zile."],
              ["Copii de siguranță și restaurare", "Copie zilnică a bazei de date, păstrată pe server și preluată zilnic pe un al doilea server, care nu poate fi atins de pe serverul principal. Procedura de restaurare este testată. Pierderea maximă de date estimată: 24 de ore."],
              ["Dezvoltare", "Medii separate de testare, date sintetice în teste, suită automată de teste și revizuirea modificărilor înainte de livrare."],
              ["Incidente", "Contact monitorizat și în afara programului, procedură de răspuns și notificarea Clientului în 24 de ore."],
              ["Personal", "Obligații de confidențialitate, acces după necesitate și retragerea accesului la încetarea sarcinii."],
              ["Ștergere", "Ștergerea din sistemele active potrivit art. 16 din Termeni și eliminarea din copiile de siguranță în cel mult 90 de zile, cu confirmare la cerere."],
            ],
          },
        },
      ],
    },
  ],
};
