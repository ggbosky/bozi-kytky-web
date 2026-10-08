// Veškerý obsah webu na jednom místě.
// Texty jsou Martinina slova z původního webu — nic se tu nevymýšlí.
// Co ještě chybí, je označené TODO. Ateliér Martina nemá — žádná adresa k návštěvě.

export const contact = {
  phone: "+420 723 528 088",
  phoneHref: "tel:+420723528088",
  email: "info@bozikytky.cz",
  // TODO: doplnit skutečné odkazy na profily
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
}

export const nav = [
  { id: "co-vazu", label: "Co pro vás tvořím" },
  { id: "o-mne", label: "O mně" },
  { id: "galerie", label: "Galerie" },
  { id: "faq", label: "FAQ" },
]

export type Photo = {
  src: string
  sm: string
  w: number
  h: number
  alt: string
  tag: "Svatba" | "Oslava" | "Kytice" | "Detail" | "Rozloučení"
}

const img = (name: string, w: number, h: number, alt: string, tag: Photo["tag"]): Photo => ({
  src: `/images/${name}.jpg`,
  sm: `/images/${name}-sm.jpg`,
  w,
  h,
  alt,
  tag,
})

export const photos = {
  hero: img("cervenobila", 1440, 1081, "Červenobílé svatební kytice z růží, eustomy a heřmánku rozložené na kamenech u jezírka s lekníny", "Svatba"),
  // výřez bez pozadí z fotky/martina-portret.png (oříznuto a převedeno do WebP)
  martina: {
    src: "/images/martina-vyrez.webp",
    sm: "/images/martina-vyrez-sm.webp",
    w: 1277,
    h: 1600,
    alt: "Martina Drexlerová s velkou kyticí z červených a bílých růží, orchidejí a eukalyptu",
  },
  banner: img("atelier-kytice", 1440, 1440, "Rozvázaná kytice na pracovním stole", "Kytice"),
  portrait: img(
    "martina-portret",
    1280,
    1600,
    "Martina Drexlerová drží velkou vázanou kytici z červených a bílých růží, orchidejí a eukalyptu",
    "Kytice",
  ),
  inquiry: img("nevesta-zavoj", 1367, 1594, "Nevěsta se závojem drží pudrovou kytici z růží a eukalyptu", "Svatba"),
  footer: img("kytice-jezero", 1600, 1200, "Kytice v bílých a krémových tónech u hladiny jezera", "Kytice"),
}

// Galerie „Má tvorba“ — tři řady podle druhu, každá s nadpisem. Řady jedou střídavě proti sobě.
export type GalleryGroup = { title: string; photos: Photo[] }

const k = (n: number, w: number, h: number, alt: string) => img(`kytice-${n}`, w, h, alt, "Kytice")

