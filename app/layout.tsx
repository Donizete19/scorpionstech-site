import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Scorpions Tech - Desenvolvimento de Apps Profissionais',
  description: 'Desenvolvemos aplicativos mobile e web de alta qualidade. React Native, Flutter, Progressive Web Apps e mais. Transforme sua ideia em realidade.',
  keywords: 'desenvolvimento apps, aplicativos mobile, react native, flutter, pwa, desenvolvimento mobile, scorpions tech',
  authors: [{ name: 'Scorpions Tech' }],
  creator: 'Scorpions Tech',
  publisher: 'Scorpions Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Scorpions Tech - Desenvolvimento de Apps Profissionais',
    description: 'Desenvolvemos aplicativos mobile e web de alta qualidade. Transforme sua ideia em realidade.',
    url: 'https://scorpionstech.com',
    siteName: 'Scorpions Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scorpions Tech - Desenvolvimento de Apps',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scorpions Tech - Desenvolvimento de Apps Profissionais',
    description: 'Desenvolvemos aplicativos mobile e web de alta qualidade.',
    images: ['/og-image.jpg'],
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
      <body>
        {children}
      </body>
    </html>
  )
}