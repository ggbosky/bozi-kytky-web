import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

// Písmo Plus Jakarta Sans je self-hosted přes @font-face v globals.css.

// TODO: až bude doména jistá, ověřit metadataBase
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bozikytky.cz"),
  title: "Boží kytky – floristika Martiny Drexlerové | Praha",
  description:
    "Svatební floristika, dárkové kytice a květiny na poslední rozloučení. Na zakázku a z čerstvých květin. Praha a okolí.",
  authors: [{ name: "Martina Drexlerová" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: "Boží kytky – floristika Martiny Drexlerové",
    description: "Svatební floristika, dárkové kytice a květiny na poslední rozloučení. Praha a okolí.",
    images: ["/images/cervenobila.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#2D4635",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: "Boží kytky",
  founder: "Martina Drexlerová",
  description: "Svatební floristika, dárkové kytice a květiny na poslední rozloučení. Na zakázku a z čerstvých květin.",
  image: "https://www.bozikytky.cz/images/cervenobila.jpg",
  telephone: "+420 723 528 088",
  address: { "@type": "PostalAddress", addressLocality: "Praha", addressCountry: "CZ" },
  areaServed: "Praha a okolí",
  sameAs: ["https://www.instagram.com/bozi_kytky/", "https://www.facebook.com/Bozikytky/"],
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