export const galleryGroups: GalleryGroup[] = [
  {
    title: "Svatby",
    photos: [
      img("svatba-bila-sada", 1600, 1200, "Sada bílých svatebních kytic pro nevěstu a družičky položená na kameni v trávě", "Svatba"),
      img("nevesta-bila", 1066, 1600, "Nevěsta v krajkových šatech drží kytici z bílých růží a sukulentů", "Svatba"),
      img("cervenobila", 1440, 1081, "Červenobílé svatební kytice rozložené na kameni u vodní hladiny", "Svatba"),
      img("podzimni-prsteny", 1199, 1600, "Kytice z jiřin a růží ve vínové paletě s prsteny položenými na květech", "Svatba"),
      img("nevesta-zavoj", 1367, 1594, "Nevěsta se závojem a vázanou kyticí", "Svatba"),
      img("svatba-par", 1600, 1067, "Novomanželé s kyticí po obřadu", "Svatba"),
      img("svatba-pivonky", 1440, 1440, "Svatební kytice z pivoněk v pudrových tónech", "Svatba"),
      img("nevesta-krem", 1034, 1551, "Nevěsta drží krémovou kytici vázanou volně", "Svatba"),
      img("louka-svatba", 978, 1231, "Svatební vazba na rozkvetlé louce", "Svatba"),
      img("svatba-bile-vazby", 1600, 1200, "Bílé svatební vazby připravené k instalaci", "Svatba"),
      img("podzimni-nevesta", 1199, 1600, "Nevěsta s podzimní kyticí ve vínových a měděných tónech", "Svatba"),
      img("nevesta-cela", 1067, 1600, "Nevěsta v celé postavě s vázanou kyticí", "Svatba"),
    ],
  },
  {
    title: "Květiny a dárkové kytice",
    photos: [
      k(32, 1254, 1254, "Bohatá barevná kytice z růží, karafiátů a fialových květů"),
      k(33, 1439, 1395, "Velký květinový box s růžemi v pastelových tónech"),
      k(47, 1440, 1440, "Srdce z růžových tulipánů a bílých květů"),
      k(37, 1080, 1080, "Kytice z oranžových a broskvových květů s modrými květy"),
      k(35, 1200, 1600, "Kytice z červených, žlutých a bílých květů na schodech"),
      k(34, 1600, 1200, "Kulatá kytice z růžových a krémových růží se stuhou na kameni"),
      k(38, 1200, 1600, "Dárková kytice s bankovkami složenými do tvaru květů"),
      k(44, 1440, 1440, "Kytice z pivoněk a růží v pudrových tónech na dřevěné lavici"),
      k(56, 1600, 1486, "Srdce z červených růží s krabičkou s prstenem uprostřed"),
      k(39, 1080, 1080, "Kytice z bílých gerber a fialových květů"),
      k(36, 1600, 1200, "Kytice v růžových tónech s gerberami a eukalyptem"),
      k(48, 1440, 1440, "Krabice ve tvaru srdce s červenými karafiáty a bílými květy"),
      k(45, 1200, 1600, "Kytice z růžových růží a drobných bílých květů na lavici"),
      k(40, 1080, 937, "Velká kytice z červených karafiátů a růžových tulipánů"),
      k(50, 1440, 1440, "Květinový box s růžovými gerberami, růžemi a stuhou"),
      k(41, 1080, 1193, "Kytice z červených gerber, růží a bílých chryzantém s eukalyptem"),
      k(58, 1440, 1440, "Krabice ve tvaru srdce s růžovými tulipány"),
      k(46, 1200, 1600, "Kytice z červených karafiátů a meruňkových růží na lavici"),
      k(42, 1080, 1410, "Kytice z pudrových růží s eukalyptem"),
      k(55, 1200, 1600, "Srdce z květů s přáníčkem a dřevěným srdíčkem"),
      k(49, 1376, 1376, "Kytice z červených pivoněk, jiřin a růží"),
      k(43, 1440, 1440, "Kytice v růžových a fialových tónech s levandulí"),
      k(52, 1200, 1600, "Květinový box s růžovými karafiáty a mašlí na kameni"),
      k(59, 1440, 1440, "Květinový box s růžemi, karafiáty a heřmánkem se stuhou"),
      k(51, 1440, 1440, "Květinový box s růžovými karafiáty a eukalyptem na lavici"),
      k(57, 1200, 1600, "Krabice ve tvaru srdce s červenými karafiáty"),
      k(60, 1201, 1600, "Květinový box s fialovými a růžovými květy"),
      k(54, 1200, 1600, "Květinový box s růžovými karafiáty na lavici"),
      img("kytice-jezero", 1600, 1200, "Kytice v bílých a krémových tónech u hladiny jezera", "Kytice"),
      img("modrobila-zahrada", 1440, 1165, "Modrobílá kytice na zahradním stole", "Kytice"),
      img("kytice-lavice", 1600, 1200, "Kytice odložená na dřevěné lavici v zahradě", "Kytice"),
      img("atelier-kytice", 1440, 1440, "Rozvázaná kytice na pracovním stole", "Kytice"),
      img("kytice-kamen", 1440, 1440, "Vazba v pudrových tónech položená na kameni", "Kytice"),
      img("detail-vazba", 1440, 1440, "Detail vazby — stonky a úvazek zblízka", "Detail"),
    ],
  },
  {
    title: "Rozloučení",
    photos: [
      img("smutecni-srdce", 1000, 1334, "Vypichované smuteční srdce z bílých a růžových gerber a chryzantém", "Rozloučení"),
      img("smutecni-venec-stuha", 1200, 1600, "Smuteční věnec s černou stuhou z barevných chryzantém, kal a gerber", "Rozloučení"),
      img("smutecni-kopretiny", 1200, 1600, "Smuteční srdce z bílých gerber a kopretin na stojanu", "Rozloučení"),
      img("smutecni-venec-barevny", 1200, 1600, "Barevný smuteční věnec bez tmavé klasiky", "Rozloučení"),
      img("smutecni-venec", 1200, 1600, "Smuteční věnec ze zeleně a bílých květů", "Rozloučení"),
    ],
  },
]

