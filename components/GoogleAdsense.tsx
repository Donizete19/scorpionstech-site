'use client'

import Script from 'next/script'
import { adManagerEnabled } from '@/components/GoogleAdManager'

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-8287077562270372'

export default function GoogleAdsense() {
  if (adManagerEnabled || !ADSENSE_CLIENT) {
    return null
  }

  return (
    <Script
      id="google-adsense-auto-ads"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}