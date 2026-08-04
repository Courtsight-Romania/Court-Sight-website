import type { Metadata } from "next";
import { Logo, Mark, MarkTile, Wordmark } from "@/components/site/logo";

/* Pagină internă de verificare a identității. Nu e linkată de nicăieri și e
   exclusă în robots.txt. Există ca să pot judeca marca la dimensiunile la care
   e chiar folosită — mai ales 16px, testul care omoară cele mai multe logo-uri
   — și ca să văd diacriticele în toate cele trei fonturi. */

export const metadata: Metadata = {
  title: "Identitate",
  robots: { index: false, follow: false },
};

const SIZES = [16, 24, 32, 48, 96, 256];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-8 border-b border-hairline py-6 last:border-0">
      <div className="eyebrow w-44 shrink-0 text-fg-faint">{label}</div>
      <div className="flex flex-wrap items-end gap-8">{children}</div>
    </div>
  );
}

function Cell({ children, note }: { children: React.ReactNode; note?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      {note && <span className="tnum text-[0.625rem] text-fg-faint">{note}</span>}
    </div>
  );
}

export default function BrandPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 pb-32">
      <h1 className="text-4xl">Identitate CourtSight</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-fg-muted">
        Patru colțuri de vizor — care sunt, în același timp, semnele de tăiere de pe un document
        tipărit — străpunse de slash-ul din <span className="tnum">1234/117/2024</span>.
      </p>

      <h2 className="mt-16 text-2xl">Marca, la scară</h2>
      <div className="mt-4">
        <Row label="pe hârtie">
          {SIZES.map((s) => (
            <Cell key={s} note={String(s)}>
              <Mark className="text-fg" style={{ width: s, height: s }} />
            </Cell>
          ))}
        </Row>
      </div>
      <div className="mt-2 rounded-card bg-ink px-8">
        <Row label="pe cerneală">
          {SIZES.map((s) => (
            <Cell key={s} note={String(s)}>
              <Mark className="text-on-ink" style={{ width: s, height: s }} />
            </Cell>
          ))}
        </Row>
      </div>

      <h2 className="mt-16 text-2xl">Placa de favicon</h2>
      <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-muted">
        La 16px colțurile devin noroi, așa că <span className="tnum">favicon.ico</span> conține
        desene diferite pe dimensiuni: 16px doar cu slash-ul, 32 și 48px cu colțuri.
      </p>
      <div className="mt-4">
        <Row label="cu colțuri · 32px+">
          {[32, 48, 96, 180].map((s) => (
            <Cell key={s} note={String(s)}>
              <MarkTile style={{ width: s, height: s }} />
            </Cell>
          ))}
        </Row>
        <Row label="fără colțuri · 16px">
          {[16, 32, 96].map((s) => (
            <Cell key={s} note={String(s)}>
              <MarkTile withCorners={false} style={{ width: s, height: s }} />
            </Cell>
          ))}
        </Row>
      </div>

      <h2 className="mt-16 text-2xl">Lockup</h2>
      <div className="mt-4 rounded-card bg-ink px-8 text-on-ink">
        <Row label="recomandat">
          <Logo />
        </Row>
        <Row label="Sight chihlimbar">
          <Logo splitAccent />
        </Row>
      </div>
      <div className="mt-2 rounded-card border border-hairline bg-paper-2 px-8">
        <Row label="pe hârtie">
          <Logo />
        </Row>
        <Row label="accent închis">
          <Logo accent="deep" />
        </Row>
      </div>

      <h2 className="mt-16 text-2xl">Diacritice</h2>
      <div className="mt-4 space-y-7 rounded-card border border-hairline bg-paper-2 p-8">
        <p className="font-display text-6xl font-semibold tracking-[-0.03em]">ăâîșț ĂÂÎȘȚ</p>
        <p className="font-display text-3xl leading-tight font-semibold tracking-[-0.025em]">
          Află că un client a fost dat în judecată. Uneori înainte de citație.
        </p>
        <p className="text-lg leading-relaxed text-fg-muted">
          Ședință, întâmpinare, pârât, reclamant, hotărâre, județ, cale de atac, ÎNALTA CURTE DE
          CASAȚIE ȘI JUSTIȚIE, ȘTEFĂNEȘTI, TÂRGOVIȘTE.
        </p>
        <p className="tnum text-lg">
          1234/117/2024 · 5678/303/2023/a1 · Ș ș Ț ț · ş ţ · 0123456789
        </p>
      </div>

      <h2 className="mt-16 text-2xl">Wordmark</h2>
      <div className="mt-4 flex flex-wrap items-baseline gap-10 rounded-card border border-hairline bg-paper-2 p-8">
        <Wordmark className="text-2xl!" />
        <Wordmark className="text-4xl!" />
        <Wordmark className="text-6xl!" />
      </div>
    </main>
  );
}
