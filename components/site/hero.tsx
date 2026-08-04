import { SearchDemo } from "@/components/site/search-demo";
import { ButtonLink } from "@/components/site/ui/button";
import { Container, Section } from "@/components/site/ui/primitives";

export function Hero() {
  return (
    <Section tone="ink" id="top" className="overflow-hidden">
      {/* Halou discret în spatele demo-ului, ca suprafața de cerneală să nu fie
          o placă plată. Pur decorativ. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[46rem] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-amber), transparent 70%)",
        }}
      />

      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-hairline-ink px-3 py-1.5 text-on-ink-muted">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-amber motion-safe:animate-[cs-pulse-dot_2.4s_ease-in-out_infinite]"
              />
              În dezvoltare · pilot cu case de avocatură
            </p>

            {/* Minimul e 2.125rem, nu 2.5rem: pe 375px titlul are patru rânduri,
                iar la 40px ocupa jumătate din primul ecran. */}
            <h1 className="mt-7 text-[clamp(2.125rem,6vw,4rem)]">
              Află că un client a fost dat în judecată.
              <span className="block text-on-ink-muted">Uneori înainte de citație.</span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-on-ink-muted text-pretty">
              Motor de căutare și monitorizare peste dosarele aflate pe rolul instanțelor din
              România. Scrii un nume, primești toate litigiile din țară — cu toleranță la felul
              în care e scris. Aceeași căutare, lăsată pornită, devine sistem de alertă.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#acces">Cere acces timpuriu</ButtonLink>
              <ButtonLink href="#cum-functioneaza" variant="outlineInk">
                Vezi cum funcționează
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-on-ink-faint">
              Date din sursele oficiale: portalul instanțelor (ECRIS) și ReJust.
            </p>
          </div>

          <SearchDemo />
        </div>
      </Container>
    </Section>
  );
}
