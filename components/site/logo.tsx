import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Marca CourtSight.

   Patru colțuri de vizor — care sunt, în același timp, semnele de tăiere de pe
   un document tipărit — străpunse de o linie oblică. Vizorul înseamnă „Sight";
   slash-ul e separatorul din 1234/117/2024, glifa care definește domeniul.

   Grilă 24×24, colțuri la 2.2 de margine cu brațe de 5, slash de la (8.8, 18.6)
   la (15.2, 5.4). Geometria a fost aleasă rasterizând variantele la 16px: la
   valorile astea colțurile cad pe pixeli întregi și rămân citibile, iar slash-ul
   iese dincolo de cadru, ceea ce împiedică marca să pară un simplu chenar.

   Capete de linie tăiate drept peste tot: nimic rotunjit, e o estetică de
   document, nu de aplicație.
--------------------------------------------------------------------------- */

const CORNERS = [
  "M2.2 7.2V2.2h5", // stânga-sus
  "M16.8 2.2h5v5", // dreapta-sus
  "M21.8 16.8v5h-5", // dreapta-jos
  "M7.2 21.8h-5v-5", // stânga-jos
];

const SLASH = "M8.8 18.6 15.2 5.4";

type Accent = "amber" | "deep" | "current";

const ACCENT: Record<Accent, string> = {
  amber: "var(--color-amber)",
  deep: "var(--color-amber-deep)",
  current: "currentColor",
};

export function Mark({
  className,
  accent = "amber",
  withCorners = true,
  ...props
}: React.ComponentProps<"svg"> & {
  accent?: Accent;
  withCorners?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      {withCorners && (
        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="butt" opacity="0.72">
          {CORNERS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      )}
      <path d={SLASH} stroke={ACCENT[accent]} strokeWidth="2.3" strokeLinecap="butt" />
    </svg>
  );
}

/**
 * Marca pe placă de cerneală — avatar social, app icon, favicon peste 32px.
 * Colțurile se pierd sub 32px; pentru 16px există varianta din `app/icon.svg`,
 * desenată separat.
 */
export function MarkTile({
  className,
  withCorners = true,
  ...props
}: React.ComponentProps<"svg"> & { withCorners?: boolean }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="32" height="32" rx="7" fill="var(--color-ink)" />
      {withCorners && (
        <g stroke="var(--color-on-ink-faint)" strokeWidth="2" strokeLinecap="butt">
          <path d="M6.13 10.63V6.13h4.5" />
          <path d="M21.37 6.13h4.5v4.5" />
          <path d="M25.87 21.37v4.5h-4.5" />
          <path d="M10.63 25.87h-4.5v-4.5" />
        </g>
      )}
      <path
        d="M11.73 24.8 20.27 7.2"
        stroke="var(--color-amber)"
        strokeWidth="3.1"
        strokeLinecap="butt"
      />
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
      <span className={splitAccent ? "text-amber" : undefined}>Sight</span>
    </span>
  );
}

export function Logo({
  className,
  accent = "amber",
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
