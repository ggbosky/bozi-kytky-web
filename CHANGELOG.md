# Changelog — web Boží Kytky

Záznam všech změn na webu, chronologicky od začátku. Nejnovější záznamy se přidávají
**na konec**.

Časy jsou v místním čase (Europe/Prague). Záznamy z 3. 9. 2026 do 13:19 byly
zrekonstruované zpětně podle časových značek souborů — dokument vznikl až v 18:25,
proto jsou u kroků, které nezanechaly vlastní soubor, časy zaokrouhlené na minuty.

---

## 2026-09-03

### 12:22 — Zadání
Do složky `E:\Boží kytky - web` přidán soubor `bozi-kytky-claude-skill-prompt.md`
(kompletní designové zadání) a složka `fotky/` s 31 fotografiemi.

### 12:23 — Průzkum podkladů
Přečteno zadání, změřeno rozlišení všech 31 fotografií, vytvořeny kontaktní listy
pro vizuální výběr. Zjištěno: použitelných je cca 24 fotek, portrét Martiny mezi nimi
**není**.

### 12:24 — Zpracování fotografií
Vybráno 24 fotografií, z každé vygenerovány dvě velikosti (dlouhá strana do 1600 px
a do 800 px pro mobil) s bikubickým převzorkováním a JPEG kvalitou 82/78.
Celkem 46 souborů do `assets/img/`. Originály zůstaly nedotčené.

### 12:25–12:30 — První verze webu
Vytvořeno:
* `index.html` — celá jednostránka v pořadí navbar → hero → manifest → 3 případové
  studie → služby a ceník → příběh → reference → FAQ → mapa → poptávka → patička
* `assets/css/style.css` — mobile-first design, lněná paleta, Cormorant Garamond
  + Plus Jakarta Sans z Google Fonts, asymetrická mřížka hero
* `assets/js/main.js` — mobilní overlay menu, sticky CTA lišta, poptávkový formulář
  s mailto fallbackem
* `README.md` — přehled souborů a seznam věcí k doplnění

Napsané texty: manifest, 3 případové studie podle fotografií, 4 služby s orientačními
cenami, příběh, 5 odpovědí ve FAQ. Reference označené jako ukázkové.

### 12:31 — Lokální náhled
Vytvořen `.claude/launch.json` a spuštěn statický server na portu 8765
(otevírání přes `file://` nefungovalo — relativní cesty k assetům se nenačítaly).

### 12:32–12:35 — Kontrola první verze
Projito v prohlížeči na 375 px a na desktopu. Ověřeno: žádný horizontální přetok,
žádné chyby v konzoli, funkční menu, mapa, formulář.
**Opraveno:** nadpisy měly `line-height: 1.03` a osekávaly se jim háčky a čárky nad
verzálkami (čeština) — prokládání zvětšeno na 1,1 a zmenšena maximální velikost H1.

### 12:36 — Přidány podklady značky
Do složky přidána složka `X` — logomanuál (PDF + PNG), logo v křivkách (AI + PDF)
ve čtyřech barevných variantách a fonty Cormorant.
Z manuálu zjištěno: **zelená #2D4635, růžová #F0C8C6, doplňková #BA7F84**,
písmo **Cormorant** + ruční písmo, zákaz barevného přechodu jako další barvy.

### 12:43–12:44 — Logo a fonty
* Loga převedena z JPG podkladů na **průhledná PNG** (odmaskování bílého pozadí
  s dopočtem alfa kanálu podle jasu, obarvení na přesné značkové odstíny, ořez na obsah).
  Vznikly čtyři varianty: `logo-kombinace`, `logo-bila`, `logo-ruzova`, `logo-zelene`.
* První pokus o růžovou verzi byl vygenerovaný ze světle růžového podkladu a na zelené
  vypadal šedě — přegenerován z tmavě zeleného podkladu, čímž se vyčistil alfa kanál.
* Fonty Cormorant (Light, LightItalic, Regular) + licence OFL zkopírovány do
  `assets/fonts/` a nasazeny jako self-hosted. Cormorant Garamond z Google Fonts
  odstraněn, z Googlu zůstal jen Plus Jakarta Sans.

