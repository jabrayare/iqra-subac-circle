'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Apple } from 'lucide-react'
import Link from 'next/link'

// Geometric Mandala SVG Component
function GeometricMandala() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] pointer-events-none">
      {/* Outer ring */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-mandala text-[var(--color-primary)] opacity-[0.08] dark:opacity-[0.15]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        {/* Concentric circles */}
        {[180, 150, 120, 90, 60].map((r, i) => (
          <circle key={i} cx="200" cy="200" r={r} opacity={1 - i * 0.15} />
        ))}

        {/* 8-pointed star pattern */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <line x1="200" y1="20" x2="200" y2="180" />
            <path d="M200 40 L210 100 L200 80 L190 100 Z" />
          </g>
        ))}

        {/* Inner decorative arcs */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <path d="M200 80 Q220 100 200 120" fill="none" />
          </g>
        ))}
      </svg>

      {/* Inner ring - counter rotating */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full animate-mandala-reverse text-[var(--color-accent)] opacity-[0.06] dark:opacity-[0.12]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
      >
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 200 200)`}>
            <line x1="200" y1="80" x2="200" y2="140" opacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  )
}

// Phone Mockup Component
function PhoneMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="phone-frame w-[280px] md:w-[320px] mx-auto">
        <div className="phone-notch" />
        <div className="phone-screen">
          {/* App Header */}
          <div className="bg-[var(--color-primary)] px-6 py-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium opacity-90">Assalamu Alaikum</span>
              <span className="text-xs opacity-70">Minneapolis, MN</span>
            </div>
            <div className="text-2xl font-serif">Maghrib</div>
            <div className="text-4xl font-light tracking-tight">6:42 PM</div>
            <div className="text-sm opacity-80 mt-1">in 2h 15m</div>
          </div>

          {/* Prayer Times Grid */}
          <div className="p-6 space-y-4 bg-[#faf8f5]">
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { name: 'Fajr', time: '5:12' },
                { name: 'Dhuhr', time: '12:30' },
                { name: 'Asr', time: '3:45' },
                { name: 'Maghrib', time: '6:42', active: true },
                { name: 'Isha', time: '8:15' },
              ].map((prayer) => (
                <div
                  key={prayer.name}
                  className={`py-3 rounded-xl ${
                    prayer.active
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[#ebe7df] text-[#1a1a1a]'
                  }`}
                >
                  <div className="font-medium mb-1">{prayer.name}</div>
                  <div className={prayer.active ? 'opacity-90' : 'opacity-60'}>{prayer.time}</div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-[#ebe7df] rounded-2xl p-4">
                <div className="w-8 h-8 bg-[var(--color-accent-muted)] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🧭</span>
                </div>
                <div className="text-sm font-medium text-[#1a1a1a]">Qibla</div>
                <div className="text-xs text-[#5c5c5c] mt-1">137° SE</div>
              </div>
              <div className="bg-[#ebe7df] rounded-2xl p-4">
                <div className="w-8 h-8 bg-[var(--color-accent-muted)] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">📿</span>
                </div>
                <div className="text-sm font-medium text-[#1a1a1a]">Subac</div>
                <div className="text-xs text-[#5c5c5c] mt-1">3 active</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent */}
      <motion.div
        className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-accent)] rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 hero-bg">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-[0.05] dark:opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* Geometric decoration */}
      <GeometricMandala />

      <div className="container-elegant relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Bismillah */}
            <motion.p
              className="arabic-elegant text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </motion.p>

            {/* Label */}
            <motion.div
              className="badge mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Available on iOS
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="heading-display heading-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Islamic{' '}
              <span className="underline-animated">Community</span>,{' '}
              <span className="text-gradient">Connected</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-body text-body-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Manage Subac circles, track prayer times with precision, find Qibla direction,
              and discover nearby mosques. Built with intention for the Somali Muslim community.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/app" className="btn-primary">
                <Apple className="w-5 h-5" />
                Download for iOS
              </Link>
              <Link href="/app" className="btn-secondary group">
                Explore Features
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-[var(--color-border)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div>
                <div className="text-2xl font-serif font-semibold text-[var(--color-text-primary)]">5,000+</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Active users</div>
              </div>
              <div className="w-px h-10 bg-[var(--color-border)] hidden sm:block" />
              <div>
                <div className="text-2xl font-serif font-semibold text-[var(--color-text-primary)]">4.9</div>
                <div className="text-sm text-[var(--color-text-secondary)]">App Store rating</div>
              </div>
              <div className="w-px h-10 bg-[var(--color-border)] hidden sm:block" />
              <div>
                <div className="text-2xl font-serif font-semibold text-[var(--color-text-primary)]">100+</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Subac circles</div>
              </div>
            </motion.div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
