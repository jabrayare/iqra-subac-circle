'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Clock,
  Compass,
  MapPin,
  Apple,
  Sparkles,
  ChevronRight
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Subac Circles',
    description: 'Organize Quran recitation circles with your community',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Clock,
    title: 'Prayer Times',
    description: 'Accurate prayer times based on your location',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    icon: Compass,
    title: 'Qibla Direction',
    description: 'Find the exact direction to Mecca anywhere',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: MapPin,
    title: 'Mosque Finder',
    description: 'Discover nearby mosques with detailed information',
    gradient: 'from-rose-500 to-pink-600'
  }
]

export default function AppFeaturesContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #083838) 50%, #0a2e2e 100%)' }} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric Pattern */}
          <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-mandala">
              <defs>
                <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#heroPattern)" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15"
               style={{ background: 'radial-gradient(circle, #4fb8b8 0%, transparent 70%)' }} />
        </div>

        <div className="container-elegant relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                Designed for the Ummah
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="heading-display heading-xl text-white mb-6">
              App{' '}
              <span className="relative inline-block">
                Features
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9C50 3 150 3 200 9" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-body-lg max-w-2xl mx-auto mb-12" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Essential tools crafted with care for the modern Muslim lifestyle.
              Everything you need to strengthen your faith journey.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: 'Features', value: '4+' },
                { label: 'Calculation Methods', value: '8' },
                { label: 'Always Free', value: '100%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="var(--color-bg)"/>
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-label mb-4 block">Core Features</span>
            <h2 className="heading-display heading-lg mb-4">
              Everything You Need
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Powerful Islamic tools designed with precision and care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-feature group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>

                <p className="text-body text-sm mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #083838) 100%)' }}
          >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}
              >
                <Apple className="w-10 h-10" style={{ color: 'var(--color-accent)' }} />
              </motion.div>

              <h2 className="heading-display heading-md text-white mb-4">
                Ready to Get Started?
              </h2>

              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Download Iqra and join thousands of Muslims strengthening their faith.
              </p>

              <button className="btn-primary bg-white hover:bg-gray-100" style={{ color: 'var(--color-primary)' }}>
                <Apple className="h-5 w-5" />
                Download for iOS
              </button>

              <p className="mt-6 text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Coming soon to App Store
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
