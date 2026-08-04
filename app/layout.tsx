import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/contact";
import { FAQ } from "@/lib/faq";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
  display: "swap",
});

const TITLE = "CourtSight — căutare și monitorizare a dosarelor din instanțele României";
const DESCRIPTION =
  "Scrii un nume, primești toate litigiile din țară. Monitorizare automată a dosarelor aflate pe rolul instanțelor din România, pe date publice oficiale.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · CourtSight" },
  description: DESCRIPTION,
  applicationName: "CourtSight",
  keywords: [
    "dosare instanțe",
    "monitorizare dosare",
    "portal just",
    "ECRIS",
    "căutare dosar",
    "litigii România",
    "due diligence juridic",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "CourtSight",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#181d26",
  colorScheme: "dark light",
};

/* Date structurate. Întrebările vin din același fișier ca secțiunea vizibilă:
   dacă marcajul ar diferi de ce vede utilizatorul, Google îl tratează drept
   înșelător. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "CourtSight",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      url: SITE_URL,
      inLanguage: "ro-RO",
      audience: { "@type": "Audience", audienceType: "Case de avocatură, departamente juridice" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
