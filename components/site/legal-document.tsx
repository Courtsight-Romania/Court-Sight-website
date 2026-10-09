import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Container } from "@/components/site/ui/primitives";
import { COMPANY, LEGAL_EFFECTIVE, LEGAL_VERSION, companyRegistration } from "@/lib/company";
import type { LegalBlock, LegalDoc } from "@/lib/legal/types";

/* Pagina unui document legal: titlu, versiune, cuprins, secțiuni.
 *
 * Versiunea și data stau sus, la vedere: clientul trebuie să poată spune ce
 * versiune a acceptat, iar Google verifică că politica e cea publicată, nu o
 * schiță. Textul vine din `lib/legal/*`, în ambele limbi, cu aceleași ancore. */

const UI = {
  ro: { back: "← Înapoi la pagina principală", version: "Versiunea", effective: "În vigoare de la", contents: "Cuprins", provider: "Furnizor" },
  en: { back: "← Back to the home page", version: "Version", effective: "Effective", contents: "Contents", provider: "Provider" },
} as const;

/** **îngroșat**, `cod` și [text](adresă); nimic altceva, intenționat. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <strong key={m.index} className="font-semibold text-fg">
          {m[1]}
        </strong>,
      );
    } else if (m[2] !== undefined) {
      out.push(
        <code key={m.index} className="rounded bg-verde-slab px-1 py-0.5 font-mono text-[0.85em] text-fg">
          {m[2]}
        </code>,
      );
    } else {
      const href = m[4];
      const external = /^https?:/.test(href);
      out.push(
        <a
          key={m.index}
          href={href}
          className="text-verde-viu underline underline-offset-4 hover:text-verde"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {m[3]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p className="leading-relaxed text-fg-muted">{inline(block)}</p>;
  }
  if ("list" in block) {
    return (
      <ul className="list-disc space-y-2 pl-5 leading-relaxed text-fg-muted marker:text-fg-faint">
        {block.list.map((item, i) => (
          <li key={i}>{inline(item)}</li>
        ))}
      </ul>
    );
  }
  if ("callout" in block) {
    return (
      <div className="rounded-card border border-verde/40 bg-verde-slab p-5 leading-relaxed text-fg">
        {inline(block.callout)}
      </div>
    );
  }
  return (
    <div className="-mx-1 overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[0.9375rem]">
        <thead>
          <tr>
            {block.table.head.map((h) => (
              <th key={h} className="border-b border-hairline-strong px-3 py-2 font-semibold text-fg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td key={j} className="border-b border-hairline px-3 py-2 leading-relaxed text-fg-muted">
                  {inline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  const t = UI[doc.lang];
  return (
    <>
      <Nav />
      <main className="flex-1 bg-paper">
        <Container className="max-w-3xl py-16 sm:py-24">
          <article lang={doc.lang}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="eyebrow text-fg-faint underline-offset-4 transition-colors hover:text-fg-muted hover:underline"
              >
                {t.back}
              </Link>
              <Link
                href={doc.alternate.href}
                hrefLang={doc.lang === "ro" ? "en" : "ro"}
                className="eyebrow text-verde-viu underline-offset-4 hover:underline"
              >
                {doc.alternate.label}
              </Link>
            </div>

            <h1 className="mt-8 text-[clamp(2rem,4vw,2.75rem)]">{doc.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{doc.intro}</p>

            <dl className="mt-8 grid gap-x-8 gap-y-2 border-y border-hairline py-4 text-sm text-fg-muted sm:grid-cols-[auto_1fr]">
              <dt className="text-fg-faint">{t.version}</dt>
              <dd>{LEGAL_VERSION}</dd>
              <dt className="text-fg-faint">{t.effective}</dt>
              <dd>{LEGAL_EFFECTIVE[doc.lang]}</dd>
              <dt className="text-fg-faint">{t.provider}</dt>
              <dd>
                {COMPANY.name}, {doc.lang === "ro" ? COMPANY.address : COMPANY.addressEn};{" "}
                {companyRegistration(doc.lang)}. {COMPANY.email}
              </dd>
            </dl>

            <nav aria-label={t.contents} className="mt-10">
              <p className="eyebrow text-fg-faint">{t.contents}</p>
              <ol className="mt-4 space-y-1.5 text-[0.9375rem]">
                {doc.sections.map((s, i) => (
                  <li key={s.id} className="flex gap-3">
                    <span className="tnum w-6 shrink-0 text-fg-faint">{i + 1}.</span>
                    <a href={`#${s.id}`} className="text-fg-muted underline-offset-4 hover:text-fg hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-14 space-y-12">
              {doc.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="flex items-baseline gap-3 text-xl">
                    <span className="tnum text-sm text-fg-faint">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[0.9375rem]">
                    {s.blocks.map((b, j) => (
                      <Block key={j} block={b} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
