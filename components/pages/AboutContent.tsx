'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Globe, 
  Users, 
  BookOpen, 
  Target,
  Award,
  Lightbulb,
  Shield,
  Code,
  Compass,
  Star,
  Building,
  Mail,
  MapPin,
  Clock
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Faith-Centered',
    description: 'Every feature is designed to strengthen the connection between Muslims and their faith, honoring Islamic traditions and values.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We prioritize building meaningful connections within the Somali Muslim community worldwide.'
  },
  {
    icon: Shield,
    title: 'Privacy & Trust',
    description: 'Your personal information and religious practices are protected with the highest security standards.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We combine modern technology with traditional Islamic practices to create useful, intuitive experiences.'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making Islamic tools and community connections available to Muslims everywhere, regardless of location.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to community support.'
  }
]

const timeline = [
  {
    year: '2023',
    title: 'The Vision',
    description: 'Recognizing the need for a comprehensive Islamic app serving the Somali Muslim community worldwide.'
  },
  {
    year: '2024',
    title: 'Development Begins',
    description: 'Started building core features: Subac management, prayer times, Qibla finder, and mosque locator.'
  },
  {
    year: '2024',
    title: 'Beta Testing',
    description: 'Launched beta version with select communities to gather feedback and refine the user experience.'
  },
  {
    year: '2025',
    title: 'Official Launch',
    description: 'Public release on iOS App Store with full feature set and community support.'
  }
]

const features = [
  {
    icon: Users,
    title: 'Subac Management',
    description: 'Organize communal Quran recitation circles'
  },
  {
    icon: Clock,
    title: 'Prayer Times',
    description: 'Accurate times based on your location'
  },
  {
    icon: Compass,
    title: 'Qibla Finder',
    description: 'Precise direction to Kaaba'
  },
  {
    icon: MapPin,
    title: 'Mosque Locator',
    description: 'Find nearby mosques with details'
  }
]

const team = [
  {
    name: 'Development Team',
    role: 'Engineering & Design',
    description: 'Passionate developers and designers dedicated to creating exceptional Islamic technology.',
    avatar: '👨🏾‍💻'
  },
  {
    name: 'Islamic Scholars',
    role: 'Religious Guidance',
    description: 'Ensuring all features align with Islamic principles and practices.',
    avatar: '👨🏾‍🎓'
  },
  {
    name: 'Community Leaders',
    role: 'Community Liaison',
    description: 'Connecting with Somali Muslim communities worldwide to understand their needs.',
    avatar: '👥'
  }
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-8">
              <BookOpen className="h-5 w-5 text-warm-sunset-orange mr-2" />
              <span className="text-white font-medium">Our Story & Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warm-sunset-orange to-yellow-400">
                Iqra
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Iqra is more than just an app—it's a bridge connecting the global Somali Muslim community 
              through technology, tradition, and shared faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <Target className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Our Mission
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed max-w-4xl mx-auto">
              To empower the global Somali Muslim community by providing innovative, faith-centered technology 
              that strengthens Islamic practice, fosters community connections, and preserves traditional values 
              while embracing modern convenience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark mb-2">
                  Community
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  Connecting Muslims worldwide through shared faith and practice
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark mb-2">
                  Tradition
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  Preserving Islamic practices and Somali cultural heritage
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark mb-2">
                  Technology
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  Leveraging modern tools to enhance Islamic lifestyle
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From concept to community—the story of how Iqra came to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-warm-sunset-orange to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {milestone.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The principles that guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-deep-ocean-blue to-warm-sunset-orange rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  {value.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Team
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A dedicated group of professionals committed to serving the Muslim community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                  {member.name}
                </h3>
                
                <div className="text-warm-sunset-orange font-medium mb-4">
                  {member.role}
                </div>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <Building className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                What We've Built
              </h2>
              <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                Comprehensive Islamic tools designed specifically for the modern Muslim lifestyle.
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
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <Mail className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Get in Touch
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have questions, feedback, or just want to connect, 
              don't hesitate to reach out.
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
            
            <div className="mt-8 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Based globally • Serving the worldwide Somali Muslim community
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}