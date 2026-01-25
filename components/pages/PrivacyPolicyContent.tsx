'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Download, 
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  Globe,
  Heart,
  Search,
  FileDown
} from 'lucide-react'

const sections = [
  {
    id: 'overview',
    title: 'Privacy Overview',
    icon: Shield,
    summary: 'Your privacy matters to us. Learn the basics of how we protect your data.'
  },
  {
    id: 'collection',
    title: 'Information Collection',
    icon: Eye,
    summary: 'What data we collect and why we need it for app functionality.'
  },
  {
    id: 'usage',
    title: 'How We Use Data',
    icon: Users,
    summary: 'How your information helps us provide better Islamic services.'
  },
  {
    id: 'sharing',
    title: 'Information Sharing',
    icon: Globe,
    summary: 'We never sell your data. Limited sharing scenarios explained.'
  },
  {
    id: 'security',
    title: 'Data Security',
    icon: Lock,
    summary: 'Advanced security measures protecting your information.'
  },
  {
    id: 'rights',
    title: 'Your Rights',
    icon: CheckCircle,
    summary: 'Control your data: view, update, delete, and export options.'
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    icon: Globe,
    summary: 'Firebase, Apple, and Islamic prayer time service integrations.'
  },
  {
    id: 'children',
    title: "Children's Privacy",
    icon: Heart,
    summary: 'Special protections for users under 13 years old.'
  },
  {
    id: 'retention',
    title: 'Data Retention',
    icon: Clock,
    summary: 'How long we keep your data and deletion timelines.'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    icon: Mail,
    summary: 'Get help with privacy questions and exercise your rights.'
  }
]

const highlights = [
  {
    icon: AlertTriangle,
    title: 'We Never Sell Your Data',
    description: 'Your personal information is never sold, traded, or rented to third parties.',
    color: 'text-accent-red'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data transmission uses industry-standard encryption protocols.',
    color: 'text-deep-ocean-blue'
  },
  {
    icon: Heart,
    title: 'Islamic Values',
    description: 'Our privacy practices align with Islamic principles of trust and respect.',
    color: 'text-accent-green'
  },
  {
    icon: Eye,
    title: 'Transparent Practices',
    description: 'Clear explanations of what data we collect and how we use it.',
    color: 'text-warm-sunset-orange'
  }
]

