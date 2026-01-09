'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, Calendar, Heart, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const communityFeatures = [
  {
    icon: Users,
    title: 'Active Subac Circles',
    description: 'Join daily Quran recitation circles with community members',
    stat: '200+ circles'
  },
  {
    icon: MapPin,
    title: 'Mosque Partnerships',
    description: 'Connected with verified mosques in your area',
    stat: '850+ mosques'
  },
  {
    icon: Calendar,
    title: 'Community Events',
    description: 'Stay updated with local Islamic events and gatherings',
    stat: '50+ events/month'
  },
  {
    icon: Heart,
    title: 'Islamic Values',
    description: 'Built with Islamic principles of community and brotherhood',
    stat: '100% Islamic'
  }
]

const testimonials = [
  {
    name: 'Amina Hassan',
    role: 'Community Leader',
    location: 'Minneapolis, MN',
    image: '/images/testimonials/amina.jpg', // Placeholder
    quote: 'Iqra has transformed how our community manages our Subac circles. The prayer times are incredibly accurate, and the Qibla compass is always reliable.',
    rating: 5
  },
  {
    name: 'Mohamed Ahmed',
    role: 'Mosque Coordinator',
    location: 'Columbus, OH',
    image: '/images/testimonials/mohamed.jpg', // Placeholder
    quote: 'As an imam, I appreciate how this app helps our congregation stay connected. The session management features have made organizing our weekly circles so much easier.',
    rating: 5
  },
  {
    name: 'Khadija Ali',
    role: 'Student',
    location: 'Toronto, ON',
    image: '/images/testimonials/khadija.jpg', // Placeholder
    quote: 'Being away from home for studies, this app helps me stay connected to my Islamic practices. Finding mosques in a new city has never been easier.',
    rating: 5
  }
]

export default function CommunitySection() {
  return (
    <section className="section bg-gradient-to-br from-soft-cloud via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 mb-6">
            Strengthening the
            <span className="gradient-text block">Global Muslim Ummah</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Join a thriving community of Muslims worldwide who use Iqra to stay connected 
            with their faith, find local mosques, and participate in Islamic gatherings.
          </p>
        </motion.div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="glass-card p-6 text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange rounded-2xl p-4 w-fit mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="heading-3 text-lg mb-2">{feature.title}</h3>
                <p className="body-text text-sm mb-4">{feature.description}</p>
                
                <div className="text-2xl font-bold gradient-text">
                  {feature.stat}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="heading-2 text-center mb-12">
            What Our Community Says
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-warm-sunset-orange mb-4" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="body-text italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Call to Action */}
        <motion.div
          className="glass-card p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="heading-2 mb-6">
              Ready to Join Our Community?
            </h3>
            
            <p className="body-large mb-8">
              Connect with Muslims in your area, participate in Subac circles, 
              and strengthen your Islamic practice with our comprehensive app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/app" className="btn-primary">
                Download App
              </a>
              <a href="/community" className="btn-outline">
                Learn More
              </a>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">12K+</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">850+</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Partner Mosques</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Cities Worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}