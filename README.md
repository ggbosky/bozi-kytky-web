# Boží Kytky — web

Jednostránkový web autorské floristiky Martiny Drexlerové. Stojí na šabloně *Homie*
(Next.js + Tailwind + Framer Motion), obsah, fotky, loga a barvy jsou Boží Kytky.

## Spuštění

```bash
npm install
npm run dev        # vývoj na http://localhost:3000
npm run build      # statický export do složky out/
```

Na hosting se nahrává **jen obsah složky `out/`** — je to čisté HTML, CSS, JS a obrázky,
žádný Node server není potřeba.

## Kde co je

| | |
|---|---|
| `lib/content.ts` | **všechny texty, kontakty, fotky a FAQ** — běžné úpravy stačí dělat tady |
| `components/` | jednotlivé sekce stránky |
| `app/globals.css` | barvy dle logomanuálu (CSS proměnné nahoře) a písmo Plus Jakarta Sans |
| `public/images/` | fotky (`název.jpg` do 1600 px + `název-sm.jpg` do 800 px), loga a v `recenze/` fotky autorů recenzí z Facebooku |
| `public/fonts/` | Plus Jakarta Sans (licence OFL) |
| `X/` | zdrojová loga, logomanuál, písma — jen lokálně, není v repozitáři |
| `fotky/` | originály fotek — jen lokálně, není v repozitáři |

## Co zbývá doplnit (v kódu označené `TODO`)

1. Odesílání formuláře — bez nastavení otevře předvyplněný e-mail;
   pro odeslání na pozadí stačí vyplnit `ENDPOINT` v `components/inquiry-section.tsx`
   (Formspree, Web3Forms, vlastní skript).
2. Doména v `app/layout.tsx` (`metadataBase`), pokud nebude `www.bozikytky.cz`.
