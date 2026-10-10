"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/lib/content"
import { cz } from "@/lib/typo"
import { cn } from "@/lib/utils"

// Harmonika: otevřená je vždy nejvýš jedna otázka. Pevná ID (ne generovaná),
// aby se serverové a klientské HTML vždy shodovaly.
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 pb-[max(12rem,30vw)] pt-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Časté otázky</p>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
            Než se zeptáte…
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-xl border bg-card px-6 transition-colors duration-300",
                  isOpen ? "border-green/30 bg-blush-soft/60" : "border-border",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-base font-medium text-green-ink outline-none focus-visible:underline"
                  >
                    <span className="flex gap-4">
                      <span className="tabular-nums text-rose">0{index + 1}</span>
                      {cz(faq.q)}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-3 pb-5 pl-9 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.a.map((p) => (
                        <p key={p}>{cz(p)}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
