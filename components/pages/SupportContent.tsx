'use client'

import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  Mail, 
  MessageSquare, 
  BookOpen,
  Settings,
  Shield,
  ExternalLink
} from 'lucide-react'

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help with any questions',
    contact: 'support@iqra-subac.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available in app'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Browse our help guides',
    contact: 'Help articles'
  }
]

const faqItems = [
  {
    question: 'How do I create an account?',
    answer: 'Download the app and tap "Sign Up" to create your account with email or phone number.'
  },
  {
    question: 'How accurate is the Qibla compass?',
    answer: 'Our compass uses GPS and magnetic sensors for highly accurate direction to Kaaba.'
  },
  {
    question: 'Can I use the app offline?',
    answer: 'Yes, prayer times and Qibla compass work offline once initially loaded.'
  },
  {
    question: 'How do I join a Subac circle?',
    answer: 'Use the Subac feature to find existing circles or create your own in the app.'
  }
]

export default function SupportContent() {
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
              How Can We Help?
            </h1>
            
            <p className="text-xl text-white/80 mb-12">
              Find answers to common questions or get in touch with our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <option.icon className="h-12 w-12 text-warm-sunset-orange mx-auto mb-6" />
                <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
                  {option.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  {option.description}
                </p>
                <div className="text-sm font-medium text-warm-sunset-orange">
                  {option.contact}
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 mb-20"
          >
            <div className="text-center mb-12">
              <HelpCircle className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-12 text-center"
          >
            <Mail className="h-16 w-16 text-warm-sunset-orange mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Still Need Help?
            </h2>
            
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Iqra.
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}