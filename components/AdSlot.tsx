'use client'

import { useEffect, useId, useRef } from 'react'
import { adManagerEnabled } from '@/components/GoogleAdManager'

type SingleSize = [number, number]
type GeneralSize = SingleSize | SingleSize[]
type MappingEntry = {
  viewport: [number, number]
  sizes: GeneralSize | []
}

interface AdSlotHandle {
  addService: (service: ReturnType<NonNullable<Window['googletag']>['pubads']>) => AdSlotHandle
  defineSizeMapping?: (mapping: SizeMappingArray) => AdSlotHandle
}

interface SizeMappingBuilder {
  addSize: (viewportSize: [number, number], slotSize: GeneralSize | []) => SizeMappingBuilder
  build: () => SizeMappingArray
}

type SizeMappingArray = Array<[[number, number], GeneralSize | []]>

interface AdSlotProps {
  slotPath?: string
  label?: string
  className?: string
  sizes: GeneralSize
  mapping?: MappingEntry[]
  minHeight?: number
}

function normalizeId(rawId: string) {
  return `gam-${rawId.replace(/[^a-zA-Z0-9-_]/g, '-')}`
}

export default function AdSlot({
  slotPath,
  label = 'Publicidade',
  className = '',
  sizes,
  mapping,
  minHeight = 0,
}: AdSlotProps) {
  const reactId = useId()
  const slotId = normalizeId(reactId)
  const slotRef = useRef<unknown>(null)

  useEffect(() => {
    if (!adManagerEnabled || !slotPath || !window.googletag) {
      return
    }

    let cancelled = false

    const defineSlot = () => {
      if (cancelled || !window.googletag) {
        return
      }

      const googletag = window.googletag
      googletag.cmd.push(() => {
        if (cancelled) {
          return
        }

        const slot = googletag.defineSlot(slotPath, sizes, slotId)

        if (!slot) {
          return
        }

        if (mapping?.length && slot.defineSizeMapping) {
          const sizeMapping = googletag.sizeMapping()
          mapping.forEach((entry) => {
            sizeMapping.addSize(entry.viewport, entry.sizes)
          })
          slot.defineSizeMapping(sizeMapping.build())
        }

        slot.addService(googletag.pubads())
        slotRef.current = slot
        googletag.display(slotId)
        googletag.pubads().refresh([slot])
      })
    }

    defineSlot()

    return () => {
      cancelled = true
      if (window.googletag && slotRef.current) {
        window.googletag.cmd.push(() => {
          if (slotRef.current) {
            window.googletag?.destroySlots([slotRef.current])
            slotRef.current = null
          }
        })
      }
    }
  }, [mapping, sizes, slotId, slotPath])

  if (!adManagerEnabled || !slotPath) {
    return null
  }

  return (
    <section className={`w-full ${className}`} aria-label={label}>
      <div className="mx-auto w-full max-w-screen-lg overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 shadow-sm">
        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-400">
          {label}
        </p>
        <div id={slotId} className="mx-auto flex justify-center" style={{ minHeight }} />
      </div>
    </section>
  )
}