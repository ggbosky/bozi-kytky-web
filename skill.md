# Skill: Web Boží Kytky — Martina Drexlerová

Pravidla spolupráce a kompletní zadání webu tak, jak vypadá po všech úpravách.
Tenhle dokument je **zdroj pravdy** — kdykoliv se na webu něco mění nebo se pokračuje
v práci (i s jiným AI nástrojem), řídí se tímto, ne původním souborem
`bozi-kytky-claude-skill-prompt.md`. Pravidla, ve kterých se od původního zadání
vědomě odchýlilo, jsou vypsaná v sekci 15.

**Sekce 1 platí vždy a pro všechno**, i pro práci, která se webu netýká.
Sekce 2–16 popisují samotný web.

---

## 1. Kontrola gramatiky (platí pro veškerou komunikaci)

**Kontroluj gramatiku a pravopis ve všem, co napíšu, a chyby automaticky oprav.**

* Platí na každou zprávu, ne jen na texty určené na web.
* Chybu **oprav sám** a nečekej na potvrzení — pokud je z kontextu jasné,
  co bylo míněno. Pokračuj v práci, oprava nesmí zdržet zadaný úkol.
* Opravu **vždy krátce uveď** — vypiš, co bylo špatně a jak to má být správně,
  ať se to naučím. Nestačí to opravit potichu.
* Řeš překlepy, chybnou diakritiku, shodu podmětu s přísudkem, koncovky, interpunkci,
  slovosled a chybné pádové/osobní tvary.
* Pokud je věta **dvojznačná** a oprava by mohla změnit význam zadání, na to se zeptej,
  než začneš pracovat.
* Neopravuj záměrně hovorový styl ani zkratky, kterým rozumíme oba —
  jde o gramatiku, ne o přepisování mého projevu do úřednického jazyka.
* Stejná pravidla platí i pro texty, které psaním vznikají na webu:
  česká typografie, pevné mezery u jednoznakových předložek, správné uvozovky „takto“
  a pomlčky — takto.

## 2. Projekt

| | |
|---|---|
| **Projekt** | Boží Kytky |
| **Floristka** | Martina Drexlerová |
| **Atelier / sídlo** | Vinořské náměstí 34, 190 17 Praha-Vinoř |
| **Zaměření** | svatební floristika, oslavy a jubilea, smuteční vazby, sezónní a firemní floristika |
| **Web** | statická jednostránka (one-page), česky |

---

## 3. Barevnost (dle logomanuálu `X/BK_logomanual.pdf`)

Barvy se **nikdy nepíší přímo do pravidel**, vždy jen přes CSS proměnné z hlavičky
`assets/css/style.css`.

| Proměnná | Hex | Role |
|---|---|---|
| `--green` | `#2D4635` | základní zelená značky — nadpisy, tmavé sekce, tlačítka |
| `--green-deep` | `#223629` | mezistupeň |
| `--green-ink` | `#1A2A20` | nejtmavší — patička, závoje přes fotky |
| `--blush` | `#F0C8C6` | značková růžová — hlavní CTA, akcenty, logo na tmavém |
| `--blush-soft` | `#FAEEED` | světlý růžový podklad sekcí |
| `--rose` | `#BA7F84` | doplňková tlumená růžová — popisky, číslování, kurzivy |
| `--shell` | `#FBF7F5` | teplá bílá — podklad stránky |
| `--white` | `#FFFFFF` | plochy, text na tmavém |
| `--ink` | `#191713` | běžný text |
| `--craft` | `#E6D9C6` | craft / přírodní materiál (rezerva) |

**Zásady:**

* Zelená a růžová jsou rovnocenná dvojice, ne „barva a její odstín“.
* Růžová `--blush` je vždy **akcent nebo plocha**, nikdy dlouhý text.
* `--rose` naopak slouží pro **malé texty** (nadpopisky, čísla), na velké plochy ne.
* **Žádné barevné přechody jako samostatná barva** (výslovný zákaz z manuálu) —
  gradienty jsou povolené jen jako průhledný závoj přes fotografii.

## 4. Typografie

* **Nadpisy: Plus Jakarta Sans 800** — od 11. 9. 2026, viz sekce 15.
  **Kurziva (citace, podpis): Cormorant**, self-hosted z `assets/fonts/` (soubory pochází ze složky `X`,
  licence OFL je přiložená). Váha 300, kurziva 300 pro citace a akcenty.
  Nepoužívat Cormorant Garamond z Google Fonts — je to jiný řez.
