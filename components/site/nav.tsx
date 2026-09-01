"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/site/ui/button";
import { Container } from "@/components/site/ui/primitives";
import { APP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#functionalitati", label: "Funcționalități" },
  { href: "#cum-functioneaza", label: "Cum funcționează" },
  { href: "#surse", label: "Surse de date" },
  { href: "#intrebari", label: "Întrebări" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Meniul mobil deschis blochează scroll-ul pe fundal.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "tone-ink sticky top-0 z-50 bg-ink/90 text-on-ink backdrop-blur-md transition-colors",
        scrolled ? "border-b border-hairline-ink" : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#top" className="-m-2 p-2" aria-label="CourtSight, acasă">
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                /* -my-1.5/py-1.5: ținta de atingere ajunge la 32px înălțime
                   fără să schimbe ritmul vizual al barei. */
                className="-my-1.5 py-1.5 text-sm text-on-ink-muted transition-colors hover:text-on-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* „Intră în cont" e discret (contur), „Cere acces" rămâne acțiunea
              accentuată: pe un site de prezentare, majoritatea vizitatorilor nu
              au încă un cont. Cine are, îl caută oricum aici. */}
          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink href={APP_URL} variant="outlineInk" className="h-9 px-4 text-sm">
              Intră în cont
            </ButtonLink>
            <ButtonLink href="#acces" className="h-9 px-4 text-sm">
              Cere acces timpuriu
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="meniu-mobil"
            className="-mr-2 flex size-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">{open ? "Închide meniul" : "Deschide meniul"}</span>
            <span aria-hidden className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200",
                  open && "translate-y-[6.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 top-1/2 h-px bg-current transition-opacity duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-200",
                  open && "-translate-y-[6.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div id="meniu-mobil" className="border-t border-hairline-ink bg-ink md:hidden">
          <Container>
            <nav aria-label="Principal, mobil" className="flex flex-col py-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline-ink py-4 text-base text-on-ink-muted last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <ButtonLink href="#acces" onClick={() => setOpen(false)} className="mt-5">
                Cere acces timpuriu
              </ButtonLink>
              <ButtonLink
                href={APP_URL}
                variant="outlineInk"
                onClick={() => setOpen(false)}
                className="mb-5 mt-3"
              >
                Intră în cont
              </ButtonLink>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
