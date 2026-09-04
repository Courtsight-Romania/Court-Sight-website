"use client";

import { useEffect, useRef, useState } from "react";
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

export interface NavProps {
  cinematicHero?: boolean;
}

export function Nav({ cinematicHero = false }: NavProps = {}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const hiddenRef = useRef(false);
  const scrolledRef = useRef(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const heroEl = document.getElementById("hero-cinematic");
    const hasCinematic = cinematicHero || !!heroEl;

    const clearIdleTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    const updateHidden = (val: boolean) => {
      if (hiddenRef.current !== val) {
        hiddenRef.current = val;
        setHidden(val);
      }
    };

    const onScroll = () => {
      clearIdleTimer();

      const scrollY = window.scrollY;
      const isScrolled = scrollY > 8;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }

      if (!hasCinematic) {
        updateHidden(false);
        return;
      }

      const hero = heroEl ?? document.getElementById("hero-cinematic");
      if (!hero) {
        updateHidden(false);
        return;
      }

      const isScrubActive = hero.offsetHeight > window.innerHeight * 2;

      if (!isScrubActive || open) {
        updateHidden(false);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const inHeroAnimation = scrollY > 10 && rect.bottom > window.innerHeight;

      if (inHeroAnimation) {
        // În timp ce derulezi în erou, ascunde navbar-ul ca să nu strice animația
        updateHidden(true);

        // Dacă te oprești din derulat în mijlocul animației, navbar-ul reapare
        idleTimerRef.current = setTimeout(() => {
          updateHidden(false);
        }, 800);
      } else {
        // În afara animației eroului sau când ești complet sus, navbar-ul rămâne vizibil
        updateHidden(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      clearIdleTimer();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cinematicHero, open]);

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
        "tone-ink z-50 text-on-ink backdrop-blur-md transition-all duration-300 ease-out",
        cinematicHero ? "fixed top-0 inset-x-0" : "sticky top-0",
        scrolled ? "border-b border-hairline-ink bg-ink/90" : "border-b border-transparent bg-ink/80",
        hidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto",
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
