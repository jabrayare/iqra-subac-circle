'use client'

import { motion } from 'framer-motion'
import { Download, Shield, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is protected with industry-standard encryption'
  },
  {
    icon: CheckCircle,
    title: 'Islamic Values',
    description: 'Built with Islamic principles and community in mind'
  },
  {
    icon: Star,
    title: '4.9 Star Rating',
    description: 'Trusted by thousands in the Muslim community'
  }
]

export default function DownloadSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="glass-card p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-12">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-deep-ocean-blue to-warm-sunset-orange rounded-2xl flex items-center justify-center mx-auto mb-6"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Download className="h-8 w-8 text-white" />
              </motion.div>
              
              <h2 className="heading-2 mb-6">
                Ready to Get
                <span className="gradient-text"> Started?</span>
              </h2>
              
              <p className="body-large max-w-2xl mx-auto mb-8">
                Join thousands of Muslims who are strengthening their faith and community with Iqra.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="h-8 w-8 text-warm-sunset-orange mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-text-primary-light dark:text-text-primary-dark">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/app" 
                className="btn-primary inline-flex items-center text-lg px-8 py-4"
              >
                <Download className="h-6 w-6 mr-2" />
                Download for iOS
              </Link>
              
              <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Free to download • Coming soon to App Store
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}