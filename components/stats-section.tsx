"use client"

import { useEffect, useRef, useState } from "react"

function useCountUp(end: number, run: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!run) return
    let startTime: number | undefined
    let frame: number

    const animate = (now: number) => {
      if (startTime === undefined) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * end))
      if (progress < 1) frame = requestAnimationFrame(animate)
      else setCount(end)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [end, run, duration])

  return count
}

// Čísla, která vychází z toho, co Martina sama říká — žádné vymyšlené statistiky.
export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const from = useCountUp(7, isVisible, 1400)
  const to = useCountUp(14, isVisible)
  const one = useCountUp(1, isVisible, 800)
  const three = useCountUp(3, isVisible, 1200)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const items = [
    { value: `${from}–${to}`, label: "dní dopředu je ideální se ozvat" },
    { value: `${one}`, label: "člověk od první zprávy po poslední stonek" },
    { value: `${three}`, label: "obory — svatby, oslavy, rozloučení" },
  ]

  return (
    <section ref={ref} className="bg-background px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <p className="mb-3 text-6xl font-light leading-none text-green tabular-nums md:text-7xl">{item.value}</p>
              <p className="mx-auto max-w-[16rem] text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