* **Text a UI: Plus Jakarta Sans** (Google Fonts), váhy 200–500.
* **Zákaz:** Inter, Roboto, Arial a podobné generické fonty.
* Nadpisy mají `line-height` minimálně **1,1** — čeština má háčky a čárky nad
  verzálkami a při těsnějším prokládání se osekávají.
* Malé nadpopisky (`.eyebrow`) — verzálky, `letter-spacing` 0,18–0,24 em, velikost 11 px.
* Text v těle minimálně 16 px.

## 5. Logo

Ve `assets/img/` jsou čtyři průhledné varianty odvozené ze podkladů ve složce `X`:

| Soubor | Kdy použít |
|---|---|
| `logo-kombinace.png` | zelený text + růžový kruh — **na světlém podkladu** (výchozí) |
| `logo-bila.png` | celé bílé — **přes fotografii** |
| `logo-ruzova.png` | celé růžové — **na zelené ploše** (patička) |
| `logo-zelene.png` | celé zelené — tisk, favicon, jednobarevné použití |

V navigaci se logo **plynule přepíná**: bílé, dokud je navigace průhledná nad hero,
a zeleno-růžové, jakmile dostane světlé pozadí. Logo se nikdy nedeformuje, nepřebarvuje
mimo tyto varianty a neobkládá dalším textem.

---

## 6. Vizuální rukopis (od 11. 9. 2026, psaný od nuly)

Stylopis byl 11. 9. **přepsán od nuly**. Předchozí verze vznikla vrstvením úprav
na sebe a rozdrobila stránku do zaoblených karet — zadavatelka to popsala jako
„rozkrájené“. Nový rukopis stojí na pěti pravidlech:

1. **Plné barevné pásy přes celou šířku.** Žádné karty, žádné zaoblené rámečky
   kolem sekcí, žádné odsazení od okrajů okna. Sekce se střídají barvou:
   krémová (`--shell`) → zelená (`--green`) → růžová (`--blush-soft`).
2. **Tučná bezpatková typografie.** Plus Jakarta Sans **800**, `letter-spacing: -.03em`.
   Nadpisy zarovnané **vlevo**, ne na střed. Serif (Cormorant) drží **jedině**
   podpis v sekci O mně.
3. **Plovoucí pilulková navigace** — zelená, odsazená od okrajů, růžové logo.
4. **Navigace sedí přímo na hero fotce** — bez vlastní plochy, bílé logo a odkazy.
   Po 60 px scrollu dostane světlý podklad a přepne se na tmavé logo, jinak by
   na krémové zmizela. Vpravo telefon a růžové CTA.
   *(Běžící růžový pás pod hero byl 11. 9. zrušen — na přání zadavatelky.)*
5. **Pohyb na vyžádání scrollem.** `[data-reveal]` odkryje blok, `[data-stagger]`
   rozdá dětem zpoždění `--d` (80 ms po sobě, strop 480 ms), `[data-hero]` nabíhá
   hned po načtení. Fotky se při náběhu srovnají z `scale(1.06)`.
   Vše respektuje `prefers-reduced-motion`.

Inspirace: **mytopicals.com** a **wattspet.com**. Převzatý je způsob práce
s plochou, barvou a pohybem — barvy, fotky i texty jsou původní Boží Kytky.

**Co se při přepisu zrušilo:** karty a zaoblené sekce, papírové zrno, trhané hrany,
polaroidové pasparty, natočení fotek, Marcellus. Nic z toho už v kódu není.

## 7. Art direction — co ANO

* **Editorial / magazine feel** — web má působit jako vizuální esej nebo kampaň
  autorského módního domu, ne jako katalog.
* Dominantní typografie, odvážný negativní prostor, čisté mřížky.
* Velkoformátové fotografie s citlivým ořezem.
* **Oblá tlačítka** (`border-radius: 999px`) — navazují na kruh v logu. Zaoblené jsou
  i mapa, karty s termíny a fotka u formuláře (1,5 rem). Rámečky fotografií
  v realizacích zůstávají **pravoúhlé** — ta kombinace je záměrná.
* Animace jen jemné a jen na tom, co uživatel ovládá: hover tlačítek a odkazů,
  přepnutí navigace, výjezd mobilního docku.

## 8. Art direction — co NE

* ŽÁDNÉ svítící gradienty, glassmorphism, rozostřená skla, floating 3D karty.
* ~~ŽÁDNÉ scroll-reveal animace~~ — **zrušeno 11. 9. 2026**, viz sekce 6 bod 5.
  Odkrývání při scrollu je nyní součástí rukopisu. Parallax a postupné
  odhalování textu po písmenech zůstávají zakázané.
