"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { nav, contact } from "@/lib/content"
import { scrollToId } from "@/lib/scroll"
import { PillButton } from "./pill-button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/60 bg-white/75 px-4 py-2 shadow-[0_8px_30px_rgba(26,42,32,0.06)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
              close()
            }}
            className="flex items-center"
            aria-label="Boží kytky – úvod"
          >
            <img src="/images/logo-kombinace.png" alt="Boží kytky" width={900} height={763} className="h-11 w-auto sm:h-12" />
          </a>

          <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Hlavní navigace">
            {/* po najetí jen změna barvy a podtržení, které se vykreslí zleva */}
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToId(e, item.id)}
                className="group relative py-1.5 text-sm text-muted-foreground outline-none transition-colors duration-300 hover:text-green focus-visible:text-green"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-rose transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={contact.phoneHref}
              className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-green lg:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
            <PillButton href="#poptavka" variant="solid" size="sm" onClick={(e) => scrollToId(e, "poptavka")}>
              Nezávazně poptat
            </PillButton>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center text-green-ink md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav id="mobile-menu" className="mt-4 flex flex-col gap-4 border-t border-border pb-6 pt-6 md:hidden" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToId(e, item.id, close)}
                className="text-2xl font-extrabold tracking-[-0.02em] text-green-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
              <a href={contact.phoneHref} className="flex items-center gap-2 text-green-ink">
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
