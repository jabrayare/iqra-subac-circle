'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Add Google Analytics script
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
      script.async = true
      document.head.appendChild(script)

      // Initialize gtag
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        ;(window as any).dataLayer = (window as any).dataLayer || []
        // eslint-disable-next-line prefer-rest-params
        ;(window as any).dataLayer.push(arguments)
      }

      window.gtag('js', new Date())
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}