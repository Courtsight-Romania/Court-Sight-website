/**
 * Datele de contact, într-un singur loc.
 *
 * Sunt folosite în secțiunea de contact, în footer și în datele structurate.
 */
export const CONTACT = {
  email: "contact@courtsight.ro",
  telefon: "+40 732 401 015",
  telefonHref: "+40732401015",
  whatsapp: "40732401015",
  program: "Luni–Vineri, 09:00–18:00",
} as const;

export const SITE_URL = "https://courtsight.ro";

/**
 * Aplicația propriu-zisă (dashboard-ul), unde duce butonul „Intră în cont".
 *
 * Într-un singur loc, fiindcă apare în bara de sus, în meniul de pe telefon și
 * în subsol. Se poate schimba fără recompilare de cod, prin
 * `NEXT_PUBLIC_URL_APP` în `.env.local` — util cât timp aplicația stă pe
 * Tailscale și adresa nu e încă `app.courtsight.ro`.
 *
 * De ce NEXT_PUBLIC_: linkul se randează și în componente de client (bara are
 * meniu, deci e "use client"), iar variabilele fără prefix nu ajung în browser.
 */
export const APP_URL = process.env.NEXT_PUBLIC_URL_APP ?? "https://app.courtsight.ro";
