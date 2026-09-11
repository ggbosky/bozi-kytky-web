# System Prompt / Skill Specification: Tvorba webu pro Boží Kytky (Martina Drexlerová)

Tento dokument slouží jako **kompletní vývojové a designové zadání (Skill Prompt)** pro vytvoření osobitého, prémiového a plně responzivního webu pro floristický projekt **Boží Kytky** autorky **Martiny Drexlerové**.

---

## 1. Filosofie webu & Art Direction

### Hlavní zásada: **AI musí být zcela neviditelné**
Vyvaruj se jakýmkoliv generickým AI prvkům a šablonovým klišé (Lovable/v0 style). Web nesmí působit jako produkt AI generátoru ani jako amatérský pokus v WordPressu. 

*   **ZÁKAZ AI STEREO-TYPŮ:**
    *   ŽÁDNÉ svítící gradienty, glassmorphism / rozostřená skla, floating 3D karty, vznášející se prvky ani generické text-reveal animace.
    *   ŽÁDNÉ klasické časové osy (timelines) s tečkami a čárami.
    *   ŽÁDNÉ dětské ikony, emotikony v nadpisech (např. *„Vítejte v našem květinářství 🌸“*) ani generické fonty (Inter, Roboto, Arial).
    *   ŽÁDNÉ nekonečné horizontální scrollovací lišty s logy nebo neúčelnými widgety.
*   **POJETÍ A ESTETIKA:**
    *   **Editorial & Magazine feel:** Web musí působit jako vizuální esej, kampaň autorského módního domu nebo tištěný designový časopis (Kintfolk, Cereal).
    *   **Prostor a typografie:** Dominantní typografie, odvážná práce s negativním prostorem (whitespace), asymetrické layouty a čisté mřížky.
    *   **Autentičnost:** Místo katalogu květin s tlačítky "Vložit do košíku" prezentuj styl tvoření, filosofii, atmosféru a příběhy konkrétních událostí.

---

## 2. Brand & Vizuální Identita

*   **Projekt:** Boží Kytky
*   **Floristka:** Martina Drexlerová
*   **Sídlo / Atelier:** Vinořské náměstí 34, 190 17 Praha-Vinoř
*   **Barevná paleta:**
    *   *Primary / Background:* Teplé přírodní tóny – organické lněné/krémové odstíny, hluboká lesní zelená, tóny zemité hlíny, kontrastní charcoal/černá pro text.
    *   *Accent:* Jemné přírodní tóny (pudrová, šípková, tóny vysušené trávy).
*   **Typografie:**
    *   *Nadpisy:* Elegantní, charakteristický Serif (např. *Playfair Display*, *Cormorant Garamond*, nebo *Ogg*-like estetika) s vysokým kontrastem.
    *   *Tělo a UI:* Čistý, výborně čitelný Sans-Serif (např. *Plus Jakarta Sans*, *Satoshi*, *Cabinet Grotesk*).

---

## 3. Práce s fotografickým materiálem

Ve složce projektu jsou k dispozici reálné fotografie z tvorby Martiny.
*   **Kvalita na prvním místě:** Použij pouze fotografie v top kvalitě a rozlišení. Nízká kvalita na web nepatří.
*   **Výběr fotografií:** Nemusejí být použity všechny snímky. Menej je více. Vyber fotografie, které drží konzistentní barevný tón a atmosféru.
*   **Formát:** Velkoformátové, oříznuté s citem, podpořené asymetrickou kompozicí. Portrét Martiny musí být organicky včleněn do sekce *Příběh*, nikoliv vložen jako generická kruhová fotka z LinkedInu.

---

## 4. Architektura a Struktura Webové Stránky (Storytelling Flow)

Web drží souvislý vyprávěcí tok (Editorial Scroll Storytelling):

