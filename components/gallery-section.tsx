"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { galleryGroups, type Photo } from "@/lib/content"
import { cz } from "@/lib/typo"
import { Lightbox } from "./lightbox"

const allPhotos = galleryGroups.flatMap((g) => g.photos)
// pořadí první fotky každé řady v allPhotos (kvůli prohlížeči)
const offsets = galleryGroups.map((_, i) => galleryGroups.slice(0, i).reduce((n, g) => n + g.photos.length, 0))

// Nekonečná řada fotek. Najetím myší se zpomalí (jako karty v šabloně), nezastaví.
function MarqueeRow({
  items,
  offset,
  reverse = false,
  onOpen,
}: {
  items: Photo[]
  offset: number
  reverse?: boolean
  onOpen: (i: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const slow = useRef(false)
  const reduceMotion = useReducedMotion()
  const tripled = [...items, ...items, ...items]

  useEffect(() => {
    const track = trackRef.current
    if (!track || reduceMotion) return

    let pos = reverse ? track.scrollWidth / 3 : 0
    let last = 0
    let frame = 0

    const animate = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16
      last = now
      const speed = (slow.current ? 0.25 : 0.9) * (dt / 16)
      const third = track.scrollWidth / 3

      pos += reverse ? -speed : speed
      if (pos >= third) pos -= third
      if (pos <= 0) pos += third

      track.style.transform = `translate3d(-${pos}px,0,0)`
      frame = requestAnimationFrame(animate)
    }

    // Řada jede, jen když je na obrazovce — jinak zbytečně vytěžuje prohlížeč.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame)
      if (entry.isIntersecting) {
        last = 0
        frame = requestAnimationFrame(animate)
      }
    })
    observer.observe(track)

    track.style.transform = `translate3d(-${pos}px,0,0)`
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [reverse, reduceMotion])

  return (
    <div
      className={`relative ${reduceMotion ? "overflow-x-auto" : "overflow-hidden"}`}
      onMouseEnter={() => (slow.current = true)}
      onMouseLeave={() => (slow.current = false)}
      onFocusCapture={() => (slow.current = true)}
      onBlurCapture={() => (slow.current = false)}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

      <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
        {(reduceMotion ? items : tripled).map((p, i) => {
          const realIndex = offset + (i % items.length)
          const isClone = i >= items.length
          return (
            <button
              key={`${p.src}-${i}`}
              type="button"
              onClick={() => onOpen(realIndex)}
              tabIndex={isClone ? -1 : 0}
              aria-hidden={isClone || undefined}
              aria-label={`Zvětšit fotku: ${p.alt}`}
              className="group relative h-[260px] flex-shrink-0 overflow-hidden rounded-3xl bg-muted md:h-[360px]"
              style={{ aspectRatio: `${p.w} / ${p.h}` }}
            >
              <img
                src={p.sm}
                alt=""
                width={p.w}
                height={p.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-green-ink/70 via-green-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 right-4 translate-y-2 text-left text-sm leading-snug text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {cz(p.alt)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="galerie" className="overflow-hidden py-32">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Galerie</p>
        <h2 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
          Má tvorba
        </h2>
      </div>

      <div className="space-y-14">
        {galleryGroups.map((g, i) => (
          <div key={g.title}>
            <h3 className="mx-auto mb-5 max-w-7xl px-6 text-2xl font-extrabold tracking-[-0.02em] text-green-ink md:text-3xl">
              {g.title}
            </h3>
            <MarqueeRow items={g.photos} offset={offsets[i]} reverse={i % 2 === 1} onOpen={setOpen} />
          </div>
        ))}
      </div>

      <Lightbox items={allPhotos} index={open} onChange={setOpen} />
    </section>
  )
}
