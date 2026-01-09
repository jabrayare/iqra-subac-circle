export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl mb-2">🕌</div>
        </div>
        <p className="text-white/80 font-medium">Loading...</p>
      </div>
    </div>
  )
}