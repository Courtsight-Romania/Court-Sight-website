import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Container } from "@/components/site/ui/primitives";

/* Schelet comun pentru paginile legale.
 *
 * Textele NU sunt redactate — sunt secțiuni cu note despre ce trebuie să
 * conțină fiecare. Avertismentul de sus e vizibil intenționat: mai bine o
 * pagină care spune deschis că e în lucru decât un text copiat de pe alt site,
 * care pentru un produs ce prelucrează date judiciare ar fi și inutil, și
 * riscant. */

export type LegalSection = { heading: string; note: string };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-paper">
        <Container className="max-w-3xl py-16 sm:py-24">
          <Link
            href="/"
            className="eyebrow text-fg-faint underline-offset-4 transition-colors hover:text-fg-muted hover:underline"
          >
            ← Înapoi la pagina principală
          </Link>

          <h1 className="mt-8 text-[clamp(2rem,4vw,2.75rem)]">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{intro}</p>

          <div
            role="note"
            className="mt-10 rounded-card border border-verde/50 bg-verde/[0.07] p-5"
          >
            <p className="eyebrow text-verde">Document în lucru</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg">
              Structura de mai jos e schița pe care urmează să o completeze un avocat specializat
              în protecția datelor și IT. Până atunci,{" "}
              <strong className="font-semibold">acest text nu produce efecte juridice</strong>. Nu
              publicăm un document copiat de pe alt site: produsul prelucrează date din dosare, iar
              orice client ne va întreba din prima ce facem cu ele.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="flex items-baseline gap-3 text-xl">
                  <span className="tnum text-sm text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
                <p className="mt-3 border-l border-hairline-strong pl-4 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {s.note}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
