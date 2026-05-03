import AdSlot from '@/components/AdSlot'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AppShowcase from '@/components/AppShowcase'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const heroAdSlot = process.env.NEXT_PUBLIC_GAM_SLOT_HOME_HERO
const contentAdSlot = process.env.NEXT_PUBLIC_GAM_SLOT_HOME_CONTENT
const footerAdSlot = process.env.NEXT_PUBLIC_GAM_SLOT_HOME_FOOTER

const leaderboardMapping = [
  { viewport: [1200, 0] as [number, number], sizes: [[970, 250], [970, 90], [728, 90]] as [number, number][] },
  { viewport: [768, 0] as [number, number], sizes: [[728, 90], [468, 60]] as [number, number][] },
  { viewport: [0, 0] as [number, number], sizes: [[320, 100], [320, 50], [300, 250]] as [number, number][] },
]

const rectangleMapping = [
  { viewport: [1200, 0] as [number, number], sizes: [[970, 250], [728, 90], [336, 280], [300, 250]] as [number, number][] },
  { viewport: [768, 0] as [number, number], sizes: [[728, 90], [336, 280], [300, 250]] as [number, number][] },
  { viewport: [0, 0] as [number, number], sizes: [[320, 100], [320, 50], [300, 250]] as [number, number][] },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="container-custom -mt-8 mb-12 relative z-20">
        <AdSlot
          slotPath={heroAdSlot}
          label="Patrocinado"
          sizes={[[970, 250], [970, 90], [728, 90], [320, 100], [300, 250]]}
          mapping={leaderboardMapping}
          minHeight={100}
        />
      </div>
      <Services />
      <div className="container-custom py-4 md:py-6">
        <AdSlot
          slotPath={contentAdSlot}
          label="Publicidade"
          sizes={[[970, 250], [728, 90], [336, 280], [300, 250], [320, 100]]}
          mapping={rectangleMapping}
          minHeight={100}
        />
      </div>
      <AppShowcase />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <div className="container-custom pb-10">
        <AdSlot
          slotPath={footerAdSlot}
          label="Anúncio"
          sizes={[[970, 250], [970, 90], [728, 90], [320, 100], [320, 50], [300, 250]]}
          mapping={leaderboardMapping}
          minHeight={100}
        />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}