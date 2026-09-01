"use client";

import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/site/ui/button";
import { Container } from "@/components/site/ui/primitives";
import s from "./hero-cinematic.module.css";

/* Erou cinematic: un film de 15 secunde legat de poziția derulării.
 *
 * Trei lucruri care nu sunt evidente și pe care e ușor să le strici:
 *
 *  - Derularea NU se traduce liniar în timp din film. O foaie e mare și dreaptă
 *    în fața obiectivului circa o secundă de peliculă, dar o legendă are nevoie
 *    de vreo 150vh de derulare ca să apuce să fie citită. Cu o hartă liniară
 *    pagina fugea de sub cuvinte în timp ce erau citite. HARTA de mai jos e
 *    frântă: cât timp o legendă e deschisă filmul înaintează două zecimi de
 *    secundă, deci foaia stă pe loc.
 *  - Filmul se descarcă întreg ca Blob, cu inelul de progres, și abia apoi se
 *    dă drumul la derulare. Un <video> obișnuit ar cere bucăți pe rețea la
 *    fiecare căutare, iar derularea ar fi sacadată.
 *  - Cu prefers-reduced-motion, sau pe telefon, NU se descarcă nimic. Poarta e
 *    în CSS pentru așezare și repetată aici pentru descărcare; cele cinci
 *    interogări trebuie să rămână identice în ambele locuri.
 */

const VIDEO_URL = "/video/hero-scrub.mp4";
const POSTER_URL = "/img/hero-poster.jpg";
/* Rezerva pentru inelul de progres când serverul nu trimite Content-Length. */
const VIDEO_BYTES = 8815272;

/* Aceleași cinci porți ca în modulul CSS. */
const GATES = [
  "(max-width: 720px)",
  "(orientation: portrait) and (max-width: 1024px)",
  "(orientation: portrait) and (pointer: coarse)",
  "(orientation: landscape) and (pointer: coarse) and (max-height: 560px)",
  "(prefers-reduced-motion: reduce)",
];

