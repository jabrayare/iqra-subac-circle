'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Compass, 
  MapPin, 
  Users
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Subac Circles',
    description: 'Organize Quran recitation circles with your community',
    color: 'text-deep-ocean-blue',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    icon: Clock,
    title: 'Prayer Times',
    description: 'Accurate prayer times based on your location',
    color: 'text-warm-sunset-orange',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    icon: Compass,
    title: 'Qibla Direction',
    description: 'Find the exact direction to Mecca anywhere',
    color: 'text-accent-green',
    bgColor: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    icon: MapPin,
    title: 'Mosque Finder',
    description: 'Discover nearby mosques with detailed information',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30'
  }
]

export default function FeaturesSection() {
  return (
    <section className="section-padding pb-24">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-6">
            Everything You Need for
            <span className="gradient-text"> Islamic Practice</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Essential tools for the modern Muslim, designed specifically for the Somali community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={index}
                className="feature-card text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}