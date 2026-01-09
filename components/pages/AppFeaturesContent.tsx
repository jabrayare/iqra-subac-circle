'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  Compass, 
  MapPin, 
  Users, 
  Clock, 
  Bell,
  BookOpen,
  Star,
  Shield,
  Smartphone,
  Download,
  Apple
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Subac Circle Management',
    description: 'Organize and manage communal Quran recitation circles with scheduling, attendance tracking, and progress monitoring.',
    highlights: ['Session scheduling', 'Attendance tracking', 'Progress reports', 'Group notifications']
  },
  {
    icon: Clock,
    title: 'Accurate Prayer Times',
    description: 'Get precise prayer times based on your location with multiple calculation methods and customizable notifications.',
    highlights: ['Location-based times', 'Multiple calculation methods', 'Customizable alerts', 'Athan sounds']
  },
  {
    icon: Compass,
    title: 'Qibla Finder',
    description: 'Find the exact direction of Kaaba from anywhere in the world with our precise compass technology.',
    highlights: ['GPS-based direction', 'Visual compass', 'Real-time updates', 'Offline capability']
  },
  {
    icon: MapPin,
    title: 'Mosque Locator',
    description: 'Discover nearby mosques with detailed information, prayer times, and directions.',
    highlights: ['Nearby search', 'Mosque details', 'Prayer schedules', 'Navigation integration']
  },
  {
    icon: Calendar,
    title: 'Islamic Calendar',
    description: 'Stay connected with Islamic dates, events, and important occasions throughout the year.',
    highlights: ['Hijri calendar', 'Islamic events', 'Monthly views', 'Event reminders']
  },
  {
    icon: BookOpen,
    title: 'Quran Reading',
    description: 'Access the complete Quran with translations, audio recitations, and reading progress tracking.',
    highlights: ['Complete Quran', 'Multiple translations', 'Audio recitations', 'Reading tracker']
  }
]

const stats = [
  { number: '10,000+', label: 'Active Users' },
  { number: '500+', label: 'Subac Circles' },
  { number: '50+', label: 'Cities Covered' },
  { number: '4.8★', label: 'App Rating' }
]

const screenshots = [
  { src: '/images/app-home.jpg', alt: 'Home Screen' },
  { src: '/images/app-prayer.jpg', alt: 'Prayer Times' },
  { src: '/images/app-qibla.jpg', alt: 'Qibla Compass' },
  { src: '/images/app-mosque.jpg', alt: 'Mosque Finder' }
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-8">
              <Smartphone className="h-5 w-5 text-warm-sunset-orange mr-2" />
              <span className="text-white font-medium">Comprehensive Islamic App</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warm-sunset-orange to-yellow-400">
                Modern Muslims
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover how Iqra app combines traditional Islamic practices with modern technology 
              to serve the Somali Muslim community worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-warm-sunset-orange to-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      <Star className="h-4 w-4 text-warm-sunset-orange mr-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12">
              Trusted by the Community
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deep-ocean-blue to-warm-sunset-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Beautiful & Intuitive Design
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience a clean, modern interface designed specifically for the Islamic lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.alt}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">{screenshot.alt}</p>
                    <p className="text-xs text-gray-400 mt-2">Screenshot Preview</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <Shield className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Join thousands of Muslims who are already using Iqra to enhance their spiritual journey 
              and stay connected with their community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary inline-flex items-center">
                <Apple className="h-6 w-6 mr-2" />
                Download on App Store
              </button>
              
              <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Coming soon to iOS
              </div>
            </div>
            
            <div className="mt-8 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Free to download • No subscription required • Privacy focused
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}