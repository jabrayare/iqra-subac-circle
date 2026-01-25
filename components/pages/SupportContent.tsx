'use client'

import { motion } from 'framer-motion'
import {
  HelpCircle,
  Mail,
  MessageSquare,
  BookOpen,
  ExternalLink,
  Sparkles,
  Search,
  ChevronRight,
  Phone,
  Clock
} from 'lucide-react'

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help with any questions',
    contact: 'support@iqra-subac.com',
    gradient: 'from-blue-500 to-indigo-600',
    action: 'mailto:support@iqra-subac.com'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available in app',
    gradient: 'from-emerald-500 to-teal-600',
    action: '#'
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Browse our help guides',
    contact: 'Help articles',
    gradient: 'from-amber-500 to-orange-600',
    action: '#'
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

const quickLinks = [
  { icon: Phone, label: 'Getting Started', href: '#' },
  { icon: Clock, label: 'Prayer Times Setup', href: '#' },
  { icon: HelpCircle, label: 'Troubleshooting', href: '#' },
  { icon: BookOpen, label: 'Feature Guides', href: '#' }
]

export default function SupportContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a3d3d 50%, #083030 100%)' }} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Help Icon Pattern */}
          <div className="absolute top-20 right-20 w-64 h-64 opacity-5 text-white">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <text x="50" y="65" fontSize="40" textAnchor="middle" fill="currentColor">?</text>
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-15"
               style={{ background: 'radial-gradient(circle, #4fb8b8 0%, transparent 70%)' }} />
        </div>

        <div className="container-elegant relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                We're Here to Help
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="heading-display heading-xl text-white mb-6">
              How Can We{' '}
              <span className="relative inline-block">
                Help?
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9C50 3 150 3 200 9" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-body-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Find answers to common questions or get in touch with our support team.
              We're dedicated to helping you on your faith journey.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-white placeholder-white/50 border-2 transition-all duration-300 focus:outline-none focus:border-white/50"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/20"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.9)' }}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-24">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="var(--color-bg)"/>
          </svg>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-label mb-4 block">Contact Options</span>
            <h2 className="heading-display heading-lg mb-4">
              Get in Touch
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Choose how you'd like to reach us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-feature text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  {option.title}
                </h3>

                <p className="text-body mb-4">
                  {option.description}
                </p>

                <div className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                  {option.contact}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-elegant mb-20"
          >
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                   style={{ background: 'var(--color-accent-muted)' }}>
                <HelpCircle className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="heading-display heading-md mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    {faq.question}
                  </h3>
                  <p className="text-body">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #062828 100%)' }}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-48 h-48" style={{ background: 'radial-gradient(circle, #4fb8b8 0%, transparent 70%)' }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                   style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}>
                <Mail className="w-10 h-10" style={{ color: 'var(--color-accent)' }} />
              </div>

              <h2 className="heading-display heading-md text-white mb-4">
                Still Need Help?
              </h2>

              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Our support team is here to help you get the most out of Iqra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@iqra-subac.com"
                  className="btn-primary bg-white hover:bg-gray-100"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Mail className="h-5 w-5" />
                  Contact Support
                </a>

                <a
                  href="/privacy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 border-2"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }}
                >
                  <ExternalLink className="h-5 w-5" />
                  Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