* ŽÁDNÉ klasické timeline s tečkami a čárami.
* ŽÁDNÉ emoji v nadpisech, dětské ikony, generická klišé („Vítejte v našem květinářství“).
* ŽÁDNÉ nekonečné horizontální lišty **s logy**, čítače, „widgety“.
  (Běžící pás s výčtem oboru je výjimka — viz sekce 6 bod 3.)
* ŽÁDNÉ e-shopové prvky typu „Vložit do košíku“ — web prodává styl a přístup, ne položky.
* ŽÁDNÉ těžké knihovny na animace ani framework, kde stačí HTML a CSS.
* Nesmí být poznat, že se na tvorbě podílelo AI.

---

## 9. Hero (nejcitlivější část webu)

Hero má **dva různé režimy**, ne jeden responzivní:

**Mobil (< 60 em)**
* Fotografie zabírá horní část obrazovky, text má **vlastní zelenou plochu** pod ní.
  Text se nikdy nesází přes květiny — na drobném displeji to není čitelné.
* Přechod fotky do zelené plochy je zjemněný gradientem, ne ostrým řezem.
* Text zarovnaný vlevo.

**Desktop (≥ 60 em)**
* Fotografie **přes celou obrazovku** — `height: 100svh`, žádný strop výšky.
* Text **vycentrovaný vodorovně i svisle**, blok max 62 rem, zarovnání na střed.
* Nadpis `clamp(2.9rem, 5.4vw, 5.25rem)`, tlačítka vycentrovaná v jedné řadě.
* Blok má horní odsazení 5,5 rem, aby **nikdy nepodjel navigaci**.
* Závoj přes fotku je **radiální** — nejsilnější uprostřed pod textem, ke krajům se
  rozpouští, aby kytice po stranách zůstala vidět. K tomu jemný lineární závoj nahoře
  kvůli čitelnosti navigace.
* Pro **nízká okna** (výška do 46 em) existuje zvláštní režim, kde se nadpis a mezery
  zmenší, aby se hero vešel celý bez oříznutí.

**Fotka hero má vlastní ořezy pro obě orientace** — `hero-wide` (2000×1150) a
`hero-tall` (1100×1600), přepínané přes `<picture>` + `<source media>`.
Nikdy se nespoléhá jen na `object-fit` u jedné fotky.

**Texty hero:**
* Nadpis: *Autorská floristika s duší a respektem k přírodě.*
* Podtitul: *Neopakovatelné květinové vazby pro svatby, oslavy a významné životní okamžiky.*
* CTA: *Nezávazně poptat termín* + textový odkaz *Prohlédnout práce*

---

## 10. Struktura stránky

```
[ NAVIGACE ]  fixní, průhledná nahoře → plná světlá po 60 px scrollu
     ↓
[ HERO ]  celá obrazovka, viz sekce 9
     ↓
[ VYBRANÉ REALIZACE ]  3 případové studie vedle sebe, vše viditelné
     ↓
[ GALERIE ]  23 fotek, filtr podle kategorie, lightbox
     ↓
[ O MNĚ ]  růžový pás — portrét + text + 4 důvody
     ↓
[ FAQ ]  5 otázek, rozbalovací <details>
     ↓
[ LOKACE & MAPA ]  Vinořské náměstí 34, tlumená mapa
     ↓
[ POPTÁVKOVÝ FORMULÁŘ ]  na zelené ploše
     ↓
[ PATIČKA ]  logo, kontakt, atelier, sítě
```

**Navigace:** `Co vážu` · `Galerie` · `O mně` · `FAQ` + zvýrazněné CTA `Kontakt`.
Na mobilu hamburger → celoobrazovkový overlay se stejnými odkazy a kontaktem v patce.

### Případové studie

Místo galerie padesáti fotek **3 konkrétní realizace**, u každé: číslo studie,
nadpis, dva odstavce kontextu, tabulka faktů (Rozsah / Paleta / Květiny nebo Termín)
a dvě velké fotografie. Layouty se **střídají** (`case--flip`).

1. Přírodní elegance v odstínech lnu — svatba
2. Podzimní slavnost a večerní tabule — oslava
3. Poslední rozloučení bez patosu — smuteční vazba

### Interaktivní prvky středu stránky

Platí pravidlo: **interaktivita ano, samovolné animace ne.** Všechno se hnne až
tehdy, když na to návštěvník klepne — žádné scroll-reveal, žádný parallax.

* **Filtr galerie** — tlačítka s počtem položek, `aria-pressed`, skrývání přes
  atribut `hidden`. Dlaždice mají jednotný poměr 4:5, aby při filtrování
  mřížka neposkakovala.
