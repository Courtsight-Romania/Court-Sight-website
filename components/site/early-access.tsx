"use client";

import { useActionState, useId } from "react";
import Link from "next/link";
import { submitEarlyAccess, type FormState } from "@/app/actions/early-access";
import { BackgroundVideo } from "@/components/site/background-video";
import { CONTACT } from "@/lib/contact";
import { Button } from "@/components/site/ui/button";
import { Container, Section } from "@/components/site/ui/primitives";
import { cn } from "@/lib/utils";

const INITIAL: FormState = { ok: false };

const INTERESE = [
  "Căutare și verificare",
  "Alerte pe clienții mei",
  "Due diligence pe contrapartidă",
  "Jurisprudență",
  "Altceva",
];

const field =
  "h-11 w-full rounded-[0.4rem] border border-hairline-ink-strong bg-ink/50 px-3.5 " +
  "text-[0.9375rem] text-on-ink placeholder:text-on-ink-faint " +
  "transition-colors focus:border-lime focus:outline-none";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm text-on-ink-muted">
      {children}
    </label>
  );
}

function Error({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1.5 text-[0.8125rem] text-danger">{children}</p>;
}

export function EarlyAccess() {
  const [state, action, pending] = useActionState(submitEarlyAccess, INITIAL);
  const id = useId();
  const f = (name: string) => `${id}-${name}`;

  return (
    <Section id="acces" tone="ink" className="overflow-hidden">
      {/* Videoul stă în secțiunea de final, nu în hero: aici nu are nimeni de
          citit un paragraf lung peste el, iar formularul e pe un card opac.

          Am scanat toate cadrele clipului: cel mai luminos pixel din zona în
          care cade textul e rgb(105, 93, 87) — destul de întunecat, deci clipul
          poate sta la 90% cu un văl de doar 35%. Vălul e vertical, nu
          orizontal: intră din marginea de sus și iese prin cea de jos, ca
          secțiunea să se lege de vecine, iar clipul se vede la mijloc. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <BackgroundVideo
          poster="/img/ink-poster.webp"
          webm="/video/ink-loop.webm"
          mp4="/video/ink-loop.mp4"
          className="size-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/35 to-ink" />
      </div>

      <Container className="py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <p className="eyebrow flex items-center gap-2.5 text-on-ink-faint">
              <span aria-hidden className="h-px w-6 bg-current opacity-50" />
              Acces timpuriu
            </p>
            <h2 className="mt-5 text-[clamp(1.875rem,3.4vw,2.75rem)]">
              Pilotul pornește cu un număr mic de case de avocatură.
            </h2>
            {/* Intensitate aproape plină, nu tonul „muted": peste video, gri-ul
                obișnuit pică sub pragul de contrast în cadrele luminoase. */}
            <p className="mt-5 text-lg leading-relaxed text-on-ink/85 text-pretty">
              Căutăm avocați dispuși să folosească produsul devreme și să ne spună ce nu merge.
              În schimb: acces gratuit pe durata pilotului și influență directă asupra a ceea ce
              construim mai întâi.
            </p>

            <dl className="mt-10 space-y-px overflow-hidden rounded-card border border-hairline-ink">
              <div className="bg-ink-2 px-5 py-4">
                <dt className="eyebrow text-on-ink-faint">Email</dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-[0.9375rem] text-on-ink underline-offset-4 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="bg-ink-2 px-5 py-4">
                <dt className="eyebrow text-on-ink-faint">Telefon</dt>
                <dd className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <a
                    href={`tel:${CONTACT.telefonHref}`}
                    className="tnum text-[0.9375rem] text-on-ink underline-offset-4 hover:underline"
                  >
                    {CONTACT.telefon}
                  </a>
                  <span className="text-[0.8125rem] text-on-ink-faint">{CONTACT.program}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-card border border-hairline-ink bg-ink-2 p-6 sm:p-8">
            {state.ok ? (
              <div className="flex h-full min-h-72 flex-col justify-center">
                <p className="flex items-center gap-2.5 text-signal">
                  <span aria-hidden className="size-1.5 rounded-full bg-current" />
                  <span className="eyebrow">Cerere înregistrată</span>
                </p>
                <p className="mt-5 text-xl leading-snug">Mulțumim. Te căutăm noi.</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-on-ink-muted">
                  Te contactăm când deschidem locuri în pilot. Dacă între timp vrei să vorbim mai
                  repede, scrie-ne direct la{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-on-ink underline underline-offset-4"
                  >
                    {CONTACT.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form action={action} noValidate className="space-y-5">
                {state.message && (
                  <p className="rounded-[0.4rem] border border-danger/40 bg-danger/10 px-4 py-3 text-[0.875rem] text-on-ink">
                    {state.message}
                  </p>
                )}

                <div>
                  <Label htmlFor={f("nume")}>Nume</Label>
                  <input
                    id={f("nume")}
                    name="nume"
                    autoComplete="name"
                    required
                    className={field}
                    aria-invalid={!!state.errors?.nume}
                  />
                  <Error>{state.errors?.nume}</Error>
                </div>

                <div>
                  <Label htmlFor={f("email")}>Email</Label>
                  <input
                    id={f("email")}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={field}
                    aria-invalid={!!state.errors?.email}
                  />
                  <Error>{state.errors?.email}</Error>
                </div>

                <div>
                  <Label htmlFor={f("org")}>
                    Casă de avocatură sau organizație{" "}
                    <span className="text-on-ink-faint">(opțional)</span>
                  </Label>
                  <input
                    id={f("org")}
                    name="organizatie"
                    autoComplete="organization"
                    className={field}
                  />
                </div>

                <div>
                  <Label htmlFor={f("interes")}>Ce te-ar ajuta cel mai mult?</Label>
                  <select id={f("interes")} name="interes" className={cn(field, "appearance-none")}>
                    <option value="">Alege…</option>
                    {INTERESE.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* capcană pentru roboți — ascunsă vizual și de cititoarele de ecran */}
                <div aria-hidden className="hidden">
                  <label htmlFor={f("website")}>Site web</label>
                  <input id={f("website")} name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex gap-3 pt-1">
                  <input
                    id={f("consim")}
                    name="consimtamant"
                    type="checkbox"
                    required
                    className="mt-1 size-4 shrink-0 accent-[var(--color-lime)]"
                    aria-invalid={!!state.errors?.consimtamant}
                  />
                  <label
                    htmlFor={f("consim")}
                    className="text-[0.8125rem] leading-relaxed text-on-ink-muted"
                  >
                    Sunt de acord să fiu contactat despre pilotul CourtSight. Datele nu ajung la
                    nimeni altcineva — vezi{" "}
                    <Link
                      href="/confidentialitate"
                      className="text-on-ink underline underline-offset-4"
                    >
                      politica de confidențialitate
                    </Link>
                    .
                  </label>
                </div>
                <Error>{state.errors?.consimtamant}</Error>

                <Button type="submit" disabled={pending} className="w-full">
                  {pending ? "Se trimite…" : "Trimite cererea"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
