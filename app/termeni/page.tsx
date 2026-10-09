import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/legal-document";
import { TERMENI_RO } from "@/lib/legal/ro/termeni";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Condițiile de utilizare a serviciului CourtSight pentru clienți profesionali.",
  alternates: { canonical: "/termeni", languages: { ro: "/termeni", en: "/en/terms" } },
};

export default function Page() {
  return <LegalDocument doc={TERMENI_RO} />;
}
