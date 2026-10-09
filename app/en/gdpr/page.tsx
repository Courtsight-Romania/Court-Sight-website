import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { GDPR_EN } from "@/lib/legal/en/gdpr";

export const metadata: Metadata = {
  title: "GDPR and Data Processing Agreement",
  description: "GDPR roles, data processing agreement, sub-processors and security measures of CourtSight.",
  alternates: { canonical: "/en/gdpr", languages: { ro: "/gdpr", en: "/en/gdpr" } },
};

export default function Page() {
  return <LegalDocument doc={GDPR_EN} />;
}
