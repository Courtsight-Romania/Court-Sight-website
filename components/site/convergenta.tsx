"use client";

import { useEffect, useRef } from "react";
import { Mark, Wordmark } from "@/components/site/logo";

/* Convergența: ~250 de instanțe, un singur loc.
 *
 * Desenul spune exact fraza de dedesubt. Liniile intră din marginile ecranului,
 * se curbează și se sting toate în același punct, unde stă marca. Nu e decor:
 * e argumentul paginii, desenat.
 *
 * Scris de mână, nu adus ca bibliotecă. Varianta gata făcută care circulă rula
 * într-un iframe cu Tailwind, GSAP și Iconify luate de pe patru CDN-uri
 * străine — pe un site pentru avocați, cu pagină de GDPR, fiecare cerere către
 * un terț trimite IP-ul vizitatorului acolo și trebuie declarată. Aici sunt
 * șaptezeci de linii și zero dependințe.
 *
 * Trei lucruri pe care e ușor să le strici:
 *  - Culorile se citesc din tokenurile CSS, nu se scriu cu mâna. Dacă se
 *    schimbă paleta în `globals.css`, se schimbă și aici, singură.
 *  - Animația stă când banda nu e pe ecran. Un canvas care se redesenează de 60
 *    de ori pe secundă în subsolul paginii consumă baterie degeaba.
 *  - La `prefers-reduced-motion` se desenează UN cadru și se oprește. Nu se
 *    ascunde: imaginea rămâne, doar mișcarea dispare.
 */

const NR_TRASEE = 44;

type Traseu = {
  dinStanga: boolean;
  y: number;
  t: number;
  viteza: number;
};

