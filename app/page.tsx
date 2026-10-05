import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { StepsSection } from "@/components/steps-section"
import { InquirySection } from "@/components/inquiry-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { MotionProvider } from "@/components/motion-provider"

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <StepsSection />
        <InquirySection />
        <FAQSection />
        <Footer />
      </main>
    </MotionProvider>
  )
}
