import { SearchDemo } from "@/components/site/search-demo";
import { SolutionTaburi } from "@/components/site/solution-taburi";
import { CaseNumber, Container, Section, SectionHeader } from "@/components/site/ui/primitives";
import { cn } from "@/lib/utils";

/* Funcțiile din „Prioritatea 1" — cele care merg exclusiv pe serviciul public,
   fără autentificare și la nivel național. Trei dintre ele primesc un mic
   mockup codat: sunt lucruri care se înțeleg mai repede văzute decât citite. */

function MockSearch() {
  const rows = [
    { n: "1234/117/2024", c: "Tribunalul Cluj", r: "Pârât" },
    { n: "876/3/2023", c: "Tribunalul București", r: "Reclamant" },
    { n: "4512/211/2022", c: "Judecătoria Cluj-Napoca", r: "Pârât" },
  ];
  return (
    <div className="mt-6 space-y-px overflow-hidden rounded-[0.5rem] border border-hairline">
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between gap-3 bg-paper px-3 py-2.5 text-[0.8125rem]"
        >
          <CaseNumber className="text-fg">{r.n}</CaseNumber>
          <span className="min-w-0 flex-1 truncate text-fg-faint">{r.c}</span>
          <span className="shrink-0 rounded-[0.25rem] border border-hairline px-1.5 py-0.5 text-[0.6875rem] text-fg-muted">
            {r.r}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockAlert() {
  return (
    <div className="mt-6 rounded-[0.5rem] border border-verde/40 bg-verde/[0.06] p-3.5">
      <p className="eyebrow flex items-center gap-2 text-verde">
        <span aria-hidden className="size-1.5 rounded-full bg-verde" />
        Dosar nou
      </p>
      <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-fg">
        <span className="font-medium">ALFA CONSTRUCT SRL</span> apare ca pârât într-un dosar
        înregistrat ieri.
      </p>
      <p className="tnum mt-1.5 text-[0.8125rem] text-fg-muted">
        3021/117/2026 · Tribunalul Cluj · pretenții
      </p>
    </div>
  );
}

function MockTimeline() {
  const stages = [
    { label: "Fond", court: "Tribunalul Cluj", state: "done" },
    { label: "Apel", court: "Curtea de Apel Cluj", state: "current" },
    { label: "Recurs", court: "—", state: "future" },
  ];
  return (
    <ol className="mt-6 space-y-0">
      {stages.map((s, i) => (
        <li key={s.label} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              aria-hidden
              className={cn(
                "mt-1 size-2 shrink-0 rounded-full",
                s.state === "done" && "bg-signal",
                s.state === "current" && "bg-verde",
                s.state === "future" && "border border-hairline-strong bg-paper-2",
              )}
            />
            {i < stages.length - 1 && (
              <span aria-hidden className="my-1 w-px flex-1 bg-hairline" />
            )}
          </div>
          <div className={cn("pb-3.5 text-[0.8125rem]", i === stages.length - 1 && "pb-0")}>
            <p className={cn("font-medium", s.state === "future" ? "text-fg-faint" : "text-fg")}>
              {s.label}
            </p>
            <p className="text-fg-faint">{s.court}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const FEATURES = [
  {
    mod: "verificare",
    title: "Căutare națională după nume",
    body: "Un nume de firmă sau de persoană, toate litigiile din țară. Motorul generează singur variantele — ordinea nume/prenume, formele juridice, diacriticele scrise în ambele feluri — și le caută pe toate în paralel.",
    mock: <MockSearch />,
  },
  {
    mod: "monitorizare",
    title: "Alertă „ai fost dat în judecată”",
    body: "Pui un nume sub urmărire și ești anunțat când apare un dosar nou în care figurează ca pârât. Uneori afli înainte să sosească citația prin poștă.",
    mock: <MockAlert />,
  },
  {
    mod: "verificare",
    title: "Traseu procesual unificat",
    body: "Fond, apel și recurs sunt înregistrări separate în sistem, la instanțe diferite. Le legăm într-un singur fir, iar când dosarul urcă în calea de atac îl adăugăm automat la monitorizare.",
    mock: <MockTimeline />,
  },
  {
    mod: "monitorizare",
    title: "Alertă pe termenul căii de atac",
    body: "Când apare soluția la fond, primești un semnal că termenul a început să curgă. Nu îl calculăm în locul tău: termenul curge de la comunicare, iar data comunicării nu există în datele publice. E o alertă de tip „verifică”, niciodată o certitudine.",
    caution: true,
  },
  {
    mod: "verificare",
    title: "Due diligence pe contrapartidă",
    body: "Denumire sau CUI, iar în câteva secunde ai litigiile publice ale unei firme. Pentru persoane juridice datele sunt integral publice, deci fără complicațiile care apar la persoane fizice.",
  },
  {
    mod: "monitorizare",
    title: "Raport automat către client",
    body: "Statusul dosarului în limbaj non-juridic, generat din propriul timeline. Plus sincronizare în calendar și detectarea conflictelor: două termene, aceeași zi și oră, instanțe diferite.",
  },
];

/* Cardurile unui mod. Extrase într-o funcție fiindcă se randează de două ori,
   o dată pentru fiecare filă.

   `min-w-0` pe fiecare card nu e ornament: fără el, un element de grilă nu se
   strânge sub lățimea minimă a conținutului — iar numerele de dosar au spațiere
   fixă — deci iese din coloană și e tăiat de `overflow-hidden` al listei.
   Măsurat pe un ecran de 390px: cardul ajungea la 387px într-o coloană de
   350px. */
function Carduri({ mod }: { mod: string }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
      {FEATURES.filter((f) => f.mod === mod).map((f) => (
        <li key={f.title} className="flex min-w-0 flex-col bg-paper-2 p-7 sm:p-8">
          <h3 className="text-xl leading-snug">{f.title}</h3>
          <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-fg-muted">{f.body}</p>
          {f.mock}
          {f.caution && (
            <p className="mt-6 border-l-2 border-verde pl-3.5 text-[0.8125rem] leading-relaxed text-fg-muted">
              Ratarea unui termen de apel e una dintre cele mai frecvente forme de malpraxis.
              Tocmai de aceea nu promitem un calcul exact acolo unde datele nu îl permit.
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Solution() {
  return (
    <Section id="functionalitati" tone="paper-2" className="border-t border-hairline">
      <Container className="py-20 sm:py-28">
        <SectionHeader
          eyebrow="Soluția"
          title="Un motor, două moduri de folosire."
          lead="Aceeași interogare rulată o dată înseamnă verificare. Rulată zilnic, devine sistem de alertă. Nu sunt două produse — e unul singur, iar asta face ca monitorizarea să vină aproape gratis peste căutare."
        />

        {/* Demo-ul stă ÎNAINTEA listei, nu după: un vizitator care vede motorul
            lucrând paisprezece secunde înțelege mai mult decât din șase
            paragrafe, iar cine vrea detaliile le găsește dedesubt. */}
        <div className="mt-14">
          <SearchDemo />
        </div>

        <div className="mt-16">
          <SolutionTaburi
            file={[
              {
                id: "verificare",
                eticheta: "Verificare",
                nota: "O dată, când vrei să afli ceva anume.",
                continut: <Carduri mod="verificare" />,
              },
              {
                id: "monitorizare",
                eticheta: "Monitorizare",
                nota: "Aceeași interogare, lăsată pornită.",
                continut: <Carduri mod="monitorizare" />,
              },
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
