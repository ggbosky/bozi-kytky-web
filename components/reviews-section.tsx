"use client"

import { motion } from "framer-motion"
import { Facebook } from "lucide-react"
import { reviews, reviewsSource } from "@/lib/content"
import { cz } from "@/lib/typo"

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")

// Recenze ve stylu projectwo.com: kulatá fotka nahoře, citace kurzívou, pod ní jméno a zdroj.
export function ReviewsSection() {
  return (
    <section id="recenze" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Recenze</p>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
            Co říkají zákazníci
          </h2>
          <a
            href={reviewsSource.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-green"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            {reviewsSource.summary}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex w-full flex-col items-center rounded-3xl bg-white px-8 pb-8 pt-10 text-center md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              style={{ boxShadow: "rgba(26,42,32,.05) 0px 0px 0px 1px, rgba(26,42,32,.05) 0px 16px 32px -16px" }}
            >
              {r.photo ? (
                <img
                  src={r.photo}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-blush ring-offset-4 ring-offset-white"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blush-soft text-lg font-extrabold text-green ring-2 ring-blush ring-offset-4 ring-offset-white"
                >
                  {initials(r.name)}
                </span>
              )}
              <blockquote className="mt-7 flex-1 text-balance text-lg italic leading-relaxed text-green-ink">
                „{cz(r.text)}“
              </blockquote>
              <figcaption className="mt-6 flex flex-col items-center gap-1 text-sm">
                <span className="font-semibold text-green-ink">{r.name}</span>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener"
                  className="whitespace-nowrap text-rose transition-colors hover:text-green"
                >
                  {reviewsSource.label} · {r.date}
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
