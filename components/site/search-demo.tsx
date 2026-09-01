"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  DEMO_ALERT,
  DEMO_OPTIONS,
  DEMO_QUERY,
  DEMO_QUESTION,
  DEMO_RESULT,
  DEMO_TOTALS,
  DEMO_VARIANTS,
} from "@/lib/demo-data";
import { CaseNumber } from "@/components/site/ui/primitives";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Demo-ul din hero: redă în ~14 secunde exact drumul descris în arhitectură,
   de la un nume ambiguu la un dosar identificat și pus sub monitorizare.

     L2  expansiune de variante  → mai multe interogări paralele
     L3  consolidare             → 47 de rezultate din 12 instanțe
     L4  dezambiguizare          → o singură întrebare, cealaltă parte
         selecție                → dosarul
     L5  watchlist               → alerta

   Fără librărie de animație: o mașină de stări cu timere, plus keyframes CSS.
   Pastilele sunt click-abile în orice moment — dacă utilizatorul răspunde
   singur la întrebare, demo-ul sare direct la rezultat.
--------------------------------------------------------------------------- */

type Step =
  | "typing"
  | "expanding"
  | "counting"
  | "asking"
  | "answered"
  | "result"
  | "watching";

/** Câți milisecunde stă fiecare pas înainte să treacă la următorul. */
const TIMELINE: Record<Step, number> = {
  typing: 620,
  expanding: 1150,
  counting: 1250,
  asking: 2300,
  answered: 750,
  result: 2100,
  watching: 3600,
};

const ORDER: Step[] = [
  "typing",
  "expanding",
  "counting",
  "asking",
  "answered",
  "result",
  "watching",
];

const TYPE_SPEED = 68;

