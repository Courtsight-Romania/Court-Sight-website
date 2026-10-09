import { COMPANY, companyRegistration } from "@/lib/company";
import { FURNIZORI_EN, FURNIZORI_HEAD_EN } from "@/lib/legal/furnizori";
import type { LegalDoc } from "@/lib/legal/types";

/** English version of /confidentialitate. Same sections and anchors. */
export const PRIVACY_EN: LegalDoc = {
  lang: "en",
  title: "Privacy Policy",
  intro:
    "How CourtSight processes the personal data of visitors, contacts and users, including Google user data of those who connect Google Calendar. The Romanian version is the reference text; this translation is provided for convenience.",
  alternate: { href: "/confidentialitate", label: "Versiunea în română" },
  sections: [
    {
      id: "operator",
      title: "Controller and contact",
      blocks: [
        `The controller is **${COMPANY.name}**, registered office at ${COMPANY.addressEn}, ${companyRegistration("en")}.`,
        `For any request about personal data, write to [${COMPANY.email}](mailto:${COMPANY.email}) or call ${COMPANY.phone} (Monday–Friday, 09:00–18:00 Romanian time). We have not appointed a Data Protection Officer; the address above is our privacy contact point.`,
        "This policy covers the processing we decide on. For data in a customer's private workspace that we process solely on behalf of a law firm or organisation, that customer is the controller and our obligations are set out in the [Data Processing Agreement](/en/gdpr).",
        "If you use the Google Calendar integration, please also read [Google user data](#google).",
      ],
    },
    {
      id: "date",
      title: "What data we process and where it comes from",
      blocks: [
        "**Early-access requests:** name, email, organisation, area of interest, message, date of the request and a record of the choices made. Please do not include case details in the first message.",
        "**Accounts:** professional identification, contact details, role in the organisation, sign-ins, preferences and the information needed for contracting and invoicing.",
        "**Security and operation:** IP address, date and time, session identifiers, limited browser information, account actions and errors. We do not keep documents or full search contents in technical logs.",
        "**Support:** the data you send us and a record of the intervention.",
        "**Data about parties and third parties in results:** comes from public sources — the Romanian courts portal (portal.just.ro), ReJust and, for companies, the ANAF registers and cuiscan.ro. It may include names, procedural role, case number, court, subject matter, hearing dates and published rulings. To obtain it we send these sources only the query needed (a name, a case number or a company tax ID). Anonymised judgments stay anonymised; we do not try to identify hidden persons.",
        "**Customer data:** monitored cases, saved searches, notes, clients, assignments and generated documents are private. We do not use them to enrich a shared database, for marketing or to train AI systems.",
        "**Minors:** the service is intended for professionals and is not directed at anyone under 18. We do not knowingly collect data about minors, except where it may appear in the public information of cases monitored by a customer.",
        "For technical efficiency, the public information of a monitored case is stored as a single copy, used for all customers who monitor the same case. Each customer only sees the cases it monitors; the fact that another customer monitors the same case is never disclosed. We do not build a court database that can be searched independently of monitoring, and we do not create profiles of individuals.",
      ],
    },
    {
      id: "temeiuri",
      title: "Purposes and legal bases",
      blocks: [
        {
          list: [
            "**Answering an access or quote request** and preparing the contract: pre-contractual steps at the request of the person who will contract (Art. 6(1)(b) GDPR). For representatives of an organisation: our legitimate interest in answering and managing the professional relationship (Art. 6(1)(f)).",
            "**Managing the account and providing the service:** performance of the contract, for an individual professional customer; legitimate interest, for users designated by a customer organisation. Data processed solely on the customer's behalf follows the customer's legal bases and instructions.",
            "**Invoicing and accounting records:** legal obligation (Art. 6(1)(c)).",
            "**Security, abuse prevention and defence of legal claims:** legitimate interest, assessed and documented. It does not justify keeping case contents indefinitely.",
            "**Promotional emails:** only with separate, optional consent, which you can withdraw at any time through the unsubscribe link or our contact address. Messages about your request, your account or incidents do not depend on it.",
            "**Google Calendar integration:** performance of the contract, at the express request of the user who connects their Google account; it can be stopped at any time (see [Google user data](#google)).",
          ],
        },
        "**Which data is mandatory:** data marked as required in the access form and at account creation is needed to answer the request and to conclude and perform the contract; without it we cannot create the account. Invoicing data is required by law. Connecting Google Calendar, push notifications and marketing emails are optional.",
        "Data revealing health or other special categories also requires a condition under Art. 9 GDPR, and data on criminal convictions and offences requires compliance with Art. 10 GDPR. We do not operate a register of convictions and do not enable such processing merely because the terms were accepted.",
      ],
    },
    {
      id: "informare",
      title: "Informing people whose data comes from public sources",
      blocks: [
        "Where we are the controller and do not collect data directly from the person, we provide information in accordance with Art. 14 GDPR. An exemption from individual notice is applied only where it genuinely applies, is documented and comes with the safeguards required by law; we do not rely on it merely because the volume of data is large.",
        "Anyone who appears in results can object to the processing or ask us to correct our display at our contact address. Corrections to the official source must be requested from the institution that manages it.",
      ],
    },
    {
      id: "google",
      title: "Google user data (Google Calendar integration)",
      blocks: [
        "The Google Calendar integration is **optional**. It is enabled only when a user clicks “Connect Google Calendar” in Settings and approves access on Google's consent screen. CourtSight does not use Google accounts for sign-in.",
        "**The permissions we request** are the narrowest ones that make the feature work:",
        {
          list: [
            "`calendar.app.created` — we create dedicated secondary calendars (one for each lawyer in the firm whose cases the user follows, plus one “CourtSight — Unassigned”) and create, update or delete hearing dates in them. This permission only covers calendars created by CourtSight; it gives no access to the user's primary calendar or any other calendar.",
            "`calendar.calendarlist` — used only to set the name and colour of the calendars CourtSight created in the user's calendar list. We do not use it to read or change any other calendar.",
          ],
        },
        "**What Google user data we access and store:**",
        {
          list: [
            "the refresh token issued by Google, encrypted by the application before it is stored; it never reaches the browser or any log;",
            "the granted scopes and the connection status (active or revoked, time of the last sync, last error);",
            "the identifiers of the calendars and events created by CourtSight, so that we can update or delete them.",
          ],
        },
        "We do not store the email address, name, photo or any other profile data of the Google account, and **we do not read events from any of the user's calendars** that CourtSight did not create.",
        "**What we write to Google Calendar:** one event for each hearing in the cases followed by the user or their colleagues — the title (lawyer, case number, type of hearing), the date and time, the court and case details in the description. This information comes from CourtSight. Synchronisation is one-way, from CourtSight to Google.",
        "**How we use Google user data:** solely to create, update and delete these calendars and events so that hearing dates stay current in the user's calendar. We do not use it for any other purpose.",
        "**What we never do with Google user data:**",
        {
          list: [
            "we do not sell it, and we do not transfer it to anyone, except where necessary for security purposes, to comply with applicable law, or as part of a merger, acquisition or sale of assets with the user's explicit prior consent;",
            "we do not use or transfer it for serving advertisements, including retargeting, personalised or interest-based advertising;",
            "we do not use it to determine creditworthiness or for lending purposes;",
            "we do not use it to develop, improve or train generalised artificial intelligence or machine learning models;",
            "no one on our team reads it, unless the user has given affirmative agreement for a specific support request, it is necessary for security purposes (such as investigating abuse), it is required to comply with applicable law, or the data is aggregated and anonymised and used for internal operations in accordance with applicable law.",
          ],
        },
        "**Sharing:** Google user data is not shared with third parties. It is stored on our server in Romania, described under “Recipients and location”.",
        "**Retention and deletion:** we keep the data above for as long as the connection is active. When the user clicks “Disconnect” in Settings, we delete the calendars CourtSight created from their Google account, revoke our access with Google and immediately delete the token and identifiers from our database. The same happens when the CourtSight account is deleted. If access is revoked directly from the Google account, synchronisation stops immediately and the connection record is deleted on disconnect or account deletion. Backups that still contain this data are rotated out within 90 days at most.",
        "**How to revoke access:** in CourtSight → Settings → Google Calendar → “Disconnect”, or at any time from your [Google Account permissions page](https://myaccount.google.com/permissions).",
        {
          callout:
            "CourtSight's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.",
        },
      ],
    },
    {
      id: "destinatari",
      title: "Recipients and location",
      blocks: [
        "Internal access is limited to authorised people bound by confidentiality. Technical providers receive only the data needed for their task, under data processing agreements. The current list:",
        { table: { head: FURNIZORI_HEAD_EN, rows: FURNIZORI_EN } },
        "Data may be disclosed to our accountant and advisers for legal obligations or the defence of legal claims, and to authorities only on a verified lawful request. We do not sell data, do not share private content with other customers and do not disclose that someone is a customer without separate consent.",
        "In the event of a merger, acquisition, reorganisation or sale of the business, data may be transferred to the successor, which takes over the obligations in this policy. We will inform you beforehand and, for Google user data, ask for your explicit prior consent.",
        "If a customer connects its own invoicing account (for example Oblio or SmartBill), we send invoicing data there on the customer's instruction; that provider processes the data for the customer.",
        `Data and backups are stored in Romania. Transfers outside the European Economic Area resulting from the providers above rely on the Chapter V GDPR mechanisms shown in the table. A copy of the safeguards can be requested at ${COMPANY.email}.`,
      ],
    },
    {
      id: "pastrare",
      title: "How long we keep data",
      blocks: [
        "Where a legal obligation requires longer retention, we identify the category and the legal basis and use the data only for that purpose.",
        {
          table: {
            head: ["Category", "Period and starting point"],
            rows: [
              ["Access requests without a contract", "12 months from the last relevant interaction, then deletion"],
              ["Account data and active contacts", "For the duration of the relationship, then at most 60 days after it ends in active systems"],
              ["Customer private data", "30-day export window after termination; deletion from active systems within the following 30 days; from backups within 90 days of active deletion"],
              ["Google Calendar connection", "While the connection is active; deleted immediately on disconnect or account deletion; from backups within 90 days at most"],
              ["Technical copy of the public data of a monitored case", "While at least one customer monitors the case; then deleted within 90 days at most"],
              ["Unselected search results", "At most 24 hours after the search completes; no copies kept in logs"],
              ["Support requests", "12 months after closure; attachments containing case documents within 30 days of the intervention closing"],
              ["Security logs", "At most 90 days from the event; extracts related to an incident are kept separately as long as the investigation or legal defence requires"],
              ["Proof of contract and acceptances", "3 years after termination, extended only for a specific documented obligation or dispute"],
              ["Marketing", "Until consent is withdrawn or 24 months without interaction; proof of consent, 3 years after withdrawal"],
              ["Accounting records and supporting documents", "5 years from 1 July of the year following the end of the financial year, under Art. 25 of Law no. 82/1991"],
            ],
          },
        },
      ],
    },
    {
      id: "drepturi",
      title: "Your rights",
      blocks: [
        "Under the GDPR you may request access, rectification, erasure, restriction of processing and data portability, and you may object to processing based on legitimate interest. Withdrawing consent does not affect earlier processing.",
        "If you object on grounds relating to your particular situation, we stop the processing unless we can demonstrate compelling legitimate grounds or the need to defend a legal claim (Art. 21 GDPR). Objections to direct marketing are always honoured. We do not refuse a request merely because the information still appears in a public source.",
        `Send your request to [${COMPANY.email}](mailto:${COMPANY.email}). If we have reasonable doubts about your identity we ask for proportionate verification and do not automatically request a copy of an identity document. We reply without undue delay and within one month; this may be extended by up to two months for complex requests, in which case we tell you within the first month.`,
        "For data we process on behalf of a customer, we forward the request to the customer and help it respond.",
        "You may lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing ([www.dataprotection.ro](https://www.dataprotection.ro)) and you may go to court. You do not have to contact us first.",
      ],
    },
    {
      id: "securitate",
      title: "Security and incidents",
      blocks: [
        "We apply the measures described in Annex C2 of the [Data Processing Agreement](/en/gdpr#masuri): role-based access, separation between organisations, encrypted traffic, encrypted secrets, server administration only over a private network with key-based authentication, logging, and daily backups with tested restores. No measure eliminates every risk of an incident.",
        "Support access to content is authorised, limited and documented. In the event of a personal data breach we assess the risk and notify the customer, the supervisory authority and the affected people, as applicable and within the legal deadlines.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and local storage",
      blocks: [
        "The courtsight.ro website does not use cookies and does not load analytics or advertising tools.",
        "The app.courtsight.ro application only uses technologies that are strictly necessary for features you request and do not require consent:",
        {
          table: {
            head: ["Name", "Type", "Purpose", "Duration"],
            rows: [
              ["courtsight.sesiune", "Local storage", "Keeps you signed in", "Until sign-out or session expiry"],
              ["cs_google_oauth", "HttpOnly cookie", "Protects the Google Calendar connection against request forgery", "10 minutes, only while connecting"],
              ["cs:densitate, cs:laterala, cs.dosare.domeniu, cal-mod, cal-domeniu, cal-ascunsi", "Local storage", "Display preferences chosen by the user", "Until you clear them in the browser"],
              ["cs:push-dispozitiv", "Local storage", "Recognises the device on which you enabled notifications", "Until notifications are turned off"],
            ],
          },
        },
        "You can delete cookies and local storage at any time in your browser settings; you will then be signed out and display preferences will return to their defaults.",
        "Local storage data stays in your browser. Cloudflare may set technical security cookies to tell legitimate traffic from bots. If we ever add optional analytics or marketing, they will stay off until you consent, and you will be able to withdraw consent as easily as you gave it.",
      ],
    },
    {
      id: "decizii-automate",
      title: "Automated decisions and changes to this policy",
      blocks: [
        "CourtSight does not make solely automated decisions with legal or similarly significant effects on anyone. Sorting, de-duplication and identification suggestions are technical aids that the user must check. We do not send data to AI services.",
        "We may produce aggregated statistics about use of the service that are genuinely anonymous, without case contents and without data that could identify a person or a firm's portfolio. We do not try to re-identify this data and do not use it to train AI systems.",
        "We publish the version and date of this policy and announce significant changes. If we change how we use Google user data, we will notify you and ask for your consent before the new use. An updated policy does not replace consent or another legal basis for a new purpose.",
      ],
    },
  ],
};
