'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Heart, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Imam Abdullah Rahman',
    role: 'Religious Leader',
    location: 'Masjid Al-Noor, Seattle',
    quote: 'This app has revolutionized how we manage our Subac sessions. The prayer time accuracy is exceptional, and it helps our community stay connected throughout the week.',
    rating: 5,
    verified: true,
    avatar: 'AR'
  },
  {
    id: 2,
    name: 'Fatima Mohamed',
    role: 'Mother & Community Organizer',
    location: 'Toronto, Canada',
    quote: 'As a busy mother, this app helps me never miss prayers and keeps our family connected to our Islamic practices. The Qibla compass is incredibly accurate.',
    rating: 5,
    verified: true,
    avatar: 'FM'
  },
  {
    id: 3,
    name: 'Dr. Omar Hassan',
    role: 'University Professor',
    location: 'London, UK',
    quote: 'The mosque finder feature helped me find beautiful mosques during my travels. The community aspect makes me feel connected wherever I am.',
    rating: 5,
    verified: true,
    avatar: 'OH'
  },
  {
    id: 4,
    name: 'Aisha Ibrahim',
    role: 'Student',
    location: 'University of Minnesota',
    quote: 'Being away from home for university, this app keeps me connected to my faith. The Subac circles help me meet other Muslim students.',
    rating: 5,
    verified: true,
    avatar: 'AI'
  },
  {
    id: 5,
    name: 'Brother Yusuf Ali',
    role: 'IT Professional',
    location: 'Dubai, UAE',
    quote: 'The technical quality is outstanding. Clean interface, reliable features, and built with clear Islamic values. Highly recommended for any Muslim.',
    rating: 5,
    verified: true,
    avatar: 'YA'
  },
  {
    id: 6,
    name: 'Sister Maryam Ahmed',
    role: 'Healthcare Worker',
    location: 'Manchester, UK',
    quote: 'During busy shifts, the prayer reminders ensure I never miss Salah. The athan sounds are beautiful and remind me of home.',
    rating: 5,
    verified: true,
    avatar: 'MA'
  }
]

const appStoreReviews = [
  {
    title: 'Best Islamic App',
    content: 'Perfect for keeping track of prayer times and finding mosques. Love the Subac feature!',
    rating: 5,
    author: 'AppUser123'
  },
  {
    title: 'Excellent Quality',
    content: 'Very accurate prayer times and beautiful design. Feels like it was made with love.',
    rating: 5,
    author: 'MuslimTraveler'
  },
  {
    title: 'Community Focused',
    content: 'Finally an app that brings the Muslim community together. Great work!',
    rating: 5,
    author: 'CommunityBuilder'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="section bg-white dark:bg-gray-900">
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
            Loved by Muslims
            <span className="gradient-text block">Around the World</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            See what our community members say about how Iqra has enhanced 
            their Islamic practice and strengthened their connection to faith.
          </p>
        </motion.div>

        {/* Main Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-card p-8 card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Background Quote */}
              <Quote className="absolute top-4 right-4 h-12 w-12 text-gray-100 dark:text-gray-800" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-text leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-deep-ocean-blue to-warm-sunset-orange rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {testimonial.avatar}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle className="h-4 w-4 text-accent-green" />
                    )}
                  </div>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark opacity-75">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Store Reviews Section */}
        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Recent App Store Reviews</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold gradient-text">4.9</span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                (2,450+ reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appStoreReviews.map((review, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                  {review.title}
                </h4>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
                  "{review.content}"
                </p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark opacity-75">
                  - {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="heading-3 mb-4">
            Join Thousands of Satisfied Users
          </h3>
          <p className="body-text mb-8 max-w-2xl mx-auto">
            Experience the difference that a purpose-built Islamic app can make 
            in your daily worship and community connection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/app" className="btn-primary">
              Download Free App
            </a>
            <div className="flex items-center space-x-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <Heart className="h-4 w-4 text-accent-red" />
              <span>Free forever • No ads • Islamic values</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}