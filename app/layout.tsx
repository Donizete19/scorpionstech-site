import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'

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
          src="https://www.googletagmanager.com/gtag/js?id=G-F3KHLQDRHB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', 'G-F3KHLQDRHB');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vxdk6fsaap");
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}