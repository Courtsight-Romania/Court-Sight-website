import { Macbook } from "@/components/ui/macbook";
import { ShaderFundal } from "@/components/site/shader-fundal";
import { ButtonLink } from "@/components/site/ui/button";
import { Container, Section } from "@/components/site/ui/primitives";

/* Eroul cu produsul: mesajul în stânga, aplicația în dreapta.
 *
 * A fost o vreme o secțiune de 260vh legată de derulare, în care laptopul se
 * deschidea și creștea. Acum e o fotografie de produs, statică: se vede din
 * prima ce vinzi, iar pagina s-a scurtat cu două ecrane și jumătate. */

export function Hero() {
  return (
    <Section tone="ink" id="top">
      {/* Fundalul animat ține locul haloului static care era aici: aceeași
          treabă — suprafața de cerneală să nu fie o placă plată — făcută mai
          bine. Ambalajul cu `overflow-hidden` rămâne, ca nimic să nu împingă o
          bară de derulare orizontală.
          25%, mai discret decât în „Cum funcționează”: aici, în spate, stă
          captura aplicației, iar fundalul n-are voie să concureze cu ea. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ShaderFundal className="absolute inset-0 opacity-25" />
      </div>

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="max-w-xl">
            <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-hairline-ink px-3 py-1.5 text-on-ink-muted">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-lime motion-safe:animate-[cs-pulse-dot_2.4s_ease-in-out_infinite]"
              />
              În dezvoltare · pilot cu case de avocatură
            </p>

            {/* Minimul e 2.125rem, nu 2.5rem: pe 375px titlul are patru rânduri,
                iar la 40px ocupa jumătate din primul ecran. */}
            <h1 className="mt-7 text-[clamp(2.125rem,4.5vw,3.25rem)] leading-[1.12]">
              Află că un client a fost dat în judecată.
              <span className="mt-1 block font-normal text-on-ink-muted">
                Uneori înainte de citație.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-on-ink-muted text-pretty">
              Motor de căutare și monitorizare peste dosarele aflate pe rolul instanțelor din
              România. Scrii un nume, primești toate litigiile din țară — cu toleranță la felul
              în care e scris. Aceeași căutare, lăsată pornită, devine sistem de alertă.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#acces">Cere acces timpuriu</ButtonLink>
              <ButtonLink href="#cum-functioneaza" variant="outlineInk">
                Vezi cum funcționează
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-on-ink-faint">
              Date din sursele oficiale: portalul instanțelor (ECRIS) și ReJust.
            </p>
          </div>

          <Macbook src="/img/platform-preview.png" />
        </div>
      </Container>
    </Section>
  );
}
