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
          background: "#181d26",
          padding: 72,
          fontFamily: "Newsreader",
        }}
      >
        {/* marca + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
            <g stroke="#e8e5de" strokeWidth="1.6" strokeLinecap="butt" opacity="0.72">
              <path d="M2.2 7.2V2.2h5" />
              <path d="M16.8 2.2h5v5" />
              <path d="M21.8 16.8v5h-5" />
              <path d="M7.2 21.8h-5v-5" />
            </g>
            <path d="M8.8 18.6 15.2 5.4" stroke="#e0a03c" strokeWidth="2.3" strokeLinecap="butt" />
          </svg>
          <span style={{ fontSize: 34, color: "#e8e5de", letterSpacing: "-0.02em" }}>
            CourtSight
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.08,
              color: "#e8e5de",
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
              color: "#9aa2b0",
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
            color: "#6d7686",
            borderTop: "1px solid #2b3240",
            paddingTop: 26,
          }}
        >
          <span style={{ color: "#e0a03c" }}>1234/117/2024</span>
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
