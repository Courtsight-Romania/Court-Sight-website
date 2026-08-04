import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";

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
    body: "Datele conțin amestec de diacritice corecte și vechi, cu virgulă sau cu cedilă. „S.C. ALFA S.R.L.” și „ALFA SRL” sunt aceeași firmă — dar nu și pentru o căutare care compară șiruri de caractere.",
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
    <Section tone="paper">
      <Container className="py-20 sm:py-28">
        <SectionHeader
          eyebrow="Problema"
          title="Informația e publică. Găsirea ei nu e."
          lead="Dosarele de pe rolul instanțelor sunt deschise oricui. Dificultatea nu e accesul, ci faptul că portalul e construit pentru a verifica un dosar pe care îl cunoști deja, nu pentru a descoperi unul despre care nu știi nimic."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline md:grid-cols-3">
          {FACTS.map((f) => (
            <li key={f.title} className="flex flex-col bg-paper-2 p-7 sm:p-8">
              <p className="flex items-baseline gap-2">
                <span className="font-display text-5xl leading-none font-semibold tracking-[-0.03em] text-fg">
                  {f.figure}
                </span>
                <span className="text-sm text-fg-faint">{f.unit ?? f.unitRaw}</span>
              </p>
              <h3 className="mt-6 text-lg leading-snug">{f.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