### 12:45 — Hero fotografie
Vytvořeny **samostatné ořezy pro obě orientace** — `hero-wide` (2000×1150) pro desktop
a `hero-tall` (1100×1600) pro mobil, aby se hero nespoléhal jen na `object-fit`.
Ořez na výšku posunut tak, aby kytice vyplnila horní část a dole zůstalo dřevo pro text.

### 12:46–12:48 — Nasazení značky
* `style.css` přepsán na značkovou paletu (10 CSS proměnných), Cormorant, oblá
  tlačítka navazující na kruh v logu, růžové odrážky, zaoblená mapa a karty
* logo nasazeno do navigace (plynulé přepínání bílá ↔ zeleno-růžová) a do patičky
* `favicon.png` vygenerován ze zeleného loga
* sticky lišta nahrazena **plovoucím dockem** — zaoblená pilulka nad spodní hranou,
  růžové CTA + kruhové tlačítko s telefonem, respektuje `safe-area` na iPhonech
  a sám se schová, když je na obrazovce formulář

### 12:49–13:05 — Přepracování hero (3 iterace)
1. Nejdřív celoobrazovková fotka s textem přes ni — na mobilu byl text přes světlé
   květiny nečitelný i po zesílení závoje.
2. Zkusen silnější závoj — fotka tím ztmavla natolik, že přestala fungovat.
3. **Výsledné řešení: dva různé režimy.** Na mobilu fotka nahoře + text na vlastní
   zelené ploše pod ní (jistá čitelnost). Na desktopu celoobrazovkový vizuál s textem
   přes ztmavenou levou část.

**Opraveno:** v HTML zůstaly inline styly odkazující na proměnné ze staré palety
(`var(--linen)`), kvůli kterým byl nadpis „Slova, která mi zůstala“ a titulek
formuláře nečitelný. Nahrazeny řádnými CSS třídami.

### 13:10 — Odstranění sekcí
Na přání zadavatelky odstraněno:
* pás s výčtem služeb pod hero
* **celá sekce Manifest** včetně čtyř principů
* **celá sekce Služby & orientační ceník** včetně čtyř karet a bloku
  „Plánované akce / Express“
* odkaz „Služby & Ceník“ z navigace i z mobilního menu
* související nepoužívané CSS (cca 150 řádků) a JS blok pro předvyplnění typu akce

Hero na PC zvětšen **na celou obrazovku** — zrušen strop `max-height: 60rem`.
Nová struktura: hero → vybrané realizace → příběh → reference → FAQ → lokace →
poptávka → patička. Stránka je na mobilu o třetinu kratší (12 400 px místo 18 600 px).

Orientační ceny zůstaly jen v odpovědi ve FAQ.

### 13:11 — README
Aktualizován popis struktury, značky, fontů, loga a seznamu věcí k doplnění.

### 13:17 — Oprava kolize navigace s nadpisem
Navigace zůstávala průhledná po celou dobu scrollování přes hero a její bílý text se
křížil s bílým nadpisem. Přepnuta na plné pozadí už **po 60 px scrollu** — průhledná
je jen úplně nahoře.

### 13:19 — Vycentrování a zvětšení hero na PC
* text vycentrován **vodorovně i svisle**, blok max 62 rem, zarovnání na střed
* nadpis zvětšen na `clamp(2.9rem, 5.4vw, 5.25rem)` (až 84 px), podnadpis a tlačítka
  úměrně (tlačítko 58 px)
* horní odsazení 5,5 rem, aby text **nikdy nepodjel navigaci**
* závoj přes fotku předělán na **radiální** — nejsilnější uprostřed pod textem,
  ke krajům se rozpouští, aby kytice zůstala vidět
* přidán režim pro **nízká okna notebooků** (výška do 46 em), kde se hero zmenší,
  aby se vešel celý
* pozadí zafixované navigace zprůhledněno ze 97 % na **100 %** — přes poloprůhlednou
  lištu prosvítal nadpis

Ověřeno na 1100×650, 1200×900, 1440×860 a na 375 px.

### 18:25 — Dokumentace
Vytvořen `skil.md` — kompletní shrnutí zadání a pravidel webu v aktuální podobě,
včetně seznamu rozhodnutí, která přebíjí původní brief.
Vytvořen tento `CHANGELOG.md`.

