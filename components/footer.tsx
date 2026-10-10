import { Instagram, Facebook } from "lucide-react"
import { contact, nav, photos } from "@/lib/content"
import { cz } from "@/lib/typo"

export function Footer() {
  const p = photos.footer

  return (
    <div className="relative">
      {/* fotka vystupuje nad patičku a nahoře se rozpouští do podkladu;
          dole končí kousek pod horní hranou patičky, takže pod ní už nic nevykukuje */}
      <div
        className="absolute bottom-[calc(100%-3rem)] left-0 right-0 z-0 h-[calc(40vw+3rem)] w-full overflow-hidden md:h-[calc(30vw+3rem)]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, #000 15%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 15%)",
        }}
      >
        <img
          src={p.src}
          srcSet={`${p.sm} 800w, ${p.src} ${p.w}w`}
          sizes="100vw"
          alt=""
          width={p.w}
          height={p.h}
          loading="lazy"
          className="h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-green-ink/15" />
      </div>

      {/* nápis písmem z loga; celý nad patičkou, nic se neořezává */}
      <div
        className="pointer-events-none absolute left-0 right-0 -top-[26.5vw] z-10 flex justify-center md:-top-[22.5vw]"
        aria-hidden="true"
      >
        <img src="/images/napis-bozi-kytky.svg?v=2" alt="" width={1409} height={369} className="w-[94vw] max-w-none [filter:drop-shadow(0_2px_14px_rgba(26,42,32,.5))] md:w-[80vw]" />
      </div>

      <footer id="kontakt" className="relative z-20 border-t border-border bg-background px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2">
              <img
                src="/images/logo-kombinace.png"
                alt="Boží kytky"
                width={900}
                height={763}
                loading="lazy"
                className="mb-6 h-24 w-auto"
              />
              <div className="flex gap-3">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-green hover:bg-green hover:text-blush"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-green hover:bg-green hover:text-blush"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-green-ink">Menu</h4>
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-muted-foreground transition-colors hover:text-green">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-green-ink">Kontakt</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href={contact.phoneHref} className="transition-colors hover:text-green">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="transition-colors hover:text-green">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href="#poptavka" className="transition-colors hover:text-green">
                    Nezávazná poptávka
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
