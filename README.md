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

## Poptávkový formulář

Odesílá se přes [FormSubmit](https://formsubmit.co) na adresu `contact.email` z `lib/content.ts`
(Martina.v3@seznam.cz), bez účtu a bez serveru. Úplně první odeslání pošle na tuto adresu aktivační
e-mail od FormSubmit — po kliknutí na „Activate Form“ chodí všechny poptávky rovnou do schránky.
Změna adresy = upravit `contact.email` (a novou adresu znovu jednou aktivovat).

## Co zbývá doplnit (v kódu označené `TODO`)

1. Doména v `app/layout.tsx` (`metadataBase`), pokud nebude `www.bozikytky.cz`.