export const services = [
  {
    icon: "heart",
    title: "Svatby",
    text: "Ohledně květin na svatbu si s vámi ráda zavolám nebo si dáme schůzku a probereme detaily a vaši představu… Téměř vše je možné a nebojím se žádné výzvy 😊",
    facts: [{ k: "Kdy se ozvat", v: "Ideálně 7–14 dní dopředu, u velkých svateb raději dřív" }],
  },
  {
    icon: "flower",
    title: "Oslavy a kytice",
    text: "Narozeniny, jubileum, výročí, promoce nebo jen tak pro radost? Příležitostem se meze nekladou… Ráda vytvořím cokoliv nebo pomohu s výběrem 😊",
    facts: [{ k: "Kdy se ozvat", v: "Kytice i na zavolání, velká výzdoba 7–14 dní dopředu" }],
  },
  {
    icon: "leaf",
    title: "Smuteční vazby",
    text: "Věnce, kytice na rozloučenou, vypichovaná srdce či jiné květinové dary…",
    facts: [],
  },
]

// Text „O mně“ — Martinina vlastní slova (8. 10. 2026).
export const about = {
  intro: [
    "Jmenuji se Martina a květiny jsou mou vášní už více než 20 let.",
    "Vystudovala jsem Střední zahradnickou školu na Mělníku, obor floristka, a od té doby mě stále baví hledat nové způsoby, jak z květin vytvořit něco krásného, osobního a jedinečného.",
    "Specializuji se především na svatební floristiku a květiny pro nejrůznější oslavy a životní okamžiky. Ráda ale vytvořím i květiny na poslední rozloučení nebo splním vaše jiné květinové přání.",
    "Ať už máte jasnou představu, nebo naopak vůbec nevíte, co by se vám líbilo, vždycky věřím, že se společně domluvíme. 😊",
  ],
  subheading: "Nejsem klasické květinářství",
  body: [
    "Pracuji především na zakázku. Nemám obchod plný květin ve vázách, které čekají na svého zákazníka. Když si u mě objednáte kytici, vyrazím pro čerstvé květiny a potom se pustím do tvoření právě pro vás.",
    "Díky tomu mohu každou zakázku přizpůsobit vašemu přání, příležitosti i rozpočtu a zároveň pracovat s opravdu čerstvým materiálem.",
    "U svateb se nejprve telefonicky spojíme a domluvíme si osobní schůzku, na které společně probereme všechny detaily – od barev a stylu až po jednotlivé květiny a celkovou podobu svatební výzdoby.",
    "Čím dříve o vaší zakázce vím, tím lépe.",
    "Zároveň se ale snažím vyjít vstříc i objednávkám na poslední chvíli. Jen je potřeba počítat s tím, že nemusí být vždy dostupné přesně ty květiny, které si přejete.",
    "Každou zakázku ale beru jako malou výzvu – a vždycky se nejdříve pokusíme najít řešení.",
  ],
}

export const steps = [
  {
    title: "Napíšete mi, co chystáte",
    text: "Stačí pár řádků — o jakou příležitost jde, kdy to je a pro koho. Rozpočet klidně rovnou, usnadní mi to práci.",
  },
  {
    title: "Zavoláme si nebo se sejdeme",
    text: "Potřebuju vědět, kde se to bude odehrávat a co se ten den děje. Teprve pak vybírám květiny.",
  },
  {
    title: "Vážu a přivezu",
    text: "Po Praze a okolí dovezu a naaranžuju přímo na místě.",
  },
]

// Odpovědi jsou doslova Martinina slova, včetně smajlíků — neupravovat do úředního tónu.
export const faqs = [
  {
    q: "Kolik mě to bude stát?",
    a: [
      "Vždycky potřebuji konkrétní představu klienta. Když se někdo zeptá, na kolik vyjde například svatba, potřebuji znát zadání — někdo má skromnou výzdobu, jiný chce koberce na zeď z květin. Ale vždycky věřím, že se domluvíme 😊",
    ],
  },
  {
    q: "Vejdu se do tolika a tolika?",
    a: [
      "Můžeme se pokusit. Všechno se dá udělat levněji, samozřejmě tomu pak odpovídá i samotná květina nebo dekorace. Vždycky se ale snažím vymyslet to tak, abyste byli spokojení 😊",
    ],
  },
  {
    q: "Jak dlouho to trvá a kdy se ozvat?",
    a: [
      "Dárkovou kytici zvládnu, když to jde, na zavolání — pokud jsem zrovna k dispozici 😊 Velké dekorace, svatby a smuteční vazby ideálně 7–14 dní dopředu.",
      "Umím reagovat i ze dne na den, ovšem tam už může nastat problém, že nebudou skladem přesně ty květiny, které chcete. Mám ale ráda různé výzvy a vždycky se pokusím o co nejlepší výsledek za každou cenu 😊",
    ],
  },
]
