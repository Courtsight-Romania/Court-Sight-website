import {
  HARTA_INALTIME,
  HARTA_LATIME,
  ORASE_HARTA,
  PUNCTE,
} from "@/lib/harta";

/* Harta acoperirii: România punctată, cu instanțele aprinse pe ea.
 *
 * Înlocuiește banda derulantă cu nume de instanțe. Un carusel cere să CITEȘTI
 * ca să înțelegi cât de mare e acoperirea; harta o arată dintr-o privire.
 *
 * Nicio bibliotecă și niciun JavaScript în browser: punctele sunt calculate o
 * dată, la generare (`scripts/genereaza-harta.mjs`), din conturul oficial al
 * țării, și ajung aici ca o listă de numere. Componenta e pur server-side.
 *
 * Cele 932 de cercuri par multe pentru DOM, dar sunt elemente identice și
 * repetitive: comprimate ajung la câțiva kiloocteți. Alternativa — un singur
 * `path` cu pătrățele — economisește noduri, dar pierde rotunjimea punctelor,
 * care e tot farmecul desenului.
 */

/* Eticheta trece în stânga punctului când acesta e prea aproape de marginea
   dreaptă, ca textul să nu iasă din cadru. 0.62 e ales pe cel mai lung nume
   care apare în dreapta hărții — „Constanța”. */
const PRAG_ETICHETA_STANGA = 0.62;

export function Harta() {
  const curti = ORASE_HARTA.filter((o) => o.curte);

  return (
    <figure className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <svg
        viewBox={`0 0 ${HARTA_LATIME} ${HARTA_INALTIME}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby="harta-titlu harta-descriere"
      >
        <title id="harta-titlu">
          Harta instanțelor acoperite de CourtSight
        </title>
        <desc id="harta-descriere">
          România, cu cele 15 curți de apel și reședințele de județ în care
          funcționează tribunalele. Căutarea acoperă toate instanțele din țară.
        </desc>

        {/* Țara */}
        <g fill="var(--color-hairline-strong)">
          {PUNCTE.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={4.5} />
          ))}
        </g>

        {/* Tribunalele, în reședințele de județ */}
        <g fill="var(--color-verde)" opacity={0.55}>
          {ORASE_HARTA.filter((o) => !o.curte).map((o) => (
            <circle key={o.nume} cx={o.x} cy={o.y} r={7} />
          ))}
        </g>

        {/* Curțile de apel: punct plin, halou și nume */}
        <g>
          {curti.map((o) => {
            const laStanga = o.x > HARTA_LATIME * PRAG_ETICHETA_STANGA;
            return (
              <g key={o.nume}>
                <circle
                  cx={o.x}
                  cy={o.y}
                  r={20}
                  fill="var(--color-verde)"
                  opacity={0.14}
                />
                <circle cx={o.x} cy={o.y} r={10} fill="var(--color-verde)" />
                <text
                  x={o.x + (laStanga ? -18 : 18)}
                  y={o.y + 7}
                  textAnchor={laStanga ? "end" : "start"}
                  fill="var(--color-fg)"
                  fontSize={21}
                  fontWeight={500}
                >
                  {o.nume}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      <figcaption className="mt-6 text-center text-sm text-fg-muted">
        <span className="tnum text-fg">15</span> curți de apel ·{" "}
        <span className="tnum text-fg">41</span> de tribunale în reședințele de
        județ · judecătoriile din subordinea lor
      </figcaption>
    </figure>
  );
}
