import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";

/* Secțiunea care ține locul testimonialelor. La avocați, limitele pe care ți
   le impui singur spun mai mult decât trei citate de mulțumire — și, spre
   deosebire de citate, sunt verificabile. */

const LIMITS = [
  {
    title: "Nu prezicem rezultatul procesului",
    body: "„73% șanse de câștig” e o cifră care sună bine în demonstrație și e fragilă statistic. Mai grav: ne-ar expune la răspundere exact în momentul în care un client ia o decizie pe baza ei. Oferim distribuții de durată și precedente. Nu probabilități de victorie.",
  },
  {
    title: "Nu facem statistici nominale pe judecători",
    body: "Franța a interzis practica prin lege, cu sancțiune penală. România nu are un text echivalent explicit, dar zona rămâne sensibilă și, în opinia noastră, greșită. Dacă vom face vreodată astfel de analize, vor fi agregate pe complet, nu pe nume.",
  },
  {
    title: "Nu ne autentificăm în locul tău",
    body: "Actele depuse de părți nu se află în datele publice — sunt accesibile doar prin dosarul electronic, cu autorizare per dosar. Nu construim roboți care se loghează în numele tău. Tu, care ai deja acces legitim, imporți documentul; noi automatizăm tot ce urmează după.",
  },
];

export function NotBuilding() {
  return (
    <Section tone="paper" className="overflow-hidden border-t border-hairline">
      {/* Guilloche — gravura de pe documentele de valoare. Semantic e exact
          registrul secțiunii: limite formale, asumate. N-are text peste ea,
          deci singura constrângere e să rămână textură, nu ilustrație: masca
          radială o topește în hârtie spre centrul paginii. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-48 -z-10 size-[34rem] opacity-20
                   [mask-image:radial-gradient(closest-side,black,transparent)]
                   sm:size-[44rem] lg:size-[52rem]"
      >
        <Image src="/img/guilloche.webp" alt="" fill sizes="832px" className="object-cover" />
      </div>

      <Container className="py-20 sm:py-28">
        <SectionHeader
          eyebrow="Limite asumate"
          title="Ce nu construim — și de ce."
          lead="Într-un domeniu în care o informație greșită poate costa un termen, ce refuzăm să facem contează la fel de mult ca ce facem."
        />

        <ul className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-3">
          {LIMITS.map((l) => (
            <li key={l.title} className="border-t border-fg pt-6">
              <h3 className="text-lg leading-snug">{l.title}</h3>
              <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-fg-muted">{l.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
