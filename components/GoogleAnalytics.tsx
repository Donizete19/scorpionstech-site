'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-F3KHLQDRHB'

function trackPageView(url: string) {
  if (typeof window.gtag !== 'function') {
    return false
  }

  window.gtag('event', 'page_view', {
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

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return
    }

    const url = queryString ? `${pathname}?${queryString}` : pathname
    let cancelled = false

    const sendPageView = () => {
      if (cancelled) {
        return
      }

      if (trackPageView(url)) {
        return
      }

      window.setTimeout(sendPageView, 250)
    }

    sendPageView()

    return () => {
      cancelled = true
    }
  }, [pathname, queryString])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  )
}