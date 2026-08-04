import Link from "next/link";
import { cn } from "@/lib/utils";

/* Butoanele proiectului. Chihlimbarul e rezervat variantei primare — o singură
   acțiune chihlimbar pe ecran, altfel accentul nu mai înseamnă nimic. */

const base =
  "inline-flex items-center justify-center gap-2 rounded-[0.5rem] px-5 h-11 " +
  "text-[0.9375rem] font-medium whitespace-nowrap transition-colors duration-150 " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-amber text-ink hover:bg-amber-hi font-semibold",
  outlineInk:
    "border border-hairline-ink-strong text-on-ink hover:border-on-ink-muted hover:bg-white/5",
  outline: "border border-hairline-strong text-fg hover:border-fg-muted hover:bg-black/[0.03]",
} as const;

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
