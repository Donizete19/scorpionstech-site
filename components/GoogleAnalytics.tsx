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

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-F3KHLQDRHB'

function trackPageView(url: string) {
  if (typeof window.gtag !== 'function') {
    return false
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    page_path: url,
  })

  return true
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const [isReady, setIsReady] = useState(false)
  const hasTrackedInitialPage = useRef(false)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !isReady) {
      return
    }

    const url = queryString ? `${pathname}?${queryString}` : pathname
    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true
      return
    }

    trackPageView(url)
  }, [isReady, pathname, queryString])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setIsReady(true)}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname + window.location.search
          });
        `}
      </Script>
    </>
  )
}