* **Lightbox** — šipky, Esc, klepnutí mimo fotku, přeježdění prstem, počítadlo,
  přednačítání sousedních fotek, zamknutí rolování stránky a návrat fokusu na
  dlaždici po zavření. Prochází jen fotky odpovídající zvolenému filtru.
* **FAQ** — harmonika: otevřená je vždy jen jedna otázka, ostatní se samy zavřou.
  Otázky jsou očíslované, číslo má vlastní sloupec a odpověď začíná na
  stejné lince jako otázka. Otevřená položka je podbarvená.
* **Slider referencí** — šipky a tečky, bez automatického přepínání. Výška
  jeviště se dopočítává z nejdelší citace.

### Poptávkový formulář

Povinná struktura polí: **Jméno a příjmení, E-mail, Telefon, Datum akce, Typ akce,
Předpokládaný rozpočet, Místo konání, Představa & poznámka**, souhlas se zpracováním,
tlačítko *Odeslat nezávaznou poptávku*.

Správné typy inputů kvůli mobilní klávesnici: `type="email"`, `type="tel"`,
`type="date"`. Formulář má dva režimy — bez nastaveného `data-endpoint` otevře
předvyplněný e-mail, s endpointem odešle data na pozadí (Formspree, Netlify Forms,
Web3Forms, vlastní skript).

---

## 11. Mobilní UX (prioritní, ne dodatečná)

* Web se navrhuje **mobile-first**, desktop je nadstavba.
* Tlačítka a dotykové cíle minimálně **48 px**, u hlavních CTA 52–58 px.
* `overflow-x: hidden` a nulový horizontální přetok — testovat na 375 px.
* **Plovoucí dock** místo hranaté sticky lišty: zaoblená pilulka nadnesená nad
  spodní hranou, měkký stín, růžové hlavní tlačítko *Nezávazně poptat termín*
  a kruhové tlačítko s telefonem.
  * Vyjede po odscrollování ~75 % výšky obrazovky.
  * **Sám se schová, když je na obrazovce poptávkový formulář** — nemá překrývat
    pole, která uživatel vyplňuje.
  * Respektuje `env(safe-area-inset-bottom)` kvůli iPhonům.
* Na desktopu se dock nezobrazuje vůbec.

---

## 12. Práce s fotografiemi

* **Kvalita na prvním místě** — nízké rozlišení na web nepatří. Méně je více.
* Vybírat fotky, které drží konzistentní barevný tón a atmosféru.
* Každá fotka je na webu ve **dvou velikostech**: `nazev.jpg` (dlouhá strana do 1600 px)
  a `nazev-sm.jpg` (do 800 px) a nasazuje se přes `srcset` + `sizes`.
* Originály zůstávají ve `fotky/`, na hosting se nahrává jen `assets/`.
* **Fotky v případových studiích se nikdy neořezávají.** Kytice je hlavní věc na
  obrázku a nesmí jí nic chybět — každá fotka si drží vlastní poměr stran
  (`aspect-ratio: auto`, `object-fit: contain`) a dvě fotky vedle sebe se zarovnávají
  na společnou spodní linku. Ořez přes `cover` zůstává jen v galerii a u hero,
  kde je výřez součástí kompozice.
* Každý `<img>` musí mít **popisný `alt`** (co je na fotce, ne „obrázek 1“) a fotky
  se sázejí do `.frame` s `object-fit: cover`.
* Portrét Martiny patří **organicky do sekce Příběh** — nikdy jako kulatá fotka
  z LinkedInu. Od 4. 9. 2026 je tam `martina-portret.jpg` (poměr 4:5), fotka stojí
  sama, bez vsazeného čtverečku.

---

## 13. Obsah a tón

* Věcně, konkrétně, bez marketingové omáčky a bez superlativů.
* Mluví Martina v první osobě.
* U smuteční floristiky citlivý, nepatetický tón.
* **Hlas webu určuje Martinino FAQ.** Všechny texty se píšou tak, jak mluví ona:
  první osoba, krátké věty, konkrétní obrazy („koberce na zeď z květin“), žádné
  marketingové přívlastky typu „neopakovatelný“ nebo „s duší“. Když si nejsi jistý
  tónem, přečti si znovu odpovědi ve FAQ a napodob je.
* **Nikdy nevymýšlet fakta.** Žádné konkrétní zakázky, počty stolů, palety,
  příběh založení ani citace klientů. Co není od Martiny, na web nepatří — radši
  nechat sekci pryč a označit `TODO`, než ji vyplnit smyšlenkou. (11. 9. 2026 se
  kvůli tomu přepisoval prakticky celý web.)
