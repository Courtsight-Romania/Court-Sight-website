import { COMPANY, companyRegistration } from "@/lib/company";
import type { LegalDoc } from "@/lib/legal/types";

/** English version of /termeni. Same sections and anchors. */
export const TERMS_EN: LegalDoc = {
  lang: "en",
  title: "Terms and Conditions",
  intro:
    "The conditions under which professional customers use CourtSight: what the service provides, what it does not guarantee, payment, termination and what happens to data. The Romanian version is the reference text; this translation is provided for convenience.",
  alternate: { href: "/termeni", label: "Versiunea în română" },
  sections: [
    {
      id: "art-1",
      title: "Provider",
      blocks: [
        `1.1. CourtSight is the trade name of the service provided by **${COMPANY.name}**, registered office at ${COMPANY.addressEn}, ${companyRegistration("en")} (the “Provider”).`,
        `1.2. The website is [https://courtsight.ro](https://courtsight.ro) and the application is available at [https://app.courtsight.ro](https://app.courtsight.ro). The general contact, including for data protection and incidents, is [${COMPANY.email}](mailto:${COMPANY.email}), phone ${COMPANY.phone}. General support is available Monday–Friday, 09:00–18:00 Romanian time, except public holidays. The incident procedure in the [Data Processing Agreement](/en/gdpr) also applies outside these hours.`,
      ],
    },
    {
      id: "art-2",
      title: "Definitions and contract documents",
      blocks: [
        "2.1. “Customer” means the legal entity, professional practice or individual contracting the service exclusively for professional purposes. “Authorised user” means a person designated by the Customer to use an individual account. “Organisation administrator” is the user who manages the members and permissions of the Customer's organisation.",
        "2.2. “Service” means the CourtSight features enabled by an Order. “Order” means the accepted offer, the confirmed subscription form or the individual contract identifying the parties, plan, price, term, usage limits, included features and any service levels. “SLA” means an express agreement on availability and response times.",
        "2.3. “Public data” is information lawfully accessed from external sources, including portal.just.ro and ReJust. “Customer data” means the documents, notes, monitored names, case lists, saved searches, instructions, settings and reports associated with the Customer's private workspace. The selection or correlation of public information that reveals the Customer's interests or activity is also protected.",
        "2.4. The contract consists of the Order, these Terms, the [Data Processing Agreement](/en/gdpr) and any accepted annexes. In case of conflict, expressly negotiated clauses prevail over standard clauses, and the Data Processing Agreement prevails for processing on the Customer's behalf. The [Privacy Policy](/en/privacy) is a GDPR notice, not a general authorisation to use data.",
      ],
    },
    {
      id: "art-3",
      title: "Eligibility and conclusion of the contract",
      blocks: [
        "3.1. The service is intended for professionals. The person accepting the documents for the Customer represents that they have legal capacity and authority to do so. The Provider may request proportionate evidence of professional identity and authority, without asking for case contents.",
        "3.2. Before confirmation, the Customer receives the Order and a downloadable version of the documents, can review and correct the data entered, and sees the total price, VAT treatment, term, limits and renewal mechanism. The contract language is Romanian unless the parties agree otherwise.",
        "3.3. The contract is concluded when the Provider confirms activation after the documents are accepted. Confirmation is sent by email or another durable medium and includes the plan, activation date and accepted documents. An early-access request is not, by itself, a subscription contract and creates no payment obligation.",
        "3.4. Acceptance of the terms and the processing agreement is recorded separately from marketing choices. Unusual clauses require express written acceptance identifying the relevant articles. Merely accessing the site or continuing to use the service does not replace this acceptance. The Provider keeps proof of the version and of the acceptance and makes it available to the Customer.",
        "3.5. These Terms do not cover purchases for personal use. If the Provider ever offers contracts to consumers, it will use adapted terms and respect the related statutory rights.",
      ],
    },
    {
      id: "art-4",
      title: "Scope and limits of the service",
      blocks: [
        "4.1. CourtSight provides search and monitoring of case information, consolidated results, tolerance to spelling variants and alerts about changes detected in the available sources. Procedural history, reports, the calendar, integrations with external services and practice-management features are included only if listed as active in the Order. A demo or announced future feature is not a delivered feature.",
        "4.2. The service is independent of the courts, the Ministry of Justice, the Superior Council of Magistracy and the source administrators. It gives no privileged access to non-public cases and does not obtain documents from the court's electronic file.",
        "4.3. CourtSight does not provide legal advice or representation, does not file documents and does not perform service of process. The Provider does not guarantee any litigation outcome. Automated reports and correlations must be checked before professional use.",
        "4.4. The Provider performs the service with professional diligence, maintains the application and fixes errors attributable to it. Source limitations do not relieve it of the duty to process received information correctly and to display the contractual warnings.",
      ],
    },
    {
      id: "art-5",
      title: "Sources and data freshness",
      blocks: [
        "5.1. Results depend on published content, source availability and technical limits. The absence of a result does not prove the absence of a case. A name match does not prove identity, and appearing in a case does not prove guilt or a debt.",
        "5.2. The Customer verifies the identity of the parties and the relevance of a case before linking it to its own client. Links between first instance, appeal and second appeal are technical correlations; where ambiguous, the user confirms them. The Provider does not re-identify persons anonymised in case law.",
        "5.3. The application shows the source and the time of the last successful retrieval. If a source is unavailable, a result is incomplete or an update failed, the application says so and does not present stored information as verified in real time.",
        "5.4. Publication of information in the official source and its detection by CourtSight are separate events. We do not promise to find a case before the summons in every instance, to identify every case of a person, or instant synchronisation with every court.",
        `5.5. Errors can be reported to [${COMPANY.email}](mailto:${COMPANY.email}), with the case number and the disputed information. The Provider checks its own processing and corrects its errors; corrections to the official source must be requested from the competent body.`,
      ],
    },
    {
      id: "art-6",
      title: "Alerts, calendar and procedural deadlines",
      blocks: [
        "6.1. A CourtSight alert is an informational signal about a detected change. It is not a summons, a procedural communication, an official notice or proof of receipt. The time of an alert does not determine when a legal deadline starts.",
        "6.2. The start and calculation of deadlines depend on the applicable rule, the type of procedure, the documents served, the date of service or pronouncement, and any suspension, interruption or extension. Publication of a ruling on the portal does not prove that an appeal deadline has started; an alert about a ruling is an invitation to check.",
        "6.3. The Customer and the responsible professional verify documents and deadlines through official means and keep their own records. The calendar, conflict detection and reports do not replace this verification, without prejudice to the Provider's liability for its own obligations.",
        "6.4. Alert delivery also depends on the address entered, device permissions, email filters and the availability of communication services. The Provider fixes delivery problems attributable to it and reports known outages affecting alerts.",
        "6.5. By default, external notifications contain minimal information and a link to the signed-in account. Receiving a notification does not give anyone access to the private workspace.",
        "6.6. The Google Calendar integration is optional and is enabled by each user from their own Google account. CourtSight creates dedicated calendars and writes the hearing dates of monitored cases to them; synchronisation is one-way, from CourtSight to Google, and manual changes in Google do not change CourtSight data. Users can disconnect at any time from Settings or from their Google account. Processing of Google user data is described in the [Privacy Policy](/en/privacy#google). Use of Google Calendar is also subject to Google's terms.",
      ],
    },
    {
      id: "art-7",
      title: "Accounts and access",
      blocks: [
        "7.1. Accounts are individual. The Customer manages roles and grants access only to people who need it. Sharing passwords or using another person's account is prohibited.",
        "7.2. The Customer protects devices and credentials, revokes access for people who leave and reports any suspected compromise immediately. The Provider enables session revocation and the protections in the security annex.",
        "7.3. The Provider may use access logs for security, diagnostics and proof of operations, with limited access and retention. Logs do not needlessly reproduce documents, notes or full search contents.",
      ],
    },
    {
      id: "art-8",
      title: "Permitted use and prohibitions",
      blocks: [
        "8.1. The Customer may use results for its professional activity, case checking and monitoring, informing its own clients and preparing working documents, within the law, its mandate and its plan.",
        "8.2. Unauthorised access to accounts or infrastructure, circumventing limits, malicious code, disrupting the service, false identities and unauthorised penetration testing are prohibited.",
        "8.3. Massive automated extraction outside authorised exports, reselling access, publishing Customer data to other organisations and using the service for harassment, discrimination, doxxing, re-identification of anonymised persons or building criminal-record registers are prohibited.",
        "8.4. Litigation data must not be used for solely automated decisions with legal or similarly significant effects on individuals, and a result must not be presented as a definitive assessment of reputation, solvency or guilt.",
        "8.5. The Customer only enters data it may lawfully use, in the amount needed. It does not upload third-party passwords, card data, classified documents or material for which the service does not offer the agreed protections.",
        `8.6. Anyone may report allegedly illegal content or an infringement of their rights to [${COMPANY.email}](mailto:${COMPANY.email}), stating the exact location, the reasons and contact details. The Provider reviews the report and takes reasoned, proportionate measures.`,
      ],
    },
    {
      id: "art-9",
      title: "Pilot and experimental features",
      blocks: [
        "9.1. Pilot access is granted by individual confirmation. The pilot is free for the period stated in the confirmation, with no obligation to buy afterwards. Moving to a paid plan requires a new, expressly accepted Order; the account is never charged automatically when the pilot ends.",
        "9.2. Experimental features are labelled as such and may change. Confidentiality, security and data protection obligations apply in full during the pilot.",
        "9.3. The Customer may leave the pilot at any time. The Provider may end the pilot with 15 calendar days' notice, offering the export under Art. 16.",
      ],
    },
    {
      id: "art-10",
      title: "Subscriptions and payment",
      blocks: [
        "10.1. For paid plans, the Order states the currency, price, VAT, included users, limits, billing period and due date. Add-ons, overages and upgrades are charged only if the price and trigger were communicated and accepted in advance.",
        "10.2. Unless the Order says otherwise, invoices are due 15 calendar days after issue. The Provider never asks for full card details by email or via the support form.",
        "10.3. Automatic renewal applies only if provided in the Order and expressly accepted in writing; otherwise the subscription ends at the end of the term. The Customer can turn renewal off until the renewal date, and the Provider sends a reminder at least 7 days in advance.",
        "10.4. Price changes are announced at least 30 days in advance and apply only to future periods.",
        "10.5. Turning off renewal keeps access until the end of the paid period. Fees for unprovided service are refunded in the cases under Art. 12, 15 and 17, as are amounts collected in error, within 15 calendar days.",
      ],
    },
    {
      id: "art-11",
      title: "Intellectual property and data",
      blocks: [
        "11.1. The Provider or its licensors retain the rights in the code, interface, brand, documentation and protected elements of the application. The Customer receives a non-exclusive, non-transferable right of use within its organisation, for the term of the contract and within the Order.",
        "11.2. The Customer retains its rights in Customer data. The Provider may host, process, technically copy and transmit it only to carry out the Customer's instructions and contractual obligations. It receives no licence to publish, sell, train AI on, or reuse it for other organisations.",
        "11.3. Rights in the application do not make public facts or unprotected official documents the Provider's exclusive property.",
        "11.4. Voluntary feature suggestions may be implemented without payment only if they contain no confidential information, personal data or third-party material. The Customer's name and logo are not used as a commercial reference without separate written consent.",
      ],
    },
    {
      id: "art-12",
      title: "Availability and support",
      blocks: [
        "12.1. The Provider maintains and supports the service and makes reasonable efforts to ensure continuity. Availability percentages, maximum fix times or service credits are guaranteed only under an accepted SLA.",
        "12.2. Planned maintenance that interrupts access is usually announced at least 24 hours in advance; urgent security work may be done immediately.",
        "12.3. The Provider acknowledges ordinary support requests within 2 business days.",
        "12.4. If essential features are unavailable for reasons attributable to the Provider for more than 5 consecutive calendar days, the Customer may terminate the affected part and receive a pro-rata refund.",
      ],
    },
    {
      id: "art-13",
      title: "Confidentiality",
      blocks: [
        "13.1. Each party protects the confidential information received from the other, including Customer data, documents and notes, strategies, correspondence, the identity of end clients, searches, watch lists, links between people and cases, credentials, vulnerabilities and non-public commercial terms.",
        "13.2. A public fact remains public, but the fact that a particular firm searches, monitors or links it to a client is confidential.",
        "13.3. The receiving party uses information only to perform the contract, does not disclose it to other customers and does not exploit it commercially. The Provider is responsible for the people and subcontractors through which it performs.",
        "13.4. Provider staff do not look at documents or notes out of curiosity, for general training, demos or research. Support access to content requires a documented request or approval by the Customer's administrator, is limited in scope and time and is logged, except where strictly necessary for an urgent incident, service integrity or a legal obligation.",
        "13.5. The Provider does not sell data, does not send private content to AI services and does not use it to train, evaluate or fine-tune its own or third-party models. Real Customer data is never used in demos or tests.",
        "13.6. Enabling any AI service that receives Customer data requires an addendum expressly accepted before any transmission.",
        "13.7. Usage statistics for product or commercial purposes are aggregated and genuinely anonymous, without case contents, names, identifiable searches or information revealing a firm's portfolio.",
        "13.8. The obligation does not cover information the receiving party proves was public without breach, previously lawfully known, lawfully received from a third party without restriction or independently developed.",
        "13.9. Disclosure required by an authority is made only after checking the request and only to the extent legally required, with prior notice to the affected party where permitted.",
        "13.10. The Provider recognises that lawyers' materials may be covered by professional secrecy and its contractual obligations support it.",
        "13.11. Confidentiality survives for 5 years after termination for ordinary commercial information, and for as long as the information remains protected for professional secrecy, trade secrets and credentials.",
        "13.12. In the event of unauthorised disclosure or access, the responsible party contains the incident, informs the other party under the Data Processing Agreement and cooperates in remediation.",
      ],
    },
    {
      id: "art-14",
      title: "Data protection",
      blocks: [
        "14.1. Roles are determined per operation. The Provider is a controller for account management, security and the commercial relationship. For Customer data processed solely on the Customer's instructions, the Provider is a processor under the [Data Processing Agreement](/en/gdpr).",
        "14.2. Public availability of data does not remove the requirements of a legal basis, transparency, minimisation and respect for individuals' rights.",
        "14.3. The Customer ensures that its instructions are lawful and that individuals are informed where this is its obligation. It is not assumed that everyone in a case has consented to CourtSight.",
      ],
    },
    {
      id: "art-15",
      title: "Suspension and termination",
      blocks: [
        "15.1. For non-payment of an undisputed amount due, the Provider may suspend paid features after a notice giving 10 calendar days to remedy.",
        "15.2. For a remediable breach, the affected party gives notice and 10 calendar days to remedy before termination. The Provider may immediately suspend the strictly necessary access in case of a concrete security risk, unauthorised access or serious unlawful use.",
        "15.3. Suspension does not delete data. Where safe and lawful, the Customer may export data even while operational features are suspended.",
        "15.4. Either party may terminate an open-ended contract with 30 days' notice. The Provider may permanently withdraw the service with 60 days' notice, providing export and a pro-rata refund.",
        "15.5. Termination does not affect obligations already due, confidentiality, data rights or remedies for earlier breaches.",
      ],
    },
    {
      id: "art-16",
      title: "Export and deletion",
      blocks: [
        "16.1. The Customer may request an export of Customer data in a common machine-readable format (CSV or JSON for lists and records, the original format for files). The first standard export on termination is included in the price, or free during the pilot.",
        "16.2. After termination, the Provider keeps a 30-calendar-day export window; exports requested in that window are delivered within 10 business days.",
        "16.3. Without a request for immediate deletion, data in active systems is deleted within 30 days after the export window closes. Backups are rotated out within 90 days of deletion from active systems.",
        "16.4. Where a rule requires retention, the Provider identifies the rule and categories, isolates the information and uses it only for that purpose.",
        "16.5. On request, the Provider confirms deletion in writing.",
      ],
    },
    {
      id: "art-17",
      title: "Liability",
      blocks: [
        "17.1. Each party is liable for breaches attributable to it, under the contract and the law.",
        "17.2. For ordinary contractual damage, the Provider's total liability to the Customer for events within any 12-month period is limited to the fees paid or payable for the service in the 12 months before the first event, but not less than RON 5,000. During the pilot the minimum cap of RON 5,000 applies. This clause applies only if expressly accepted under Art. 3.4.",
        "17.3. The Provider is not liable for indirect or purely speculative damage, such as an unproven lost business opportunity. Direct damage, including reasonable data recovery costs, does not become indirect merely because it is described as data loss.",
        "17.4. The cap and exclusions do not apply to intent or gross negligence, breaches of confidentiality or data protection obligations, damage for which the law forbids limitation, or refunds due. They do not limit individuals' rights under Art. 82 GDPR.",
        "17.5. The Provider is not liable for erroneous content in the official source or for purely external outages it cannot reasonably prevent, provided it has met its own obligations.",
        "17.6. There is no general obligation of the Customer to indemnify the Provider against any third-party claim.",
      ],
    },
    {
      id: "art-18",
      title: "Force majeure",
      blocks: [
        "18.1. Force majeure has the effects provided by law only if the event meets the legal conditions and actually prevents the affected obligation.",
        "18.2. If the impediment lasts more than 30 consecutive days, either party may terminate the affected service, with a refund for the unprovided part.",
      ],
    },
    {
      id: "art-19",
      title: "Changes to these Terms",
      blocks: [
        "19.1. The Provider may change the Terms for justified legal, technical or commercial reasons, communicating the new version at least 30 days in advance. Changes that substantially affect a paid service or increase the Customer's obligations apply from renewal or after express acceptance, and the Customer may terminate beforehand with a refund.",
        "19.2. Urgent changes required by law or to remove a security risk may apply immediately, to the extent necessary. Previous versions remain available.",
      ],
    },
    {
      id: "art-20",
      title: "Notices, governing law and disputes",
      blocks: [
        "20.1. Contractual notices are sent to the addresses in the Order and in Art. 1.",
        "20.2. The contract is governed by Romanian law. The parties try to settle disputes amicably within 30 days of a detailed notice, without preventing urgent measures or timely legal action.",
        "20.3. Disputes are settled by the courts with jurisdiction under the law. These Terms do not impose mandatory arbitration.",
        "20.4. If a clause is invalid, the others remain in force. Failure to exercise a right immediately is not a waiver.",
      ],
    },
  ],
};
