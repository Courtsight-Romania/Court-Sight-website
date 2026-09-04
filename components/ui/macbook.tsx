"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Mark } from "@/components/site/logo";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

/* Laptopul, static.
 *
 * A fost o vreme legat de derulare — se deschidea, creștea, se destrăma. Acum e
 * o fotografie de produs: capacul deschis, captura pe ecran, o urmă de
 * perspectivă ca să nu pară un desen plat. Fără nicio bibliotecă de animație.
 *
 * Desenul e la 512px lățime, fix, iar potrivirea în coloană se face din `scale`
 * pe tot ansamblul: e compus din zeci de bucăți aliniate între ele (taste,
 * boxe, trackpad), iar redimensionarea pe bucăți le desface.
 */

const LATIME = 512;

/* 364px, NU cele 320px ale unui ecran 16:10. Captura e 1343×940, adică raport
   1.43; la 492px lățime interioară îi trebuie 344px înălțime, plus 20px de
   ramă. Cu ecranul croit pe raportul pozei, poza îl umple complet — fără benzi
   și fără să tăiem din captură. Dacă înlocuiești captura cu una la alt raport,
   schimbă și valoarea asta. */
const CAPAC = 364;
const BALAMA = 8;
const BAZA = 336;

/* Se îndoaie DOAR ecranul. Tastatura rămâne dreaptă, exact cum a fost desenată,
   pentru vedere de sus.
   Am încercat și varianta cu baza culcată în perspectivă, la 62° și apoi la 48°:
   e mai aproape de un laptop adevărat, dar tastele se strâng pe verticală fără
   să se strângă și pe orizontală, iar literele ajung late și scunde. Se citește
   ca o eroare de randare, nu ca o fotografie. Între „corect geometric" și
   „arată bine", pe o pagină de prezentare câștigă al doilea. */
const UNGHI_CAPAC = 10;

/* Ecranul înclinat se scurtează puțin pe verticală; restul rămâne cât e. */
const CAPAC_PROIECTAT = Math.round(
  CAPAC * Math.cos((UNGHI_CAPAC * Math.PI) / 180),
);
const INALTIME = CAPAC_PROIECTAT + BALAMA + BAZA;

