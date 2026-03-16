import type { Metadata } from 'next'
import Script from 'next/script'





































































































export default WhatsAppButton}  )    </>      `}</style>        }          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;        .animate-ping {                }          animation: bounce 1s ease-in-out;        .animate-bounce {                }          }            opacity: 0;            transform: scale(1.5);          75%, 100% {        @keyframes ping {                }          }            transform: translateY(-10px);          50% {          }            transform: translateY(0);          0%, 100% {        @keyframes bounce {      <style jsx>{`      {/* Custom animations */}      </div>        </button>          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>          {/* Online indicator */}                    <MessageCircle className="w-7 h-7 text-white relative z-10" />          {/* WhatsApp Icon */}                    <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>          {/* Pulse animation */}        >          aria-label="Abrir WhatsApp"          style={{ animationIterationCount: '3', animationDelay: '2s' }}          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce"          onClick={() => setIsOpen(!isOpen)}        <button        {/* Main WhatsApp Button */}        )}          </div>            </a>              Iniciar Conversa            >              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-semibold transition-colors"              rel="noopener noreferrer"              target="_blank"              href={whatsappUrl}            <a            </p>              Olá! 👋 Como podemos ajudar você hoje?            <p className="text-sm text-gray-600 mb-3">            </div>              </button>                <X className="w-4 h-4" />              >                className="text-gray-400 hover:text-gray-600"                onClick={() => setIsOpen(false)}              <button               </div>                </div>                  <p className="text-xs text-green-500">Online</p>                  <p className="font-bold text-gray-900">Scorpions Tech</p>                <div>                </div>                  <MessageCircle className="w-5 h-5 text-white" />                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">              <div className="flex items-center gap-2">            <div className="flex items-start justify-between mb-2">          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-xs animate-fade-in">        {isOpen && (        {/* Message Bubble (appears when hovering) */}              <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">      {/* Floating WhatsApp Button */}    <>  return (  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`    const message = 'Olá! Gostaria de saber mais sobre desenvolvimento de apps.'  const phoneNumber = '5511999999999'  // CONFIGURE SEU NÚMERO AQUI (formato: 5511999999999)    const [isOpen, setIsOpen] = useState(false)const WhatsAppButton = () => {import { useState } from 'react'import { MessageCircle, X } from 'lucide-react'import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Scorpions Tech - Desenvolvimento de Apps Mobile e Web | React Native, Flutter & PWA',
  description: 'Transformamos ideias em apps incríveis! 🚀 Desenvolvimento profissional de aplicativos mobile (iOS/Android), Progressive Web Apps e sistemas web. +50 projetos entregues com 100% de satisfação. Orçamento grátis!',
  keywords: 'desenvolvimento de aplicativos, criar app, desenvolvimento mobile, app ios android, react native, flutter, progressive web apps, pwa, desenvolvimento web, api backend, nodejs, app delivery, app e-commerce, scorpions tech, desenvolvedora de apps',
  authors: [{ name: 'Scorpions Tech' }],
  creator: 'Scorpions Tech',
  publisher: 'Scorpions Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Scorpions Tech - Desenvolvimento de Apps Mobile e Web',
    description: 'Transformamos ideias em apps incríveis! +50 projetos entregues. React Native, Flutter, PWA. Orçamento grátis!',
    url: 'https://scorpionstech.com.br',
    siteName: 'Scorpions Tech',
    images: [
      {
        url: 'https://scorpionstech.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scorpions Tech - Desenvolvimento de Apps Profissionais',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scorpions Tech - Desenvolvimento de Apps Mobile e Web',
    description: 'Transformamos ideias em apps incríveis! +50 projetos entregues. Orçamento grátis!',
    images: ['https://scorpionstech.com.br/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOURCLARITYID");
          `}
        </Script>

        {/* Schema.org Structured Data */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Scorpions Tech",
              "url": "https://scorpionstech.com.br",
              "logo": "https://scorpionstech.com.br/logo.png",
              "description": "Desenvolvimento profissional de aplicativos mobile e web",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "Brasil"
              },
              "sameAs": [
                "https://instagram.com/scorpionstech",
                "https://linkedin.com/company/scorpionstech",
                "https://github.com/scorpionstech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["Portuguese", "English"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              },
              "offers": {
                "@type": "Offer",
                "description": "Desenvolvimento de Aplicativos Mobile e Web"
              }
            }
          `}
        </Script>

        <Script id="schema-service" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Scorpions Tech - Desenvolvimento de Apps",
              "image": "https://scorpionstech.com.br/logo.png",
              "description": "Desenvolvimento de aplicativos mobile (iOS/Android), Progressive Web Apps, APIs e sistemas web personalizados",
              "priceRange": "$$",
              "telephone": "+55-XX-XXXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "BR"
              },
              "url": "https://scorpionstech.com.br",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}