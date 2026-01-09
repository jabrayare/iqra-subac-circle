'use client'

import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  Phone,
  BookOpen,
  Bug,
  Lightbulb,
  Clock,
  CheckCircle,
  ExternalLink,
  Search,
  ChevronDown,
  User,
  Settings,
  Shield
} from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Download the Iqra app from the App Store, open it, and tap "Sign Up". You can create an account using your email address or phone number. Follow the onboarding steps to set up your profile and preferences.'
      },
      {
        question: 'How do I set up prayer times for my location?',
        answer: 'Go to Settings > Prayer Times, allow location access, and the app will automatically detect your location. You can also manually set your city and choose from different calculation methods.'
      },
      {
        question: 'What is a Subac circle?',
        answer: 'A Subac circle is a communal Quran recitation gathering where community members come together to read and complete sections of the Quran. You can join existing circles or create new ones through the app.'
      }
    ]
  },
  {
    title: 'App Features',
    icon: Settings,
    faqs: [
      {
        question: 'How accurate is the Qibla compass?',
        answer: 'Our Qibla compass uses GPS and magnetic sensor data to provide highly accurate direction to Kaaba. Make sure your device\'s location services are enabled and calibrate your compass regularly.'
      },
      {
        question: 'Can I use the app offline?',
        answer: 'Yes, many features work offline including prayer times (once loaded), Qibla compass, and previously downloaded Quran content. Some features like mosque finder require internet connection.'
      },
      {
        question: 'How do I find nearby mosques?',
        answer: 'Use the Mosque Finder feature in the app. Allow location access and the app will show nearby mosques with their prayer times, contact information, and directions.'
      }
    ]
  },
  {
    title: 'Account & Privacy',
    icon: Shield,
    faqs: [
      {
        question: 'Is my personal information secure?',
        answer: 'Yes, we take privacy seriously. We use industry-standard encryption and only collect necessary information to provide our services. Read our Privacy Policy for full details.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Go to Settings > Account > Delete Account. This will permanently remove all your data from our servers. This action cannot be undone.'
      },
      {
        question: 'Can I change my email address?',
        answer: 'Yes, go to Settings > Account > Email Address to update your email. You\'ll need to verify the new email address before the change takes effect.'
      }
    ]
  }
]

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed help with any questions or issues',
    action: 'Send Email',
    contact: 'support@iqra-subac.com',
    responseTime: '24-48 hours'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    action: 'Start Chat',
    contact: 'Available in app',
    responseTime: 'Immediate'
  },
  {
    icon: Bug,
    title: 'Report a Bug',
    description: 'Help us improve by reporting technical issues',
    action: 'Report Issue',
    contact: 'bugs@iqra-subac.com',
    responseTime: '1-3 business days'
  },
  {
    icon: Lightbulb,
    title: 'Feature Request',
    description: 'Suggest new features for future updates',
    action: 'Submit Idea',
    contact: 'feedback@iqra-subac.com',
    responseTime: '1 week'
  }
]

const supportHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Islamic Holidays', hours: 'Limited Support' }
]

export default function SupportContent() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

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
              <HelpCircle className="h-5 w-5 text-warm-sunset-orange mr-2" />
              <span className="text-white font-medium">Help & Support Center</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-warm-sunset-orange to-yellow-400">
                Help You
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions, get technical support, 
              or reach out to our team for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-warm-sunset-orange"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose How to Get Help
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Select the support option that works best for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-warm-sunset-orange to-yellow-400 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3 text-center">
                  {option.title}
                </h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 text-center">
                  {option.description}
                </p>
                
                <div className="text-center">
                  <button className="btn-primary w-full mb-3">
                    {option.action}
                  </button>
                  
                  <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {option.responseTime}
                    </div>
                    <div>{option.contact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find quick answers to the most common questions about using Iqra.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass-card p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-deep-ocean-blue to-warm-sunset-orange rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = `${categoryIndex}-${faqIndex}`
                    return (
                      <div key={faqIndex} className="border-b border-gray-200/20 dark:border-gray-700/20 last:border-b-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <span className="font-medium text-text-primary-light dark:text-text-primary-dark pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown className={`h-5 w-5 text-text-secondary-light dark:text-text-secondary-dark transition-transform ${
                            openFaq === faqId ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {openFaq === faqId && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3"
                          >
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <Clock className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Support Hours
              </h2>
              <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                Our support team is available during these hours. We respond to all inquiries as quickly as possible.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {supportHours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-deep-ocean-blue/50 to-purple-600/50 rounded-xl"
                >
                  <span className="font-medium text-white">{schedule.day}</span>
                  <span className="text-white/90">{schedule.hours}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <User className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Still Need Help?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Our support team is dedicated to helping you get the most out of Iqra. 
              Don't hesitate to reach out with any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@iqra-subac.com"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              
              <a
                href="/privacy"
                className="inline-flex items-center px-6 py-3 border-2 border-warm-sunset-orange text-warm-sunset-orange rounded-xl font-semibold hover:bg-warm-sunset-orange hover:text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Privacy Policy
              </a>
            </div>
            
            <div className="mt-8 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Average response time: 24 hours • Available in English and Somali
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}