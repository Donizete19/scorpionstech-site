'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-RBDH57BGK8'
const GA_DEBUG_MODE = process.env.NEXT_PUBLIC_GA_DEBUG === 'true'

function trackPageView(url: string, debugMode: boolean) {
  if (typeof window.gtag !== 'function') {
    return false
  }

  window.gtag('event', 'page_view', {
    send_to: GA_MEASUREMENT_ID,
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
    debug_mode: debugMode,
  })

  return true
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const debugParam = searchParams.get('ga_debug')
  const debugMode = GA_DEBUG_MODE || debugParam === '1' || debugParam === 'true'
  const [isReady, setIsReady] = useState(false)
  const lastTrackedUrl = useRef<string | null>(null)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isReady) {
      return
    }

    const url = queryString ? `${pathname}?${queryString}` : pathname
    if (lastTrackedUrl.current === url) {
      return
    }

    lastTrackedUrl.current = url
    trackPageView(url, debugMode)
  }, [debugMode, isReady, pathname, queryString])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onReady={() => setIsReady(true)}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            debug_mode: ${debugMode ? 'true' : 'false'}
          });
        `}
      </Script>
    </>
  )
}