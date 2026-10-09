import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { GDPR_RO } from "@/lib/legal/ro/gdpr";

export const metadata: Metadata = {
  title: "GDPR și Acordul privind prelucrarea datelor",
  description: "Rolurile GDPR, acordul de prelucrare a datelor, subîmputerniciții și măsurile de securitate CourtSight.",
  alternates: { canonical: "/gdpr", languages: { ro: "/gdpr", en: "/en/gdpr" } },
};

export default function Page() {
  return <LegalDocument doc={GDPR_RO} />;
}
