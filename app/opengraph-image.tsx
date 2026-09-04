import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* Imaginea de previzualizare la share (WhatsApp, LinkedIn, Slack).
   Generată din cod, nu cu un model de imagini: textul iese perfect crisp și
   rămâne editabil. Fonturile sunt încărcate în două subseturi — `latin` pentru
   literele de bază, `latin-ext` pentru ăâîșț — altfel diacriticele cad pe un
   fallback și se vede. */

export const alt =
  "CourtSight — căutare și monitorizare a dosarelor din instanțele României";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (name: string) => readFile(join(process.cwd(), "assets", name));

export default async function Image() {
  const [serifLatin, serifExt, monoLatin, monoExt] = await Promise.all([
    font("Newsreader-SemiBold-latin.ttf"),
    font("Newsreader-SemiBold-latinext.ttf"),
    font("GeistMono-Regular-latin.ttf"),
    font("GeistMono-Regular-latinext.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#033825",
          padding: 72,
          fontFamily: "Newsreader",
        }}
      >
        {/* marca + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* Aceeași geometrie ca `components/site/logo.tsx`, cu hex în clar:
              generatorul de OG rulează pe Edge și nu vede variabilele CSS. */}
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5.4" stroke="#f4f6f3" strokeWidth="2.1" />
            <path
              d="M6.0 11.1 C9.1 11.4, 11.2 13.4, 12 15.5 L12 17.2 C10.7 15.7, 8.6 16.8, 6.0 16.8 Z"
              fill="#f4f6f3"
            />
            <path
              d="M18.0 11.1 C14.9 11.4, 12.8 13.4, 12 15.5 L12 17.2 C13.3 15.7, 15.4 16.8, 18.0 16.8 Z"
              fill="#f4f6f3"
            />
            <circle cx="12" cy="9.5" r="2.45" stroke="#d8f2aa" strokeWidth="1.5" />
            <path d="M12 11.95 V14.7" stroke="#d8f2aa" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 34, color: "#f4f6f3", letterSpacing: "-0.02em" }}>
            CourtSight
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.08,
              color: "#f4f6f3",
              letterSpacing: "-0.025em",
              maxWidth: 940,
            }}
          >
            Află că un client a fost dat în judecată. Uneori înainte de citație.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 27,
              color: "#b4bcb4",
              fontFamily: "GeistMono",
              letterSpacing: "-0.01em",
            }}
          >
            Căutare și monitorizare a dosarelor din instanțele României
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "GeistMono",
            fontSize: 20,
            color: "#9aa39a",
            borderTop: "1px solid #0d4a31",
            paddingTop: 26,
          }}
        >
          <span style={{ color: "#d8f2aa" }}>1234/117/2024</span>
          <span>·</span>
          <span>Tribunalul Cluj</span>
          <span>·</span>
          <span>date oficiale ECRIS</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serifLatin, weight: 600, style: "normal" },
        { name: "Newsreader", data: serifExt, weight: 600, style: "normal" },
        { name: "GeistMono", data: monoLatin, weight: 400, style: "normal" },
        { name: "GeistMono", data: monoExt, weight: 400, style: "normal" },
      ],
    },
  );
}
