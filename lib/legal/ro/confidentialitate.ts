import { COMPANY, companyRegistration } from "@/lib/company";
import { FURNIZORI_HEAD_RO, FURNIZORI_RO } from "@/lib/legal/furnizori";
import type { LegalDoc } from "@/lib/legal/types";

/** Partea B din documentul juridic din 08.10.2026, completată și cu secțiunea Google. */
export const CONFIDENTIALITATE_RO: LegalDoc = {
  lang: "ro",
  title: "Politica de confidențialitate",
  intro:
    "Cum prelucrează CourtSight datele vizitatorilor, ale persoanelor de contact și ale utilizatorilor, inclusiv datele din contul Google al celor care conectează Google Calendar.",
  alternate: { href: "/en/privacy", label: "English version" },
  sections: [
    {
      id: "operator",
      title: "Operator și contact",
      blocks: [
        `Operatorul este **${COMPANY.name}**, cu sediul în ${COMPANY.address}, ${companyRegistration("ro")}.`,
        `Pentru orice cerere privind datele personale scrieți la [${COMPANY.email}](mailto:${COMPANY.email}) sau sunați la ${COMPANY.phone} (luni–vineri, 09:00–18:00). Nu am desemnat un responsabil cu protecția datelor (DPO); adresa de mai sus este punctul de contact pentru protecția datelor.`,
        "Această politică acoperă prelucrările pe care le decidem noi. Pentru datele din spațiul privat pe care le prelucrăm exclusiv în numele unui cabinet sau al unei organizații, operatorul este acel Client, iar obligațiile noastre sunt cele din [Acordul privind prelucrarea datelor](/gdpr).",
        "Dacă folosiți integrarea cu Google Calendar, citiți și secțiunea [Datele din contul Google](#google).",
      ],
    },
    {
      id: "date",
      title: "Ce date prelucrăm și de unde provin",
      blocks: [
        "**Cererea de acces timpuriu:** numele, emailul, organizația, aria de interes, mesajul, data cererii și dovada opțiunilor exprimate. Vă rugăm să nu includeți date despre dosare în mesajul inițial.",
        "**Contul:** date de identificare profesională, date de contact, rolul în organizație, autentificări, preferințe și informațiile necesare contractării și facturării.",
        "**Securitate și funcționare:** adresa IP, data și ora, identificatori de sesiune, informații limitate despre browser, acțiuni în cont și erori. Nu păstrăm documentele sau conținutul integral al căutărilor în jurnalele tehnice.",
        "**Suport:** datele pe care ni le trimiteți și evidența intervenției.",
        "**Date despre părți și terți din rezultate:** provin din surse publice — portalul instanțelor (portal.just.ro), ReJust și, pentru firme, registrele ANAF și serviciul cuiscan.ro. Pot include numele, calitatea procesuală, numărul dosarului, instanța, obiectul, termenele și soluțiile publicate. Pentru a obține aceste informații trimitem surselor doar interogarea necesară (un nume, un număr de dosar sau un CUI). Hotărârile anonimizate rămân anonimizate; nu încercăm să identificăm persoanele ascunse.",
        "**Datele Clientului:** dosarele urmărite, căutările salvate, notițele, clienții, alocările și documentele generate sunt private. Nu le folosim pentru a îmbogăți o bază comună, pentru marketing sau pentru antrenarea unor sisteme AI.",
        "Pentru eficiență tehnică, informațiile publice ale unui dosar urmărit sunt păstrate într-o singură copie, folosită pentru toți Clienții care urmăresc același dosar. Fiecare Client vede numai dosarele pe care le urmărește el; faptul că un alt Client urmărește același dosar nu îi este dezvăluit. Nu construim o bază de date judiciară consultabilă independent de urmăriri și nu creăm profiluri ale persoanelor.",
      ],
    },
    {
      id: "temeiuri",
      title: "Scopuri și temeiuri legale",
      blocks: [
        {
          list: [
            "**Răspunsul la o cerere de acces sau de ofertă** și pregătirea contractului: demersuri precontractuale la cererea persoanei care urmează să contracteze (art. 6 alin. 1 lit. b GDPR). Pentru reprezentanții unei organizații: interesul nostru legitim de a răspunde și de a administra relația profesională (art. 6 alin. 1 lit. f).",
            "**Administrarea contului și prestarea serviciului:** executarea contractului, pentru Clientul persoană fizică profesionist; interes legitim, pentru utilizatorii desemnați de un Client organizație. Datele prelucrate exclusiv în numele Clientului urmează temeiurile și instrucțiunile acestuia.",
            "**Facturare și evidență contabilă:** obligație legală (art. 6 alin. 1 lit. c).",
            "**Securitate, prevenirea abuzurilor și apărarea drepturilor:** interes legitim, evaluat și documentat. Nu justifică păstrarea nelimitată a conținutului dosarelor.",
            "**Comunicări promoționale prin email:** numai pe baza unui consimțământ distinct și opțional, pe care îl puteți retrage oricând prin linkul de dezabonare sau la adresa de contact. Mesajele despre cerere, cont sau incidente nu depind de acest consimțământ.",
            "**Integrarea Google Calendar:** executarea contractului, la cererea expresă a utilizatorului care conectează contul Google; se poate opri oricând (vezi [Datele din contul Google](#google)).",
          ],
        },
        "Datele care dezvăluie sănătatea sau alte categorii speciale necesită și o condiție din art. 9 GDPR, iar datele privind condamnări și infracțiuni necesită îndeplinirea art. 10 GDPR. Nu operăm un registru al condamnărilor și nu activăm o astfel de prelucrare prin simpla acceptare a termenilor.",
      ],
    },
    {
      id: "informare",
      title: "Informarea persoanelor ale căror date provin din surse publice",
      blocks: [
        "Pentru prelucrările în care suntem operator și nu obținem datele direct de la persoană, asigurăm informarea potrivit art. 14 GDPR. O excepție de la informarea individuală se aplică numai dacă este efectiv incidentă, documentată și însoțită de garanțiile cerute de lege; nu o invocăm doar pentru că volumul datelor este mare.",
        "Orice persoană care apare în rezultate se poate opune prelucrării sau poate cere corectarea afișării noastre, la adresa de contact. Corectarea sursei oficiale se cere instituției care o administrează.",
      ],
    },
    {
      id: "google",
      title: "Datele din contul Google (integrarea Google Calendar)",
      blocks: [
        "Integrarea cu Google Calendar este **opțională**. Se activează numai când un utilizator apasă „Conectează Google Calendar” în Setări și aprobă accesul în ecranul de consimțământ Google. CourtSight nu folosește contul Google pentru autentificare.",
        "**Permisiunile pe care le cerem** sunt cele mai restrânse care permit funcția:",
        {
          list: [
            "`calendar.app.created` — creăm calendare secundare dedicate (câte unul pentru fiecare avocat din cabinet pe care utilizatorul îl urmărește și unul „CourtSight — Neatribuite”) și scriem, actualizăm sau ștergem termenele dosarelor în ele. Permisiunea privește numai calendarele create de CourtSight; nu dă acces la calendarul principal sau la alte calendare ale utilizatorului.",
            "`calendar.calendarlist` — o folosim numai pentru a seta numele și culoarea calendarelor create de CourtSight în lista de calendare a utilizatorului. Nu o folosim pentru a citi sau modifica alte calendare.",
          ],
        },
        "**Ce date Google accesăm și stocăm:**",
        {
          list: [
            "tokenul de reîmprospătare emis de Google, criptat de aplicație înainte de stocare; nu ajunge în browser sau în jurnale;",
            "permisiunile acordate și starea conexiunii (activă sau revocată, data ultimei sincronizări, ultima eroare);",
            "identificatorii calendarelor și ai evenimentelor create de CourtSight, ca să le putem actualiza sau șterge.",
          ],
        },
        "Nu stocăm adresa de email, numele, fotografia sau alte date de profil ale contului Google și **nu citim evenimentele din calendarele utilizatorului** care nu au fost create de CourtSight.",
        "**Ce scriem în Google Calendar:** câte un eveniment pentru fiecare termen din dosarele urmărite de utilizator sau de colegii lui — titlul (avocatul, numărul dosarului, tipul termenului), data și ora, instanța și detalii despre dosar în descriere. Aceste informații provin din CourtSight. Sincronizarea merge într-un singur sens, de la CourtSight spre Google.",
        "**Cum folosim datele Google:** exclusiv pentru a crea, actualiza și șterge aceste calendare și evenimente, ca termenele să rămână la zi în calendarul utilizatorului. Nu le folosim în niciun alt scop.",
        "**Ce nu facem cu datele Google:**",
        {
          list: [
            "nu le vindem și nu le transferăm altor persoane, cu excepția cazurilor în care este necesar pentru securitate, pentru respectarea legii sau, cu acordul prealabil explicit al utilizatorului, în cadrul unei fuziuni, achiziții sau vânzări de active;",
            "nu le folosim și nu le transferăm pentru publicitate, inclusiv retargeting sau reclame personalizate ori bazate pe interese;",
            "nu le folosim pentru a stabili bonitatea sau eligibilitatea pentru credite;",
            "nu le folosim pentru a dezvolta, îmbunătăți sau antrena modele generale de inteligență artificială sau de învățare automată;",
            "nicio persoană din echipa noastră nu le citește, cu excepția cazurilor în care utilizatorul este de acord explicit pentru o anumită solicitare de suport, a celor necesare pentru securitate (de exemplu investigarea unui abuz), a celor impuse de lege sau a datelor agregate și anonimizate folosite pentru operațiuni interne, în condițiile legii.",
          ],
        },
        "**Partajare:** datele Google nu sunt partajate cu terți. Ele stau pe serverul nostru din România, descris la secțiunea „Destinatari și localizare”.",
        "**Păstrare și ștergere:** păstrăm datele de mai sus cât timp conexiunea este activă. Când utilizatorul apasă „Deconectează” în Setări, ștergem calendarele create de CourtSight din contul său Google, revocăm accesul la Google și ștergem imediat tokenul și identificatorii din baza noastră. Același lucru se întâmplă la ștergerea contului CourtSight. Dacă accesul este revocat direct din contul Google, sincronizarea se oprește imediat, iar datele conexiunii se șterg la deconectare sau la ștergerea contului. Copiile de siguranță în care mai apar aceste date sunt eliminate prin rotație în cel mult 90 de zile.",
        "**Cum revocați accesul:** din CourtSight → Setări → Google Calendar → „Deconectează” sau oricând din [pagina de permisiuni a contului Google](https://myaccount.google.com/permissions).",
        {
          callout:
            "Utilizarea și transferul către orice altă aplicație al informațiilor primite de la API-urile Google de către CourtSight respectă [Politica privind datele utilizatorilor serviciilor API Google](https://developers.google.com/terms/api-services-user-data-policy), inclusiv cerințele privind utilizarea limitată (Limited Use).",
        },
      ],
    },
    {
      id: "destinatari",
      title: "Destinatari și localizare",
      blocks: [
        "Accesul intern este limitat la persoanele autorizate și obligate la confidențialitate. Furnizorii tehnici primesc numai datele necesare sarcinii lor, pe baza unor acorduri de prelucrare. Lista lor actuală:",
        { table: { head: FURNIZORI_HEAD_RO, rows: FURNIZORI_RO } },
        "Datele pot fi comunicate contabilului și consultanților noștri pentru obligații legale sau pentru apărarea unor drepturi și autorităților numai pe baza unei cereri legale verificate. Nu vindem date, nu comunicăm conținutul privat altor clienți și nu publicăm calitatea de client fără acord separat.",
        "Dacă un Client conectează propriul cont de facturare (de exemplu Oblio sau SmartBill), transmitem acolo datele de facturare la instrucțiunea lui; furnizorul respectiv prelucrează datele pentru Client.",
        `Datele și copiile de siguranță sunt stocate în România. Transferurile în afara Spațiului Economic European care decurg din folosirea furnizorilor de mai sus se bazează pe mecanismele din capitolul V GDPR indicate în tabel. O copie a garanțiilor se poate cere la ${COMPANY.email}.`,
      ],
    },
    {
      id: "pastrare",
      title: "Cât timp păstrăm datele",
      blocks: [
        "Dacă o obligație legală impune o păstrare mai lungă, identificăm categoria și temeiul și folosim datele numai în acel scop.",
        {
          table: {
            head: ["Categoria", "Termenul și momentul de început"],
            rows: [
              ["Cereri de acces fără contract", "12 luni de la ultima interacțiune relevantă, apoi ștergere"],
              ["Date de cont și contacte active", "Pe durata relației, apoi cel mult 60 de zile de la încetare în sistemele active"],
              ["Datele private ale Clientului", "Fereastră de export de 30 de zile după încetare; ștergere din sistemele active în următoarele 30 de zile; din copiile de siguranță în 90 de zile de la ștergerea activă"],
              ["Conexiunea Google Calendar", "Cât timp conexiunea este activă; ștergere imediată la deconectare sau la ștergerea contului; din copiile de siguranță în cel mult 90 de zile"],
              ["Copia tehnică a datelor publice ale unui dosar urmărit", "Cât timp cel puțin un Client urmărește dosarul; apoi ștergere în cel mult 90 de zile"],
              ["Rezultatele neselectate dintr-o căutare", "Cel mult 24 de ore de la finalizarea căutării; nu se păstrează copii în jurnale"],
              ["Solicitări de suport", "12 luni de la închidere; atașamentele cu documente din dosare în cel mult 30 de zile de la închiderea intervenției"],
              ["Jurnale de securitate", "Cel mult 90 de zile de la eveniment; extrasele legate de un incident se păstrează separat, cât justifică investigația sau apărarea drepturilor"],
              ["Dovada contractului și a acceptărilor", "3 ani de la încetare, cu prelungire numai pentru o obligație sau un litigiu concret documentat"],
              ["Marketing", "Până la retragerea consimțământului sau 24 de luni fără interacțiune; dovada consimțământului, 3 ani de la retragere"],
              ["Registre contabile și documente justificative", "5 ani de la 1 iulie a anului următor încheierii exercițiului financiar, potrivit art. 25 din Legea nr. 82/1991"],
            ],
          },
        },
      ],
    },
    {
      id: "drepturi",
      title: "Drepturile dumneavoastră",
      blocks: [
        "În condițiile GDPR puteți cere accesul la date, rectificarea, ștergerea, restricționarea prelucrării și portabilitatea și vă puteți opune prelucrărilor bazate pe interes legitim. Retragerea consimțământului nu afectează prelucrarea anterioară.",
        "Pentru o opoziție întemeiată pe situația dumneavoastră, încetăm prelucrarea dacă nu putem demonstra motive legitime imperioase sau necesitatea apărării unui drept (art. 21 GDPR). Opoziția la marketingul direct este respectată întotdeauna. Nu refuzăm o cerere doar pentru că informația apare încă într-o sursă publică.",
        `Trimiteți cererea la [${COMPANY.email}](mailto:${COMPANY.email}). Dacă avem îndoieli rezonabile privind identitatea, cerem o verificare proporțională, fără a solicita automat copia actului de identitate. Răspundem fără întârziere, în cel mult o lună; termenul se poate prelungi cu cel mult două luni pentru cereri complexe, cu informarea dumneavoastră în prima lună.`,
        "Pentru datele pe care le prelucrăm în numele unui Client, transmitem cererea Clientului și îl sprijinim să răspundă.",
        "Puteți depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal ([www.dataprotection.ro](https://www.dataprotection.ro)) și vă puteți adresa instanțelor. Nu este obligatoriu să ne contactați mai întâi.",
      ],
    },
    {
      id: "securitate",
      title: "Securitate și incidente",
      blocks: [
        "Aplicăm măsurile descrise în anexa C2 a [Acordului privind prelucrarea datelor](/gdpr#masuri): acces pe roluri, separarea organizațiilor, criptarea traficului, criptarea secretelor, administrare numai prin rețea privată și autentificare pe chei, jurnalizare, copii de siguranță zilnice cu restaurare testată. Nicio măsură nu elimină complet riscul unui incident.",
        "Accesul echipei de suport la conținut este autorizat, limitat și documentat. În cazul unei încălcări a securității datelor evaluăm riscul și notificăm Clientul, autoritatea și persoanele afectate, după caz și în termenele legale.",
      ],
    },
    {
      id: "cookies",
      title: "Cookie-uri și stocare locală",
      blocks: [
        "Site-ul courtsight.ro nu folosește cookie-uri și nu încarcă instrumente de analiză sau de publicitate.",
        "Aplicația app.courtsight.ro folosește numai tehnologii strict necesare funcțiilor pe care le cereți, care nu necesită consimțământ:",
        {
          table: {
            head: ["Nume", "Tip", "Scop", "Durată"],
            rows: [
              ["courtsight.sesiune", "Stocare locală", "Menține autentificarea", "Până la deconectare sau expirarea sesiunii"],
              ["cs_google_oauth", "Cookie HttpOnly", "Protejează conectarea la Google Calendar împotriva falsificării cererii", "10 minute, numai în timpul conectării"],
              ["cs:densitate, cs:laterala, cs.dosare.domeniu, cal-mod, cal-domeniu, cal-ascunsi", "Stocare locală", "Preferințe de afișare alese de utilizator", "Până când le ștergeți din browser"],
              ["cs:push-dispozitiv", "Stocare locală", "Recunoaște dispozitivul pe care ați activat notificările", "Până la dezactivarea notificărilor"],
            ],
          },
        },
        "Datele din stocarea locală rămân în browserul dumneavoastră. Cloudflare poate seta cookie-uri tehnice de securitate pentru a deosebi traficul legitim de roboți. Dacă vom introduce vreodată analiză opțională sau marketing, acestea vor rămâne dezactivate până la acordul dumneavoastră, care se va putea retrage la fel de ușor cum a fost dat.",
      ],
    },
    {
      id: "decizii-automate",
      title: "Decizii automate și modificarea politicii",
      blocks: [
        "CourtSight nu ia decizii exclusiv automatizate cu efect juridic sau cu efect similar semnificativ asupra unei persoane. Sortarea, deduplicarea și sugestiile de identificare sunt ajutoare tehnice care trebuie verificate de utilizator. Nu trimitem datele către servicii AI.",
        "Publicăm versiunea și data politicii și anunțăm schimbările semnificative. Dacă schimbăm modul în care folosim datele din contul Google, vă anunțăm și vă cerem acordul înainte de noua utilizare. O politică actualizată nu înlocuiește consimțământul sau alt temei legal pentru un scop nou.",
      ],
    },
  ],
};
