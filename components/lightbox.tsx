"use client"

import { useCallback, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Photo } from "@/lib/content"

type Props = {
  items: Photo[]
  index: number | null
  onChange: (i: number | null) => void
}

export function Lightbox({ items, index, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<Element | null>(null)
  const touchX = useRef<number | null>(null)
  const open = index !== null

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onChange((index + dir + items.length) % items.length)
    },
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    returnFocus.current = document.activeElement
    const html = document.documentElement
    const prevOverflow = html.style.overflow
    html.style.overflow = "hidden"
    closeRef.current?.focus()

    return () => {
      html.style.overflow = prevOverflow
      ;(returnFocus.current as HTMLElement | null)?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null)
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, go, onChange])

  // přednačtení sousedních fotek
  useEffect(() => {
    if (index === null) return
    for (const d of [1, -1]) {
      const img = new Image()
      img.src = items[(index + d + items.length) % items.length].src
    }
  }, [index, items])

  const photo = index !== null ? items[index] : null

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Prohlížení fotografie"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-green-ink/95 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onChange(null)
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => onChange(null)}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-green-ink"
            aria-label="Zavřít (Esc)"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-green-ink sm:flex"
            aria-label="Předchozí fotka"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                className="max-h-[80svh] w-auto max-w-[92vw] rounded-2xl object-contain sm:max-w-[80vw]"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
            <figcaption className="mt-4 flex max-w-[92vw] items-baseline gap-4 text-sm text-white/85">
              <span>{photo.alt}</span>
              <span className="shrink-0 tabular-nums text-blush">
                {index! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-green-ink sm:flex"
            aria-label="Další fotka"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
