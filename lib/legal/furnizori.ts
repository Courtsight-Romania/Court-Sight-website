/**
 * Furnizorii care primesc date, într-un singur loc pentru fiecare limbă.
 *
 * Tabelul apare de două ori: în politica de confidențialitate (destinatari) și
 * în anexa acordului de prelucrare de pe /gdpr. Orice furnizor nou se adaugă
 * AICI, înainte să primească date — acordul promite clienților 30 de zile de
 * preaviz (Partea C, C5.1).
 */

export const FURNIZORI_HEAD_RO = ["Furnizor", "Ce face", "Ce date primește", "Unde și pe ce temei"];

export const FURNIZORI_RO: string[][] = [
  [
    "iTitanhost (server virtual dedicat)",
    "Găzduiește aplicația, site-ul, baza de date și copiile de siguranță zilnice.",
    "Toate datele serviciului, pe serverul nostru.",
    "România (centru de date din Buzău). Fără transfer în afara UE.",
  ],
  [
    "Server de backup administrat de echipa CourtSight",
    "Păstrează a doua copie de siguranță, preluată zilnic printr-o conexiune criptată.",
    "Copia bazei de date.",
    "România. Fără transfer în afara UE.",
  ],
  [
    "Cloudflare, Inc.",
    "DNS, tunelul securizat prin care ajunge traficul la server și protecția împotriva atacurilor.",
    "Adrese IP și metadatele cererilor; traficul către site și aplicație trece prin rețeaua Cloudflare.",
    "Rețea globală, societate din SUA. Transfer pe baza Cadrului UE-SUA privind protecția datelor și a clauzelor contractuale standard.",
  ],
  [
    "Resend, Inc.",
    "Trimite emailurile tranzacționale: alerte, mementouri, invitații, resetarea parolei.",
    "Adresa destinatarului și conținutul emailului (de exemplu numărul dosarului, instanța, termenul).",
    "Societate din SUA. Transfer pe baza Cadrului UE-SUA privind protecția datelor și a clauzelor contractuale standard.",
  ],
  [
    "Zoho Corporation B.V.",
    "Căsuța de email contact@courtsight.ro.",
    "Mesajele pe care ni le trimiteți.",
    "Centre de date Zoho din UE.",
  ],
  [
    "Tailscale Inc.",
    "Rețeaua privată prin care echipa administrează serverul.",
    "Metadatele de conectare ale dispozitivelor echipei. Nu are acces la datele din aplicație: traficul e criptat cap la cap.",
    "Societate din SUA. Transfer pe baza clauzelor contractuale standard din acordul de prelucrare al furnizorului.",
  ],
  [
    "Revolut Bank UAB — banca societății (operator independent)",
    "Încasează plățile pentru abonamente.",
    "Numele plătitorului, contul bancar, suma și referința plății.",
    "Lituania (UE). Fără transfer în afara UE.",
  ],
  [
    "Google LLC — numai dacă utilizatorul conectează Google Calendar",
    "Primește termenele în calendarele create de CourtSight în contul Google al utilizatorului. Detalii în secțiunea „Datele din contul Google”.",
    "Datele evenimentelor: avocatul, numărul dosarului, instanța, data și ora termenului.",
    "Transmitere la instrucțiunea utilizatorului, în contul său Google, potrivit condițiilor Google.",
  ],
  [
    "Serviciul de notificări al browserului (Google, Mozilla sau Apple, după browser) — numai dacă utilizatorul activează notificările",
    "Livrează notificarea pe dispozitiv.",
    "Conținutul notificării, criptat cap la cap: serviciul vede doar identificatorul abonamentului.",
    "După furnizorul browserului.",
  ],
];

export const FURNIZORI_HEAD_EN = ["Provider", "What it does", "What data it receives", "Location and transfer basis"];

export const FURNIZORI_EN: string[][] = [
  [
    "iTitanhost (dedicated virtual server)",
    "Hosts the application, the website, the database and the daily backups.",
    "All service data, on our server.",
    "Romania (data centre in Buzău). No transfer outside the EU.",
  ],
  [
    "Backup server operated by the CourtSight team",
    "Keeps a second backup copy, pulled daily over an encrypted connection.",
    "The database copy.",
    "Romania. No transfer outside the EU.",
  ],
  [
    "Cloudflare, Inc.",
    "DNS, the secure tunnel that carries traffic to the server, and attack protection.",
    "IP addresses and request metadata; website and application traffic passes through Cloudflare's network.",
    "Global network, US company. Transfer based on the EU-US Data Privacy Framework and standard contractual clauses.",
  ],
  [
    "Resend, Inc.",
    "Sends transactional emails: alerts, reminders, invitations, password resets.",
    "Recipient address and email content (for example the case number, court and hearing date).",
    "US company. Transfer based on the EU-US Data Privacy Framework and standard contractual clauses.",
  ],
  [
    "Zoho Corporation B.V.",
    "The contact@courtsight.ro mailbox.",
    "The messages you send us.",
    "Zoho data centres in the EU.",
  ],
  [
    "Tailscale Inc.",
    "The private network the team uses to administer the server.",
    "Connection metadata of the team's devices. It has no access to application data: traffic is end-to-end encrypted.",
    "US company. Transfer based on the standard contractual clauses in the provider's data processing addendum.",
  ],
  [
    "Revolut Bank UAB — the company's bank (independent controller)",
    "Receives subscription payments.",
    "Payer name, bank account, amount and payment reference.",
    "Lithuania (EU). No transfer outside the EU.",
  ],
  [
    "Google LLC — only if the user connects Google Calendar",
    "Receives hearing dates in the calendars CourtSight creates in the user's Google account. See “Google user data”.",
    "Event data: lawyer, case number, court, hearing date and time.",
    "Sent on the user's instruction to their own Google account, under Google's terms.",
  ],
  [
    "The browser's push service (Google, Mozilla or Apple, depending on the browser) — only if the user enables notifications",
    "Delivers the notification to the device.",
    "Notification content, end-to-end encrypted: the service only sees the subscription identifier.",
    "Depends on the browser vendor.",
  ],
];
