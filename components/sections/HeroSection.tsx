'use client'

import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="section-hero relative overflow-hidden">
      {/* Background Islamic Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Bismillah */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="bismillah text-lg mb-4">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="heading-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Your Islamic
                <br />
                <span className="gradient-text">
                  Community App
                </span>
              </motion.h1>
              
              <motion.p
                className="body-large max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Manage Subac circles, track prayer times, find Qibla direction, and discover nearby mosques. 
                Built for the Somali Muslim community.
              </motion.p>
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link href="/app" className="btn-primary group">
                <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Download for iOS
              </Link>
              
              <Link href="/app" className="btn-outline group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <motion.div
                className="relative bg-gradient-to-br from-midnight-navy to-deep-ocean-blue rounded-[3rem] p-2 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Screen */}
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-midnight-navy h-8 flex items-center justify-between px-6">
                    <div className="text-white text-sm font-medium">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-full"></div>
                      <div className="w-6 h-2 bg-white rounded-full"></div>
                      <div className="w-6 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Interface Preview */}
                  <div className="h-96 bg-gradient-to-br from-soft-cloud to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-deep-ocean-blue dark:text-white">
                          Iqra
                        </h2>
                        <div className="text-2xl">🕌</div>
                      </div>

                      {/* Prayer Time Card */}
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="text-sm text-gray-500 dark:text-gray-400">Next Prayer</div>
                        <div className="text-xl font-bold text-deep-ocean-blue dark:text-warm-sunset-orange">
                          Maghrib
                        </div>
                        <div className="text-warm-sunset-orange font-medium">6:42 PM</div>
                      </motion.div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <motion.div
                          className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow text-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 }}
                        >
                          <div className="text-xl mb-1">🧭</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Qibla</div>
                        </motion.div>
                        
                        <motion.div
                          className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow text-center"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6 }}
                        >
                          <div className="text-xl mb-1">📿</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Subac</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}