```
[ NAVBAR ]
  ↓
[ HERO SECTION ] → Cinematic & Minimalist
  ↓
[ MANIFEST ZNAČKY ] → Filosofie & Proč právě Martina
  ↓
[ NEJLEPŠÍ PRÁCE / CASE STUDIES ] → Reálné svatby a akce
  ↓
[ SLUŽBY & CENÍK ] → Přehled nabídky + Jasná orientační cena + CTA
  ↓
[ PŘÍBĚH & FLORISTKA ] → Martina Drexlerová (O mně, styl, fotka)
  ↓
[ REFERENCE & DOPORUČENÍ ] → Autentická slova klientů
  ↓
[ NEJČASTĚJŠÍ OTÁZKY (FAQ) ] → Jasné odpovědi bez zbytečné omáčky
  ↓
[ LOKACE & MAPA ] → Vinořské náměstí 34, Praha-Vinoř
  ↓
[ POPTÁVKOVÝ FORMULÁŘ ] → Integrovaný nezávazný poptávkový systém
  ↓
[ FOOTER ] → Kontakty, IG, FB, Adresa
```

---

## 5. Podrobný rozpad sekcí

### A. Navigation (Navbar)
*   **Logotyp:** „Boží Kytky“ (čistá typografie).
*   **Odkazy:**
    *   `Co vážu` (Ukázky / Case Studies)
    *   `Služby & Ceník`
    *   `O mně` (Příběh & Filosofie)
    *   `FAQ`
    *   `Kontakt` (Zvýrazněné CTA tlačítko)
*   **Chování:** Čistá, neagresivní navigace. Na mobilu plně funkční minimalistické menu (fullscreen overlay nebo čistá slide lišta bez zbytečných efektních animací).

### B. Hero Section (Cinematic Start)
*   **Atmosféra:** Žádná klišé přivítání. Místo toho silný titulek spojený s fotografií.
*   **Hlavní Nadpis (H1):** Autorská floristika s duší a respektem k přírodě.
*   **Podtitul:** Neopakovatelné květinové vazby pro svatby, oslavy a významné životní okamžiky.
*   **Prvky:**
    *   Celoobrazovkový nebo asymetricky posazený vizuál vysoké kvality.
    *   Rychlé CTA: „Nezávazně poptat termín“ (scroll k formuláři).

### C. Manifest & Filosofie značky
*   **Myšlenka:** Proč zrovna Boží Kytky?
*   **Obsah:** Žádný plast, žádná pásová výroba. Sezónnost, lokálnost, osobitý rukopis, čerstvost a detail v každém stonku.

### D. Case Studies / Nejlepší práce (Místo klasické galerie)
*   Místo mřížky 50 fotek vytvoř 2–3 konkrétní **Case Studies** (případové studie akcí):
    1.  *Svatba v stodole / Přírodní elegance:* Příběh, rozsah výzdoby, barevná paleta.
    2.  *Narozeninová oslava & Večerní banquet:* Nálada, instalace.
    3.  *Smuteční vazba s úctou a osobitostí:* Citlivé pojetí.
*   Ke každé case study přidej velkou kvalitní fotografii a krátký kontext.

### E. Služby & Orientační ceník
Přehledné karty nebo řádkový přehled služeb. Každá služba musí mít: **Pro koho je, Co obsahuje, Cena "Od" a vlastní CTA.**

1.  **Svatebný servis na míru**
    *   *Obsah:* Kytice pro nevěstu, korsáže, výzdoba obřadu, stoly, instalace, dovoz a instalace na místě.
    *   *Cena:* Od X Kč (individuální kalkulace).
    *   *CTA:* Poptat svatební floristiku.
2.  **Oslavy, Narozeniny & Jubilea**
    *   *Obsah:* Kytice pro oslavence, květinové dekorace prostor, tematické vazby.
    *   *Cena:* Od X Kč.
    *   *CTA:* Poptat kytici / výzdobu.
3.  **Smuteční & Pietní floristika**
    *   *Obsah:* Citlivé smuteční věnce, vypichované aranžmá, kytice na posledné rozloučení.
    *   *Cena:* Od X Kč.
    *   *CTA:* Poptat smuteční vazbu.
4.  **Předplatné & Sezónní vazby / Firemní akce**
    *   *Obsah:* Pravidelná výzdoba prostor, recepce, akce na míru.

