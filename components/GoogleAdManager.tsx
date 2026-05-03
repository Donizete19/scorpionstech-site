'use client'

import Script from 'next/script'

declare global {
  interface Window {
    googletag?: {
      cmd: Array<() => void>
      apiReady?: boolean
      pubads: () => {
        enableSingleRequest: () => void
        collapseEmptyDivs: () => void
        refresh: (slots?: unknown[]) => void
      }
      enableServices: () => void
      destroySlots: (slots?: unknown[]) => boolean
      defineSlot: (adUnitPath: string, size: GeneralSize, divId: string) => Slot | null
      display: (divId: string) => void
      sizeMapping: () => SizeMappingBuilder
    }
    __gamServicesEnabled?: boolean
  }
}

type SingleSizeArray = [number, number]
type MultiSizeArray = SingleSizeArray[]
type GeneralSize = SingleSizeArray | MultiSizeArray

interface Slot {
  addService: (service: ReturnType<NonNullable<Window['googletag']>['pubads']>) => Slot
  defineSizeMapping?: (mapping: SizeMappingArray) => Slot
}

interface SizeMappingBuilder {
  addSize: (viewportSize: [number, number], slotSize: GeneralSize | []) => SizeMappingBuilder
  build: () => SizeMappingArray
}

type SizeMappingArray = Array<[[number, number], GeneralSize | []]>

const GAM_ENABLED = process.env.NEXT_PUBLIC_GAM_ENABLED === 'true'

export const adManagerEnabled = GAM_ENABLED

export default function GoogleAdManager() {
  if (!adManagerEnabled) {
    return null
  }

  return (
    <>
      <Script id="google-ad-manager-init" strategy="beforeInteractive">
        {`
          window.googletag = window.googletag || { cmd: [] };
        `}
      </Script>
      <Script
        id="google-ad-manager-gpt"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />
      <Script id="google-ad-manager-services" strategy="afterInteractive">
        {`
          window.googletag = window.googletag || { cmd: [] };
          window.googletag.cmd.push(function() {
            if (window.__gamServicesEnabled) {
              return;
            }

            const pubads = window.googletag.pubads();
            pubads.enableSingleRequest();
            pubads.collapseEmptyDivs();
            window.googletag.enableServices();
            window.__gamServicesEnabled = true;
          });
        `}
      </Script>
    </>
  )
}