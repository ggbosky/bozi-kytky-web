"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { contact } from "@/lib/content"
import { cz } from "@/lib/typo"
import { PillButton, ButtonInner, buttonClass } from "./pill-button"

// Formulář umí dva režimy: bez ENDPOINT otevře předvyplněný e-mail,
// s adresou (Formspree, Web3Forms, vlastní skript…) odešle data na pozadí.
const ENDPOINT = ""

const field =
  "w-full rounded-xl border border-border bg-shell px-4 py-3 text-base text-green-ink placeholder:text-muted-foreground/60 transition-colors focus:border-green focus:bg-white focus:outline-none"
const label = "mb-2 block text-[11px] font-medium uppercase tracking-[0.14em] text-rose"

function InquiryForm() {
  const [status, setStatus] = useState<{ tone: "ok" | "err"; text: string } | null>(null)
  const [sending, setSending] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      setStatus({ tone: "err", text: "Vyplňte prosím jméno a e-mail a potvrďte souhlas se zpracováním údajů." })
      return
    }

    const data = new FormData(form)

    if (ENDPOINT) {
      setSending(true)
      try {
        const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        if (!res.ok) throw new Error(String(res.status))
        form.reset()
        setStatus({ tone: "ok", text: "Děkuji, poptávka dorazila. Ozvu se vám co nejdříve." })
      } catch {
        setStatus({ tone: "err", text: `Odeslání se nepovedlo. Napište mi prosím přímo na ${contact.email}.` })
      } finally {
        setSending(false)
      }
      return
    }

    const lines = [
      ["Jméno", data.get("jmeno")],
      ["E-mail", data.get("email")],
      ["Telefon", data.get("telefon")],
      ["Datum akce", data.get("datum")],
      ["Typ akce", data.get("typ")],
      ["Rozpočet", data.get("rozpocet")],
      ["Místo", data.get("misto")],
      ["Představa", data.get("poznamka")],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n")

    const subject = `Poptávka – ${data.get("typ") || "květiny"}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
    setStatus({ tone: "ok", text: "Otevírám váš e-mailový program s předvyplněnou zprávou." })
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={label}>Jméno a příjmení</label>
          <input id="f-name" name="jmeno" autoComplete="name" placeholder="Jana Nováková" required className={field} />
        </div>
        <div>
          <label htmlFor="f-email" className={label}>E-mail</label>
          <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="jana@email.cz" required className={field} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-phone" className={label}>Telefon</label>
          <input id="f-phone" name="telefon" type="tel" autoComplete="tel" inputMode="tel" placeholder="+420 777 123 456" className={field} />
        </div>
        <div>
          <label htmlFor="f-date" className={label}>Datum akce / předání</label>
          <input id="f-date" name="datum" type="date" className={field} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-type" className={label}>Typ akce</label>
          <select id="f-type" name="typ" className={field}>
            <option>Svatba</option>
            <option>Oslava, narozeniny, jubileum</option>
            <option>Dárková kytice</option>
            <option>Poslední rozloučení</option>
            <option>Jiné</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-budget" className={label}>Předpokládaný rozpočet</label>
          <select id="f-budget" name="rozpocet" className={field}>
            <option>Zatím nevím</option>
            <option>do 5 000 Kč</option>
            <option>5 000–15 000 Kč</option>
            <option>nad 15 000 Kč</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="f-place" className={label}>Místo konání</label>
        <input id="f-place" name="misto" placeholder="Obřadní síň, statek u lesa…" className={field} />
      </div>

      <div>
        <label htmlFor="f-note" className={label}>Představa a poznámka</label>
        <textarea id="f-note" name="poznamka" rows={5} placeholder="Barvy, nálada, počet stolů, odkaz na inspiraci…" className={field} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input type="checkbox" name="souhlas" required className="mt-1 h-4 w-4 accent-[var(--green)]" />
        <span>Souhlasím se zpracováním uvedených údajů za účelem vyřízení mé poptávky.</span>
      </label>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className={buttonClass("solid", "md")}>
          <ButtonInner variant="solid">{sending ? "Odesílám…" : "Odeslat nezávaznou poptávku"}</ButtonInner>
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status?.tone === "err" ? "text-destructive" : "text-green"}`}
        >
          {status?.text}
        </p>
      </div>
    </form>
  )
}

export function InquirySection() {
  return (
    <section id="poptavka" className="relative overflow-hidden px-6 py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-rose">Nezávazná poptávka</p>
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-green md:text-5xl">
            Napište mi, co chystáte.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-muted-foreground">
            {cz(
              "Stačí pár řádků. Čím více mi napíšete o tom, co chystáte a pro koho to je, tím lépe – ozvu se vám s návrhem i cenou. Poptávka vás k ničemu nezavazuje.",
            )}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PillButton href={contact.phoneHref} variant="solid">
              Zavolat {contact.phone}
            </PillButton>
            <PillButton href={`mailto:${contact.email}`}>Napsat na {contact.email}</PillButton>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mb-20 w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10"
          style={{
            boxShadow:
              "rgba(26,42,32,.06) 0px 0px 0px 1px, rgba(26,42,32,.04) 0px 1px 1px -0.5px, rgba(26,42,32,.06) 0px 6px 6px -3px, rgba(26,42,32,.06) 0px 12px 12px -6px, rgba(26,42,32,.06) 0px 24px 24px -12px",
          }}
        >
          <InquiryForm />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:gap-20">
          <a href={contact.phoneHref} className="group">
            <p className="text-3xl font-light text-green-ink transition-colors group-hover:text-rose md:text-4xl">{contact.phone}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Telefon</p>
          </a>
          <a href={`mailto:${contact.email}`} className="group">
            <p className="text-3xl font-light text-green-ink transition-colors group-hover:text-rose md:text-4xl">{contact.email}</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
          </a>
        </div>
      </div>
    </section>
  )
}
