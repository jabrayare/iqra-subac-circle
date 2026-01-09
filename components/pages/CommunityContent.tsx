'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Globe, 
  Heart, 
  BookOpen, 
  Calendar,
  MessageCircle,
  Star,
  Trophy,
  MapPin,
  Clock,
  UserPlus,
  Award
} from 'lucide-react'

const communityStats = [
  { icon: Users, number: '10,000+', label: 'Active Members', color: 'from-blue-500 to-cyan-500' },
  { icon: Globe, number: '50+', label: 'Cities Worldwide', color: 'from-green-500 to-emerald-500' },
  { icon: BookOpen, number: '500+', label: 'Subac Circles', color: 'from-purple-500 to-violet-500' },
  { icon: Calendar, number: '1,200+', label: 'Monthly Sessions', color: 'from-orange-500 to-red-500' }
]

const testimonials = [
  {
    name: 'Amina Hassan',
    location: 'Minneapolis, MN',
    role: 'Subac Coordinator',
    content: 'Iqra has transformed how our community organizes Quran circles. The scheduling and tracking features make everything so much easier.',
    avatar: '👩🏾',
    rating: 5
  },
  {
    name: 'Omar Ahmed',
    location: 'Toronto, ON',
    role: 'Community Member',
    content: 'Finding prayer times and nearby mosques has never been easier. This app truly serves our community\'s needs.',
    avatar: '👨🏾',
    rating: 5
  },
  {
    name: 'Fatima Ali',
    location: 'London, UK',
    role: 'Prayer Time Coordinator',
    content: 'The precision of the Qibla finder and prayer times helps our entire community stay connected to our daily prayers.',
    avatar: '👩🏾‍🦳',
    rating: 5
  },
  {
    name: 'Mohamed Said',
    location: 'Melbourne, AU',
    role: 'Mosque Administrator',
    content: 'Our mosque uses Iqra to manage community events and prayer schedules. It\'s become an essential tool for us.',
    avatar: '👨🏾‍🦲',
    rating: 5
  }
]

const communityFeatures = [
  {
    icon: Users,
    title: 'Connect with Fellow Muslims',
    description: 'Join a growing network of Somali Muslims worldwide who share your values and faith.'
  },
  {
    icon: BookOpen,
    title: 'Participate in Subac Circles',
    description: 'Find or create Quran recitation circles in your area and track your spiritual progress together.'
  },
  {
    icon: MessageCircle,
    title: 'Share Knowledge',
    description: 'Exchange Islamic knowledge, ask questions, and learn from experienced community members.'
  },
  {
    icon: Calendar,
    title: 'Attend Community Events',
    description: 'Stay updated on local Islamic events, lectures, and community gatherings in your area.'
  },
  {
    icon: Heart,
    title: 'Support Each Other',
    description: 'Build meaningful relationships and provide support to fellow community members in their faith journey.'
  },
  {
    icon: Trophy,
    title: 'Achieve Together',
    description: 'Celebrate milestones and achievements in Quran recitation and Islamic knowledge with your community.'
  }
]

const upcomingEvents = [
  {
    title: 'Monthly Community Quran Completion',
    date: 'Every Month',
    time: 'After Maghrib',
    location: 'Global Virtual Event',
    participants: '2,500+'
  },
  {
    title: 'Weekly Youth Subac Circle',
    date: 'Every Friday',
    time: '7:00 PM',
    location: 'Local Mosques',
    participants: '800+'
  },
  {
    title: 'Islamic Knowledge Sharing Session',
    date: 'Bi-weekly',
    time: '8:00 PM',
    location: 'Community Centers',
    participants: '1,200+'
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-8">
              <Heart className="h-5 w-5 text-warm-sunset-orange mr-2" />
              <span className="text-white font-medium">Global Muslim Community</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Growing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warm-sunset-orange to-yellow-400">
                Islamic Community
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Connect with thousands of Somali Muslims worldwide, participate in Subac circles, 
              share knowledge, and grow together in faith and community.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              <UserPlus className="h-6 w-6 mr-2" />
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                  {stat.number}
                </div>
                
                <div className="text-text-secondary-light dark:text-text-secondary-dark font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Makes Our Community Special
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the unique features that make the Iqra community a supportive 
              and enriching environment for Muslims worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-warm-sunset-orange to-yellow-400 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real stories from community members who have found value and connection through Iqra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-text-primary-light dark:text-text-primary-dark">
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
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <Calendar className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Upcoming Community Events
              </h2>
              <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                Join our regular community events and grow together in faith and knowledge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-deep-ocean-blue to-purple-600 p-6 rounded-2xl text-white"
                >
                  <h3 className="font-bold text-lg mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-white/90">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.participants} participants
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <Award className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Ready to Join Our Community?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Become part of a supportive Islamic community that values tradition, 
              embraces technology, and grows together in faith.
            </p>
            
            <button className="btn-primary inline-flex items-center text-lg px-8 py-4">
              <UserPlus className="h-6 w-6 mr-2" />
              Download App & Join Community
            </button>
            
            <div className="mt-8 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Free to join • Worldwide community • All skill levels welcome
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}