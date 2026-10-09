import { COMPANY, companyRegistration } from "@/lib/company";
import type { LegalDoc } from "@/lib/legal/types";

/** Partea A din documentul juridic din 08.10.2026. */
export const TERMENI_RO: LegalDoc = {
  lang: "ro",
  title: "Termeni și condiții",
  intro:
    "Condițiile în care clienții profesionali folosesc CourtSight: ce oferă serviciul, ce nu garantează, cum se plătește, cum se încheie și ce se întâmplă cu datele.",
  alternate: { href: "/en/terms", label: "English version" },
  sections: [
    {
      id: "art-1",
      title: "Identificarea furnizorului",
      blocks: [
        `1.1. CourtSight este denumirea comercială a serviciului furnizat de **${COMPANY.name}**, cu sediul în ${COMPANY.address}, ${companyRegistration("ro")}, denumită în continuare „Furnizorul”.`,
        `1.2. Site-ul de prezentare este [https://courtsight.ro](https://courtsight.ro), iar aplicația este disponibilă la [https://app.courtsight.ro](https://app.courtsight.ro). Contactul general, inclusiv pentru protecția datelor și incidente, este [${COMPANY.email}](mailto:${COMPANY.email}), telefon ${COMPANY.phone}. Suportul general funcționează luni–vineri, 09:00–18:00, ora României, cu excepția sărbătorilor legale. Procedura de incidente din [Acordul privind prelucrarea datelor](/gdpr) se aplică și în afara acestui program.`,
      ],
    },
    {
      id: "art-2",
      title: "Definiții și documente contractuale",
      blocks: [
        "2.1. „Client” înseamnă persoana juridică, forma de exercitare a profesiei sau persoana fizică ce contractează serviciul exclusiv în scop profesional. „Utilizator autorizat” înseamnă persoana desemnată de Client să folosească un cont individual. „Administrator de organizație” este utilizatorul care gestionează membrii și permisiunile organizației Clientului.",
        "2.2. „Serviciu” înseamnă funcționalitățile CourtSight activate prin Comandă. „Comandă” înseamnă oferta acceptată, formularul de abonare confirmat sau contractul individual care identifică părțile, planul, prețul, durata, limitele de utilizare, funcțiile incluse și eventualele niveluri de serviciu. „SLA” înseamnă acordul expres privind disponibilitatea și timpii de intervenție.",
        "2.3. „Date publice” sunt informațiile accesate legal din surse externe, inclusiv portal.just.ro și ReJust. „Datele Clientului” sunt documentele, notițele, numele monitorizate, listele de dosare, căutările salvate, instrucțiunile, setările și rapoartele asociate spațiului său privat. Se protejează și selecția sau corelarea informațiilor publice care dezvăluie interesele ori activitatea Clientului.",
        "2.4. Contractul cuprinde Comanda, acești Termeni, [Acordul privind prelucrarea datelor](/gdpr) și anexele acceptate. În caz de conflict, clauzele negociate expres prevalează asupra clauzelor standard, iar Acordul privind prelucrarea datelor prevalează pentru obligațiile de prelucrare în numele Clientului. [Politica de confidențialitate](/confidentialitate) este o informare GDPR, nu o autorizare generală de utilizare a datelor.",
      ],
    },
    {
      id: "art-3",
      title: "Eligibilitate și încheierea contractului",
      blocks: [
        "3.1. Serviciul se adresează profesioniștilor. Persoana care acceptă documentele pentru Client declară că are capacitate de exercițiu și putere de reprezentare. Furnizorul poate solicita dovezi proporționale privind identitatea profesională și mandatul, fără a cere conținutul dosarelor.",
        "3.2. Înainte de confirmare, Clientul primește Comanda și versiunea descărcabilă a documentelor, poate verifica și corecta datele introduse și vede prețul total, tratamentul TVA, durata, limitele și mecanismul de reînnoire. Limba contractului este româna, dacă părțile nu convin altfel.",
        "3.3. Contractul se încheie când Furnizorul confirmă activarea după acceptarea documentelor. Confirmarea este transmisă prin email sau pe alt suport durabil și include planul, data activării și documentele acceptate. Cererea de acces timpuriu nu constituie, singură, contract de abonament și nu creează obligații de plată.",
        "3.4. Acceptarea termenilor și a acordului de prelucrare este înregistrată separat de opțiunile de marketing. Pentru clauzele neuzuale se solicită acceptarea expresă, în scris, cu identificarea articolelor relevante. Simplul acces la site sau continuarea utilizării nu înlocuiește această acceptare. Furnizorul păstrează dovada versiunii și a manifestării de voință și o pune la dispoziția Clientului.",
        "3.5. Acești Termeni nu reglementează achiziții pentru uz personal. Dacă Furnizorul va permite contracte cu consumatori, va folosi condiții adaptate și va respecta drepturile legale aferente; o declarație formală de utilizare profesională nu înlătură o calitate de consumator existentă în fapt.",
      ],
    },
    {
      id: "art-4",
      title: "Obiectul și limitele serviciului",
      blocks: [
        "4.1. CourtSight oferă căutare și monitorizare a informațiilor despre dosare, consolidarea rezultatelor, toleranță la variante de scriere și alerte privind modificările identificate în sursele disponibile. Traseul procesual, rapoartele, calendarul, integrările cu servicii externe și funcțiile pentru organizarea cabinetului sunt incluse numai dacă apar ca active în Comandă. O demonstrație sau o funcție anunțată pentru viitor nu este o funcție livrată.",
        "4.2. Serviciul este independent de instanțe, Ministerul Justiției, Consiliul Superior al Magistraturii și administratorii surselor. Nu oferă acces privilegiat la dosare nepublice și nu obține acte din dosarul electronic al instanței. Documentele Clientului sunt distincte de datele colectate din sursele publice.",
        "4.3. CourtSight nu prestează consultanță ori reprezentare juridică, nu depune acte și nu îndeplinește proceduri de citare sau comunicare în numele instanțelor. Furnizorul nu garantează un rezultat procesual. Rapoartele și corelările automate trebuie verificate înainte de utilizarea profesională.",
        "4.4. Furnizorul prestează serviciul cu diligență profesională, întreține aplicația și remediază erorile care îi sunt imputabile. Limitele surselor nu îl exonerează de obligația de a prelucra corect informațiile primite și de a afișa avertizările contractuale.",
        "4.5. Integrările cu servicii terțe (de exemplu Google Calendar, Oblio sau SmartBill) se activează de Client și funcționează potrivit condițiilor furnizorilor respectivi. Clientul răspunde de conturile sale la acești furnizori. Furnizorul remediază erorile propriei integrări, dar nu răspunde pentru modificările, întreruperile sau deciziile serviciilor terțe pe care nu le controlează.",
      ],
    },
    {
      id: "art-5",
      title: "Surse și actualizarea informațiilor",
      blocks: [
        "5.1. Rezultatele depind de conținutul publicat, de disponibilitatea surselor și de limitele lor tehnice. Absența unui rezultat nu dovedește absența unui dosar sau a unui litigiu. O potrivire de nume nu dovedește identitatea persoanei, iar o înregistrare într-un dosar nu dovedește vinovăția ori existența unei datorii.",
        "5.2. Clientul verifică identitatea părților și relevanța dosarului înainte de a-l asocia cu un client propriu. Legăturile dintre fond, apel și recurs sunt corelări tehnice; în caz de ambiguitate, utilizatorul confirmă legătura. Furnizorul nu reidentifică persoanele anonimizate în jurisprudență.",
        "5.3. Aplicația indică sursa și momentul ultimei preluări reușite. Frecvența verificărilor și acoperirea sunt descrise în Comandă sau în specificația de serviciu acceptată. Dacă o sursă este indisponibilă, rezultatul este incomplet ori actualizarea a eșuat, aplicația afișează această situație și nu prezintă informațiile stocate ca fiind verificate în timp real.",
        "5.4. Publicarea ori modificarea unei informații în sursa oficială și detectarea ei de către CourtSight sunt evenimente distincte. Nu promitem descoperirea unui dosar înaintea citației în fiecare caz, identificarea tuturor dosarelor unei persoane sau sincronizarea instantanee cu toate instanțele.",
        `5.5. Erorile se pot raporta la [${COMPANY.email}](mailto:${COMPANY.email}), indicând numărul dosarului și informația contestată, cu un minim de documente. Furnizorul verifică propria prelucrare și corectează erorile sale. Corectarea sursei oficiale se solicită entității competente; între timp, Furnizorul evaluează dacă trebuie să marcheze, să restricționeze ori să elimine afișarea proprie.`,
      ],
    },
    {
      id: "art-6",
      title: "Alerte, calendar și termene procedurale",
      blocks: [
        "6.1. O alertă CourtSight este un semnal informativ despre o modificare detectată. Nu este citație, comunicare procedurală, notificare oficială sau dovadă a primirii unui act. Momentul alertei nu stabilește momentul de la care curge un termen legal.",
        "6.2. Începutul și calculul termenelor depind de norma aplicabilă, tipul procedurii, actele comunicate, data comunicării ori a pronunțării, după caz, și de eventualele cauze de suspendare, întrerupere sau prelungire. Publicarea unei soluții în portal nu dovedește că termenul unei căi de atac a început să curgă; o alertă privind soluția este o invitație la verificare.",
        "6.3. Clientul și profesionistul responsabil verifică actele și termenele prin mijloacele oficiale și țin o evidență proprie. Calendarul, detectarea suprapunerilor și rapoartele nu înlocuiesc această verificare. Această obligație nu înlătură răspunderea Furnizorului pentru neexecutarea obligațiilor pe care și le-a asumat.",
        "6.4. Livrarea alertelor depinde și de adresa introdusă, de permisiunile dispozitivului, de filtrele de email și de disponibilitatea serviciilor de comunicare. Clientul actualizează destinatarii și verifică setările. Furnizorul remediază problemele de trimitere care îi sunt imputabile și anunță întreruperile cunoscute care afectează alertele.",
        "6.5. Implicit, notificările externe conțin informații minime și un link către contul autentificat. Trimiterea de documente, rapoarte detaliate ori notificări către clienții finali necesită configurarea expresă a canalului și a destinatarilor de către Client. Un destinatar nu primește acces la spațiul privat prin simpla primire a unei notificări.",
        "6.6. Integrarea cu Google Calendar este opțională și se activează de fiecare utilizator, din contul său Google. CourtSight creează calendare dedicate și scrie în ele termenele dosarelor urmărite; sincronizarea merge într-un singur sens, de la CourtSight spre Google, iar o modificare făcută manual în Google nu schimbă datele din CourtSight. Utilizatorul poate deconecta integrarea oricând, din Setări sau din contul Google. Prelucrarea datelor din contul Google este descrisă în [Politica de confidențialitate](/confidentialitate#google). Folosirea Google Calendar este supusă și condițiilor Google.",
      ],
    },
    {
      id: "art-7",
      title: "Conturi și acces",
      blocks: [
        "7.1. Conturile sunt individuale. Clientul gestionează rolurile și acordă acces numai persoanelor care au nevoie de date pentru atribuțiile lor. Partajarea parolelor și folosirea contului altei persoane sunt interzise. Numărul de utilizatori și permisiunile disponibile sunt stabilite în Comandă.",
        "7.2. Clientul protejează dispozitivele și datele de acces, revocă accesul persoanelor care părăsesc organizația și anunță imediat o compromitere suspectată. Furnizorul asigură revocarea sesiunilor și protecțiile prevăzute în anexa de securitate. Clientul nu răspunde pentru un acces neautorizat cauzat exclusiv de o deficiență imputabilă Furnizorului.",
        "7.3. Furnizorul poate folosi jurnale de acces pentru securitate, diagnostic și dovedirea operațiunilor, cu acces și retenție limitate. Jurnalele nu reproduc inutil documentele, notițele sau conținutul integral al căutărilor.",
      ],
    },
    {
      id: "art-8",
      title: "Utilizare permisă și interdicții",
      blocks: [
        "8.1. Clientul poate folosi rezultatele pentru activitatea profesională, verificarea și monitorizarea dosarelor, informarea propriilor clienți și elaborarea documentelor de lucru, în limitele legii, ale mandatului și ale planului. Exportul legitim al Datelor Clientului și folosirea faptelor publice nu încalcă drepturile asupra aplicației.",
        "8.2. Sunt interzise accesul neautorizat la conturi sau la infrastructură, ocolirea limitelor, introducerea de cod malițios, perturbarea serviciului, folosirea unor identități false și testele de intruziune neautorizate. Automatizările și accesul API necesită o funcționalitate activată și respectarea limitelor documentate.",
        "8.3. Sunt interzise extragerea automatizată masivă în afara exporturilor autorizate, revânzarea accesului, publicarea Datelor Clientului către alte organizații și folosirea serviciului pentru hărțuire, discriminare, doxxing, reidentificarea persoanelor anonimizate sau constituirea unor registre de antecedente penale.",
        "8.4. Datele despre litigii nu vor fi folosite pentru decizii exclusiv automatizate cu efect juridic ori efect similar semnificativ asupra persoanelor. Un rezultat nu va fi prezentat drept evaluare definitivă a reputației, solvabilității ori vinovăției. Datele despre o societate pot conține și date personale ale reprezentanților sau ale altor persoane, care se protejează corespunzător.",
        "8.5. Clientul introduce doar date pe care le poate folosi legal, în cantitatea necesară scopului profesional. Nu încarcă parole ale unor sisteme terțe, date de card, documente clasificate sau materiale pentru care serviciul nu oferă protecțiile convenite. Categoriile speciale și datele penale se supun regulilor din [Acordul privind prelucrarea datelor](/gdpr).",
        `8.6. Orice persoană poate semnala un conținut presupus ilegal ori o atingere adusă drepturilor sale la [${COMPANY.email}](mailto:${COMPANY.email}), indicând localizarea exactă, motivele și datele de contact. Furnizorul analizează sesizarea, păstrează proporțional dovezile și aplică măsuri motivate și proporționale, cu protejarea confidențialității.`,
      ],
    },
    {
      id: "art-9",
      title: "Pilot și funcții experimentale",
      blocks: [
        "9.1. Accesul în pilot se acordă prin confirmare individuală, în limitele comunicate. Pilotul este gratuit pe durata înscrisă în confirmare, fără obligația de a cumpăra ulterior. Trecerea la un plan plătit necesită o Comandă nouă, acceptată expres; contul nu este debitat automat la încheierea pilotului.",
        "9.2. Funcțiile experimentale sunt marcate ca atare și se pot modifica. Furnizorul anunță limitările relevante înainte de utilizare. Obligațiile de confidențialitate, securitate și protecție a datelor se aplică integral și în pilot.",
        "9.3. Clientul poate părăsi pilotul oricând, din cont sau prin email. Furnizorul poate încheia pilotul cu un preaviz de 15 zile calendaristice, oferind exportul prevăzut la art. 16. O funcție experimentală nu trebuie să fie unica evidență a termenelor procedurale sau a documentelor originale.",
      ],
    },
    {
      id: "art-10",
      title: "Abonamente și plată",
      blocks: [
        "10.1. Pentru planurile plătite, Comanda precizează moneda, prețul, TVA, utilizatorii incluși, limitele, perioada de facturare și scadența. Suplimentele, depășirile și upgrade-urile se taxează numai dacă tariful și declanșatorul au fost comunicate și acceptate înainte.",
        "10.2. Dacă Comanda nu prevede altfel, facturile sunt scadente în 15 zile calendaristice de la emitere și comunicare. Furnizorul nu cere niciodată trimiterea datelor complete ale cardului prin email sau prin formularul de suport.",
        "10.3. Reînnoirea automată operează numai dacă este prevăzută în Comandă și acceptată expres în scris. În lipsa ei, abonamentul încetează la finalul perioadei. Dacă este activată, reînnoirea se face pentru aceeași perioadă, iar Clientul o poate dezactiva până la momentul reînnoirii, din cont sau prin notificare scrisă. Furnizorul trimite un memento cu cel puțin 7 zile înainte de debitare sau de scadența reînnoirii.",
        "10.4. Un tarif nou se comunică cu cel puțin 30 de zile înainte și se aplică numai unei perioade viitoare. Clientul poate refuza reînnoirea; tariful perioadei achitate nu se majorează unilateral.",
        "10.5. Dezactivarea reînnoirii păstrează accesul până la sfârșitul perioadei achitate și nu determină singură restituirea taxelor. Se restituie taxele pentru partea de serviciu neprestată în cazurile din art. 12, 15 și 17, precum și sumele încasate eronat, în 15 zile calendaristice de la stabilirea dreptului la restituire.",
      ],
    },
    {
      id: "art-11",
      title: "Proprietate intelectuală și date",
      blocks: [
        "11.1. Furnizorul sau licențiatorii săi păstrează drepturile asupra codului, interfeței, mărcii, documentației și elementelor protejate ale aplicației. Clientul primește un drept neexclusiv și netransferabil de utilizare în cadrul propriei organizații, pe durata contractului și în limitele Comenzii.",
        "11.2. Clientul păstrează drepturile asupra Datelor Clientului. Furnizorul le poate găzdui, prelucra, copia tehnic și transmite numai pentru executarea instrucțiunilor și obligațiilor contractuale. Nu primește o licență de publicare, comercializare, antrenare AI sau reutilizare pentru alte organizații.",
        "11.3. Drepturile asupra aplicației nu transformă faptele publice ori actele oficiale neprotejate în proprietatea exclusivă a Furnizorului. Nu se interzic prin acești Termeni operațiunile permise imperativ de lege.",
        "11.4. Sugestiile voluntare despre funcționalități pot fi implementate fără remunerație numai dacă nu conțin informații confidențiale, date personale ori materiale ale terților. Numele, sigla și calitatea de client CourtSight nu se folosesc ca referință comercială fără acord scris separat.",
      ],
    },
    {
      id: "art-12",
      title: "Disponibilitate și suport",
      blocks: [
        "12.1. Furnizorul asigură întreținerea și suportul serviciului și depune eforturi rezonabile pentru continuitate. O disponibilitate procentuală, un timp maxim de remediere sau un credit de serviciu sunt garantate numai printr-un SLA acceptat. Absența unui SLA nu înlătură obligația de a presta serviciul și de a remedia neexecutarea imputabilă.",
        "12.2. Mentenanța planificată care întrerupe accesul se anunță, de regulă, cu cel puțin 24 de ore înainte. Intervențiile urgente de securitate se pot face imediat, cu informare cât mai curând.",
        "12.3. Furnizorul confirmă primirea solicitărilor obișnuite de suport în cel mult 2 zile lucrătoare. Termenul privește răspunsul inițial, nu rezolvarea. Incidentele privind datele au termenele din Acordul privind prelucrarea datelor.",
        "12.4. Dacă funcțiile esențiale sunt indisponibile din cauze imputabile Furnizorului mai mult de 5 zile calendaristice consecutive, Clientul poate înceta partea afectată a abonamentului și primi restituirea proporțională a taxelor pentru perioada neutilizată.",
      ],
    },
    {
      id: "art-13",
      title: "Confidențialitate",
      blocks: [
        "13.1. Fiecare parte protejează informațiile confidențiale primite de la cealaltă: Datele Clientului, documentele și notițele, strategiile, corespondența, identitatea clienților finali, căutările, listele de monitorizare, legăturile dintre persoane și dosare, credențialele, vulnerabilitățile și condițiile comerciale nepublice. Nu este necesară marcarea fiecărui element atunci când natura sau contextul indică rezonabil confidențialitatea.",
        "13.2. Un fapt public rămâne public, dar faptul că un anumit cabinet îl caută, îl monitorizează sau îl asociază cu un client este confidențial. Informațiile transmise în suport, inclusiv capturi de ecran sau jurnale, beneficiază de aceeași protecție.",
        "13.3. Partea primitoare folosește informațiile numai pentru executarea contractului, nu le divulgă altor clienți și nu le exploatează comercial. Accesul este limitat la persoanele care au nevoie de el și sunt supuse unor obligații de confidențialitate cel puțin echivalente. Furnizorul răspunde pentru persoanele și subcontractanții prin care își execută obligațiile.",
        "13.4. Personalul Furnizorului nu consultă documentele sau notițele din curiozitate, pentru instruire generală, demonstrații ori cercetare. Accesul de suport la conținut necesită cererea sau aprobarea documentată a administratorului Clientului, are scop și durată limitate și este jurnalizat. Accesul fără aprobare este permis numai în măsura strict necesară pentru un incident urgent, pentru integritatea serviciului ori pentru o obligație legală și este comunicat Clientului, dacă legea permite.",
        "13.5. Furnizorul nu vinde date, nu transmite conținutul privat către servicii AI și nu îl folosește pentru antrenarea, evaluarea sau ajustarea modelelor proprii ori ale terților. Nu folosește datele reale ale Clientului în demonstrații sau teste; testarea folosește date sintetice ori date anonimizate efectiv.",
        "13.6. Activarea ulterioară a unui serviciu AI care primește Datele Clientului necesită un act adițional acceptat expres înainte de transmitere. Actualizarea generală a acestor Termeni nu echivalează cu această autorizare.",
        "13.7. Statisticile de utilizare se folosesc pentru administrarea serviciului numai în forma minimă necesară. Statisticile pentru produs sau comunicări comerciale sunt agregate și anonime efectiv, fără conținutul dosarelor, nume, căutări identificabile ori informații care permit deducerea portofoliului unui cabinet.",
        "13.8. Obligația nu acoperă informațiile despre care partea primitoare dovedește că erau publice fără încălcarea unui angajament, îi erau cunoscute legal anterior, au fost primite legal de la un terț fără restricție ori au fost dezvoltate independent. Aceste excepții nu înlătură obligațiile GDPR.",
        "13.9. Divulgarea cerută de o autoritate se face după verificarea cererii și numai în limita obligației legale. Dacă este permis, partea afectată este informată înainte; altfel, după încetarea interdicției. Furnizorul nu acordă acces general la cont pentru o solicitare punctuală.",
        "13.10. Furnizorul recunoaște că materialele avocaților pot fi protejate de secretul profesional. Obligațiile sale contractuale sprijină păstrarea acestuia, fără să îi atribuie calitatea de avocat. Clientul nu este obligat să dezvăluie strategia juridică pentru a primi suport tehnic.",
        "13.11. Obligația de confidențialitate subzistă 5 ani după încetarea contractului pentru informațiile comerciale obișnuite și cât timp informațiile își păstrează caracterul protejat pentru secretul profesional, secretele comerciale și credențiale. Această durată nu autorizează păstrarea datelor personale după termenele de ștergere.",
        "13.12. În caz de divulgare sau acces neautorizat, partea responsabilă limitează incidentul, informează potrivit Acordului privind prelucrarea datelor și cooperează la remediere. Partea prejudiciată poate cere încetarea utilizării, măsuri urgente și repararea prejudiciului dovedit.",
      ],
    },
    {
      id: "art-14",
      title: "Protecția datelor",
      blocks: [
        "14.1. Rolurile se stabilesc pentru fiecare operațiune. Furnizorul este operator pentru administrarea conturilor, securitate și relația comercială. Pentru Datele Clientului prelucrate exclusiv la instrucțiunea acestuia, Furnizorul este persoană împuternicită, potrivit [Acordului privind prelucrarea datelor](/gdpr).",
        "14.2. Accesibilitatea publică a unor date nu înlătură cerințele de temei legal, transparență, minimizare și respectare a drepturilor persoanelor.",
        "14.3. Clientul asigură legalitatea instrucțiunilor sale și informarea persoanelor, acolo unde îi revine această obligație. Furnizorul își păstrează propriile obligații legale. Nu se presupune că fiecare persoană dintr-un dosar a consimțit la CourtSight.",
      ],
    },
    {
      id: "art-15",
      title: "Suspendare și încetare",
      blocks: [
        "15.1. Pentru neplata unei sume scadente și necontestate justificat, Furnizorul poate suspenda funcțiile plătite după o notificare care acordă 10 zile calendaristice pentru remediere. Contestarea de bună-credință se analizează înaintea măsurii.",
        "15.2. Pentru o încălcare remediabilă a contractului, partea afectată notifică faptele și acordă 10 zile calendaristice pentru remediere înainte de reziliere. Furnizorul poate suspenda imediat accesul strict necesar dacă există un risc concret de securitate, acces neautorizat ori folosire ilegală gravă; măsura este proporțională, documentată și comunicată cât mai curând.",
        "15.3. Suspendarea nu determină ștergerea automată a datelor. Dacă este sigur și legal, Clientul poate exporta datele chiar când funcțiile operative sunt suspendate. Accesul se restabilește fără întârziere după înlăturarea cauzei. Clientul poate cere verificarea măsurii și primește un răspuns motivat în 5 zile lucrătoare.",
        "15.4. Oricare parte poate denunța un contract pe durată nedeterminată cu un preaviz de 30 de zile. Furnizorul poate retrage definitiv serviciul cu un preaviz de 60 de zile, asigurând exportul și restituirea proporțională a taxelor pentru perioada neprestată.",
        "15.5. Încetarea nu afectează obligațiile scadente, confidențialitatea, drepturile asupra datelor și remediile pentru încălcări anterioare. Clientului nu i se cere renunțarea la pretenții pentru a-și primi datele sau restituirea datorată.",
      ],
    },
    {
      id: "art-16",
      title: "Export și ștergere",
      blocks: [
        "16.1. Clientul poate cere exportul Datelor Clientului într-un format uzual și lizibil automat (CSV sau JSON pentru liste și evidențe, formatul original pentru fișiere). Nu sunt incluse codul aplicației sau datele altor clienți. Primul export standard la încetare este inclus în preț, respectiv gratuit în pilot.",
        "16.2. După încetare, Furnizorul asigură o fereastră de 30 de zile calendaristice pentru export. Exportul cerut în această perioadă se livrează în cel mult 10 zile lucrătoare. Clientul poate cere ștergerea mai devreme.",
        "16.3. Fără o cerere de ștergere imediată, datele din sistemele active se șterg în cel mult 30 de zile după închiderea ferestrei de export. Copiile de siguranță se elimină prin rotație în cel mult 90 de zile de la ștergerea din sistemele active; până atunci sunt izolate de utilizarea curentă, iar o restaurare reaplică instrucțiunile de ștergere.",
        "16.4. Dacă o normă impune păstrarea unor informații, Furnizorul identifică norma și categoriile, izolează informațiile și le folosește numai în acel scop. O obligație contabilă nu justifică păstrarea întregului spațiu privat.",
        "16.5. La cerere, Furnizorul confirmă în scris ștergerea din sistemele active și termenul final de rotație a copiilor de siguranță.",
      ],
    },
    {
      id: "art-17",
      title: "Răspundere",
      blocks: [
        "17.1. Fiecare parte răspunde pentru încălcările care îi sunt imputabile, potrivit contractului și legii, ținând seama de legătura de cauzalitate, de contribuția fiecărei părți și de măsurile rezonabile de limitare a prejudiciului.",
        "17.2. Pentru prejudiciile contractuale obișnuite, răspunderea totală a Furnizorului față de Client, pentru evenimentele dintr-un interval de 12 luni, este limitată la taxele plătite sau datorate pentru serviciu în cele 12 luni anterioare primului eveniment, dar nu mai puțin de 5.000 lei. În pilot se aplică plafonul minim de 5.000 lei. Clauza operează numai dacă este acceptată expres potrivit art. 3.4. Evenimentele cu aceeași cauză se consideră un singur eveniment.",
        "17.3. Furnizorul nu răspunde pentru prejudicii indirecte sau pur speculative, precum pierderea unei oportunități comerciale nedovedite. Un prejudiciu direct, inclusiv costul rezonabil de recuperare a datelor, nu devine indirect doar pentru că este descris ca pierdere de date.",
        "17.4. Plafonul și excluderile nu se aplică intenției ori culpei grave, încălcării obligațiilor de confidențialitate sau de protecție a datelor, prejudiciilor pentru care legea interzice limitarea și restituirilor datorate. Nu limitează drepturile persoanelor vizate potrivit art. 82 GDPR.",
        "17.5. Furnizorul nu răspunde pentru conținutul eronat al sursei oficiale ori pentru întreruperi exclusiv externe pe care nu le poate preveni rezonabil, dacă și-a îndeplinit obligațiile proprii. Regula nu acoperă omiterea unor actualizări disponibile, corelările neglijente sau alertele promise și netrimise din culpa sa.",
        "17.6. Nu există o obligație generală a Clientului de a despăgubi Furnizorul pentru orice reclamație a unui terț. O despăgubire se poate cere pentru o încălcare imputabilă și un prejudiciu dovedit, cu informarea celeilalte părți și posibilitatea ei de a participa la apărare.",
      ],
    },
    {
      id: "art-18",
      title: "Forță majoră",
      blocks: [
        "18.1. Forța majoră produce efectele prevăzute de lege numai dacă evenimentul îndeplinește condițiile legale și împiedică efectiv obligația afectată. Defecțiunile obișnuite, lipsa de personal ori simpla neexecutare a unui furnizor tehnic nu sunt automat forță majoră.",
        "18.2. Partea afectată informează fără întârziere și ia măsuri rezonabile de continuitate. Dacă impedimentul depășește 30 de zile consecutive, oricare parte poate înceta serviciul afectat, cu restituirea taxelor pentru prestația neexecutată.",
      ],
    },
    {
      id: "art-19",
      title: "Modificarea termenilor",
      blocks: [
        "19.1. Furnizorul poate modifica Termenii pentru schimbări legale, tehnice sau comerciale justificate, comunicând noua versiune și modificările cu cel puțin 30 de zile înainte. Modificările care afectează substanțial serviciul plătit sau agravează obligațiile Clientului se aplică de la reînnoire ori după acceptarea expresă, iar Clientul poate înceta contractul înainte, cu restituirea pentru perioada neprestată.",
        "19.2. Modificările urgente impuse de lege sau necesare pentru eliminarea unui risc de securitate se pot aplica imediat, în limita necesității, cu explicarea motivului. Versiunile anterioare rămân accesibile.",
      ],
    },
    {
      id: "art-20",
      title: "Notificări, lege aplicabilă și litigii",
      blocks: [
        "20.1. Notificările contractuale se transmit la adresele din Comandă și de la art. 1. Pentru notificările care declanșează suspendarea, încetarea ori o schimbare materială, Furnizorul păstrează dovada comunicării și folosește un canal suplimentar dacă emailul este returnat.",
        "20.2. Contractul este guvernat de legea română. Părțile încearcă soluționarea amiabilă în 30 de zile de la notificarea detaliată a disputei, fără ca acest lucru să împiedice măsuri urgente sau introducerea unei acțiuni în termen.",
        "20.3. Litigiile sunt soluționate de instanțele competente potrivit legii. Acești Termeni nu stabilesc arbitraj obligatoriu.",
        "20.4. Părțile sunt independente; contractul nu creează o asociere, un mandat general sau un raport de muncă între ele. Dacă o clauză este nevalabilă, celelalte rămân aplicabile. Neexercitarea imediată a unui drept nu înseamnă renunțare. Cesiunea contractului care schimbă furnizorul serviciului necesită informarea Clientului și respectarea condițiilor legale.",
      ],
    },
  ],
};