* **Odpovědi ve FAQ jsou doslova Martinina slova**, včetně emoji 😊 a nedopověděných
  vět. Nepřepisovat je do úředního jazyka — je to jediné místo na webu, kde je
  slyšet přímo ona. Emoji jsou tady výjimka ze zákazu v sekci 8; v nadpisech
  a jinde na webu zůstávají zakázané.
* **Nikdy nevymýšlet reference, jména klientů ani konkrétní zakázky.** Ukázkové texty
  musí být v kódu označené komentářem a před spuštěním nahrazené skutečnými.
* Ceny se uvádějí jako orientační „od“ s poznámkou o individuální kalkulaci.
* Česká typografie: pevné mezery (`&nbsp;`) u jednoznakových předložek v nadpisech,
  správné uvozovky „takto“, pomlčky — takto.

## 14. Technika

* Statické HTML + CSS + minimum vanilla JS. **Žádný framework, žádný build krok.**
* Jeden soubor `index.html`, jeden `style.css`, jeden `main.js`.
* **Odkazy na CSS a JS nesou parametr `?v=číslo`.** Při každé změně těchto souborů
  je nutné číslo zvýšit, jinak prohlížeč navštěvníka drží starou verzi z cache.
* CSS organizované do číslovaných bloků s komentáři, breakpointy pohromadě na konci
  (`40em`, `60em`, `80em` + režim pro nízká okna).
* Fonty self-hosted, `font-display: swap`.
* Obrázky `loading="lazy"` kromě hero (`fetchpriority="high"`).
* Přístupnost: `aria-label` u ikon a hamburgeru, `aria-expanded`, `:focus-visible`,
  respektování `prefers-reduced-motion`.
* SEO: popisný `<title>`, meta description, Open Graph, JSON-LD `Florist`.
* Bez cookie lišty a bez trackerů — web žádné nesbírá.

---

## 15. Rozhodnutí, která přebíjí původní zadání

Tohle je důležité pro každého, kdo bude na web sahat — původní brief říkal něco jiného
a změna je **vědomá, na výslovné přání zadavatelky**:

1. **Hero na desktopu je symetrický a vycentrovaný**, ne asymetrická editorial
   kompozice. Původní asymetrická mřížka působila rozvrácená.
2. **Sekce Manifest & filosofie byla zrušena** celá, včetně čtyř principů.
3. **Sekce Služby & orientační ceník byla zrušena** celá, včetně čtyř karet služeb
   a bloku „Plánované akce / Express“. Orientační ceny zůstaly jen v odpovědi ve FAQ.
4. **Pás se výčtem služeb pod hero byl zrušen.**
5. **Navigace neobsahuje odkaz na ceník** — jen Co vážu, O mně, FAQ, Kontakt.
6. **Tlačítka jsou oblá**, ne pravoúhlá.
7. **Sticky lišta u spodní hrany byla nahrazena plovoucím dockem.**
8. **Střed stránky je interaktivní**, ne jen fotky a text. Přibyla galerie s filtrem
   a lightboxem, studie a reference se přepínají, FAQ je harmonika.
   Zákaz scroll-animací z původního zadání **platí dál** — interaktivita stojí na
   ovládání návštěvníkem, ne na efektech při rolování.
9. **Konfigurátor představy byl zrušen** (existoval jen 4. 9. 2026 dopoledne).
   Sekce mezi galerií a příběhem už není žádná.
   **Záložky u realizací byly zrušené také** — vypadaly jako ozdobné rámečky,
   ne jako tlačítka, a návštěvník nepoznal, že má na co klepnout. Z toho plyne
   trvalé pravidlo: **podstatný obsah se nikdy neskrývá za interakci.** Klikáním
   se smí obsah jen zvětšit (lightbox) nebo doplnit (FAQ), nikdy odhalit poprvé.
10. **Reference jsou vycentrované** — nadpis, citace i ovládání na středu, stejně
   jako hero. Jedna citace zarovnaná vlevo v široké ploše působila rozvráceně.

## 16. Co zůstává k doplnění

Vše je v `index.html` označené komentářem `TODO`:

1. **Telefonní číslo** — všude je `+420 000 000 000`.
2. **E-mail** — použit `info@bozikytky.cz`, je i v `main.js`.
3. **Odkazy na Instagram a Facebook.**
4. **Reference** — tři citace jsou ukázkové, nutno nahradit skutečnými.
5. **Ceny ve FAQ** — ověřit podle vlastní kalkulace.
6. **Texty případových studií** — doplnit skutečná místa, měsíce a rozsah.
7. **Doména** v `canonical` a `og:image`.
