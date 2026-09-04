import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { APP_URL, CONTACT } from "@/lib/contact";
import { Container } from "@/components/site/ui/primitives";
import { ShaderFundal } from "@/components/site/shader-fundal";

const COLUMNS = [
  {
    title: "Produs",
    links: [
      { href: "#functionalitati", label: "Funcționalități" },
      { href: "#cum-functioneaza", label: "Cum funcționează" },
      { href: "#surse", label: "Surse de date" },
      { href: "#intrebari", label: "Întrebări frecvente" },
      { href: APP_URL, label: "Intră în cont" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/termeni", label: "Termeni și condiții" },
      { href: "/confidentialitate", label: "Politica de confidențialitate" },
      { href: "/gdpr", label: "GDPR" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="tone-ink grain relative isolate border-t border-hairline-ink bg-ink text-on-ink">
      {/* Ultimul lucru de pe pagină. 30%: subsolul e plin de linkuri mici, iar
          un fundal mai tare le-ar face marginile să tremure. */}
      <ShaderFundal className="pointer-events-none absolute inset-0 -z-10 opacity-30" />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-on-ink-muted">
              Căutare și monitorizare a dosarelor aflate pe rolul instanțelor din România, pe date
              publice oficiale.
            </p>
            <p className="mt-5 text-sm text-on-ink-faint">
              Produs în dezvoltare. Nu constituie consultanță juridică.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow text-on-ink-faint">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.9375rem] text-on-ink-muted transition-colors hover:text-on-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline-ink pt-7 text-sm text-on-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CourtSight. Toate drepturile rezervate.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-on-ink-muted"
            >
              {CONTACT.email}
            </a>
            <span className="hidden sm:inline">{CONTACT.program}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
