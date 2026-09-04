import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";

/* Cine suntem.
 *
 * Pe o piață unde produsul atinge date personale din dosare, „cine e în spate”
 * nu e vanitate, e o întrebare de încredere. Un avocat care lasă numele
 * clientului într-un sistem vrea să știe cine îl ține.
 *
 * Fără titluri inventate și fără „co-fondator & CTO” la o echipă de trei
 * oameni care fac de toate. Rolurile de mai jos sunt cele reale, așa cum apar
 * în fluxurile din wiki. */

const OAMENI = [
  {
    nume: "Horațiu Barabas",
    rol: "Partea juridică",
    detaliu: "Cum se citește un dosar, ce înseamnă termenele, ce nu avem voie să promitem.",
  },
  {
    nume: "Codrea Dragoș",
    rol: "Produs și interfață",
    detaliu: "Site-ul, aplicația și drumul omului prin ele, de la căutare la alertă.",
  },
  {
    nume: "Dragoș Sabău",
    rol: "Motorul și infrastructura",
    detaliu: "Căutarea peste cele ~250 de instanțe, sincronizarea zilnică, serverele.",
  },
];

export function Echipa() {
  return (
    <Section id="echipa" tone="paper-2" className="border-t border-hairline">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="Echipa"
          title="Oamenii din spatele produsului."
          lead="Dezvoltăm CourtSight la Cluj-Napoca. Cadrul juridic, produsul și infrastructura sunt în responsabilitatea directă a celor trei."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          <figure>
            <div className="overflow-hidden rounded-card border border-hairline">
              <Image
                src="/img/echipa.webp"
                alt="Cei trei membri ai echipei CourtSight, la o masă cu priveliște peste Cluj-Napoca."
                width={1800}
                height={1350}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-fg-faint">
              Cluj-Napoca, septembrie 2026.
            </figcaption>
          </figure>

          <ul className="grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline">
            {OAMENI.map((om) => (
              <li key={om.nume} className="bg-paper-2 px-6 py-6">
                <p className="text-lg font-medium text-fg">{om.nume}</p>
                <p className="eyebrow mt-1.5 text-fg-faint">{om.rol}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                  {om.detaliu}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
