"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { photos, reasons } from "@/lib/content"

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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Portrait />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">O mně</p>
              <h2 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
                Martina Drexlerová
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-green-ink">
                Jmenuju se Martina a vážu květiny pro svatby, oslavy i poslední rozloučení.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Mám ráda, když přijdete s&nbsp;něčím, co jsem ještě nedělala. Výzvy mě baví a vždycky se pokusím o co
                nejlepší výsledek.
              </p>
              <p className="mt-6 text-lg font-semibold text-rose">— vždycky věřím, že se domluvíme.</p>
            </motion.div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, index) => (
                <motion.li
                  key={r.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 rounded-xl p-3 transition-colors duration-300 hover:bg-blush-soft"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green shadow-md">
                    <Check className="h-3.5 w-3.5 text-blush" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    <strong className="block font-semibold text-green-ink">{r.title}</strong>
                    {r.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
