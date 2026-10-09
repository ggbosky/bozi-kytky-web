"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { photos } from "@/lib/content"
import { scrollToId } from "@/lib/scroll"
import { PillButton } from "./pill-button"

function Napis() {
  return (
    <motion.h1
      initial={{ clipPath: "inset(-15% 100% -15% 0)", opacity: 0 }}
      animate={{ clipPath: "inset(-15% 0% -15% 0)", opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
    >
      <span className="sr-only">Boží kytky – floristika Martiny Drexlerové</span>
      <img
        src="/images/napis-bozi-kytky.svg?v=2"
        alt=""
        aria-hidden="true"
        width={1409}
        height={369}
        fetchPriority="high"
        className="w-full select-none [filter:drop-shadow(0_1px_2px_rgba(26,42,32,.6))_drop-shadow(0_4px_22px_rgba(26,42,32,.7))]"
      />
    </motion.h1>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Při rolování se fotka zmenší a zaoblí — plynule, s dotahováním (stejně jako šablona).
  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const targetProgress = Math.min(window.scrollY / 400, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1
        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  const m = photos.martina
  const bg = photos.hero

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="relative w-full overflow-hidden will-change-transform"
          style={{ transform: `scale(${scale})`, borderRadius: `${borderRadius}px`, height: `${heightVh}vh` }}
        >
          {/* místo videa ze šablony jedna pevná fotka — bez střídání */}
          <img
            src={bg.src}
            srcSet={`${bg.sm} 800w, ${bg.src} ${bg.w}w`}
            sizes="100vw"
            alt={bg.alt}
            width={bg.w}
            height={bg.h}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* závoj kvůli čitelnosti textu — na mobilu nahoře, na desktopu vlevo, kde je nadpis */}
          <div className="absolute inset-0 z-[3] bg-[linear-gradient(to_bottom,rgba(26,42,32,.72)_0%,rgba(26,42,32,.5)_38%,rgba(26,42,32,.25)_62%,rgba(26,42,32,.55)_100%)] md:bg-[linear-gradient(to_right,rgba(26,42,32,.78)_0%,rgba(26,42,32,.55)_40%,rgba(26,42,32,.2)_70%,rgba(26,42,32,.3)_100%)]" />
          <div className="absolute inset-0 z-[3] bg-[radial-gradient(ellipse_65%_40%_at_50%_25%,rgba(26,42,32,.4),transparent_75%)] md:bg-[radial-gradient(ellipse_45%_50%_at_25%_45%,rgba(26,42,32,.35),transparent_75%)]" />
        </div>
      </div>

      {/* Velký nápis „Boží kytky“ na spodku úvodu a hned pod ním tlačítka (na počítači) — jeden celek.
          Stojí před Martinou, jinak by „kytky“ zmizelo za kyticí; při rolování klesne a zeslábne. */}
      <div
        className="pointer-events-none absolute bottom-[3svh] left-1/2 z-[7] w-[94vw] -translate-x-1/2 md:bottom-[5svh] md:left-[max(1.5rem,calc(50%-38.5rem))] md:w-[min(76vw,74rem)] md:translate-x-0"
        style={{ transform: `translateY(${scrollProgress * 150}px)`, opacity: 1 - scrollProgress * 0.9 }}
      >
        <Napis />
        <div
          className={`pointer-events-auto mt-6 hidden flex-wrap gap-4 transition-all delay-700 duration-1000 md:flex ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <PillButton href="#poptavka" variant="white" onClick={(e) => scrollToId(e, "poptavka")}>
            Nezávazně poptat termín
          </PillButton>
          <PillButton href="#galerie" variant="light" onClick={(e) => scrollToId(e, "galerie")}>
            Prohlédnout tvorbu
          </PillButton>
        </div>
      </div>

      {/* Martina bez pozadí — vyjede zespodu (jako mobil v šabloně), stojí vpravo přes velký nápis
          a při odrolování z úvodu klesne a zmizí. Vstup řeší vnější obal (CSS přechod),
          rolování vnitřní (bez přechodu), aby se ty dva pohyby nepraly a obrázek se neklepal. */}
      <div
        className={`pointer-events-none absolute bottom-0 right-0 z-[6] h-[55svh] transition-[translate,opacity] delay-500 duration-[1500ms] ease-out md:right-[3vw] md:h-[min(82svh,72vw)] lg:h-[min(86svh,62rem)] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[30%] opacity-0"
        }`}
      >
        <div
          className="h-full"
          style={{
            transform: `translate3d(0, ${scrollProgress * 140}px, 0)`,
            opacity: Math.max(0, 1 - scrollProgress * 1.25),
          }}
        >
          <img
            src={m.src}
            srcSet={`${m.sm} 718w, ${m.src} ${m.w}w`}
            sizes="(min-width: 48rem) 45vw, 90vw"
            alt={m.alt}
            width={m.w}
            height={m.h}
            fetchPriority="high"
            className="h-full w-auto max-w-none [filter:drop-shadow(0_24px_40px_rgba(26,42,32,.45))]"
          />
        </div>
      </div>

    </section>
  )
}
