import { ShaderFundal } from "@/components/site/shader-fundal";
import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";

/* Pipeline-ul L0–L5 tradus pentru un avocat, nu pentru un inginer. Trei pași,
   pentru că atâția sunt din perspectiva utilizatorului — restul e treaba
   noastră și nu îl interesează. */

const STEPS = [
  {
    n: "01",
    title: "Scrii un nume",
    body: "Sau un număr de dosar, sau o frază normală. Dacă numărul e acolo, îl recunoaștem instant și mergem direct la dosar — fără să ghicească nimeni nimic.",
  },
  {
    n: "02",
    title: "Căutăm în toată țara",
    body: "Din numele introdus ies mai multe interogări paralele, cu toate variantele plauzibile de scriere. Rezultatele sunt consolidate, deduplicate și ordonate.",
  },
  {
    n: "03",
    title: "Punem exact o întrebare",
    body: "Când rămân mai mulți candidați, calculăm ce detaliu îi separă cel mai bine și întrebăm doar despre el. De obicei cealaltă parte: nimeni nu uită cu cine se judecă.",
  },
];

export function HowItWorks() {
  return (
    <Section id="cum-functioneaza" tone="ink" className="overflow-hidden">
      {/* Singurul fundal animat din site. Stă la 45%: peste atât, petele de
          verde deschis se apropie prea mult de culoarea textului și îngreunează
          citirea unui paragraf care oricum cere atenție. */}
      <ShaderFundal className="pointer-events-none absolute inset-0 -z-10 opacity-45" />

      <Container className="relative py-20 sm:py-28">
        <SectionHeader
          tone="ink"
          eyebrow="Cum funcționează"
          title="De la un nume ambiguu la dosarul tău."
          lead="Niciun sistem nu poate identifica automat dosarul corect când există patruzeci de omonimi — informația necesară pur și simplu nu se află în întrebare. Obiectivul real e altul: să rezolvăm automat cât mai mult, iar când nu se poate, să punem o singură întrebare bine aleasă."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline-ink bg-hairline-ink md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-ink-2 p-7 sm:p-8">
              <p className="tnum text-sm text-lime">{s.n}</p>
              <h3 className="mt-5 text-xl leading-snug">{s.title}</h3>
              <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-on-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-on-ink-muted">
          După ce dosarul e identificat, îl lași sub urmărire. Îl verificăm cu o frecvență care
          depinde de cât e de aproape următorul termen — la câteva ore când e mâine, mai rar când
          dosarul doarme — și îți scriem doar când chiar s-a schimbat ceva.{" "}
          <span className="text-on-ink">
            O atingere administrativă a dosarului nu e o notificare.
          </span>
        </p>
      </Container>
    </Section>
  );
}