### 18:31 — Přejmenování a první skill spolupráce
* `skil.md` přejmenován na **`skill.md`** (překlep v názvu).
* Na začátek dokumentu přidán **skill č. 1 — Kontrola gramatiky**: kontrolovat
  gramatiku a pravopis ve všech zprávách zadavatelky, chyby automaticky opravovat
  a opravu vždy krátce uvést. Platí pro veškerou komunikaci, nejen pro texty na web.
* Dosavadní sekce přečíslovány (1–14 → 2–15) včetně křížových odkazů v textu.
* Stejné pravidlo uloženo do trvalé paměti asistenta, aby platilo i v dalších sezeních.

---

## 2026-09-04

### 10:20 — Portrét Martiny do sekce Příběh
Zadavatelka dodala vlastní fotografii (Martina s velkou vázanou kyticí z červených
a bílých růží, orchidejí a eukalyptu před kamennou zdí) — dosud jediné místo na webu,
kde chyběl skutečný portrét.

* Originál (1440×1800) uložen do `fotky/martina-portret.jpg`.
* Vygenerovány dvě webové velikosti do `assets/img/`: `martina-portret.jpg`
  (1280×1600) a `martina-portret-sm.jpg` (640×800), bikubicky, kvalita 82/78.
* V sekci Příběh nahrazeny **obě dosavadní fotky** — hlavní `nevesta-krem.jpg`
  i vsazený čtvereček `kytice-kamen.jpg`. Nová fotka stojí sama.
* Rám `.frame--main` změněn z poměru **3:4 na 4:5**, aby odpovídal poměru fotografie
  a nic se neořízlo. Pravidlo `.frame--inset` odstraněno jako mrtvý kód.
* `nevesta-krem` a `kytice-kamen` tím přešly mezi rezervní fotky.

### 11:52 — Interaktivní přestavba středu stránky
Zadavatelka: střed stránky působil zastarale — „jen fotky a text“. Obsah zůstal,
změnil se způsob, jakým se s ním návštěvník potkává. Přibyly čtyři věci:

* **Vybrané realizace → přepínatelné záložky.** Tři případové studie už nejsou tři
  dlouhé bloky pod sebou, ale záložky (ARIA `tablist`, ovladatelné šipkami).
  Texty jsou beze změny, sekce je ale zhruba třetinově kratší.
* **Nová sekce Galerie** s filtrem (Vše / Svatby / Oslavy a kytice / Rozloučení)
  a **lightboxem** — fotka přes celou obrazovku, šipky, Esc, počítadlo, přeježdění
  prstem na mobilu, přednačítání sousedních fotek a návrat fokusu po zavření.
  Procházení respektuje zvolený filtr. Nasazeno **všech 23 fotografií** včetně
  devíti, které do té doby ležely ve složce nevyužité.
* **Nová sekce Návrh představy** — konfigurátor o třech krocích (příležitost →
  paleta → rozsah). Nabídka rozsahů se překresluje podle příležitosti, souhrn
  se dopočítává živě a tlačítko **předvyplní poptávkový formulář** (typ akce,
  rozpočet, poznámka) a odscrolluje k němu.
* **Reference → slider.** Místo tří sloupců jedna velká citace se šipkami a tečkami.
  Výška jeviště se dopočítává podle nejdelší citace, aby ovládání neposkakovalo.

Do navigace přibyl odkaz **Galerie**. Žádné scroll-animace se nepřidávaly —
veškerá interaktivita je ovládaná návštěvníkem, jak žádá zadání.

**Navíc opraveno:** odkazy na `style.css` a `main.js` dostaly parametr `?v=3`.
Bez něj prohlížeč držel starou verzi z cache — při testování servíroval 4,8 kB
starého `main.js` místo nových 18,4 kB, takže se nový kód vůbec nespouštěl.
**Při každé další změně CSS nebo JS je potřeba číslo zvýšit.**

Ověřeno na 1200×900 a 375 px: bez horizontálního přetoku, bez chyb v konzoli,
všechny ovládací prvky funkční včetně předvyplnění formuláře.

### 12:35 — Zrušení konfigurátoru, zarovnání referencí, neořezávané fotky, FAQ
Reakce na zpětnou vazbu k dopolední přestavbě:

