import { COMPANY } from "@/lib/company";
import { FURNIZORI_EN, FURNIZORI_HEAD_EN } from "@/lib/legal/furnizori";
import type { LegalDoc } from "@/lib/legal/types";

/** English version of /gdpr. Same sections and anchors. */
export const GDPR_EN: LegalDoc = {
  lang: "en",
  title: "GDPR and Data Processing Agreement",
  intro:
    "For professional customers: how roles are split, what we commit to when processing data on a law firm's behalf, and which providers and security measures we use. The Romanian version is the reference text; this translation is provided for convenience.",
  alternate: { href: "/gdpr", label: "Versiunea în română" },
  sections: [
    {
      id: "roluri",
      title: "Roles: controller and processor",
      blocks: [
        "When a law firm monitors cases, organises clients or generates documents in CourtSight, **the firm is the controller** and CourtSight is the processor acting on its instructions. For account management, security and the commercial relationship, **CourtSight is the controller**, and that processing is described in the [Privacy Policy](/en/privacy).",
        "The agreement below is concluded between the Customer identified in the Order, as controller, and the Provider identified in the [Terms and Conditions](/en/terms), as processor. It also applies to the pilot and takes effect upon documented acceptance, before any processing on the Customer's behalf.",
      ],
    },
    {
      id: "c1",
      title: "Subject matter, duration and instructions",
      blocks: [
        "C1.1. The subject matter is hosting and managing the private workspace, the requested search and monitoring, organising information and generating authorised notifications. The duration is the term of the contract, followed by return and deletion under Art. 16 of the Terms. This agreement does not allow the Provider to reuse the data for other purposes.",
        "C1.2. Operations may include on-demand collection from approved sources, recording, storage, search, correlation, authorised consultation, export, transmission to configured recipients (including external calendars connected by users) and deletion. Data subjects may include users, end clients, opposing parties, representatives and other people relevant to lawfully selected cases.",
        "C1.3. Data may include names, contact details, procedural roles, case numbers, courts, hearing dates, rulings, notes, time-tracking and invoicing data. Data under Art. 9 and Art. 10 GDPR is excluded from the general authorisation until the conditions in C3 are agreed.",
        "C1.4. Documented instructions are the Order, this agreement, settings made by authorised users and verifiable requests from the Customer's administrator. If an instruction appears unlawful, the Provider informs the Customer immediately and suspends only the affected operation.",
      ],
    },
    {
      id: "c2",
      title: "Customer obligations",
      blocks: [
        "C2.1. The Customer determines the purposes, legal bases and authorised persons, applies data minimisation, informs individuals where this is its obligation and verifies its right to monitor cases.",
        "C2.2. The Customer periodically reviews monitoring and access rights, communicates deletion instructions and checks external recipients.",
      ],
    },
    {
      id: "c3",
      title: "Special categories and criminal data",
      blocks: [
        "C3.1. Before processing special categories of data, the parties set out in an accepted annex the data, necessity, the Art. 9 GDPR condition, access and retention.",
        "C3.2. For data on criminal convictions, offences or related measures, the legal authorisation and safeguards required by Art. 10 GDPR are identified. The Provider does not build comprehensive registers of criminal convictions.",
        "C3.3. Access is limited to authorised staff, data is not reproduced in emails or logs, and additional measures and any need for a data protection impact assessment are documented.",
      ],
    },
    {
      id: "c4",
      title: "Confidentiality and security",
      blocks: [
        "C4.1. The Provider binds authorised staff to confidentiality, grants access on a need-to-know basis and withdraws it when the task ends. It does not send Customer data to AI services and does not use it for training, demos or products for other customers.",
        "C4.2. The Provider implements the measures in [Annex C2](#masuri) under Art. 32 GDPR and may improve them without lowering protection.",
      ],
    },
    {
      id: "c5",
      title: "Sub-processors",
      blocks: [
        "C5.1. The Customer authorises the providers listed in [Annex C1](#furnizori). Adding or replacing a sub-processor is notified at least 30 days before it gets access to data, stating the service, data categories and location.",
        "C5.2. The Customer may raise reasoned objections during that period. If the issue cannot be resolved, the Customer may terminate the affected service before any transfer, with export and a refund.",
        "C5.3. Sub-processors are bound by at least equivalent data protection obligations. The Provider remains fully liable to the Customer for their performance, under Art. 28(4) GDPR.",
      ],
    },
    {
      id: "c6",
      title: "Location and transfers",
      blocks: [
        "C6.1. Data and backups are stored in Romania. Provider locations and transfer mechanisms are listed in Annex C1. Administrative access from a third country is assessed as a possible transfer.",
        "C6.2. Transfers outside the European Economic Area take place only under Chapter V GDPR. On request, the Customer receives the relevant information and safeguards.",
      ],
    },
    {
      id: "c7",
      title: "Security incidents",
      blocks: [
        "C7.1. The Provider notifies the Customer without undue delay and, contractually, within **24 hours** of becoming aware of a breach affecting Customer data, without waiting for the investigation to finish.",
        "C7.2. The initial notice describes what is known: the nature of the incident, when it was identified, the categories and approximate number of people and records affected, likely consequences, measures taken and a contact person. Missing information follows as it becomes available.",
        "C7.3. The Provider contains the incident, preserves evidence and supports risk assessment and notifications. The Customer decides the notifications it must make as controller.",
      ],
    },
    {
      id: "c8",
      title: "Data subject rights, assessments and cooperation",
      blocks: [
        "C8.1. The Provider forwards data subject requests concerning data processed on the Customer's behalf within 2 business days and helps with access, rectification, export, restriction and deletion.",
        "C8.2. The Provider provides the information needed for security, impact assessments and prior consultation and cooperates with the supervisory authority.",
        "C8.3. Ordinary assistance is included. Remedying a breach attributable to the Provider is never charged.",
      ],
    },
    {
      id: "c9",
      title: "Verification and audit",
      blocks: [
        "C9.1. The Provider makes available the information needed to demonstrate compliance and allows audits by the Customer or a mandated auditor bound by confidentiality.",
        "C9.2. Ordinary audits are scheduled 15 business days in advance, during business hours, without access to other customers' data, usually once a year. These limits do not apply where there are concrete signs of a breach, a relevant incident or a request from an authority.",
        "C9.3. The Customer bears the cost of its own auditor. If the audit finds a material breach attributable to the Provider, the Provider bears reasonable costs and fixes the deficiency.",
      ],
    },
    {
      id: "c10",
      title: "Return, deletion and liability",
      blocks: [
        "C10.1. At the Customer's choice, the Provider returns the data, deletes it or both, under Art. 16 of the Terms. An early deletion instruction is carried out in active systems within 30 days and backups are rotated out within the following 90 days.",
        "C10.2. Retention required by law is communicated by category, rule and duration, with the data isolated.",
        "C10.3. Liability follows Art. 17 of the Terms, including the exceptions for confidentiality and data protection.",
      ],
    },
    {
      id: "furnizori",
      title: "Annex C1 — Sub-processors and location",
      blocks: [
        { table: { head: FURNIZORI_HEAD_EN, rows: FURNIZORI_EN } },
        `This list is updated before any change, with the notice period in C5.1. Transfer safeguards can be requested at [${COMPANY.email}](mailto:${COMPANY.email}).`,
      ],
    },
    {
      id: "masuri",
      title: "Annex C2 — Technical and organisational measures",
      blocks: [
        {
          table: {
            head: ["Area", "Measure in place"],
            rows: [
              ["Access and identity", "Named accounts, roles within the organisation, revocation of access and sessions. The server is administered only over a private network with key-based authentication and no direct root access."],
              ["Separation of organisations", "Row-level security policies in the database: organisation membership is checked on every data access."],
              ["Encryption", "All traffic to the website and application is encrypted (HTTPS). Sensitive secrets such as Google tokens are encrypted by the application before storage. Backups are transferred encrypted."],
              ["Passwords and secrets", "Passwords are stored only as hashes. Keys and secrets live in restricted configuration files, separate from code and logs."],
              ["Support access", "Documented approval, limited scope and duration, logging of access to content; urgent exceptions are documented."],
              ["Logging", "Records of sign-ins and administrative operations, with an administrative log that cannot be altered retroactively; usual retention of 90 days."],
              ["Backup and restore", "Daily database backup, kept on the server and pulled daily to a second server that cannot be reached from the main server. The restore procedure is tested. Estimated maximum data loss: 24 hours."],
              ["Development", "Separate test environments, synthetic data in tests, an automated test suite and review of changes before release."],
              ["Incidents", "Contact monitored outside business hours, a response procedure and Customer notification within 24 hours."],
              ["Staff", "Confidentiality obligations, need-to-know access and removal of access when the task ends."],
              ["Deletion", "Deletion from active systems under Art. 16 of the Terms and removal from backups within 90 days, with confirmation on request."],
            ],
          },
        },
      ],
    },
  ],
};
