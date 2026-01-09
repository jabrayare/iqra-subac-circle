'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Users, MapPin, Clock, Star, Download, Heart } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 12500,
    suffix: '+',
    label: 'Active Users',
    sublabel: 'Growing community'
  },
  {
    icon: MapPin,
    value: 850,
    suffix: '+',
    label: 'Mosques',
    sublabel: 'Verified locations'
  },
  {
    icon: Clock,
    value: 99.9,
    suffix: '%',
    label: 'Prayer Accuracy',
    sublabel: 'Trusted calculations'
  },
  {
    icon: Star,
    value: 4.9,
    suffix: '★',
    label: 'App Rating',
    sublabel: 'User satisfaction'
  },
  {
    icon: Download,
    value: 25000,
    suffix: '+',
    label: 'Downloads',
    sublabel: 'And growing'
  },
  {
    icon: Heart,
    value: 95,
    suffix: '%',
    label: 'User Retention',
    sublabel: 'Daily active users'
  }
]

function AnimatedNumber({ value, duration = 2000, inView }: { value: number; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration, inView])

  return <span>{count.toLocaleString()}</span>
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section className="section bg-gradient-to-br from-deep-ocean-blue via-blue-700 to-warm-sunset-orange text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {['🕌', '📿', '☪️', '🤲', '📚', '💎'][i]}
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 mb-6 text-white">
            Trusted by the
            <span className="block text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">
              Global Muslim Community
            </span>
          </h2>
          <p className="body-large text-blue-100 max-w-3xl mx-auto">
            Join thousands of Muslims worldwide who trust Iqra for their daily Islamic needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="bg-white/20 rounded-2xl p-4 w-fit mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  <AnimatedNumber value={stat.value} inView={inView} />
                  <span>{stat.suffix}</span>
                </div>
                
                <div className="text-lg font-semibold mb-1 text-yellow-100">
                  {stat.label}
                </div>
                
                <div className="text-sm text-blue-200">
                  {stat.sublabel}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-16 pt-16 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <blockquote className="text-xl lg:text-2xl font-light text-blue-100 italic max-w-4xl mx-auto mb-4">
            "And whoever reads the Qur'an and acts upon it, his parents will be clothed with a crown 
            of light on the Day of Resurrection whose brightness is like that of the sun"
          </blockquote>
          <cite className="text-yellow-200 font-medium">
            - Prophet Muhammad (ﷺ)
          </cite>
        </motion.div>
      </div>
    </section>
  )
}