import type React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "solid" | "outline" | "light"
type Size = "sm" | "md"

const EASE = "ease-[cubic-bezier(.22,1,.36,1)]"

const variants: Record<Variant, { button: string; fill: string }> = {
  // zelené s jemným světlem na horní hraně; po najetí zespodu vyjede růžová
  solid: {
    button:
      "bg-green text-shell shadow-[inset_0_1px_0_rgba(255,255,255,.14),0_14px_30px_-14px_rgba(26,42,32,.7)] hover:text-green-ink hover:shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_18px_36px_-14px_rgba(26,42,32,.55)]",
    fill: "bg-blush",
  },
  // tenký obrys; po najetí se zaplní zelenou
  outline: {
    button: "border border-green/25 text-green-ink hover:border-green hover:text-shell",
    fill: "bg-green",
  },
  // na fotce: bílý obrys; po najetí se zaplní bílou
  light: {
    button: "border border-white/60 text-white hover:border-white hover:text-green-ink",
    fill: "bg-white",
  },
}

const sizes: Record<Size, string> = {
  sm: "h-11 gap-2.5 px-6 text-sm",
  md: "h-14 gap-3 px-8 text-[15px]",
}

export function buttonClass(variant: Variant = "outline", size: Size = "md", className?: string) {
  return cn(
    "group relative isolate inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold tracking-[-0.01em] outline-none transition-[color,border-color,box-shadow] duration-500 focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
    EASE,
    sizes[size],
    variants[variant].button,
    className,
  )
}

// Vnitřek tlačítka: výplň, která vyjede zespodu, text a šipka, která se posune doprava.
export function ButtonInner({ variant = "outline", children, arrow = true }: { variant?: Variant; children: React.ReactNode; arrow?: boolean }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 translate-y-[101%] rounded-[inherit] transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0",
          EASE,
          variants[variant].fill,
        )}
      />
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className={cn("h-4 w-4 transition-transform duration-500 group-hover:translate-x-1", EASE)}
        />
      )}
    </>
  )
}

type Props = {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  external?: boolean
}

export function PillButton({ href, children, variant = "outline", size = "md", className, onClick, external }: Props) {
  const ext = external ? { target: "_blank", rel: "noopener" } : {}

  return (
    <a href={href} onClick={onClick} {...ext} className={buttonClass(variant, size, className)}>
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </a>
  )
}
