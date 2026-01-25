'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Compass, MapPin, Users, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Subac Circles',
    description: 'Create and manage Quran recitation circles with your community. Track progress, coordinate schedules, and celebrate completions together.',
    number: '01'
  },
  {
    icon: Clock,
    title: 'Prayer Times',
    description: 'Accurate prayer times calculated for your exact location. Never miss a prayer with intelligent notifications and countdown timers.',
    number: '02'
  },
  {
    icon: Compass,
    title: 'Qibla Direction',
    description: 'Find the precise direction to the Kaaba from anywhere in the world. Augmented reality compass for intuitive navigation.',
    number: '03'
  },
  {
    icon: MapPin,
    title: 'Mosque Finder',
    description: 'Discover nearby mosques with prayer times, facilities, and community events. Connect with local Islamic centers.',
    number: '04'
  }
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-feature h-full">
        {/* Number */}
        <span className="text-6xl font-serif font-bold text-[var(--color-primary)] opacity-10 absolute top-6 right-6 select-none">
          {feature.number}
        </span>

        {/* Icon */}
        <div className="icon-container mb-8 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="heading-display heading-md mb-4 group-hover:text-[var(--color-primary)] transition-colors">
          {feature.title}
        </h3>

        <p className="text-body leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span>Learn more</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text-primary) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container-elegant relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-label mb-4 block">Features</span>

          <h2 className="heading-display heading-lg mb-6">
            Everything you need for your{' '}
            <span className="text-gradient">Islamic practice</span>
          </h2>

          <p className="text-body text-body-lg">
            Essential tools designed with intention, built for the modern Muslim lifestyle.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Decorative element */}
        <div className="absolute -right-32 top-1/2 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-[0.03] dark:opacity-[0.06] blur-3xl pointer-events-none" />
      </div>
    </section>
  )
}
