import type React from "react"

// Plynulé sjetí na sekci s odsazením kvůli plovoucí navigaci (stejně jako v šabloně).
export function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string, after?: () => void) {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  const top = el.getBoundingClientRect().top + window.scrollY - 100
  window.scrollTo({ top, behavior: "smooth" })
  history.replaceState(null, "", `#${id}`)
  after?.()
}