*Doplňující info:* Jak rychle zvládne Martina zakázku zrealizovat (Express vs. Plánované akce).

### F. Příběh & O Martině Drexlerové
*   **Foto:** Autentická fotografie Martiny při práci s květinami.
*   **Text:** Příběh vzniku *Božích Kytek*, osobní přístup, láska ke květinovému řemeslu.
*   **Důvod volby:** Proč svěřit květiny právě Martině? (Osobní komunikace, péče o každý detail, flexibilita, sídlo v Praze–Vinoři).

### G. Často kladené otázky (FAQ)
Stručné, přehledné rozbalovací nebo přehledně strukturované odpovědi:
1.  *Jak dlouho dopředu je potřeba květiny objednat?*
2.  *Kolik stojí svatební floristika a jaká je průměrná investice?*
3.  *Jak probíhá svatební konzultace a příprava?*
4.  *Je možné vytvořit cokoliv zcela na míru podle mé představivosti?*
5.  *Zajišťujete i dovoz a instalaci přímo na místě akce?*

### H. Lokace & Mapa
*   **Text:** Atelier & Sídlo: **Vinořské náměstí 34, 190 17 Praha-Vinoř**.
*   **Mapa:** Vkusně integrovaná mapa (nebo stylizovaný náhled mapy / Custom Google Maps iframe s potlačenými satelitními barvami tak, aby ladila s designem webu).

### I. Poptávkový formulář (Konverze)
Přehledný, dostatečně velký a snadno vyplnitelný na mobilu. Obsahuje pole:
*   Jméno a Příjmení
*   E-mail
*   Telefonní číslo
*   Datum plánované akce / předání
*   Typ akce (Svatba, Narozeniny, Smuteční, Jiné)
*   Místo konání / doručení
*   Předpokládaný rozpočet (např. do 5 000 Kč / 5 000 – 15 000 Kč / nad 15 000 Kč)
*   Představa / Poznámka (volný text)
*   **Tlačítko (CTA):** Odeslat nezávaznou poptávku

### J. Footer (Zápatí)
*   **Kontakt:** Martina Drexlerová – Boží Kytky
*   **Adresa:** Vinořské náměstí 34, 190 17 Praha-Vinoř
*   **Telefon:** [Telefonní číslo]
*   **Sociální sítě:** Instagram (odkaz), Facebook (odkaz)
*   **Copyright:** © Boží Kytky. Všechna práva vyhrazena.

---

## 6. Mobilní UX & Responzivita (Mobile-First Paradigm)

**TOTO JE KRITICKÝ POŽADAVEK:**
*   Web musí být primárně navržen pro **mobilní telefony** (Smartphones).
*   **Prvky pro mobil:**
    *   Touch-friendly tlačítka (minimální výška 48px).
    *   Čitelná typografie (velikost těla min 16px, nadpisy přiměřeně skálované).
    *   Žádný přetékající obsah (overflow-x: hidden).
    *   Poptávkový formulář musí mít uzpůsobené inputy pro snadné psaní na mobilní klávesnici (správné `type="email"`, `type="tel"`, `type="date"`).
    *   Sticky CTA tlačítko nebo snadno dostupné akce na mobilní obrazovce.

---

## 7. Instrukce pro Claude při generování kódu / webu

Kdykoliv budeš generovat kód (HTML/CSS/JS nebo React/Tailwind/Next.js):
1.  **Aplikuj zásady špičkové webové typografie a whitespace.**
2.  **Používej vlastní CSS variables nebo Tailwind konfiguraci** s přírodními tóny (písčitá, lesní zelená, alabastr, šedohnědá).
3.  **Nepoužívej externí těžké knihovny pro animace.** Pokud animace, tak pouze jemný, plynulý CSS hover na tlačítkách a kartách.
4.  **Zajisti, že všechny fotky mají správné `alt` tagy** a responzivní chování (`object-fit: cover`).
5.  **Dodržuj striktně strukturu formuláře a sekcí** specifikovanou výše.
