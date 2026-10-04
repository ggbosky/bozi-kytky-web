"use client"

import { motion } from "framer-motion"
import { steps } from "@/lib/content"

// Na místě referencí ze šablony. Skutečné reference zatím nejsou a vymýšlet je nebudeme.
export function StepsSection() {
  return (
    <section id="postup" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Jak to probíhá</p>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
            Tři kroky, žádné formuláře navíc.
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col rounded-2xl bg-card p-8"
              style={{
                boxShadow: "rgba(26,42,32,.05) 0px 0px 0px 1px, rgba(26,42,32,.04) 0px 12px 24px -12px",
              }}
            >
              <span className="mb-8 text-6xl font-light leading-none text-blush tabular-nums">0{i + 1}</span>
              <h3 className="mb-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-green-ink">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