export function Convergenta() {
  const gazdaRef = useRef<HTMLDivElement>(null);
  const panzaRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const gazda = gazdaRef.current;
    const panza = panzaRef.current;
    if (!gazda || !panza) return;
    const ctx = panza.getContext("2d");
    if (!ctx) return;

    /* Alb pe negru, nu tokenurile verzi ale site-ului. E singura secțiune care
       iese din paletă, și o face intenționat: deasupra e eroul verde, dedesubt
       hârtia. Trei benzi verzi la rând se citeau ca una singură, lungă. Ruptura
       de contrast e ce face banda asta să se vadă ca un moment separat. */
    const linie = "rgba(255,255,255,0.30)";
    const particula = "rgba(255,255,255,0.92)";

    let w = 0;
    let h = 0;
    let rafId: number | null = null;
    let peEcran = true;

    const trasee: Traseu[] = Array.from({ length: NR_TRASEE }, (_, i) => ({
      dinStanga: i % 2 === 0,
      /* Împrăștiate dincolo de marginile de sus și de jos: altfel se vede clar
         unde începe și unde se termină evantaiul, iar banda pare tăiată. */
      y: (i / NR_TRASEE) * 1.4 - 0.2,
      t: Math.random(),
      viteza: 0.0016 + Math.random() * 0.0022,
    }));

    function masoara() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const cutie = gazda!.getBoundingClientRect();
      w = cutie.width;
      h = cutie.height;
      panza!.width = Math.round(w * dpr);
      panza!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* Punctul de pe curba Bézier cubică, la fracțiunea t. */
    function peCurba(
      t: number,
      p0: [number, number],
      p1: [number, number],
      p2: [number, number],
      p3: [number, number],
    ): [number, number] {
      const u = 1 - t;
      const a = u * u * u;
      const b = 3 * u * u * t;
      const c = 3 * u * t * t;
      const d = t * t * t;
      return [
        a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
        a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
      ];
    }

    function puncte(tr: Traseu) {
      const cx = w / 2;
      const cy = h / 2;
      const yStart = tr.y * h;
      const x0 = tr.dinStanga ? 0 : w;
      const p0: [number, number] = [x0, yStart];
      const p1: [number, number] = [tr.dinStanga ? cx * 0.5 : w - cx * 0.5, yStart];
      const p2: [number, number] = [tr.dinStanga ? cx * 0.82 : w - cx * 0.82, cy];
      const p3: [number, number] = [cx, cy];
      return { p0, p1, p2, p3 };
    }

    function deseneaza(avanseaza: boolean) {
      ctx!.clearRect(0, 0, w, h);

      for (const tr of trasee) {
        const { p0, p1, p2, p3 } = puncte(tr);

        ctx!.beginPath();
        ctx!.moveTo(p0[0], p0[1]);
        ctx!.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
        ctx!.strokeStyle = linie;
        ctx!.globalAlpha = 0.55;
        ctx!.lineWidth = 1;
        ctx!.setLineDash([1, 5]);
        ctx!.stroke();
        ctx!.setLineDash([]);

        if (avanseaza) {
          tr.t += tr.viteza;
          if (tr.t > 1) tr.t = 0;
        }

        const [px, py] = peCurba(tr.t, p0, p1, p2, p3);
        /* Se sting pe ultima cincime: altfel particulele se îngrămădesc vizibil
           în punctul de convergență și pare o pată, nu o sosire. */
        const stingere = tr.t > 0.8 ? (1 - tr.t) / 0.2 : 1;
        ctx!.globalAlpha = 0.9 * stingere;
        ctx!.fillStyle = particula;
        ctx!.fillRect(px - 1.5, py - 1.5, 3, 3);
      }

      ctx!.globalAlpha = 1;
    }

    const miscareRedusa = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pornit = false;

    /* Bucla NU e pornită și oprită de observator. Observatorul doar ridică sau
       coboară `peEcran`, iar bucla sare peste desen când banda nu se vede —
       un `requestAnimationFrame` care nu desenează nimic e practic gratis, iar
       browserul îl încetinește singur când fila e în fundal.
       Varianta în care observatorul pornea și oprea bucla lăsa banda complet
       nemișcată dacă el nu se declanșa la intrarea în cadru: exact ce s-a
       întâmplat aici. O optimizare nu are voie să fie singurul lucru care
       pornește desenul. */
    function cadru() {
      if (peEcran) deseneaza(true);
      rafId = pornit ? requestAnimationFrame(cadru) : null;
    }

    function porneste() {
      if (pornit || miscareRedusa.matches) return;
      pornit = true;
      rafId = requestAnimationFrame(cadru);
    }

    function opreste() {
      pornit = false;
      if (rafId === null) return;
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    const io = new IntersectionObserver(
      (intrari) => {
        peEcran = intrari[0].isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(gazda);

    const laRedimensionare = () => {
      masoara();
      if (miscareRedusa.matches) deseneaza(false);
    };
    const laSchimbareMiscare = () => {
      opreste();
      porneste();
    };

    /* Un cadru desenat necondiționat, ÎNAINTE de orice observator: banda nu are
       voie să fie goală nici măcar o clipă, indiferent ce se întâmplă cu
       observatorul sau cu setarea de mișcare redusă. */
    masoara();
    deseneaza(false);
    porneste();
    window.addEventListener("resize", laRedimensionare, { passive: true });
    miscareRedusa.addEventListener("change", laSchimbareMiscare);

    return () => {
      opreste();
      io.disconnect();
      window.removeEventListener("resize", laRedimensionare);
      miscareRedusa.removeEventListener("change", laSchimbareMiscare);
    };
  }, []);

  return (
    <div
      ref={gazdaRef}
      className="relative isolate h-[17rem] w-full overflow-hidden bg-black sm:h-[21rem] lg:h-[25rem]"
    >
      <canvas ref={panzaRef} aria-hidden className="absolute inset-0 h-full w-full" />

      {/* Marginile se sting în negru, ca banda să nu se termine cu o muchie
          dreaptă peste care liniile par retezate. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#000,transparent_14%,transparent_86%,#000)]"
      />

      {/* Destinația. Centrată pe toată banda, fiindcă traseele se sting în
          centrul PÂNZEI: dacă marca se mută din centru, punctul de convergență
          rămâne în urmă și liniile par că se adună în gol. */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Numele atârnă SUB marcă, scos din fluxul de așezare: altfel grupul
            marcă+nume se centrează ca întreg, marca urcă cu vreo 20px și
            traseele ajung să se adune în mijlocul cuvântului, nu în semn. */}
        <div className="relative flex flex-col items-center">
          <Mark className="size-9 text-white sm:size-11" />
          <Wordmark className="absolute top-full mt-3 whitespace-nowrap text-lg text-white sm:text-xl" />
        </div>
      </div>

      {/* Ce înseamnă desenul. Fără rândul ăsta, animația e doar decor. */}
      <p className="absolute inset-x-0 bottom-7 mx-auto max-w-md px-5 text-center text-[0.9375rem] leading-relaxed text-white/55 sm:bottom-9">
        Fiecare traseu e o instanță. Fiecare punct, un dosar care ajunge la tine.
      </p>
    </div>
  );
}