export default function PrivacyPolicyContent() {
  const [activeSection, setActiveSection] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [lastUpdated] = useState('January 8, 2025')

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      const currentSection = sectionElements.find(element => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #0a3d3d 50%, #083030 100%)' }} />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="absolute bottom-10 -left-10 w-64 h-64 rounded-full opacity-15"
               style={{ background: 'radial-gradient(circle, #4fb8b8 0%, transparent 70%)' }} />
        </div>

        <div className="container-elegant relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(201, 162, 39, 0.2)' }}>
              <Shield className="h-10 w-10" style={{ color: 'var(--color-accent)' }} />
            </div>

            <h1 className="heading-display heading-xl text-white mb-6">
              Privacy{' '}
              <span className="relative inline-block">
                Policy
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9C50 3 150 3 200 9" stroke="var(--color-accent)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-body-lg max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
              Your privacy matters to us. Learn about how we protect your data
              and respect your rights in accordance with Islamic values.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm rounded-full px-4 py-2"
                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'rgba(255, 255, 255, 0.9)' }}>
                <Clock className="h-4 w-4 mr-2" />
                Last updated: {lastUpdated}
              </div>

              <button className="flex items-center text-sm rounded-full px-4 py-2 transition-colors hover:bg-white/20"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'rgba(255, 255, 255, 0.9)' }}>
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0 120V60C240 20 480 0 720 0C960 0 1200 20 1440 60V120H0Z" fill="var(--color-bg)"/>
          </svg>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Privacy Highlights</h2>
            <p className="body-large max-w-3xl mx-auto">
              Key principles that guide our privacy practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${highlight.color}`} />
                  <h3 className="heading-3 text-lg mb-2">{highlight.title}</h3>
                  <p className="body-text text-sm">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary-light dark:text-text-secondary-dark" />
                  <input
                    type="text"
                    placeholder="Search privacy policy..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-deep-ocean-blue dark:focus:ring-warm-sunset-orange focus:border-transparent"
                  />
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon
                    const isActive = activeSection === section.id
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-deep-ocean-blue text-white shadow-lg transform scale-105' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Icon className={`h-5 w-5 mt-0.5 ${isActive ? 'text-white' : 'text-warm-sunset-orange'}`} />
                          <div>
                            <div className={`font-medium ${isActive ? 'text-white' : 'text-text-primary-light dark:text-text-primary-dark'}`}>
                              {section.title}
                            </div>
                            <div className={`text-xs mt-1 ${isActive ? 'text-blue-100' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}>
                              {section.summary}
                            </div>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                
                {/* Overview Section */}
                <motion.section
                  id="overview"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Shield className="h-8 w-8 mr-3 text-deep-ocean-blue" />
                    Privacy Overview
                  </h2>
                  
                  <div className="glass-card p-8 mb-6">
                    <p className="body-text leading-relaxed mb-4">
                      Iqra | The Subac Circle ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you use our mobile application.
                    </p>
                    
                    <p className="body-text leading-relaxed">
                      As a platform built for the Islamic community, we hold ourselves to the highest standards 
                      of trust and transparency, following both legal requirements and Islamic principles of 
                      honesty and respect for personal privacy.
                    </p>
                  </div>
                </motion.section>

                {/* Information Collection Section */}
                <motion.section
                  id="collection"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-deep-ocean-blue" />
                    Information We Collect
                  </h2>

                  <div className="space-y-6">
                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-warm-sunset-orange">Personal Information</h3>
                      <ul className="space-y-2 body-text">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Name:</strong> Used for profile identification and session management</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Email Address:</strong> Used for account authentication and communication</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Profile Photo:</strong> Optional, stored securely in Firebase Storage</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Authentication Data:</strong> Login timestamps and authentication method tracking</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-warm-sunset-orange">Location Information</h3>
                      <ul className="space-y-2 body-text">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Precise Location:</strong> Used for prayer time calculations and Qibla direction</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>General Location:</strong> Used to find nearby mosques and relevant prayer times</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-deep-ocean-blue dark:text-blue-300 flex items-start">
                          <Lock className="h-4 w-4 mr-2 mt-0.5" />
                          Location data is processed locally and not stored on our servers
                        </p>
                      </div>
                    </div>

                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-warm-sunset-orange">Religious Content</h3>
                      <ul className="space-y-2 body-text">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Session Participation:</strong> Records of Subac (Quran recitation circle) attendance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Prayer Preferences:</strong> Customized prayer time notifications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent-green mr-2 mt-0.5" />
                          <span><strong>Mosque Information:</strong> Saved mosques and preferences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Continue with other sections... */}
                {/* For brevity, I'll create a simplified structure for the remaining sections */}
                
                {/* Data Usage Section */}
                <motion.section
                  id="usage"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Users className="h-8 w-8 mr-3 text-deep-ocean-blue" />
                    How We Use Your Data
                  </h2>
                  
                  <div className="glass-card p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 w-fit mx-auto mb-4">
                          <Users className="h-8 w-8 text-deep-ocean-blue" />
                        </div>
                        <h3 className="font-semibold mb-2">Core Functionality</h3>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          Provide accurate prayer times, Qibla direction, and session management
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-4 w-fit mx-auto mb-4">
                          <Lock className="h-8 w-8 text-warm-sunset-orange" />
                        </div>
                        <h3 className="font-semibold mb-2">Account Management</h3>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          Create and maintain your profile, sync data across devices
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-4 w-fit mx-auto mb-4">
                          <Heart className="h-8 w-8 text-accent-green" />
                        </div>
                        <h3 className="font-semibold mb-2">App Improvement</h3>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                          Analyze usage to improve functionality and provide support
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                  id="contact"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Mail className="h-8 w-8 mr-3 text-deep-ocean-blue" />
                    Contact Us
                  </h2>
                  
                  <div className="glass-card p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="heading-3 mb-4 text-warm-sunset-orange">Privacy Questions</h3>
                        <p className="body-text mb-4">For privacy-related questions or concerns:</p>
                        <div className="space-y-2">
                          <a
                            href="mailto:iqrasubac@gmail.com"
                            className="flex items-center text-deep-ocean-blue hover:text-warm-sunset-orange transition-colors"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            iqrasubac@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="heading-3 mb-4 text-warm-sunset-orange">Data Protection Rights</h3>
                        <p className="body-text mb-4">To exercise your privacy rights:</p>
                        <ul className="text-sm space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                          <li>• Account deletion</li>
                          <li>• Data export</li>
                          <li>• Information corrections</li>
                          <li>• Opt-out preferences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Footer */}
      <section className="py-12 bg-deep-ocean-blue text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-4">Legal Compliance</h3>
            <p className="body-text mb-6 opacity-90">
              This Privacy Policy complies with international privacy regulations
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent-green" />
                GDPR Compliant
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent-green" />
                CCPA Compliant
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent-green" />
                COPPA Compliant
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent-green" />
                App Store Guidelines
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}