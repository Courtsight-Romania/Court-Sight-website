"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/* Video de fundal, tratat ca decor pur.
 *
 * Trei lucruri care nu sunt evidente:
 *
 *  - Cu `prefers-reduced-motion` nu ascundem doar videoul, ci nu îl încărcăm
 *    deloc. Cineva care a cerut mai puțină mișcare nu trebuie să plătească
 *    jumătate de megaoctet pentru ceva ce oricum nu vede.
 *  - Posterul e o imagine reală, primul cadru al clipului, ca să nu apară un
 *    dreptunghi negru cât timp se încarcă.
 *  - `<source>` cu webm înaintea mp4: browserele iau primul format pe care îl
 *    înțeleg, iar webm-ul e cu 30% mai mic.
 */

export function BackgroundVideo({
  poster,
  webm,
  mp4,
  className,
}: {
  poster: string;
  webm: string;
  mp4: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  /* Atributul `autoplay` singur nu e de ajuns: unele browsere îl amână pentru
     elemente în afara ecranului sau în economie de energie, iar Safari pe iOS
     cere uneori o pornire explicită. Încercăm `play()` și înghițim refuzul —
     dacă politica browserului spune nu, rămâne posterul, ceea ce e complet
     acceptabil pentru un fundal decorativ. */
  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  if (reduced) {
    return <Image src={poster} alt="" aria-hidden fill sizes="100vw" className={className} />;
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
