import { cn } from "@/lib/utils";

/* Primitivele care țin pagina coerentă. Fiecare secțiune se compune din ele,
   ca ritmul vertical și tratamentul liniilor să fie identice peste tot. */

export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: "paper" | "paper-2" | "ink";
  className?: string;
  children: React.ReactNode;
}) {
  const isInk = tone === "ink";
  return (
    <section
      id={id}
      className={cn(
        "relative isolate",
        isInk && "grain bg-ink text-on-ink",
        tone === "paper" && "bg-paper",
        tone === "paper-2" && "bg-paper-2",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-2.5 text-fg-faint", className)}>
      <span aria-hidden className="h-px w-6 bg-current opacity-50" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "paper",
  align = "start",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "paper" | "ink";
  align?: "start" | "center";
  className?: string;
}) {
  const isInk = tone === "ink";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow className={cn(isInk && "text-on-ink-faint", align === "center" && "justify-center")}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-5 text-[clamp(1.875rem,3.4vw,2.75rem)]">{title}</h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            isInk ? "text-on-ink-muted" : "text-fg-muted",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** Numărul de dosar apare întotdeauna în mono, cu cifre tabulare. */
export function CaseNumber({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("tnum tracking-tight", className)}>{children}</span>;
}

