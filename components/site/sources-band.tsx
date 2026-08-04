import { COURTS } from "@/lib/courts";
import { Container, Section } from "@/components/site/ui/primitives";

/* Aici, un site obișnuit ar pune logo-uri de clienți. Noi n-avem încă clienți,
   iar publicul e format din avocați: un logo inventat descoperit costă mai mult
   decât aduce. Punem în schimb ce e adevărat și oricum mai impresionant —
   acoperirea. Numele sunt instanțe reale. */

const BADGES = [
  { label: "portal.just.ro", note: "serviciul public ECRIS" },
  { label: "ReJust", note: "jurisprudență motivată" },
  { label: "Sincronizare incrementală", note: "cadență în funcție de termen" },
  { label: "Găzduire în UE", note: "DPA cu fiecare client" },
];

/* Banda derulantă are nevoie de conținutul duplicat ca să se poată bucla fără
   salt. Prima copie rămâne în arborele de accesibilitate și în text — sunt
   nume reale de instanțe, deci au valoare și pentru căutare; doar duplicatul e
   ascuns, ca să nu fie citit de două ori. */
function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 motion-safe:animate-[cs-marquee_92s_linear_infinite]"
    >
      {COURTS.map((c) => (
        <li
          key={c}
          className="flex shrink-0 items-center gap-8 text-[0.9375rem] whitespace-nowrap text-fg-faint"
        >
          {c}
          <span aria-hidden className="size-[3px] rounded-full bg-hairline-strong" />
        </li>
      ))}
    </ul>
  );
}

function Marquee() {
  return (
    <div className="relative flex overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <Track />
      <Track hidden />
    </div>
  );
}

export function SourcesBand() {
  return (
    <Section id="surse" tone="paper-2" className="border-y border-hairline">
      <Container className="py-14 sm:py-16">
        <p className="eyebrow text-center text-fg-faint">
          Date oficiale · acoperire națională
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-fg-muted">
          Aproximativ <span className="tnum text-fg">250</span> de instanțe, de la judecătorii
          până la Înalta Curte, interogate dintr-un singur loc.
        </p>
      </Container>

      <Marquee />

      <Container className="py-14 sm:py-16">
        <ul className="grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((b) => (
            <li key={b.label} className="bg-paper-2 px-5 py-6">
              <p className="text-[0.9375rem] font-medium text-fg">{b.label}</p>
              <p className="mt-1 text-sm text-fg-muted">{b.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
