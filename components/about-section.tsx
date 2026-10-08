"use client"

import { motion } from "framer-motion"
import { about, photos } from "@/lib/content"
import { cz } from "@/lib/typo"

// Jen fotka, bez rámečků a „živých“ štítků — ty působily jako šablona z AI.
function Portrait() {
  const p = photos.portrait

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="overflow-hidden rounded-3xl">
        <motion.img
          src={p.src}
          srcSet={`${p.sm} 640w, ${p.src} ${p.w}w`}
          sizes="(min-width: 64rem) 40vw, 100vw"
          alt={p.alt}
          width={p.w}
          height={p.h}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.figure>
  )
}

export function AboutSection() {
  return (
    <section id="o-mne" className="relative overflow-hidden px-6 py-32">
      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 flex -translate-y-1/2 justify-center"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap text-center text-[19vw] font-extrabold uppercase leading-none tracking-tighter text-ghost md:text-[16vw] lg:text-[14vw]">
          Martina
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="order-2 lg:sticky lg:top-28 lg:order-1">
            <Portrait />
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">O mně</p>
            <h2 className="mb-8 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
              Martina Drexlerová
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {about.intro.map((t, i) => (
                <p key={t} className={i === 0 ? "text-lg text-green-ink" : undefined}>
                  {cz(t)}
                </p>
              ))}
            </div>
            <h3 className="mb-4 mt-12 text-2xl font-extrabold tracking-[-0.02em] text-green-ink">{about.subheading}</h3>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              {about.body.map((t) => (
                <p key={t}>{cz(t)}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
