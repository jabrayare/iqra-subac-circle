import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange">
      <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 max-w-md">
        <div className="text-6xl mb-6">🕌</div>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/80 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-white text-deep-ocean-blue rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}