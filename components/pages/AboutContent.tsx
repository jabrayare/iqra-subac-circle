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
  Building
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Faith-Centered',
    description: 'Every feature strengthens the connection between Muslims and their faith.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building meaningful connections within the global Muslim community.'
  },
  {
    icon: Globe,
    title: 'Accessible',
    description: 'Making Islamic tools available to Muslims everywhere.'
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
              About Iqra
            </h1>
            
            <p className="text-xl text-white/80 mb-12">
              Connecting the global Somali Muslim community through technology, tradition, and shared faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center mb-20"
          >
            <Target className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Our Mission
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-3xl mx-auto">
              To empower the global Somali Muslim community by providing innovative, faith-centered technology 
              that strengthens Islamic practice and fosters community connections.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <value.icon className="h-12 w-12 text-warm-sunset-orange mx-auto mb-6" />
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What We Built */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 mb-20"
          >
            <div className="text-center mb-12">
              <Code className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                What We've Built
              </h2>
              <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark">
                Comprehensive Islamic tools for the modern Muslim lifestyle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-r from-deep-ocean-blue/50 to-purple-600/50 rounded-2xl"
                >
                  <feature.icon className="h-10 w-10 text-white mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-12 text-center"
          >
            <Mail className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Get in Touch
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have questions, feedback, or want to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hello@iqra-subac.com"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </a>
              
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 border-2 border-warm-sunset-orange text-warm-sunset-orange rounded-xl font-semibold hover:bg-warm-sunset-orange hover:text-white transition-colors"
              >
                <Building className="h-5 w-5 mr-2" />
                Support Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}