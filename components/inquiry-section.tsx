"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { contact } from "@/lib/content"
import { cz } from "@/lib/typo"
import { PillButton, ButtonInner, buttonClass } from "./pill-button"

// Odesílání přes FormSubmit (formsubmit.co) — bez účtu a bez vlastního serveru, poptávky chodí na contact.email.
// Úplně první odeslání pošle na tuto adresu aktivační e-mail; po kliknutí na „Activate Form“ už chodí všechny
// poptávky rovnou do schránky. Na poptávku jde odpovědět přímo z e-mailu (odpověď míří na adresu zákazníka).
const ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`

const czDate = (iso: string) => {
  const [y, m, d] = iso.split("-")
  return y && m && d ? `${Number(d)}. ${Number(m)}. ${y}` : iso
}

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
    const get = (k: string) => String(data.get(k) ?? "").trim()
    const payload: Record<string, string> = {
      _subject: `Poptávka z webu – ${get("typ") || "květiny"} (${get("jmeno")})`,
      _template: "table",
      _captcha: "false",
      _replyto: get("email"),
      _honey: get("_honey"),
      "Jméno a příjmení": get("jmeno"),
      "E-mail": get("email"),
      Telefon: get("telefon") || "–",
      "Datum akce / předání": get("datum") ? czDate(get("datum")) : "–",
      "Typ akce": get("typ"),
      "Předpokládaný rozpočet": get("rozpocet"),
      "Představa a poznámka": get("poznamka") || "–",
    }

    setSending(true)
    setStatus(null)
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && String(json.success) === "true") {
        form.reset()
        setStatus({ tone: "ok", text: "Děkuji, poptávka dorazila. Ozvu se vám co nejdříve." })
      } else if (/activat/i.test(String(json.message ?? ""))) {
        // jen při úplně prvním odeslání, než Martina formulář aktivuje
        setStatus({
          tone: "err",
          text: `Formulář čeká na aktivaci: na ${contact.email} přišel e-mail od FormSubmit, stačí v něm kliknout na „Activate Form“.`,
        })
      } else {
        throw new Error(String(json.message ?? res.status))
      }
    } catch {
      setStatus({ tone: "err", text: `Odeslání se nepovedlo. Napište mi prosím přímo na ${contact.email}.` })
    } finally {
      setSending(false)
    }
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
        <label htmlFor="f-note" className={label}>Představa a poznámka</label>
        <textarea id="f-note" name="poznamka" rows={5} placeholder="Barvy, nálada, počet stolů, odkaz na inspiraci…" className={field} />
      </div>

      {/* past na spamové roboty — člověk pole nevidí a nevyplní */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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
