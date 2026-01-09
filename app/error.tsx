'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-white/80 mb-6">We encountered an error while loading this page.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-white text-deep-ocean-blue rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}