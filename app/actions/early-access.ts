"use server";

import { z } from "zod";

/* Server Action pentru formularul de acces timpuriu.
 *
 * Scrie direct în Supabase prin REST, cu cheia publishable. Nu folosim SDK-ul:
 * pentru un singur insert ar fi 40 KB de dependință pentru un fetch.
 *
 * Tabelul are RLS cu politică doar de insert pentru rolul anon — cheia din
 * browser nu poate citi înapoi lead-urile. Vezi migrarea din README.
 *
 * Dacă variabilele de mediu lipsesc, acțiunea întoarce o eroare explicită în
 * loc să crape: site-ul e complet funcțional înainte să existe baza de date,
 * iar formularul afișează canalele directe de contact.
 */

const Schema = z.object({
  nume: z.string().trim().min(2, "Scrie numele tău.").max(120),
  email: z.string().trim().toLowerCase().email("Adresa de email nu pare validă.").max(180),
  organizatie: z.string().trim().max(160).optional().or(z.literal("")),
  interes: z.string().trim().max(60).optional().or(z.literal("")),
  consimtamant: z.literal("on", {
    message: "Avem nevoie de acordul tău ca să te putem contacta.",
  }),
  // Câmp-capcană: invizibil pentru oameni, completat de roboți.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type FormState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export async function submitEarlyAccess(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = Schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      errors[key] ??= issue.message;
    }
    return { ok: false, errors };
  }

  // Robotul a completat capcana: îi confirmăm fără să scriem nimic.
  if (parsed.data.website) return { ok: true };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return {
      ok: false,
      message:
        "Formularul nu e încă conectat. Scrie-ne direct pe email — răspundem la fel de repede.",
    };
  }

  try {
    const res = await fetch(`${url}/rest/v1/early_access`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        nume: parsed.data.nume,
        email: parsed.data.email,
        organizatie: parsed.data.organizatie || null,
        interes: parsed.data.interes || null,
        sursa: "site",
        consimtamant_la: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("early_access insert eșuat:", res.status, await res.text());
      return {
        ok: false,
        message: "Ceva n-a mers la trimitere. Încearcă din nou sau scrie-ne pe email.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("early_access:", error);
    return {
      ok: false,
      message: "Ceva n-a mers la trimitere. Încearcă din nou sau scrie-ne pe email.",
    };
  }
}
