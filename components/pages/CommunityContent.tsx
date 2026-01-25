'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Globe,
  BookOpen,
  Heart,
  Star,
  UserPlus,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react'

const stats = [
  { icon: Users, number: '10,000+', label: 'Active Members' },
  { icon: Globe, number: '50+', label: 'Cities Worldwide' },
  { icon: BookOpen, number: '500+', label: 'Subac Circles' }
]

const features = [
  {
    icon: Users,
    title: 'Connect with Fellow Muslims',
    description: 'Join a global network of Somali Muslims who share your values and faith.',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: BookOpen,
    title: 'Participate in Subac Circles',
    description: 'Find or create Quran recitation circles in your area.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Heart,
    title: 'Support Each Other',
    description: 'Build meaningful relationships and grow together in faith.',
    gradient: 'from-rose-500 to-pink-600'
  }
]

const testimonials = [
  {
    quote: "Iqra has transformed how our community organizes Quran circles. It's beautiful and easy to use.",
    author: "Fatima A.",
    location: "Minneapolis, MN"
  },
  {
    quote: "Finally an app that understands our needs as Somali Muslims. The Subac feature is amazing!",
    author: "Ahmed M.",
    location: "London, UK"
  }
]

export default function CommunityContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a3d3d 50%, #083030 100%)' }} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Community Pattern - Connected Dots */}
          <div className="absolute top-20 right-20 w-72 h-72 opacity-10 text-white">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="20" r="5" fill="currentColor"/>
              <circle cx="20" cy="50" r="5" fill="currentColor"/>
              <circle cx="80" cy="50" r="5" fill="currentColor"/>
              <circle cx="35" cy="80" r="5" fill="currentColor"/>
              <circle cx="65" cy="80" r="5" fill="currentColor"/>
              <line x1="50" y1="20" x2="20" y2="50" stroke="currentColor" strokeWidth="1"/>
              <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="1"/>
              <line x1="20" y1="50" x2="35" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="80" y1="50" x2="65" y2="80" stroke="currentColor" strokeWidth="1"/>
              <line x1="35" y1="80" x2="65" y2="80" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-15"
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
                Join the Ummah
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="heading-display heading-xl text-white mb-2">
              Join Our
            </h1>
            <h1 className="heading-display heading-xl mb-6">
              <span className="relative inline-block text-gradient">
                Community
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9C50 3 150 3 200 9" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-body-lg max-w-2xl mx-auto mb-12" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Connect with thousands of Muslims worldwide through shared faith and practice.
              Together, we grow stronger.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-primary bg-white hover:bg-gray-100"
                style={{ color: 'var(--color-primary)' }}
              >
                <UserPlus className="h-5 w-5" />
                Join Community
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 border-2"
                style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }}
              >
                <MessageCircle className="h-5 w-5" />
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="var(--color-bg)"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container-elegant">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elegant text-center group"
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                     style={{ background: 'var(--color-accent-muted)' }}>
                  <stat.icon className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
                </div>

                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {stat.number}
                </div>

                <div className="text-body font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-label mb-4 block">Community Benefits</span>
            <h2 className="heading-display heading-lg mb-4">
              Why Join Us
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Be part of something meaningful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-feature text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {feature.title}
                </h3>

                <p className="text-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="text-label mb-4 block">Testimonials</span>
              <h2 className="heading-display heading-lg">
                What Our Community Says
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elegant relative"
                >
                  {/* Quote mark */}
                  <div className="absolute -top-4 -left-2 text-6xl font-serif opacity-20" style={{ color: 'var(--color-primary)' }}>
                    "
                  </div>

                  <p className="text-body-lg mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                         style={{ background: 'var(--color-accent-muted)' }}>
                      <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
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
                <Star className="w-10 h-10" style={{ color: 'var(--color-accent)' }} />
              </div>

              <h2 className="heading-display heading-md text-white mb-4">
                Ready to Join?
              </h2>

              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Become part of a supportive Islamic community that values tradition and embraces technology.
              </p>

              <button className="btn-primary bg-white hover:bg-gray-100" style={{ color: 'var(--color-primary)' }}>
                <UserPlus className="h-5 w-5" />
                Download App & Join
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
