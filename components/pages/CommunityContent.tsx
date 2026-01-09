'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Globe, 
  BookOpen, 
  Heart,
  Star,
  UserPlus
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
    description: 'Join a global network of Somali Muslims who share your values and faith.'
  },
  {
    icon: BookOpen,
    title: 'Participate in Subac Circles',
    description: 'Find or create Quran recitation circles in your area.'
  },
  {
    icon: Heart,
    title: 'Support Each Other',
    description: 'Build meaningful relationships and grow together in faith.'
  }
]

export default function CommunityContent() {
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
              Join Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warm-sunset-orange to-yellow-400">
                Community
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12">
              Connect with thousands of Muslims worldwide through shared faith and practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <stat.icon className="h-12 w-12 text-warm-sunset-orange mx-auto mb-4" />
                <div className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <feature.icon className="h-12 w-12 text-warm-sunset-orange mx-auto mb-6" />
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <Star className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Ready to Join?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Become part of a supportive Islamic community that values tradition and embraces technology.
            </p>
            
            <button className="btn-primary inline-flex items-center text-lg px-8 py-4">
              <UserPlus className="h-6 w-6 mr-2" />
              Download App & Join
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}