* **Sekce „Pojďme si to zhruba navrhnout“ (konfigurátor) odstraněna** — HTML, celý
  CSS blok i JS včetně cenové tabulky `OCCASIONS`. Sekce CSS přečíslovány (10–18 → 9–17).
  Orientační ceny tím z webu zmizely až na odpověď ve FAQ.
* **Reference vycentrované.** Jedna citace zarovnaná vlevo v široké zelené ploše
  působila rozvráceně a šipky byly od sebe roztažené přes celou šířku. Nadpis,
  citace i ovládání jsou teď na středu a tlačítka s tečkami drží pohromadě —
  stejná kompozice jako hero.
* **Fotky v případových studiích už se neořezávají.** Předtím byly nacpané do
  pevných rámů 3:2 a 4:3 přes `object-fit: cover`, takže u studie 03 přicházely
  o část vazby obě fotky a u studie 01 spodní. Nyní si každá drží vlastní poměr
  stran a dvě fotky vedle sebe se zarovnávají na společnou spodní linku.
  Sloupec s fotkami zároveň dostal víc místa (1,2fr proti 0,8fr textu), aby fotky
  po zrušení ořezu nezůstaly malé. Ověřeno měřením: všech šest fotek sedí na
  přirozený poměr, sloupce jsou vyvážené (426–479 px fotky proti 507–531 px textu).
* **FAQ zpřehledněno.** Otázky mají čísla 01–05 ve vlastním sloupci, odpověď začíná
  na stejné lince jako otázka a otevřená položka je podbarvená. Z rozbalovacího
  seznamu se stala **harmonika** — otevřená je vždy jen jedna otázka.

Verze assetů zvýšena na `?v=6`. Stránka je na mobilu o 1 300 px kratší
(12 736 px místo 14 036 px). Ověřeno na 1280×900 a 375 px.

### 12:55 — Realizace bez skrytého obsahu, jednotné fotky, skutečné FAQ

* **Záložky u realizací zrušeny.** Vypadaly jako ozdobné rámečky, ne jako tlačítka —
  návštěvník nepoznal, že má klepnout, a dvě ze tří studií proto nikdy neviděl.
  Nyní jsou **všechny tři vedle sebe a celé viditelné** (na mobilu pod sebou).
  Každá karta: fotka, číslo, typ akce, nadpis, dva odstavce a tabulka faktů.
  Tabulky faktů se zarovnávají na společnou linku, karty mají shodnou výšku.
* **Fotky jsou ve všech třech studiích stejně velké.** Podmínkou bylo sjednotit poměr
  stran — `podzimni-prsteny` a `smutecni-srdce` už 3:4 měly, bílá svatební fotka ne.
  Vznikl proto ořez **`nevesta-bila-3x4.jpg`**: z původních 1066×1600 se ubralo
  179 px **shora** (šaty a dekolt), takže kytice zůstala celá a kompozice je i těžsnější.
  Všechny tři fotky teď měří 360×480 px a žádná není oříznutá.
* **FAQ nahrazeno skutečnými otázkami od Martiny.** Předchozích pět otázek jsem
  napsal já podle odhadu; nyní jsou tam tři, které dodala, jejími vlastními slovy
  včetně emoji: „Kolik mě to bude stát?“, „Vejdu se do tolika a tolika?“
  a „Jak dlouho to trvá a kdy se ozvat?“.
  Tím z webu zmizely **poslední konkrétní ceny** — už nikde nejsou žádné částky.

Z toho plyne trvalé pravidlo zapsané do skillu: **podstatný obsah se nikdy neskrývá
za interakci.** Klikáním se smí obsah jen zvětšit (lightbox) nebo doplnit (FAQ),
nikdy odhalit poprvé.

Verze assetů `?v=7`. Ověřeno měřením v DOM na 1400×1000 a 375 px: karty stejně
široké (360 px) i vysoké (1126 px), fotky shodně 360×480, všechny přesně 3:4,
bez horizontálního přetoku.

---

## 2026-09-10

### 12:07 — Převleknutí do stylu šablony Miren
Zadavatelka poslala odkaz na šablonu **Miren** (Irem Geldry) s tím, ať zůstane
100 % obsahu, barev i fotek a změní se jen rukopis. Z předlohy jsem si vzal
čtyři prvky a převedl je na naši paletu a písmo:

