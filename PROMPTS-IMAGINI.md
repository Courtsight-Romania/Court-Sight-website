# Prompturi pentru imagini — CourtSight

Le generezi tu în aplicația Gemini, cu abonamentul pe care îl ai. Cost zero.

**Nimic de aici nu e obligatoriu.** Site-ul e complet și fără nicio imagine generată:
fundalurile de cerneală au deja textură de grain, iar mockup-urile de produs sunt construite din
cod. Ce urmează sunt straturi opționale de atmosferă. Dacă o imagine iese mediocru, mai bine nu o
pui — un fundal curat arată mai bine decât un fundal AI care se vede că e AI.

**Regula peste tot:** fără text în imagine. Acolo greșesc toate modelele, iar pe un site juridic
un cuvânt stâlcit în fundal distruge mai multă credibilitate decât adaugă imaginea.

---

## Paleta, de lipit în orice prompt

```
cerneală albastru-negru  #181D26
hârtie caldă off-white   #F9F7F2
chihlimbar               #E0A03C
verde reținut            #3E9E86
```

---

## 1 · Textură de fundal pentru hero — **de regenerat**

**Unde ajunge:** `public/img/hero-network.webp`
**Format:** 2400 × 1400 px, orizontal

> **Prima încercare a ieșit o hartă a lumii** — cu America, Africa, Asia, Australia. Nu o
> putem folosi: CourtSight acoperă România, iar un glob spune vizual altceva. Nu e o
> chestiune de gust, e o afirmație falsă făcută cu imagini.
>
> Modelul a citit „map of jurisdictional districts" ca invitație să deseneze o hartă.
> Promptul de mai jos scoate complet cuvântul `map` și orice referire geografică.

```
An abstract technical texture: a sparse constellation of small dots connected by hairline
straight lines over a deep blue-black field (#181D26). The dots cluster unevenly — dense
knots in a few places, wide empty space elsewhere. Purely abstract geometry with no
geographic or cartographic reference whatsoever. Lines are extremely thin, cool grey,
with a small number of connections picked out in warm amber (#E0A03C). Very dark, very
low contrast, restrained: this sits behind white headline text and must never compete
with it. Flat vector rendering with fine film grain. Editorial, institutional, serious.
```

**Negative prompt:**
```
map, world map, continents, countries, coastline, borders, globe, atlas, geography,
text, letters, numbers, watermark, logo, flags, glowing neon, cyberpunk, purple,
teal gradient, lens flare, 3D render, people, buildings, gavel, scales of justice,
courthouse columns
```

> Nu cere niciodată harta României. Modelul îi greșește forma, iar un avocat român o
> recunoaște greșită din prima privire.
>
> **Nu e obligatorie.** Hero-ul are deja un halou chihlimbar discret și textură de grain.
> Dacă a doua încercare nu iese clar mai bine decât ce e acum, las-o baltă.

---

## 2 · Model gravat, pentru separatoare

**Unde ajunge:** `public/textures/guilloche.webp`
**Format:** 1024 × 1024 px, pătrat, cu margini care se continuă

```
A seamless tileable guilloche pattern in the style of engraved security printing on
banknotes and share certificates: interlocking rosettes and fine spirograph curves,
drawn in single-weight hairlines. Monochrome, very dark blue-black lines on transparent
or white. Extremely fine and delicate, low contrast, no shading or fills. Precise,
antique, official. The pattern must tile seamlessly on all four edges.
```

**Negative prompt:**
```
text, numbers, portraits, seals, stamps, colour, gradient, shading, thick lines, noise,
blur, 3D, drop shadow
```

> Dacă nu iese cu adevărat repetabil pe margini, nu-l folosi ca tile — pune-l o singură dată,
> foarte estompat, în spatele secțiunii „Ce nu construim".

---

## 3 · Fotografie de dosare

**Unde ajunge:** `public/photos/dosare.webp`
**Format:** 1600 × 1000 px, orizontal

```
A close-up photograph of stacked legal case files: worn manila and grey card folders tied
with cotton string, edges slightly frayed, seen from a low three-quarter angle. Warm
low-key lighting from one side, deep shadows, shallow depth of field so only the nearest
folder edge is sharp. Muted palette of warm greys and dull ochre against near-black.
Quiet, weighty, documentary. Shot on a 50mm lens at f/1.8.
```

**Negative prompt:**
```
readable text, labels, handwriting, logos, gavel, scales of justice, wig, courtroom,
people, hands, faces, stock-photo lighting, glossy, saturated colours, blue tint, clutter
```

> Cere-i explicit să nu fie text lizibil pe cotoare. Dacă apar oricum litere, alege un cadru
> mai apropiat, unde se văd doar marginile.

---

## 4 · Loop video pentru fundal — opțional

**Unde ajunge:** `public/video/ink-loop.mp4` (Veo scoate mp4; conversia o fac eu)
**Format:** 6–8 secunde, buclabil, 1920 × 1080, fără sunet

> **Dacă Veo refuză promptul:** cuvântul `hypnotic` declanșează filtrul de politică — e asociat
> cu conținut de manipulare, iar promptul e respins înainte să fie citit restul. Scoate-l.
> Aceeași grijă la `mesmerising`, `trance`, `subliminal`. Varianta de mai jos e deja curățată.

### Varianta A — cerneală în apă

```
Macro footage of a single drop of black ink slowly spreading through clear still water,
shot against a deep blue-black background. The motion is very slow and gentle, almost
still. A soft warm amber light catches one edge of the ink. Dark, minimal, high contrast,
no visible container or surface. Locked-off camera, no zoom. Loops seamlessly.
```

### Varianta B — praf în lumină, dacă A tot nu trece

```
Fine dust motes drifting slowly in a dark room, lit by a single narrow shaft of warm
light from one side. Deep blue-black background, very low contrast, movement almost
imperceptible. Locked-off camera, no zoom. Loops seamlessly.
```

**Negative prompt** (pentru amândouă):
```
text, logos, fast motion, colourful ink, rainbow, smoke, fire, people, hands, faces,
camera shake, zoom, cuts, transitions
```

> Folosește-l doar dacă iese sobru și aproape imobil. Un fundal care se mișcă vizibil în
> spatele unui titlu îl face mai greu de citit și scade exact impresia de seriozitate pe care
> o construiește tot restul paginii. La orice îndoială, rămâi pe fundalul din cod.

---

## Cum le pui în pagină

Pune fișierul brut, exact cum îl scoate Gemini, oriunde în proiect și spune-mi. Optimizarea o
fac eu — un PNG de 8 MB devine un WebP de 150 KB, iar videoul de 2,7 MB devine 370 KB.

Nu le pune direct în `public/` ca PNG și nu le lega manual cu `background-image`: pierzi
optimizarea, `srcset`-ul și posterul de video, și ajungi să trimiți megaocteți către telefoane.

---

## Ce e integrat acum

| Fișier | Unde apare | Stare |
|---|---|---|
| `img/dosare.webp` | banda dintre „Problema" și „Soluția", la 45% peste cerneală | folosit |
| `img/guilloche.webp` | textură în colțul secțiunii „Ce nu construim", la 7% | folosit |
| `video/ink-loop.webm` + `.mp4` | fundalul secțiunii de acces timpuriu, la 30% | folosit |
| `img/hero-network.webp` | — | **de regenerat**, vezi secțiunea 1 |

Originalele stau în `assets-source/`, exclus din git. Le păstrez ca să pot reface conversiile
fără să regenerezi tu nimic.
