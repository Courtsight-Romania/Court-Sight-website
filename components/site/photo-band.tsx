import Image from "next/image";
import { Container } from "@/components/site/ui/primitives";

/* Banda fotografică dintre „Problema" și „Soluția".
   E balamaua pitch-ului: datele există deja, noi construim drumul până la ele.
   Fotografia de dosare o susține literal — exact hârtiile despre care e vorba.

   Opacitățile de aici nu sunt alese din ochi. Am compus matematic cerneala,
   fotografia și gradientul peste cei mai luminoși pixeli din zona în care cade
   textul, și am ales cea mai mare valoare care ține contrastul peste 4.5:1.
   Concluzia a fost că gradientul, nu opacitatea imaginii, stinge fotografia —
   de aceea gradientul se topește complet spre dreapta, unde nu e text. */

export function PhotoBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src="/img/dosare.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center opacity-85"
      />
      {/* Pe telefon textul ocupă toată lățimea, deci vălul rămâne consistent.
          De la sm în sus se retrage spre dreapta și lasă fotografia la vedere. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50
                   sm:from-ink sm:via-ink/70 sm:to-transparent"
      />

      <Container className="relative py-24 sm:py-32">
        <p className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-on-ink text-balance">
          Datele există deja. Noi construim doar drumul până la ele.
        </p>
        {/* Text la intensitate aproape plină, nu gri estompat: peste o fotografie
            caldă, tonul „muted" pică sub pragul de contrast. */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-ink/85">
          Nu ținem o copie a arhivei instanțelor și nu am putea. Traducem întrebarea ta în
          interogările potrivite, apoi ordonăm ce vine înapoi.
        </p>
      </Container>
    </section>
  );
}