export function SearchDemo() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState<Step>("typing");
  const [typed, setTyped] = useState("");
  const [count, setCount] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const restart = useCallback(() => {
    clearTimers();
    setTyped("");
    setCount(0);
    setChoice(null);
    setStep("typing");
  }, [clearTimers]);

  /* Cu prefers-reduced-motion nu animăm nimic: afișăm direct starea finală,
     care e oricum cea mai informativă. E stare derivată, nu sincronizată —
     nimic de setat, deci nimic de ținut în acord. */
  const view = reduced
    ? {
        step: "watching" as Step,
        typed: DEMO_QUERY,
        count: DEMO_TOTALS.results,
        choice: DEMO_OPTIONS[0].id as string,
      }
    : { step, typed, count, choice };

  /* Tastarea din bara de căutare. */
  useEffect(() => {
    if (reduced || step !== "typing") return;
    if (typed.length >= DEMO_QUERY.length) return;
    const t = setTimeout(
      () => setTyped(DEMO_QUERY.slice(0, typed.length + 1)),
      TYPE_SPEED,
    );
    return () => clearTimeout(t);
  }, [reduced, step, typed]);

  /* Contorul de rezultate urcă în loc să apară brusc. */
  useEffect(() => {
    if (reduced) return;
    if (step !== "counting" && step !== "asking") return;
    if (count >= DEMO_TOTALS.results) return;
    const t = setTimeout(() => setCount((c) => Math.min(c + 1, DEMO_TOTALS.results)), 22);
    return () => clearTimeout(t);
  }, [reduced, step, count]);

  /* Avansarea prin timeline. Pasul „typing" așteaptă în plus cât durează
     scrierea efectivă a numelui. */
  useEffect(() => {
    if (reduced) return;
    const i = ORDER.indexOf(step);
    const extra = step === "typing" ? DEMO_QUERY.length * TYPE_SPEED : 0;
    const next = ORDER[i + 1];
    const t = setTimeout(
      () => {
        if (next) {
          if (next === "answered") setChoice(DEMO_OPTIONS[0].id);
          setStep(next);
        } else {
          restart();
        }
      },
      TIMELINE[step] + extra,
    );
    return () => clearTimeout(t);
  }, [reduced, step, restart]);

  useEffect(() => clearTimers, [clearTimers]);

  const at = (s: Step) => ORDER.indexOf(view.step) >= ORDER.indexOf(s);

  const answer = (id: string) => {
    clearTimers();
    setChoice(id);
    setCount(DEMO_TOTALS.results);
    setStep("result");
    after(TIMELINE.result, () => setStep("watching"));
    after(TIMELINE.result + TIMELINE.watching, restart);
  };

  const chosen = DEMO_OPTIONS.find((o) => o.id === view.choice) ?? DEMO_OPTIONS[0];

  return (
    <div className="relative">
      {/* Demo-ul e o ilustrație animată în buclă: toate etapele stau permanent
          în DOM, ascunse cu opacity, ca tranzițiile să fie fluide. Pentru un
          cititor de ecran asta ar însemna conținut invizibil citit la nesfârșit,
          așa că îl scoatem din arborele de accesibilitate și punem în loc o
          descriere. Pastilele rămân click-abile cu mouse-ul, dar ies din ordinea
          de tabulare — nimic din ce arată aici nu lipsește din restul paginii. */}
      <p className="sr-only">
        Ilustrație animată a fluxului de căutare: numele „Popescu Ion” e extins în patru
        interogări paralele, care întorc 47 de rezultate din 12 instanțe. Motorul pune o
        singură întrebare de clarificare — cine e cealaltă parte în proces — iar după răspuns
        rămâne un singur dosar, {DEMO_RESULT.numar} la {DEMO_RESULT.instanta}, pus apoi sub
        monitorizare.
      </p>

      <div
        aria-hidden
        className="overflow-hidden rounded-card border border-hairline-ink bg-ink-2/70 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]"
      >
        {/* bara de căutare */}
        <div className="flex items-center gap-3 border-b border-hairline-ink px-4 py-3.5 sm:px-5">
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            fill="none"
            className="size-4 shrink-0 text-on-ink-faint"
          >
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="min-w-0 flex-1 truncate text-[0.9375rem] text-on-ink">
            {view.typed || (
              <span className="text-on-ink-faint">Caută un nume sau un număr de dosar…</span>
            )}
            {!reduced && view.step === "typing" && (
              <span className="ml-px inline-block h-[1.05em] w-px translate-y-[0.15em] animate-[cs-caret_1s_steps(1)_infinite] bg-lime" />
            )}
          </span>
          <span className="eyebrow hidden shrink-0 text-on-ink-faint sm:block">
            România · toate instanțele
          </span>
        </div>

        <div className="min-h-[19.5rem] px-4 py-4 sm:min-h-[18rem] sm:px-5">
          {/* L2 — expansiunea de variante */}
          <div
            className={cn(
              "transition-opacity duration-300",
              at("expanding") ? "opacity-100" : "opacity-0",
            )}
          >
            <p className="eyebrow text-on-ink-faint">
              {DEMO_VARIANTS.length} interogări paralele
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {DEMO_VARIANTS.map((v, i) => (
                <li
                  key={v}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className={cn(
                    "tnum rounded-[0.3rem] border border-hairline-ink px-2 py-1 text-[0.6875rem] text-on-ink-muted",
                    at("expanding") && !reduced && "animate-[cs-rise_.4s_ease-out_backwards]",
                  )}
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {/* L3 — consolidare */}
          <div
            className={cn(
              "mt-4 flex items-baseline gap-2 border-t border-hairline-ink pt-4 transition-opacity duration-300",
              at("counting") ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="tnum text-2xl font-medium text-on-ink tabular-nums">{view.count}</span>
            <span className="text-sm text-on-ink-muted">
              de rezultate din{" "}
              <span className="tnum text-on-ink">{DEMO_TOTALS.courts}</span> instanțe
            </span>
          </div>

          {/* L4 — dezambiguizare, apoi rezultatul */}
          <div className="relative mt-4">
            {/* întrebarea */}
            <div
              className={cn(
                "transition-all duration-300",
                at("asking") && !at("result")
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute inset-x-0 top-0 -translate-y-1 opacity-0",
              )}
            >
              <p className="text-[0.9375rem] text-on-ink">{DEMO_QUESTION}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {DEMO_OPTIONS.map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    tabIndex={-1}
                    onClick={() => answer(o.id)}
                    className={cn(
                      "rounded-[0.4rem] border px-3 py-1.5 text-sm transition-colors",
                      view.choice === o.id && at("answered")
                        ? "border-lime bg-lime/15 text-lime"
                        : "border-hairline-ink-strong text-on-ink-muted hover:border-on-ink-muted hover:text-on-ink",
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-on-ink-faint">
                O singură întrebare, aleasă automat: cealaltă parte separă cel mai bine
                candidații rămași.
              </p>
            </div>

            {/* rezultatul */}
            <div
              className={cn(
                "transition-all duration-400",
                at("result")
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute inset-x-0 top-0 translate-y-1 opacity-0",
              )}
            >
              <div className="rounded-[0.5rem] border border-hairline-ink bg-ink/60 p-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <CaseNumber className="text-lg text-on-ink">{DEMO_RESULT.numar}</CaseNumber>
                  <span className="flex items-center gap-1.5 text-xs text-signal">
                    <span aria-hidden className="size-1.5 rounded-full bg-current" />
                    dosar identificat
                  </span>
                </div>
                <p className="mt-1 text-sm text-on-ink-muted">
                  {DEMO_RESULT.instanta} · {DEMO_RESULT.sectie} · {DEMO_RESULT.obiect}
                </p>
                <dl className="mt-3 space-y-1 border-t border-hairline-ink pt-3 text-[0.8125rem]">
                  {DEMO_RESULT.parti.map((p) => (
                    <div key={p.nume} className="flex gap-2">
                      <dt className="w-20 shrink-0 text-on-ink-faint">{p.calitate}</dt>
                      <dd className="min-w-0 truncate text-on-ink-muted">
                        {p.nume === "BANCA COMERCIALĂ ROMÂNĂ SA" && chosen.id !== "bcr"
                          ? chosen.hint || chosen.label
                          : p.nume}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* L5 — watchlist */}
              <div
                className={cn(
                  "mt-2.5 flex items-start gap-3 rounded-[0.5rem] border border-lime/35 bg-lime/[0.07] p-3 transition-all duration-400",
                  at("watching")
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime"
                />
                <p className="text-[0.8125rem] leading-relaxed text-on-ink">
                  <span className="font-medium text-lime">{DEMO_ALERT.tip}</span>{" "}
                  <span className="tnum">
                    {DEMO_ALERT.data}, {DEMO_ALERT.ora}
                  </span>{" "}
                  · {DEMO_ALERT.complet}
                  <span className="mt-0.5 block text-on-ink-faint">
                    Dosarul e sub monitorizare. Ești anunțat la fiecare schimbare reală.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="mt-3 flex items-center justify-between gap-4">
        <p className="text-xs text-on-ink-faint">Secvență ilustrativă, cu date de exemplu.</p>
        <button
          type="button"
          tabIndex={-1}
          onClick={restart}
          className="text-xs text-on-ink-faint underline-offset-4 transition-colors hover:text-on-ink-muted hover:underline"
        >
          Reia demonstrația
        </button>
      </div>
    </div>
  );
}
