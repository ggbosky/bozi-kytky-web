# Boží Kytky — web

Statický web (HTML + CSS + kousek JavaScriptu, bez frameworků a bez build kroku).
Stačí nahrát obsah složky na hosting — funguje i po otevření `index.html` z disku.

Struktura stránky: hero přes celou obrazovku → vybrané realizace (tři vedle sebe)
→ galerie s filtrem a lightboxem → jak to probíhá → galerie → o mně
→ FAQ (harmonika) → lokace a mapa → poptávkový formulář → patička.

**Pozor při úpravách:** odkazy na `style.css` a `main.js` v `index.html` nesou
parametr `?v=22`. Po každé změně těchto souborů číslo zvyš — jinak navštěvníkům
zůstane v prohlížeči stará verze.

```
index.html             – celá stránka
assets/css/style.css   – veškerý design
assets/js/main.js      – menu, dock, galerie, lightbox, FAQ, slider, formulář
assets/img/            – fotky (do 1600 px + verze -sm do 800 px pro mobil) a logo
assets/fonts/          – Cormorant ze složky X (self-hosted, bez Google Fonts)
fotky/, X/             – zdroje: originální fotky, logomanuál, křivky loga (na web se nenahrávají)
```

## Vizuální rukopis

Od 11. 9. 2026 (stylopis psaný od nuly): **plné barevné pásy přes celou šířku**,
žádné karty. Tučná bezpatková typografie zarovnaná vlevo, plovoucí pilulková
navigace, běžící růžový pás pod hero a postupné nabíhání prvků při scrollu.
Podrobně v `skill.md`, sekce 6.

## Značka

Barvy i písmo vychází z logomanuálu (`X/BK_logomanual.pdf`) a jsou vedené jako CSS proměnné
v hlavičce `style.css`:

| Proměnná | Hodnota | Použití |
|---|---|---|
| `--green` | `#2D4635` | základní zelená — nadpisy, tmavé sekce, tlačítka |
| `--blush` | `#F0C8C6` | značková růžová — akcenty, hlavní CTA, logo na tmavém |
| `--rose` | `#BA7F84` | doplňková tlumená růžová — popisky, čísla, kurzivy |
| `--shell` | `#FBF7F5` | teplá bílá — podklad stránky |
| `--white` / `--ink` | `#FFFFFF` / `#191713` | plochy a text |

Logo je z podkladů převedené na průhledné PNG ve třech verzích:
`logo-kombinace.png` (zelená + růžový kruh, na světlém), `logo-bila.png` (přes fotku),
`logo-ruzova.png` (na zelené) a `logo-zelene.png` (celé zelené, z něj je i favicon).
Nadpisy sází **Cormorant** přímo z fontů ve složce `X` (licence OFL je přiložená
v `assets/fonts/OFL.txt`), texty a UI doplňuje Plus Jakarta Sans.

## Co je potřeba doplnit před spuštěním

Všechna místa jsou v `index.html` označená komentářem `TODO`.

1. **Telefonní číslo** — teď je všude `+420 000 000 000` (menu, kontakty u formuláře, patička, plovoucí tlačítko „Zavolat“ na mobilu).
2. **E-mail** — použit `info@bozikytky.cz`, uprav i v `assets/js/main.js` (2 výskyty ve fallbacku formuláře).
3. **Instagram a Facebook** — odkazy v patičce vedou zatím na úvodní stránky sítí.
4. **Reference** — sekce byla **odstraněna**, protože obšahovala vymyšlené citace. Vrátím ji, jakmile budeš mít aspoň jednu skutečnou — stačí věta od klienta a odkud byl.
5. **Ceny** — na webu už nejsou žádné konkrétní částky. FAQ místo toho vysvětluje, proč je potřeba znát zadání. Pokud bys cenové rozpětí přidat chtěla, patří do odpovědi „Kolik mě to bude stát?“.
6. **Příběh** — v sekci „O mně“ je `TODO` na pár vět o tom, jak jsi se k floristice dostala. Zbytek sekce už sedí.
7. **Doména** v `<link rel="canonical">` a v `og:image`.

## Poptávkový formulář

Formulář je připravený na dva režimy:

* **Bez nastavení** (výchozí) otevře návštěvníkovi předvyplněný e-mail.
* **S endpointem** odešle data na pozadí. Stačí do `index.html` doplnit adresu:

  ```html
  <form class="form" id="inquiryForm" data-endpoint="https://formspree.io/f/xxxxxxx" novalidate>
  ```

  Funguje s Formspree, Netlify Forms, Web3Forms i s vlastním PHP skriptem — očekává `POST` s `FormData` a odpověď se stavem 200.

## Fotky

V `assets/img/` jsou vybrané fotografie vždy ve dvou velikostech (`nazev.jpg` do 1600 px
a `nazev-sm.jpg` do 800 px pro mobil). Hero má vlastní ořezy pro obě orientace —
`hero-wide` (desktop) a `hero-tall` (mobil).

Od 4. 9. 2026 jsou v galerii nasazené **všechny fotografie** — žádná už neleží
nevyužitá. Při přidání další stačí vyrobit obě velikosti, přidat `<li class="gtile">`
do mřížky (včetně `data-cat`, `data-full`, `data-cap` a popisného `alt`)
a zvýšit počet u příslušného filtru.

## Lokální náhled

```bash
python -m http.server 8765
```

Pak otevřít `http://localhost:8765`.
