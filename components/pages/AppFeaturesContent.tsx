'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Clock, 
  Compass, 
  MapPin,
  Download,
  Apple
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Subac Circles',
    description: 'Organize Quran recitation circles with your community'
  },
  {
    icon: Clock,
    title: 'Prayer Times',
    description: 'Accurate prayer times based on your location'
  },
  {
    icon: Compass,
    title: 'Qibla Direction',
    description: 'Find the exact direction to Mecca anywhere'
  },
  {
    icon: MapPin,
    title: 'Mosque Finder',
    description: 'Discover nearby mosques with detailed information'
  }
]

export default function AppFeaturesContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-ocean-blue via-purple-900 to-warm-sunset-orange">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              App Features
            </h1>
            
            <p className="text-xl text-white/80 mb-12">
              Essential tools for the modern Muslim lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-warm-sunset-orange to-yellow-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Download Iqra and join thousands of Muslims strengthening their faith.
            </p>
            
            <button className="btn-primary inline-flex items-center text-lg px-8 py-4">
              <Apple className="h-6 w-6 mr-2" />
              Download for iOS
            </button>
            
            <div className="mt-6 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Coming soon to App Store
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}