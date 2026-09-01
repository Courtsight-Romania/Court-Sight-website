import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Marca CourtSight.

   O carte deschisă, cu o lupă coborâtă în cotor, într-un pătrat rotunjit.
   Cartea e dosarul; lupa e „Sight". Reconstruită vectorial după logoul livrat
   ca PNG, pe grilă 24×24, ca să rămână curată la orice dimensiune și în tuș
   unic — originalul e monocrom, deci și marca asta e.

   Geometria, ca să nu se strice la o retușare:
     - cadrul stă la 2.0 de margine, cu rază 5.4 și grosime 2.1;
     - paginile sunt înalte la muchia exterioară (11.1 → 16.8, adică 5.7) și se
       subțiază spre cotor (15.5 → 17.2, adică 1.7). Ăsta e singurul lucru care
       le face să arate a carte și nu a fundă: dacă grosimea devine constantă,
       forma se citește greșit;
     - coada lupei se oprește la 14.7, adică la 0.8 deasupra vârfului cotorului
       (15.5). Fără spațiul ăla, coada se lipește de pagini și marca devine o
       pată.

   Distanțele astea sunt vizibile la 24px și se închid la 16px, unde marca se
   înlocuiește oricum cu varianta din `app/icon.svg`.
--------------------------------------------------------------------------- */

/* Paginile. A doua e prima oglindită în x față de 12. */
const PAGINA_STANGA =
  "M6.0 11.1 C9.1 11.4, 11.2 13.4, 12 15.5 L12 17.2 C10.7 15.7, 8.6 16.8, 6.0 16.8 Z";
const PAGINA_DREAPTA =
  "M18.0 11.1 C14.9 11.4, 12.8 13.4, 12 15.5 L12 17.2 C13.3 15.7, 15.4 16.8, 18.0 16.8 Z";

/* Lupa, ținută într-un singur loc: apare şi în `app/icon.svg` şi în
   `app/opengraph-image.tsx`, unde e copiată cu hex în clar. */
const LUPA = { cx: 12, cy: 9.5, r: 2.45, grosime: 1.5, coada: "M12 11.95 V14.7" };

type Accent = "verde" | "lime" | "current";

const ACCENT: Record<Accent, string> = {
  verde: "var(--color-verde)",
  lime: "var(--color-lime)",
  current: "currentColor",
};

export function Mark({
  className,
  accent = "current",
  withFrame = true,
  ...props
}: React.ComponentProps<"svg"> & {
  accent?: Accent;
  withFrame?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      {withFrame && (
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5.4"
          stroke="currentColor"
          strokeWidth="2.1"
        />
      )}

      {/* Cartea */}
      <path d={PAGINA_STANGA} fill="currentColor" />
      <path d={PAGINA_DREAPTA} fill="currentColor" />

      {/* Lupa */}
      <circle
        cx={LUPA.cx}
        cy={LUPA.cy}
        r={LUPA.r}
        stroke={ACCENT[accent]}
        strokeWidth={LUPA.grosime}
      />
      <path
        d={LUPA.coada}
        stroke={ACCENT[accent]}
        strokeWidth={LUPA.grosime}
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Marca pe placă de cerneală — avatar social, app icon, favicon peste 32px.
 * Cadrul se pierde sub 32px; pentru 16px există varianta din `app/icon.svg`,
 * desenată separat.
 */
export function MarkTile({
  className,
  withFrame = true,
  ...props
}: React.ComponentProps<"svg"> & { withFrame?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="var(--color-ink)" />
      {/* Marca de 24 aşezată în placa de 32: mutată cu 4 şi lăsată la scara 1. */}
      <g transform="translate(4 4)">
        {withFrame && (
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5.4"
            stroke="var(--color-on-ink-faint)"
            strokeWidth="2.1"
          />
        )}
        <path d={PAGINA_STANGA} fill="var(--color-on-ink)" />
        <path d={PAGINA_DREAPTA} fill="var(--color-on-ink)" />
        <circle
          cx={LUPA.cx}
          cy={LUPA.cy}
          r={LUPA.r}
          stroke="var(--color-lime)"
          strokeWidth={LUPA.grosime}
        />
        <path
          d={LUPA.coada}
          stroke="var(--color-lime)"
          strokeWidth={LUPA.grosime}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/* --------------------------------------------------------------------------- */

export function Wordmark({
  className,
  splitAccent = false,
}: {
  className?: string;
  splitAccent?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display text-[1.0625rem] leading-none font-semibold tracking-[-0.02em]",
        className,
      )}
    >
      Court
      <span className={splitAccent ? "text-lime" : undefined}>Sight</span>
    </span>
  );
}

export function Logo({
  className,
  accent = "current",
  splitAccent = false,
  markClassName = "size-[1.375rem]",
}: {
  className?: string;
  accent?: Accent;
  splitAccent?: boolean;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark accent={accent} className={markClassName} />
      <Wordmark splitAccent={splitAccent} />
    </span>
  );
}
