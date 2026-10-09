import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { PRIVACY_EN } from "@/lib/legal/en/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CourtSight processes personal data, including Google user data for the Google Calendar integration.",
  alternates: { canonical: "/en/privacy", languages: { ro: "/confidentialitate", en: "/en/privacy" } },
};

export default function Page() {
  return <LegalDocument doc={PRIVACY_EN} />;
}
