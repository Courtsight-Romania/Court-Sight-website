"use client";

import { useId, useState } from "react";
import { genereazaVariante } from "@/lib/variante";

/* Scrie un nume, vezi ce caută motorul.
 *
 * Singurul loc din pagină în care vizitatorul poate pune numele clientului LUI
 * și să vadă produsul lucrând pe datele lui. Un demo care rulează singur e o
 * reclamă; un câmp în care scrii tu e o probă.
 *
 * Regulile vin din `lib/variante.ts`, portate din motor. Nu sunt inventate
 * pentru pagină: dacă ar fi, widgetul ar minți despre produs.
 *
 * Nimic nu pleacă de aici. Tot calculul e în browser, ceea ce contează pentru
 * un avocat care ar tasta numele unui client real ca să încerce. Scrie asta
 * sub câmp, nu doar în cod. */

const EXEMPLE = ["Șerban Ionescu", "S.C. ALFA CONSTRUCT S.R.L.", "Ţiriac Ion"];

export function VarianteVii() {
  const [text, setText] = useState("Șerban Ionescu");
  const id = useId();
  const variante = genereazaVariante(text);

  return (
    <div className="rounded-card border border-hairline-ink bg-ink-2 p-6 sm:p-7">
      <label htmlFor={id} className="eyebrow block text-lime">
        Scrie un nume
      </label>

      <input
        id={id}
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, 60))}
        spellCheck={false}
        autoComplete="off"
        placeholder="Numele unui client"
        className="mt-3 w-full rounded-lg border border-hairline-ink-strong bg-ink px-4 py-3 text-lg text-on-ink outline-none placeholder:text-on-ink-faint focus-visible:border-lime"
      />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm text-on-ink-faint">Încearcă:</span>
        {EXEMPLE.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setText(e)}
            className="rounded-full border border-hairline-ink-strong px-3 py-1 text-[0.8125rem] text-on-ink-muted transition-colors hover:border-lime hover:text-on-ink"
          >
            {e}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-on-ink-muted">
        {variante.length > 0 ? (
          <>
            Portalul le tratează ca{" "}
            <span className="tnum font-medium text-lime">{variante.length}</span>{" "}
            {variante.length === 1 ? "căutare distinctă" : "căutări distincte"}.
            Noi le trimitem pe toate, în paralel.
          </>
        ) : (
          "Scrie un nume ca să vezi ce caută motorul."
        )}
      </p>

      <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-hairline-ink bg-hairline-ink">
        {variante.map((v) => (
          <li
            key={v.text}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 bg-ink px-4 py-3"
          >
            <span className="font-mono text-[0.9375rem] text-on-ink">{v.text}</span>
            <span className="text-[0.8125rem] text-on-ink-faint">{v.motiv}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-on-ink-faint">
        Nimic nu pleacă din browser: variantele se calculează aici, pe telefonul
        sau calculatorul tău. Poți scrie liniștit numele unui client real.
      </p>
    </div>
  );
}