* **Trhaná papírová hrana** mezi pásy — čtyři předely, každý s vlastní náhodně
  generovanou cestou (170 bodů, tři vrstvy šumu plus občasný hlubší zářez), aby
  se neopakovaly. První předel leží **přes spodek hero fotky**.
* **Polaroidy** — fotky studií, portrét Martiny i dlaždice galerie dostaly bílý
  paspart, popisek pod fotkou a měkký stín. Studie a portrét jsou mírně natočené
  a po najetí se srovnají; galerie natočená není, aby mřížka držela linku.
  Popisek studie převzal původní řádek `.case__meta` — obsah se neztratil.
* **Velká displejová typografie** — `.headline` z 3,35 rem na **5,25 rem** (84 px),
  nadpisy sekcí přesunuty **na střed** i s podtitulem (dřív byly ve dvou sloupcích).
* **Střídání pásů a papírové zrno** — **Příběh se stal tmavě zeleným** (byl krémový),
  čímž vznikl rytmus krémová → zelená → krémová → zelená. Do `body` přibylo jemné
  SVG zrno (5 % krytí), aby krémová plocha působila jako papír.
* FAQ přešlo z dvousloupcového rozvržení na **vycentrovaný sloupec**.

**Obsah, barvy ani fotky se nezměnily.** Ověřeno počítáním: 3 studie (6 odstavců,
9 faktů), 23 fotek v galerii, 4 filtry, 3 reference, 3 otázky FAQ, 9 polí formuláře,
4 důvody v příběhu. Žádná nová barva — všechno z existujících proměnných.

Do `skill.md` přibyla **sekce 6 — Vizuální rukopis**, ostatní sekce přečíslovány
(6–15 → 7–16) včetně křížových odkazů.

Verze assetů `?v=10`. Ověřeno na 1280×860 a 375 px, bez horizontálního přetoku
a bez chyb v konzoli.


### 15:55 — Zpět k čistému editorialu + výběr písma
Zadavatelce se výsledek nelíbil („celé bych to předělal, ani ten font“) a nevěděla,
kterým směrem. Rozhodl jsem sám podle toho, co bylo nejpravděpodobněji špatně:

* **Zrušeny všechny scrapbookové prvky z Mirenu** — čtyři trhané papírové hrany,
  bílé pasparty a natočení polaroidů, stíny pod fotkami i papírové zrno v pozadí.
  Tenhle rukopis tlačil web do „rustikálně roztomilého“, což se s prémiovou
  floristikou bě. Fotky jsou teď čisté obdélníky s decentním popiskem pod nimi.
* **Příběh vrácen na světlý podklad** (byl tmavě zelený jen kvůli střídání pásů).
* **Typografie přestavěna.** Nadpisy přešly z řezu **Light (300) na Regular (400)** —
  v Light se při 84 px ztrácely české háčky a čárky a písmo působilo vlásečnicově.
  To byl podle mě hlavní důvod nespokojenosti s písmem — není to volba fontu,
  ale jeho použití. Velikost nadpisů sekcí snížena z 5,25 rem na **3,4 rem**,
  text v těle zvětšen na **17 px** a zesílen na řez 400 (byl 16 px/300).
* Vznikla stránka **`pismo.html`** — šest variant písma nadpisů na stejných textech
  z webu a v reálných velikostech, každá s testem české diakritiky:
  Cormorant, Marcellus, Instrument Serif, Fraunces, DM Serif Display, Playfair Display.
  Slouží jen k výběru, na ostrý web nepatří (`noindex`).

Obsah, barvy ani fotky se neměnily. Verze assetů `?v=11`.


### 16:06 — Nadpisy přepnuty na Marcellus
Zadavatelka nechala volbu písma na mně. Vybrán **Marcellus** (varianta 02
z `pismo.html`) — stejná klidná nálada jako Cormorant, ale silnější tah, takže
drží i ve velkých stupních a česká diakritika v něm nezaniká. Zvolený i proto,
že dělá protiklad k ručně psanému logu, které si tak nechá osobitost pro sebe.

