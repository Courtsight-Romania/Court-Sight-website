import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";
import { ShaderFundal } from "@/components/site/shader-fundal";
import { VarianteVii } from "@/components/site/variante-vii";

/* Trei fapte structurale, nu trei procente inventate.
   Fiecare e verificabil direct în portalul instanțelor sau în documentația
   serviciului public — nu avem nevoie de statistici de piață ca să arătăm
   că problema e reală. */

const FACTS = [
  {
    figure: "~250",
    unit: "de instanțe",
    title: "Nu există o căutare națională după nume",
    body: "Portalul oficial te pune să alegi instanța înainte de a căuta. Ca să afli dacă un client are litigii undeva în țară, ar trebui să repeți căutarea instanță cu instanță.",
  },
  {
    figure: "Ș",
    unitRaw: "≠ Ş",
    title: "Același client, scris în cinci feluri",
    body: "Diacritice corecte și vechi, cu virgulă sau cu cedilă, forme juridice scrise oricum. Pentru o căutare care compară șiruri de caractere, sunt persoane diferite.",
  },
  {
    figure: "1000",
    unit: "de rezultate",
    title: "Peste plafon, restul se taie tăcut",
    body: "Serviciul public întoarce cel mult o mie de înregistrări per interogare. Nu primești niciun avertisment că a fost trunchiat — și nu ai cum să afli ce n-ai văzut.",
  },
];

export function Problem() {
  return (
    <Section tone="ink" className="overflow-hidden">
      {/* 35%: secțiunea are mult text și un widget în care se scrie, deci
          fundalul trebuie să rămână fundal. */}
      <ShaderFundal className="pointer-events-none absolute inset-0 -z-10 opacity-35" />

      <Container className="relative py-20 sm:py-28">
        <SectionHeader
          tone="ink"
          eyebrow="Problema"
          title="Informația e publică. Găsirea ei nu e."
          lead="Dosarele de pe rolul instanțelor sunt deschise oricui. Dificultatea nu e accesul, ci faptul că portalul e construit pentru a verifica un dosar pe care îl cunoști deja, nu pentru a descoperi unul despre care nu știi nimic."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline-ink bg-hairline-ink md:grid-cols-3">
          {FACTS.map((f) => (
            <li key={f.title} className="flex min-w-0 flex-col bg-ink-2 p-7 sm:p-8">
              <p className="flex items-baseline gap-2">
                <span className="font-display text-5xl leading-none font-semibold tracking-[-0.03em] text-lime">
                  {f.figure}
                </span>
                <span className="text-sm text-on-ink-faint">{f.unit ?? f.unitRaw}</span>
              </p>
              <h3 className="mt-6 text-lg leading-snug">{f.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-on-ink-muted">{f.body}</p>
            </li>
          ))}
        </ul>

        {/* Proba, imediat după cifra „Ș ≠ Ş”. Cardul de deasupra spune că
            portalul tratează cele două scrieri ca litere diferite; aici
            vizitatorul verifică singur, cu numele clientului lui. */}
        <div className="mt-8">
          <VarianteVii />
        </div>
      </Container>
    </Section>
  );
}
