import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

// Písmo Plus Jakarta Sans je self-hosted přes @font-face v globals.css.

// TODO: až bude doména jistá, ověřit metadataBase
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bozikytky.cz"),
  title: "Boží Kytky — autorská floristika Martiny Drexlerové | Praha",
  description:
    "Svatební kytice, výzdoba oslav a smuteční vazby na míru. Praha a okolí. Každou zakázku si s vámi projdu osobně.",
  authors: [{ name: "Martina Drexlerová" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: "Boží Kytky — autorská floristika Martiny Drexlerové",
    description: "Svatební kytice, výzdoba oslav a smuteční vazby na míru. Praha a okolí.",
    images: ["/images/cervenobila.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#2D4635",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Boží Kytky",
  founder: "Martina Drexlerová",
  description: "Svatební kytice, výzdoba oslav a smuteční vazby na míru.",
  image: "https://www.bozikytky.cz/images/cervenobila.jpg",
  telephone: "+420 723 528 088",
  address: { "@type": "PostalAddress", addressLocality: "Praha", addressCountry: "CZ" },
  areaServed: "Praha a okolí",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="font-sans antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