/* Puncte măsurate: progres al derulării -> secunda din film. */
const HARTA: [number, number][] = [
  [0.0, 0.0], /* roiul de hârtii, camera plutind printre ele        */
  [0.16, 3.7], /* prima foaie a venit în față și s-a îndreptat       */
  [0.175, 4.15], /* se deschide legenda: oprit pe foaia dreaptă        */
  [0.31, 4.35], /* se închide legenda, filmul a mers o cincime de s   */
  [0.44, 8.7], /* foaia pleacă, a doua sosește și se îndreaptă       */
  [0.445, 9.0], /* se deschide legenda pe a doua foaie                */
  [0.585, 9.25], /* se închide legenda                                 */
  [0.72, 11.4], /* foaia se duce, camera începe coborârea spre birou  */
  [0.86, 12.9], /* colile aterizează în teanc                         */
  [1.0, 15.04], /* teancul așezat, apropiere lentă, liniște           */
];

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);
const smoothstep = (p: number, e0: number, e1: number) => {
  const t = clamp((p - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};

function timpDinProgres(p: number) {
  for (let i = 1; i < HARTA.length; i++) {
    if (p <= HARTA[i][0]) {
      const a = HARTA[i - 1];
      const b = HARTA[i];
      const f = (p - a[0]) / (b[0] - a[0] || 1);
      return a[1] + (b[1] - a[1]) * f;
    }
  }
  return HARTA[HARTA.length - 1][1];
}

export function HeroCinematic() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    const video = videoRef.current;
    const poster = posterRef.current;
    const ring = ringRef.current;
    if (!hero || !stage || !video || !poster || !ring) return;

    const bandEls = Array.from(hero.querySelectorAll<HTMLElement>("[data-band]"));
    const bands = bandEls.map((el) => ({
      el,
      a: parseFloat(el.dataset.a ?? "0"),
      b: parseFloat(el.dataset.b ?? "1"),
      ramp: el.dataset.ramp ? parseFloat(el.dataset.ramp) : 0,
      op: -1,
      k: -1,
    }));
    const first = bands[0];
    const last = bands[bands.length - 1];

    let loadK = 0;
    let loadStart = 0;
    let target = 0;
    let shown = 0;
    let rafId: number | null = null;
    let lastTick = 0;
    let onScreen = true;
    let seekBusy = false;
    let pendingTime: number | null = null;
    let started = false;
    let scrubOn = false;
    let obiectUrl: string | null = null;
    const curatatori: Array<() => void> = [];

    function progress() {
      const r = hero!.getBoundingClientRect();
      const run = hero!.offsetHeight - window.innerHeight;
      if (run <= 0) return 0;
      return clamp(-r.top / run, 0, 1);
    }

    /* Scrierile în DOM sunt filtrate prin prag: la 60 de cadre pe secundă,
       fiecare atribuire de stil care nu schimbă nimic vizibil e muncă degeaba. */
    function updateBands(p: number) {
      for (const b of bands) {
        const f = Math.min(0.02, (b.b - b.a) / 3);
        const inn = b === first ? 1 : smoothstep(p, b.a, b.a + f);
        const out = b === last ? 1 : 1 - smoothstep(p, b.b - f, b.b);
        const op = inn * out;
        const ramp = b.ramp || Math.min(0.025, (b.b - b.a) * 0.35);
        let k = clamp((p - b.a) / ramp, 0, 1);
        if (b === first) k = Math.max(k, loadK);
        if (Math.abs(op - b.op) > 0.004) {
          b.op = op;
          b.el.style.opacity = op.toFixed(3);
        }
        if (Math.abs(k - b.k) > 0.008) {
          b.k = k;
          b.el.style.setProperty("--k", k.toFixed(3));
        }
      }
    }

    function loadRamp(now: number) {
      if (!loadStart) loadStart = now;
      loadK = clamp((now - loadStart) / 900, 0, 1);
      updateBands(progress());
      if (loadK < 1) requestAnimationFrame(loadRamp);
    }

    /* O singură căutare în zbor. Fără asta, o derulare rapidă cere zeci de
       căutări pe secundă și decodorul rămâne în urmă. Ultima cerere se ține
       deoparte și se reia la `seeked`. */
    function requestSeek(t: number) {
      if (!video!.duration) return;
      if (seekBusy) {
        pendingTime = t;
        return;
      }
      seekBusy = true;
      try {
        video!.currentTime = t;
      } catch {
        seekBusy = false;
      }
    }

    const onSeeked = () => {
      seekBusy = false;
      if (pendingTime !== null) {
        const t = pendingTime;
        pendingTime = null;
        requestSeek(t);
      }
    };
    video.addEventListener("seeked", onSeeked);
    curatatori.push(() => video.removeEventListener("seeked", onSeeked));

    function tick(now: number) {
      const dt = Math.min(100, now - (lastTick || now));
      lastTick = now;
      /* mai strâns decât 0.16 obișnuit: la derulare lentă se vedea că rămâne în urmă */
      const k = 0.24;
      shown += (target - shown) * (1 - Math.pow(1 - k, dt / 16.667));
      if (Math.abs(target - shown) < 0.0005) {
        shown = target;
        rafId = null;
        lastTick = 0;
      } else {
        rafId = requestAnimationFrame(tick);
      }
      if (video!.duration) requestSeek(timpDinProgres(shown));
      updateBands(shown);
    }

    function onScroll() {
      target = progress();
      if (rafId === null && onScreen) rafId = requestAnimationFrame(tick);
    }

    /* Cutia reală în care se desenează filmul după object-fit: cover, ca
       legendele să poată fi așezate în coordonate din cadru, nu din fereastră.
       Raportul se citește din fișier, nu se presupune 16:9 — încadrarea s-a mai
       schimbat o dată la reencodare. */
    let raport = 16 / 9;
    function masoaraFilmul() {
      if (video!.videoWidth && video!.videoHeight) raport = video!.videoWidth / video!.videoHeight;
      const w = stage!.clientWidth;
      const h = stage!.clientHeight;
      if (!w || !h) return;
      stage!.style.setProperty("--film-w", `${Math.max(w, h * raport)}px`);
      stage!.style.setProperty("--film-h", `${Math.max(h, w / raport)}px`);
    }
    video.addEventListener("loadedmetadata", masoaraFilmul);
    window.addEventListener("resize", masoaraFilmul, { passive: true });
    curatatori.push(() => {
      video.removeEventListener("loadedmetadata", masoaraFilmul);
      window.removeEventListener("resize", masoaraFilmul);
    });
    masoaraFilmul();

    function failVideo() {
      seekBusy = false;
      pendingTime = null;
      ring!.style.display = "none";
    }
    const onError = () => failVideo();
    video.addEventListener("error", onError);
    curatatori.push(() => video.removeEventListener("error", onError));

    /* Descărcare în flux, cu inelul de progres. Watchdog la 20s: o conexiune
       care se blochează nu trebuie să lase vizitatorul cu un inel înghețat. */
    async function loadHeroBlob() {
      const ctrl = new AbortController();
      let watchdog = window.setTimeout(() => ctrl.abort(), 20000);
      const res = await fetch(VIDEO_URL, { signal: ctrl.signal });
      if (!res.ok || !res.body) throw new Error("fără corp de răspuns");
      const total = Number(res.headers.get("Content-Length")) || VIDEO_BYTES;
      const reader = res.body.getReader();
      const chunks: Uint8Array[] = [];
      let got = 0;
      let lastRing = 0;
      for (;;) {
        const r = await reader.read();
        if (r.done) break;
        window.clearTimeout(watchdog);
        watchdog = window.setTimeout(() => ctrl.abort(), 20000);
        chunks.push(r.value);
        got += r.value.length;
        const frac = total ? Math.min(1, got / total) : 0;
        const now = performance.now();
        if (now - lastRing > 100 || frac === 1) {
          lastRing = now;
          ring!.style.setProperty("--ld", String(Math.round(126 * (1 - frac))));
        }
      }
      window.clearTimeout(watchdog);
      ring!.style.setProperty("--ld", "0");
      obiectUrl = URL.createObjectURL(new Blob(chunks as BlobPart[], { type: "video/mp4" }));
      video!.src = obiectUrl;
      video!.load();
      video!.addEventListener(
        "canplay",
        () => {
          ring!.style.opacity = "0";
          masoaraFilmul();
          requestSeek(timpDinProgres(progress()));
          stage!.classList.add(s.videoReady);
        },
        { once: true },
      );
    }

    function startBlobFetch() {
      if (started) return;
      started = true;
      loadHeroBlob().catch(failVideo);
    }

    const io = new IntersectionObserver(
      (en) => {
        onScreen = en[0].isIntersecting;
        if (onScreen && rafId === null && scrubOn) rafId = requestAnimationFrame(tick);
      },
      { threshold: 0 },
    );
    io.observe(hero);
    curatatori.push(() => io.disconnect());

    function enableScrub() {
      if (scrubOn) return;
      scrubOn = true;
      poster!.style.backgroundImage = `url(${POSTER_URL})`;
      /* posterul întâi, filmul după: prima impresie nu trebuie să aștepte 9MB */
      const img = new Image();
      img.onload = startBlobFetch;
      img.onerror = startBlobFetch;
      img.src = POSTER_URL;
      const t = window.setTimeout(startBlobFetch, 4000);
      curatatori.push(() => window.clearTimeout(t));
      window.addEventListener("scroll", onScroll, { passive: true });
      for (const b of bands) {
        b.op = -1;
        b.k = -1;
      }
      requestAnimationFrame(loadRamp);
      updateBands(progress());
      onScroll();
    }

    function disableScrub() {
      if (!scrubOn) return;
      scrubOn = false;
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      for (const el of bandEls) {
        el.style.opacity = "";
        el.style.removeProperty("--k");
      }
    }

    const mqls = GATES.map((q) => window.matchMedia(q));
    const applyHeroMode = () => {
      if (mqls.some((m) => m.matches)) disableScrub();
      else enableScrub();
    };
    for (const m of mqls) m.addEventListener("change", applyHeroMode);
    curatatori.push(() => {
      for (const m of mqls) m.removeEventListener("change", applyHeroMode);
    });
    applyHeroMode();

    return () => {
      disableScrub();
      for (const c of curatatori) c();
      if (obiectUrl) URL.revokeObjectURL(obiectUrl);
    };
  }, []);

  return (
    <section ref={heroRef} className={s.hero} aria-label="Prezentare">
      <div ref={stageRef} className={s.stage}>
        <div ref={posterRef} className={s.poster} aria-hidden />
        <video ref={videoRef} preload="none" muted playsInline aria-hidden tabIndex={-1} />
        <div className={s.scrim} aria-hidden />

        <svg ref={ringRef} className={s.ring} viewBox="0 0 48 48" aria-hidden>
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="126"
            style={{ strokeDashoffset: "var(--ld, 126)" }}
          />
        </svg>

        <div data-band data-a="0" data-b="0.16" data-ramp="0.030" className={s.band}>
          <div className={s.bandIn}>
            <span className={s.kick}>Dosare pe rolul instanțelor</span>
            <h2>Zero rezultate nu înseamnă zero dosare.</h2>
          </div>
        </div>

        <div data-band data-a="0.175" data-b="0.310" className={`${s.band} ${s.paper} ${s.p1}`}>
          <div className={s.bandIn}>
            <span className={s.kick}>01</span>
            <h2>Toate instanțele, dintr-o singură căutare.</h2>
            <p>Nu alegi tribunalul. Îl afli.</p>
          </div>
        </div>

        <div data-band data-a="0.445" data-b="0.585" className={`${s.band} ${s.paper} ${s.p2}`}>
          <div className={s.bandIn}>
            <span className={s.kick}>02</span>
            <h2>Fiecare scriere a numelui.</h2>
            <p>Cu virgulă, cu sedilă, fără diacritice. Toate odată, de fiecare dată.</p>
          </div>
        </div>

        <div data-band data-a="0.86" data-b="1" data-ramp="0.034" className={s.band}>
          <div className={s.bandIn}>
            <h2>Totul, la locul lui.</h2>
            <p>Un dosar nou pe numele clientului tău te găsește. Nu îl cauți tu.</p>
            <p style={{ marginTop: 26 }}>
              <ButtonLink href="#acces">Cere acces</ButtonLink>
            </p>
          </div>
        </div>

        {/* Eroul static: singurul mesaj pe telefon, tabletă și la mișcare redusă. */}
        <div className={s.statica}>
          <Container>
            <span className={s.kick}>Dosare pe rolul instanțelor</span>
            <h1 className="text-[clamp(2.125rem,8vw,3.6rem)] text-on-ink">
              Zero rezultate nu înseamnă zero dosare.
            </h1>
            <p className="mt-5 max-w-[38ch] text-lg text-on-ink-muted">
              Portalul tratează „ș” cu virgulă și „ş” cu sedilă ca litere diferite. Noi le căutăm
              pe toate, la toate instanțele din țară.
            </p>
            <div className="mt-7">
              <ButtonLink href="#acces">Cere acces</ButtonLink>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
