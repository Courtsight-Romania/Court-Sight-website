# CourtSight — site de prezentare

One-pager pentru motorul de căutare și monitorizare a dosarelor din instanțele României.
Next.js 16 (App Router, Turbopack) + Tailwind v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificare completă, inclusiv TypeScript
```

## Ce trebuie completat înainte de lansare

| Ce | Unde | De ce |
|---|---|---|
| Telefon și email reale | [`lib/contact.ts`](lib/contact.ts) | Acum sunt valori de umplutură |
| Domeniul final | `SITE_URL` din [`lib/contact.ts`](lib/contact.ts) | Intră în canonical, OG și sitemap |
| Conexiunea Supabase | `.env.local` după [`.env.example`](.env.example) | Fără ea, formularul trimite la contactul direct |
| Adresa aplicației | `NEXT_PUBLIC_URL_APP` în `.env.local` (implicit `https://app.courtsight.ro`) | Unde duce butonul „Intră în cont" din bară, din meniul de telefon și din subsol. **Se citește la BUILD, nu la pornire** — Next.js inlinează variabilele `NEXT_PUBLIC_*` în bundle, deci după ce o schimbi trebuie `npm run build` din nou, nu doar restart |
| Textele legale | `app/termeni`, `app/confidentialitate`, `app/gdpr` | Sunt schițe. Trebuie redactate de un avocat |
| Ștergerea paginii `/brand` | [`app/brand`](app/brand) | Pagină internă de verificare a identității |

## Reguli de design

Sistemul e definit într-un singur loc, blocul `@theme` din [`app/globals.css`](app/globals.css).

- **Chihlimbarul e accent unic.** Apare doar pe butonul primar și pe indicatorii de alertă.
  O singură acțiune chihlimbar pe ecran; altfel accentul nu mai înseamnă nimic.
- **Fără umbre moi.** Separarea se face prin linii de 1px și schimbare de fundal — e o estetică
  de document tipărit, nu de aplicație.
- **Orice număr de dosar apare în mono**, prin clasa `.tnum` sau componenta `CaseNumber`.
- **Contrastul e măsurat, nu presupus.** Toate perechile de culori trec AA la text normal,
  inclusiv tonurile „faint" folosite pe eyebrow-uri de 11px.

Tipografie: `Newsreader` pentru titluri, `Geist Sans` pentru text, `Geist Mono` pentru numere de
dosar. Toate trei acoperă complet diacriticele românești, inclusiv formele vechi cu cedilă
(`ş`, `ţ`) pe care ECRIS le amestecă cu cele corecte.

## Identitate

Marca e desenată în [`components/site/logo.tsx`](components/site/logo.tsx) — acolo e sursa de
adevăr pentru geometrie. Fișierele exportate stau în `public/brand/`, iar favicon-ul în `app/`.

`favicon.ico` conține **desene diferite pe dimensiuni**: la 16px doar slash-ul, la 32 și 48px cu
colțuri. Nu e o scalare — colțurile devin ilizibile sub 32px. Dacă modifici geometria mărcii,
regenerează setul, nu redimensiona fișierele.

Pagina `/brand` arată marca la toate dimensiunile de folosire și proba de diacritice.

## Formularul de acces timpuriu

Server Action în [`app/actions/early-access.ts`](app/actions/early-access.ts), validat cu zod,
cu un câmp-capcană pentru roboți. Scrie în Supabase prin REST.

Migrarea: [`supabase/migrations/0001_early_access.sql`](supabase/migrations/0001_early_access.sql).
Tabelul are RLS cu **politică doar de insert** pentru rolul anon — cheia din browser nu poate citi
înapoi lead-urile.

Fără variabilele de mediu, acțiunea întoarce o eroare prietenoasă și trimite utilizatorul spre
email. Site-ul e complet funcțional înainte să existe baza de date.

## Onestitatea conținutului

Site-ul descrie un produs care încă nu e gata, iar publicul e format din avocați. De aceea:

- **Zero testimoniale sau logo-uri de clienți.** Nu avem clienți. Locul lor e luat de banda cu
  instanțe reale și de secțiunea „Ce nu construim".
- **Zero statistici de piață inventate.** Secțiunea „Problema" folosește trei fapte structurale
  verificabile: numărul de instanțe, haosul diacriticelor, plafonul de 1000 de rezultate.
- **Datele din demo sunt marcate ca ilustrative** — vezi antetul din
  [`lib/demo-data.ts`](lib/demo-data.ts). Ce e real acolo: formatul numărului de dosar și faptul
  că `117` chiar e codul Tribunalului Cluj.
- **Alerta pe termenul căii de atac e formulată ca „verifică", niciodată ca un calcul exact.**
  Data comunicării nu există în datele publice. Formularea apare identic în secțiunea de
  funcționalități, în FAQ și în schița de termeni.

Dacă adaugi conținut, păstrează regula: nicio afirmație pe care nu o poți susține.

## Imagini și video

Trei resurse generate sunt integrate: fotografia de dosare în banda dintre „Problema" și
„Soluția", textura guilloche în „Ce nu construim", și bucla de cerneală în fundalul secțiunii de
acces timpuriu.

Originalele stau în `assets-source/`, exclus din git — 24 MB de PNG-uri și un mp4 care n-au ce
căuta nici în repo, nici în deploy. În `public/` intră doar versiunile optimizate: WebP de 150–210
KB și video de 370 KB (webm) / 518 KB (mp4).

Videoul e tratat ca decor: cu `prefers-reduced-motion` **nu se încarcă deloc**, se afișează doar
posterul. Vezi [`components/site/background-video.tsx`](components/site/background-video.tsx).

[`PROMPTS-IMAGINI.md`](PROMPTS-IMAGINI.md) conține prompturile, inclusiv cel refăcut pentru
textura de hero — prima încercare a ieșit o hartă a lumii, ceea ce pentru un produs care acoperă
România e o afirmație falsă. Site-ul arată bine și fără ea.