export function Macbook({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  const cutieRef = useRef<HTMLDivElement>(null);
  const [scara, setScara] = useState(1);

  /* Scara se măsoară, nu se calculează din CSS.
     Prima variantă folosea `transform: scale(calc(100cqw / 512))`, care pare
     curat dar e CSS INVALID: o lungime împărțită la un număr rămâne o lungime,
     iar `scale()` cere un număr. Browserul aruncă regula fără să spună nimic,
     iar desenul rămâne la 512px și iese din coloană. */
  useEffect(() => {
    const el = cutieRef.current;
    if (!el) return;
    const masoara = () => {
      const latime = el.clientWidth;
      if (latime) setScara(Math.min(1, latime / LATIME));
    };
    masoara();
    const ro = new ResizeObserver(masoara);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={cn("flex w-full justify-center lg:justify-end", className)}>
      {/* Cutia exterioară ține locul la dimensiunea micșorată, iar desenul
          dinăuntru se scalează din colțul din stânga sus. Fără ea, ansamblul de
          512px ar lăsa un gol sub el sau ar ieși din coloană. */}
      <div
        ref={cutieRef}
        className="relative w-full"
        style={{ maxWidth: LATIME, height: INALTIME * scara }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: LATIME,
            height: INALTIME,
            transform: `scale(${scara})`,
            /* Perspectiva stă AICI, pe părintele direct al ansamblului. Pusă
               mai sus, pe un strămoș, elementul ăsta — care are propriul
               `transform` — ar aplatiza spațiul 3D al copiilor și îndoirea
               s-ar pierde: capacul și baza ar reveni în același plan. */
            /* 2600px, nu 1500: perspectiva scurtă evazează baza spre privitor
               și îi îndoaie marginile. De la distanță mai mare, laptopul arată
               ca fotografiat cu un teleobiectiv — liniile rămân drepte. */
            perspective: "2600px",
            perspectiveOrigin: "50% 30%",
          }}
        >
          {/* Ansamblul. Nicio rotire aici: tot ce se îndoaie e capacul, mai
              jos. Aplicată pe ansamblu, rotirea ar prinde și tastatura. */}
          <div className="relative" style={{ width: LATIME, height: INALTIME }}>
            {/* Capacul cu ecranul. Se lasă pe spate din balama — singura piesă
                înclinată din tot desenul. */}
            <div
              className="absolute left-0 top-0 h-[22.75rem] w-[32rem] rounded-2xl border border-white/10 bg-[#010101] p-2.5 shadow-2xl"
              style={{
                transformOrigin: "bottom center",
                transform: `rotateX(${UNGHI_CAPAC}deg)`,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 bg-[#080d09]">
                <ScreenContent src={src} />
                {/* Reflexie subtilă de sticlă peste ecran */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.05]" />
              </div>
            </div>

            {/* Balamaua */}
            <div
              className="absolute h-2 w-28 rounded-full bg-[#18181b] shadow-inner"
              style={{ top: CAPAC_PROIECTAT, left: "50%", marginLeft: -56 }}
            />

            {/* Baza cu tastatură și trackpad. Fără nicio transformare: tastele
                sunt desenate pentru vedere de sus și așa rămân. */}
            <div
              className="absolute left-0 h-[21rem] w-[32rem] overflow-hidden rounded-2xl border border-white/10 bg-[#1e2022] p-2 shadow-2xl"
              style={{ top: CAPAC_PROIECTAT + BALAMA }}
            >
              <div className="relative h-4 w-full">
                <div className="mx-auto h-2 w-[70%] rounded-b-md bg-[#0a0a0a]" />
              </div>

              <div className="relative flex">
                <div className="mx-auto h-full w-[10%] overflow-hidden">
                  <SpeakerGrid />
                </div>
                <div className="mx-auto h-full w-[80%]">
                  <Keypad />
                </div>
                <div className="mx-auto h-full w-[10%] overflow-hidden">
                  <SpeakerGrid />
                </div>
              </div>

              <Trackpad />

              {/* Degajare de deschidere în fața bazei */}
              <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-2xl rounded-tr-2xl bg-[#0a0a0a]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenContent({ src }: { src?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg bg-[#07130e]">
      {src && !imgError ? (
        /* `cover` fără pierdere: ecranul e croit pe raportul capturii (vezi
           înălțimea capacului), deci poza îl umple exact, margine în margine. */
        <img
          src={src}
          alt="Interfața aplicației CourtSight"
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-top"
        />
      ) : (
        /* Machetă de rezervă, dacă poza lipsește */
        <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#051c13] p-4 text-on-ink select-none">
          {/* Bara superioară a aplicației */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline-ink bg-[#051c13]/95 pb-2.5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-red-500/80" />
                <div className="size-2 rounded-full bg-yellow-500/80" />
                <div className="size-2 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <Mark className="size-3.5 text-lime" />
                <span className="font-mono text-[10px] text-on-ink font-semibold">CourtSight OS</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-2 py-0.5 text-[8px] font-mono text-lime border border-lime/30">
                <span className="size-1 rounded-full bg-lime animate-pulse" /> ECRIS SINCRONIZAT
              </span>
            </div>
          </div>

          {/* Căutare & Filtre */}
          <div className="mt-3 rounded-lg border border-hairline-ink bg-ink/70 p-3 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-on-ink">
                <IconSearch className="size-3.5 text-lime" />
                <span className="font-medium">Dan &amp; Asociații SPARL</span>
                <span className="rounded bg-white/10 px-1.5 py-0.2 text-[8px] text-on-ink-muted">Toate instanțele</span>
              </div>
              <span className="text-[9px] font-mono text-lime font-semibold">47 DOSARE GĂSITE</span>
            </div>
          </div>

          {/* Listă de dosare care curg pe ecran */}
          <div className="mt-3 space-y-2 text-left">
            <div className="rounded-lg border border-hairline-ink bg-ink/50 p-2.5 shadow-sm">
              <div className="flex justify-between text-[8px] font-mono text-on-ink-faint">
                <span>DOSAR 1824/3/2024 · TRIBUNALUL BUCUREȘTI</span>
                <span className="text-lime font-semibold">Actualizat acum 4 min</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold text-on-ink">
                Dan &amp; Asociații v. Direcția Generală a Vămilor
              </div>
              <div className="mt-0.5 text-[9px] text-on-ink-muted">
                Contencios administrativ și fiscal · Fond · Termen: 12 Noiembrie 2026
              </div>
            </div>

            <div className="rounded-lg border border-hairline-ink bg-ink/40 p-2.5 shadow-sm">
              <div className="flex justify-between text-[8px] font-mono text-on-ink-faint">
                <span>DOSAR 4501/117/2024 · CURTEA DE APEL CLUJ</span>
                <span className="text-on-ink-muted">Alerte active</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold text-on-ink">
                S.C. Construct Imobil SRL / Dan &amp; Asociații
              </div>
              <div className="mt-0.5 text-[9px] text-on-ink-muted">
                Litigii cu profesioniștii · Apel · Înregistrat recent
              </div>
            </div>

            <div className="rounded-lg border border-hairline-ink bg-ink/40 p-2.5 shadow-sm">
              <div className="flex justify-between text-[8px] font-mono text-on-ink-faint">
                <span>DOSAR 8921/300/2024 · JUDECĂTORIA SECTORULUI 1</span>
                <span className="text-lime">Citație detectată</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold text-on-ink">
                Banca Comercială v. Dan &amp; Asociații SPARL
              </div>
              <div className="mt-0.5 text-[9px] text-on-ink-muted">
                Executare silită · Încuviințare · Ședință camera de consiliu
              </div>
            </div>

            <div className="rounded-lg border border-hairline-ink bg-ink/40 p-2.5 shadow-sm">
              <div className="flex justify-between text-[8px] font-mono text-on-ink-faint">
                <span>DOSAR 1042/117/2024 · TRIBUNALUL COMERCIAL CLUJ</span>
                <span className="text-on-ink-muted">Procedură prealabilă</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold text-on-ink">
                Insolvență Transilvania Logistica SRL
              </div>
              <div className="mt-0.5 text-[9px] text-on-ink-muted">
                Tabel preliminar creanțe · Termen verificare: 05 Decembrie
              </div>
            </div>

            <div className="rounded-lg border border-hairline-ink bg-ink/40 p-2.5 shadow-sm">
              <div className="flex justify-between text-[8px] font-mono text-on-ink-faint">
                <span>DOSAR 3120/2/2024 · CURTEA DE APEL BUCUREȘTI</span>
                <span className="text-lime">Soluție pronunțată</span>
              </div>
              <div className="mt-1 text-[11px] font-semibold text-on-ink">
                Recurs în contencios fiscal · Hotărâre favorabilă
              </div>
              <div className="mt-0.5 text-[9px] text-on-ink-muted">
                Admite recursul · Definitivă · Trimis spre comunicare
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1.5 h-28 w-[38%] rounded-xl bg-[#141517]"
      style={{
        boxShadow: "0px 0px 1px 1px #00000060 inset",
      }}
    />
  );
};

export const Keypad = () => {
  return (
    <div className="mx-1 h-full rounded-md bg-[#08080a] p-1 [transform:translateZ(0)]">
      {/* First Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F9</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="mt-1 inline-block">F12</span>
        </KBtn>
        <KBtn>
          <div className="h-3.5 w-3.5 rounded-full bg-neutral-800 p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn>
          <span className="block">~</span>
          <span className="mt-1 block">`</span>
        </KBtn>
        <KBtn>
          <span className="block">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn>
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn>
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn>
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn>
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn>
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn>
          <span className="block">&amp;</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn>
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn>
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn>
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn>
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn>
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          delete
        </KBtn>
      </div>

      {/* Third row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          tab
        </KBtn>
        <KBtn><span className="block">Q</span></KBtn>
        <KBtn><span className="block">W</span></KBtn>
        <KBtn><span className="block">E</span></KBtn>
        <KBtn><span className="block">R</span></KBtn>
        <KBtn><span className="block">T</span></KBtn>
        <KBtn><span className="block">Y</span></KBtn>
        <KBtn><span className="block">U</span></KBtn>
        <KBtn><span className="block">I</span></KBtn>
        <KBtn><span className="block">O</span></KBtn>
        <KBtn><span className="block">P</span></KBtn>
        <KBtn><span className="block">{`{`}</span></KBtn>
        <KBtn><span className="block">{`}`}</span></KBtn>
        <KBtn><span className="block">{`|`}</span></KBtn>
      </div>

      {/* Fourth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          caps
        </KBtn>
        <KBtn><span className="block">A</span></KBtn>
        <KBtn><span className="block">S</span></KBtn>
        <KBtn><span className="block">D</span></KBtn>
        <KBtn><span className="block">F</span></KBtn>
        <KBtn><span className="block">G</span></KBtn>
        <KBtn><span className="block">H</span></KBtn>
        <KBtn><span className="block">J</span></KBtn>
        <KBtn><span className="block">K</span></KBtn>
        <KBtn><span className="block">L</span></KBtn>
        <KBtn><span className="block">{`:`}</span></KBtn>
        <KBtn><span className="block">{`"`}</span></KBtn>
        <KBtn
          className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          return
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start"
        >
          shift
        </KBtn>
        <KBtn><span className="block">Z</span></KBtn>
        <KBtn><span className="block">X</span></KBtn>
        <KBtn><span className="block">C</span></KBtn>
        <KBtn><span className="block">V</span></KBtn>
        <KBtn><span className="block">B</span></KBtn>
        <KBtn><span className="block">N</span></KBtn>
        <KBtn><span className="block">M</span></KBtn>
        <KBtn><span className="block">{`<`}</span></KBtn>
        <KBtn><span className="block">{`>`}</span></KBtn>
        <KBtn><span className="block">{`?`}</span></KBtn>
        <KBtn
          className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end"
        >
          shift
        </KBtn>
      </div>

      {/* Sixth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[4px]">fn</span>
          <IconWorld className="h-[5px] w-[5px]" />
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <IconChevronUp className="h-[5px] w-[5px]" />
          <span className="block text-[4px]">ctrl</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[4px]">opt</span>
        </KBtn>
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <IconCommand className="h-[5px] w-[5px]" />
          <span className="block text-[4px]">cmd</span>
        </KBtn>
        <KBtn className="w-[8.2rem]" />
        <KBtn
          className="w-8"
          childrenClassName="h-full justify-between py-[4px]"
        >
          <IconCommand className="h-[5px] w-[5px]" />
          <span className="block text-[4px]">cmd</span>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
          <span className="block text-[4px]">opt</span>
        </KBtn>
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-3 w-6">
            <IconCaretUpFilled className="h-[5px] w-[5px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-3 w-6">
              <IconCaretLeftFilled className="h-[5px] w-[5px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretDownFilled className="h-[5px] w-[5px]" />
            </KBtn>
            <KBtn className="h-3 w-6">
              <IconCaretRightFilled className="h-[5px] w-[5px]" />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] bg-white/[0.12] shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0c0c0e] text-[5px] text-neutral-300",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.5px 1px 0 #0D0D0F inset, -0.5px 0px 1px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px]",
            childrenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
};
