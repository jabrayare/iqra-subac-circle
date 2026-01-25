'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Apple, Shield, Sparkles, Heart } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your data stays yours. Built with privacy-first principles.'
  },
  {
    icon: Sparkles,
    title: 'Thoughtfully Designed',
    description: 'Every detail crafted with care and Islamic values.'
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Built by and for the Somali Muslim community.'
  }
]

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden bg-[#0d4f4f] dark:bg-[#0a3535]">
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#c9a227] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white rounded-full blur-[100px] opacity-5" />
      </div>

      <div className="container-elegant relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Arabic blessing */}
          <motion.p
            className="font-['Amiri'] text-2xl text-white/70 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            style={{ direction: 'rtl' }}
          >
            وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Begin your spiritual journey
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of Muslims strengthening their faith and connecting with
            their community through Iqra.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/app"
              className="inline-flex items-center gap-3 px-8 py-5 bg-white text-[#0d4f4f] font-semibold text-lg rounded-full transition-all duration-500 hover:bg-[#c9a227] hover:text-white hover:scale-105 hover:shadow-2xl hover:shadow-black/20 group"
            >
              <Apple className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Download for iOS</span>
            </Link>

            <p className="text-white/60 text-sm mt-6">
              Free download · Requires iOS 15.0 or later
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-5">
                    <Icon className="w-6 h-6 text-[#dbb84a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
