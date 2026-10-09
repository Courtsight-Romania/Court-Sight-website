import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { TERMS_EN } from "@/lib/legal/en/terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms of use of the CourtSight service for professional customers.",
  alternates: { canonical: "/en/terms", languages: { ro: "/termeni", en: "/en/terms" } },
};

export default function Page() {
  return <LegalDocument doc={TERMS_EN} />;
}
