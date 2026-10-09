import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { CONFIDENTIALITATE_RO } from "@/lib/legal/ro/confidentialitate";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Cum prelucrează CourtSight datele personale, inclusiv datele din contul Google pentru integrarea Google Calendar.",
  alternates: { canonical: "/confidentialitate", languages: { ro: "/confidentialitate", en: "/en/privacy" } },
};

export default function Page() {
  return <LegalDocument doc={CONFIDENTIALITATE_RO} />;
}
