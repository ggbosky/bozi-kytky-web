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
  { id: "co-vazu", label: "Co vážu" },
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

// Galerie — dvě řady, které jedou proti sobě. Kategorie se střídají, aby řada nebyla jednotvárná.
export const galleryRows: Photo[][] = [
  [
    img("svatba-bila-sada", 1600, 1200, "Sada bílých svatebních kytic pro nevěstu a družičky položená na kameni v trávě", "Svatba"),
    img("smutecni-srdce", 1000, 1334, "Vypichované smuteční srdce z bílých a růžových gerber a chryzantém", "Rozloučení"),
    img("kytice-jezero", 1600, 1200, "Kytice v bílých a krémových tónech u hladiny jezera", "Kytice"),
    img("nevesta-bila", 1066, 1600, "Nevěsta v krajkových šatech drží kytici z bílých růží a sukulentů", "Svatba"),
    img("cervenobila", 1440, 1081, "Červenobílé vazby rozložené na kameni u vodní hladiny", "Oslava"),
    img("podzimni-prsteny", 1199, 1600, "Kytice z jiřin a růží ve vínové paletě s prsteny položenými na květech", "Svatba"),
    img("smutecni-venec-stuha", 1200, 1600, "Smuteční věnec s černou stuhou z barevných chryzantém, kal a gerber", "Rozloučení"),
    img("modrobila-zahrada", 1440, 1165, "Modrobílá kytice na zahradním stole", "Kytice"),
    img("nevesta-zavoj", 1367, 1594, "Nevěsta se závojem a vázanou kyticí", "Svatba"),
    img("detail-vazba", 1440, 1440, "Detail vazby — stonky a úvazek zblízka", "Detail"),
    img("svatba-par", 1600, 1067, "Novomanželé s kyticí po obřadu", "Svatba"),
    img("smutecni-kopretiny", 1200, 1600, "Smuteční vazba z kopretin a polních květů", "Rozloučení"),
  ],
  [
    img("svatba-pivonky", 1440, 1440, "Svatební kytice z pivoněk v pudrových tónech", "Svatba"),
    img("kytice-lavice", 1600, 1200, "Kytice odložená na dřevěné lavici v zahradě", "Kytice"),
    img("smutecni-venec-barevny", 1200, 1600, "Barevný smuteční věnec bez tmavé klasiky", "Rozloučení"),
    img("nevesta-krem", 1034, 1551, "Nevěsta drží krémovou kytici vázanou volně", "Svatba"),
    img("atelier-kytice", 1440, 1440, "Rozvázaná kytice na pracovním stole", "Kytice"),
    img("louka-svatba", 978, 1231, "Svatební vazba na rozkvetlé louce", "Svatba"),
    img("kytice-kamen", 1440, 1440, "Vazba v pudrových tónech položená na kameni", "Kytice"),
    img("smutecni-venec", 1200, 1600, "Smuteční věnec ze zeleně a bílých květů", "Rozloučení"),
    img("svatba-bile-vazby", 1600, 1200, "Bílé svatební vazby připravené k instalaci", "Svatba"),
    img("podzimni-nevesta", 1199, 1600, "Nevěsta s podzimní kyticí ve vínových a měděných tónech", "Svatba"),
    img("nevesta-cela", 1067, 1600, "Nevěsta v celé postavě s vázanou kyticí", "Svatba"),
  ],
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

export const reasons = [
  { title: "Mluvíte přímo se mnou.", text: "Píšete a voláte mně, ne recepci. Kytici pak vážu taky já." },
  { title: "Rozpočet řekněte rovnou.", text: "Nezlobím se za něj, naopak mi to usnadní práci. Skoro všechno se dá udělat i levněji." },
  { title: "Zvládnu i poslední chvíli.", text: "Ze dne na den to jde. Jen nemusí být skladem přesně ty květiny, které chcete." },
  { title: "Praha a okolí.", text: "Dovezu a naaranžuju přímo na místě." },
]

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
