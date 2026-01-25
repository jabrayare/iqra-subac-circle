'use client'

import { motion } from 'framer-motion'
import {
  Heart,
  Globe,
  Users,
  BookOpen,
  Target,
  Code,
  Mail,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Faith-Centered',
    description: 'Every feature strengthens the connection between Muslims and their faith.',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building meaningful connections within the global Muslim community.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Globe,
    title: 'Accessible',
    description: 'Making Islamic tools available to Muslims everywhere.',
    gradient: 'from-emerald-500 to-teal-600'
  }
]

const features = [
  { icon: Users, title: 'Subac Management', description: 'Organize Quran circles' },
  { icon: BookOpen, title: 'Prayer Times', description: 'Accurate times by location' },
  { icon: Target, title: 'Qibla Finder', description: 'Direction to Kaaba' },
  { icon: Building, title: 'Mosque Locator', description: 'Find nearby mosques' }
]

export default function AboutContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a3d3d 60%, #062828 100%)' }} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Islamic Geometric Pattern */}
          <div className="absolute top-10 left-10 w-80 h-80 opacity-5 text-white">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-mandala-reverse">
              <polygon points="50,0 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute -top-32 right-0 w-96 h-96 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full opacity-15"
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
                Our Story
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="heading-display heading-xl text-white mb-6">
              About{' '}
              <span className="relative inline-block">
                Iqra
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9C50 3 150 3 200 9" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-body-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Connecting the global Somali Muslim community through technology, tradition, and shared faith.
            </p>

            {/* Arabic Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="arabic-elegant text-2xl mb-2"
              style={{ color: 'var(--color-accent)' }}
            >
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </motion.div>
            <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              "Read in the name of your Lord who created" — Surah Al-Alaq
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="var(--color-bg)"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elegant text-center mb-20 relative overflow-hidden"
          >
            {/* Decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }} />

            <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                 style={{ background: 'linear-gradient(135deg, var(--color-accent-muted), rgba(201, 162, 39, 0.1))' }}>
              <Target className="h-10 w-10" style={{ color: 'var(--color-primary)' }} />
            </div>

            <span className="text-label mb-4 block">Our Mission</span>

            <h2 className="heading-display heading-md mb-6">
              Empowering Faith Through Technology
            </h2>

            <p className="text-body-lg max-w-3xl mx-auto leading-relaxed">
              To empower the global Somali Muslim community by providing innovative, faith-centered technology
              that strengthens Islamic practice and fosters community connections.
            </p>
          </motion.div>

          {/* Values */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-label mb-4 block">Our Values</span>
              <h2 className="heading-display heading-lg">What Guides Us</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-feature text-center group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    {value.title}
                  </h3>

                  <p className="text-body">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What We Built */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elegant mb-20"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                   style={{ background: 'var(--color-accent-muted)' }}>
                <Code className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="heading-display heading-md mb-4">
                What We've Built
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Comprehensive Islamic tools for the modern Muslim lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                >
                  <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                       style={{ background: 'var(--color-accent-muted)' }}>
                    <feature.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #062828 100%)' }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48" style={{ background: 'radial-gradient(circle, #4fb8b8 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                   style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}>
                <Mail className="w-10 h-10" style={{ color: 'var(--color-accent)' }} />
              </div>

              <h2 className="heading-display heading-md text-white mb-4">
                Get in Touch
              </h2>

              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                We'd love to hear from you. Whether you have questions, feedback, or want to connect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:iqrasubac@gmail.com"
                  className="btn-primary bg-white hover:bg-gray-100"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                </a>

                <a
                  href="/support"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 border-2"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }}
                >
                  <Building className="h-5 w-5" />
                  Support Center
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
