"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Cele două moduri de folosire, ca file.
 *
 * Secțiunea se numește „Un motor, două moduri de folosire”, dar dedesubt era o
 * listă plată de șase carduri: titlul promitea o împărțire pe care conținutul
 * n-o făcea. Filele o fac.
 *
 * De ce file și nu carusel: la un carusel care se rotește singur, cea mai mare
 * parte a vizitatorilor nu ajunge niciodată la al doilea panou — ar însemna să
 * ascundem jumătate din funcționalități în spatele unei animații pe care omul
 * n-o controlează. Aici alege el, iar eticheta spune dinainte ce urmează.
 *
 * Tastatura: săgeți stânga/dreapta între file, ca la orice `tablist`. Fără
 * asta, o filă e doar un buton care arată ca o filă. */

export interface Fila {
  id: string;
  eticheta: string;
  nota: string;
  continut: ReactNode;
}

export function SolutionTaburi({ file }: { file: Fila[] }) {
  const [activ, setActiv] = useState(file[0]?.id);
  const butoaneRef = useRef<(HTMLButtonElement | null)[]>([]);

  function laTasta(e: React.KeyboardEvent, index: number) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const urmator = (index + delta + file.length) % file.length;
    setActiv(file[urmator].id);
    butoaneRef.current[urmator]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Moduri de folosire"
        className="inline-flex rounded-full border border-hairline bg-paper p-1"
      >
        {file.map((f, i) => {
          const selectat = f.id === activ;
          return (
            <button
              key={f.id}
              ref={(el) => {
                butoaneRef.current[i] = el;
              }}
              role="tab"
              id={`fila-${f.id}`}
              aria-selected={selectat}
              aria-controls={`panou-${f.id}`}
              tabIndex={selectat ? 0 : -1}
              onClick={() => setActiv(f.id)}
              onKeyDown={(e) => laTasta(e, i)}
              className={cn(
                "rounded-full px-5 py-2 text-[0.9375rem] font-medium transition-colors",
                selectat
                  ? "bg-verde text-on-ink"
                  : "text-fg-muted hover:text-fg",
              )}
            >
              {f.eticheta}
            </button>
          );
        })}
      </div>

      {file.map((f) => (
        <p
          key={f.id}
          hidden={f.id !== activ}
          className="mt-4 text-[0.9375rem] text-fg-muted"
        >
          {f.nota}
        </p>
      ))}

      {file.map((f) => (
        <div
          key={f.id}
          role="tabpanel"
          id={`panou-${f.id}`}
          aria-labelledby={`fila-${f.id}`}
          hidden={f.id !== activ}
          className="mt-8"
        >
          {f.continut}
        </div>
      ))}
    </div>
  );
}