* `--serif` → Marcellus (Google Fonts), platí pro všechny nadpisy.
* Přidána proměnná `--serif-quote` = **Cormorant**, která drží dvě kurzivní
  místa — podpis v příběhu a citace v referencích. **Marcellus kurzivu nemá**,
  prohlížeč by ji dopočítal a vypadala by špatně. Značkový Cormorant tak zůstává
  na místech, kde mluví Martina.
* Citace v referencích mírně zvětšena (2,5 → 2,65 rem).

**Odklon od logomanuálu**, který předepisuje Cormorant — vědomé rozhodnutí
na přání zadavatelky. Návrat je jedna hodnota v `style.css`.

Verze assetů `?v=12`.

---

## 2026-09-11

### 09:57 — Kompletní předelání podle mytopicals.com a wattspet.com
Zadavatelka poslala dvě předlohy s tím, že chce „celé kompletně předělat“,
a u druhé vyzdvihla animace. Obojí je **tučný bezpatkový, karetní a barevně
odvážný** rukopis — přesný opak dosavadního elegantního serifového editorialu.

Co se změnilo:

* **Karty na tmavém plátně.** `body` má teď tmavě zelené pozadí a každá sekce
  je zaoblená karta (36 px na desktopu), která na něm plave. Barevný rytmus:
  fotka → krémové karty → růžová karta příběhu → zelené karty referencí a poptávky.
* **Navigace jako plovoucí pilulka** — zelená, odsazená od okrajů, s růžovým logem
  a růžovým CTA. Přepínání průhledná/plná zrušeno, pilulka je plná vždy.
* **Běžící růžový pás pod hero** s výčtem oboru. Tím se **vrátil obsah**,
  který byl 3. 9. odstraněn jako statický pás pod hero — teď v pohyblivé formě.
* **Typografie na tučný sans.** Nadpisy Plus Jakarta Sans **800** místo serifu,
  výrazně stažené (`-.03em`). Marcellus z předchozího dne odstraněn.
  Serif zůstává **jen v kurzivě citací a podpisu** — znackový Cormorant.
* **Odkrývání při scrollu** přes `IntersectionObserver` (opacity + posun 30 px,
  každý prvek jednou). Při `prefers-reduced-motion` se vše zobrazí rovnou
  a běžící pás se zastaví.

**Přebíjí to dvě dosavadní pravidla ze skillu:** zákaz scroll-reveal animací
(sekce 8) a Cormorant/Marcellus v nadpisech. Obojí je v `skill.md` vyznačené.

Obsah, fotky ani paleta se neměnily — jen jejich rozvržení a použití.
Verze assetů `?v=13`. Ověřeno na 1280×860 a 375 px, bez přetoku a bez chyb
v konzoli.


### 10:01 — Přepsání obsahu a odstranění vymyšlených textů
Zadavatelka: „pořád jen upravuješ rozvržení, ale uprav ten **obsah**“. Měla pravdu
a problém byl vážnější, než to vypadalo: **skoro všechny texty na webu jsem napsal
já**, včetně konkrétních údajů, které jsem neměl odkud vědět. Jediný pravý text
byly tři odpovědi ve FAQ — a právě na nich bylo vidět, že Martina mluví úplně jinak
než zbytek stránky.

**Odstraněno jako smyšlené:**
* Tři případové studie včetně údajů jako „8 stolů“, „alabastr, smetanová,
  šalvějová zeleň“ nebo „zhotoveno do 48 hodin“ — popisovaly zakázky, které se
  nemusely nikdy stát.
* Příběh založení („začaly kyticí pro kamarádku, která si přála něco jiného“).
* **Celá sekce Reference** — všechny tři citace byly vymyšlené. Sekce včetně
  slideru, CSS i JS je pryč; vrátí se, až bude aspoň jedna skutečná.
* Slib „ozvu se do 24 hodin“ v poptávce.

**Nově napsané jejím hlasem** (podle FAQ jako vzoru — první osoba, krátké věty,
konkrétní, bez přívlastků):
* Hero: „Řekněte mi, co si představujete. Zbytek nechte na mně.“ místo
  „Autorská floristika s duší a respektem k přírodě.“
* Sekce **Co vážu** místo „Vybrané realizace“ — tři služby popsané poctivě,
  bez konkrétních zakázek. Lhůty (7–14 dní, i ze dne na den, kytice na zavolání)
  jsou převzaté **z jejích vlastních odpovědí ve FAQ**.
