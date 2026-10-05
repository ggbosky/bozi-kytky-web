"use client"

import { Heart, Flower2, Leaf, type LucideIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { photos, services } from "@/lib/content"
import { cz } from "@/lib/typo"

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  heart: Heart,
  flower: Flower2,
  leaf: Leaf,
}

function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

function AnimatedIcon({ Icon }: { Icon: LucideIcon }) {
  const [ref, isVisible] = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="relative">
      <Icon
        aria-hidden="true"
        className={`h-16 w-16 text-green ${isVisible ? "animate-draw-icon" : ""}`}
        strokeWidth={1}
        style={{
          strokeDasharray: isVisible ? undefined : 1000,
          strokeDashoffset: isVisible ? undefined : 1000,
        }}
      />
    </div>
  )
}

export function ServicesSection() {
  const [bannerRef, bannerVisible] = useInView<HTMLDivElement>(0.2)
  const p = photos.banner

  return (
    <section id="co-vazu" className="relative overflow-hidden px-6 pb-24 pt-32">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 flex justify-center" aria-hidden="true">
        <span className="whitespace-nowrap text-center text-[17vw] font-extrabold uppercase leading-none tracking-tighter text-ghost md:text-[14vw] lg:text-[12vw]">
          Kytice
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div ref={bannerRef} className="relative mb-32 overflow-hidden rounded-3xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="absolute inset-0 h-full w-full">
            <img
              src={p.src}
              srcSet={`${p.sm} 800w, ${p.src} ${p.w}w`}
              sizes="(min-width: 80rem) 80rem, 100vw"
              alt={p.alt}
              width={p.w}
              height={p.h}
              loading="lazy"
              className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${
                bannerVisible ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-green-ink/35 lg:bg-[linear-gradient(to_right,rgba(26,42,32,.72)_0%,rgba(26,42,32,.4)_50%,rgba(26,42,32,.05)_100%)]" />
          </div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blush">Jak pracuji</p>
              <h2 className="mb-8 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white lg:text-5xl">
                Nedělám katalog, ze kterého se vybírá…
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-white/90">
                <p>
                  {cz(
                    "Spousta inspirace z mé práce je zde na stránkách, avšak každá kytice je originál… Zavolejte nebo napište a další takový originál pro vás ráda vytvořím.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Co vážu</p>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
            Tři věci, a&nbsp;pokaždé jinak.
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            Tohle jsou tři situace, kvůli kterým mi lidé volají nejčastěji.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group rounded-3xl p-8 text-center transition-colors duration-300 hover:bg-blush-soft">
              <div className="mb-6 flex justify-center">
                <AnimatedIcon Icon={icons[s.icon]} />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold tracking-[-0.02em] text-green-ink">{s.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{cz(s.text)}</p>
              {s.facts.length > 0 && (
                <dl className="space-y-3 border-t border-border pt-5 text-left text-sm">
                  {s.facts.map((f) => (
                    <div key={f.k} className="grid grid-cols-[7.5rem_1fr] gap-3">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-rose">{f.k}</dt>
                      <dd className="text-green-ink">{cz(f.v)}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
