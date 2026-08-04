"use client";

import { useSyncExternalStore } from "react";

/* Preferința de mișcare e o sursă externă de adevăr, nu o stare a componentei.
   `useSyncExternalStore` o citește direct, fără setState într-un efect și fără
   nepotrivire între randarea de pe server și cea din browser.

   Pe server întoarcem `false` — mișcarea permisă e valoarea pe care o are marea
   majoritate a vizitatorilor, iar componentele care chiar contează (videoul de
   fundal) verifică oricum din nou după hidratare, înainte să încarce ceva. */

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function useReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