* **O mně** — bez vymyšleného původu, s `TODO` pro Martinu. Podpis pod textem je
  doslova její věta z FAQ: „— vždycky věřím, že se domluvíme.“
* Galerie: „Tohle jsem vázala.“

Do `skill.md` přibylo pravidlo: **nikdy nevymýšlet fakta** a hlas webu určuje FAQ.

Verze assetů `?v=14`.


### 10:07 — Stylopis přepsán od nuly
Zadavatelka: „klidně začni odznova, úplně“ — a v předchozí zprávě „jak jsi to
**rozkrájel**, tak je to ještě horší“. To slovo bylo klíč: sekce jsem předtím
nasekal do zaoblených karet plovoucích na tmavém plátně a tím stránku rozdrobil.

`assets/css/style.css` **napsaný celý znovu** (888 řádků, 19 očíslovaných sekcí).
Předchozí soubor vznikal vrstvením přes sebe — „v2 vrstva“ přebíjela starší
pravidla, zbývala mrtvá pravidla po zrušených sekcích. To už nejde čistit po kouskách.

**Nově:**
* **Plné barevné pásy přes celou šířku** místo karet. Žádné zaoblení sekcí,
  žádné odsazení těla, nic se nekrájí.
* **Nadpisy zarovnané vlevo** místo na střed — s tučným sansem působí jistěji.
* Hero: fotka přes celou obrazovku, text dole vlevo, silnější závoj ve spodní půli
  (květiny bývají světlé a nadpopisek se v nich ztrácel).
* Nová sekce **Jak to probíhá** — tři kroky. Nejsou to nová fakta, jen seřazení
  toho, co Martina říká ve FAQ a v sekci O mně. Sekce nahrazuje místo po
  odstraněných vymyšlených referencích.
* **Postupné nabíhání prvků** místo odkrývání celých bloků — děti v `[data-stagger]`
  naskakují po 80 ms za sebou, hero po 120 ms. Odkoukáno z wattspet.com, kde
  měřením vyšlo, že animují `opacity` + `translateY` po jednotlivých prvcích.
* Opraveno: tlačítko v mobilním docku se lámalo do tří řádků.

**Zrušeno:** karty, papírové zrno, trhané hrany, polaroidové pasparty, natočení
fotek, Marcellus. V kódu po nich nezbylo nic.

Obsah ani fotky se neměnily. Verze assetů `?v=22`. Ověřeno na 1280×860 a 375 px.


### 10:12 — Navigace na fotku, hero na střed, pás pryč
* **Navigace už nemá zelený obdélník.** Odkazy sedí přímo na hero fotce, logo
  je bílé. Po 60 px scrollu se navigace přepne na světlý podklad s tmavým logem —
  bez toho by na krémové stránce zmizela.
* **Vpravo místo „Kontakt“ telefon a růžové CTA „Nezávazně poptat“.** Číslo je
  zatím zástupné (`+420 000 000 000`), označené `TODO` — stačí přepsat `href` i text.
  Na mobilu se telefon skrývá, aby se lišta vešla.
* **Hero vycentrovaný** — vodorovně i svisle, závoj předělán na radiální
  (nejsilnější uprostřed pod textem).
* **Scroll animace hero** podle referenčního webu: text se při odjíždění zvedá
  (až −70 px) a rozpouští, fotka se zároveň přibližuje na `scale(1.14)`.
  Počítá se přes `requestAnimationFrame`, takže scroll neseká.
* **Zrušen běžící růžový pás** pod hero včetně CSS — na přání zadavatelky.
* **Opraven dvojitý hamburger.** V HTML byly dva `<span>`, ale CSS počítá s jedním
  (prostřední čára + dvě přes `::before`/`::after`). Vykreslovaly se proto čtyři
  čáry a po otevření dva křížky. Zbyl jeden `<span>`.

Verze assetů `?v=24`.

---

## Jak pokračovat v tomto souboru

Každá další změna = nový záznam na konec, ve formátu:

```
### HH:MM — Krátký název změny
Co se změnilo a proč. Které soubory se dotklo.
```

Pokud jde o nový den, přidej nejdřív nadpis `## RRRR-MM-DD`.
