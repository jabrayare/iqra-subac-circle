'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Users, 
  Shield, 
  Heart,
  CheckCircle,
  AlertTriangle,
  Scale,
  Clock,
  Mail,
  Search,
  FileDown,
  Info
} from 'lucide-react'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    icon: CheckCircle,
    summary: 'Agreement to be bound by these terms when using our app.'
  },
  {
    id: 'description',
    title: 'Service Description',
    icon: Info,
    summary: 'What Iqra app provides to the Muslim community.'
  },
  {
    id: 'accounts',
    title: 'User Accounts',
    icon: Users,
    summary: 'Account creation, responsibilities, and user types.'
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    icon: CheckCircle,
    summary: 'Permitted and prohibited uses of the application.'
  },
  {
    id: 'community',
    title: 'Community Guidelines',
    icon: Heart,
    summary: 'Islamic community standards and content guidelines.'
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    icon: Shield,
    summary: 'How we handle your personal information and privacy.'
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: FileText,
    summary: 'App ownership, user content licenses, and third-party content.'
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers & Limitations',
    icon: AlertTriangle,
    summary: 'Service availability, prayer time accuracy, and liability limits.'
  },
  {
    id: 'termination',
    title: 'Termination',
    icon: Clock,
    summary: 'How and when accounts may be terminated.'
  },
  {
    id: 'legal',
    title: 'Legal & Disputes',
    icon: Scale,
    summary: 'Governing law, dispute resolution, and jurisdiction.'
  }
]

const highlights = [
  {
    icon: Heart,
    title: 'Islamic Values',
    description: 'All terms operate in accordance with Islamic principles of fairness and justice.',
    color: 'text-accent-green'
  },
  {
    icon: Shield,
    title: 'User Protection',
    description: 'Your rights are protected with clear guidelines and fair policies.',
    color: 'text-deep-ocean-blue'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Terms designed to foster a respectful Islamic community environment.',
    color: 'text-warm-sunset-orange'
  },
  {
    icon: Scale,
    title: 'Fair & Transparent',
    description: 'Clear, understandable terms with plain language explanations.',
    color: 'text-purple-600'
  }
]

export default function TermsOfServiceContent() {
  const [activeSection, setActiveSection] = useState('acceptance')
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
    <div className="min-h-screen bg-soft-cloud dark:bg-midnight-navy">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-sunset-orange via-orange-500 to-deep-ocean-blue text-white py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <FileText className="h-16 w-16 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Clear and fair terms that govern your use of Iqra | The Subac Circle, 
              designed with Islamic principles of justice and transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              
              <button className="flex items-center text-sm bg-white/20 hover:bg-white/30 rounded-full px-4 py-2 transition-colors">
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Highlights */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Our Commitment to You</h2>
            <p className="body-large max-w-3xl mx-auto">
              These terms are crafted with Islamic values and community needs in mind
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
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-warm-sunset-orange focus:border-transparent"
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
                            ? 'bg-warm-sunset-orange text-white shadow-lg transform scale-105' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Icon className={`h-5 w-5 mt-0.5 ${isActive ? 'text-white' : 'text-deep-ocean-blue'}`} />
                          <div>
                            <div className={`font-medium ${isActive ? 'text-white' : 'text-text-primary-light dark:text-text-primary-dark'}`}>
                              {section.title}
                            </div>
                            <div className={`text-xs mt-1 ${isActive ? 'text-orange-100' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}>
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
              <div className="prose prose-lg prose-orange dark:prose-invert max-w-none">
                
                {/* Acceptance Section */}
                <motion.section
                  id="acceptance"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <CheckCircle className="h-8 w-8 mr-3 text-warm-sunset-orange" />
                    Acceptance of Terms
                  </h2>
                  
                  <div className="glass-card p-8">
                    <p className="body-text leading-relaxed mb-4">
                      By downloading, installing, or using Iqra | The Subac Circle mobile application ("App"), 
                      you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these 
                      Terms, do not use the App.
                    </p>
                    
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-warm-sunset-orange">
                      <p className="text-sm text-warm-sunset-orange dark:text-orange-300 flex items-start">
                        <Info className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                        By using our app, you acknowledge that you understand and accept these terms in accordance 
                        with Islamic principles of honesty and commitment to agreements.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Service Description */}
                <motion.section
                  id="description"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Info className="h-8 w-8 mr-3 text-warm-sunset-orange" />
                    Service Description
                  </h2>
                  
                  <div className="glass-card p-8">
                    <p className="body-text leading-relaxed mb-6">
                      Iqra | The Subac Circle is a mobile application designed for the Somali Muslim community to:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        'Manage Subac (communal Quran recitation circles)',
                        'Provide accurate Islamic prayer times',
                        'Calculate Qibla direction',
                        'Find nearby mosques',
                        'Schedule and track religious activities',
                        'Connect with local Muslim communities'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent-green mt-0.5 shrink-0" />
                          <span className="body-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Community Guidelines */}
                <motion.section
                  id="community"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-warm-sunset-orange" />
                    Islamic Community Guidelines
                  </h2>

                  <div className="space-y-6">
                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-accent-green">Islamic Community Standards</h3>
                      <ul className="space-y-2 body-text">
                        <li className="flex items-start">
                          <Heart className="h-5 w-5 text-accent-green mr-2 mt-0.5 shrink-0" />
                          <span>Maintain respectful Islamic etiquette in all interactions</span>
                        </li>
                        <li className="flex items-start">
                          <Heart className="h-5 w-5 text-accent-green mr-2 mt-0.5 shrink-0" />
                          <span>Content should align with Islamic values and principles</span>
                        </li>
                        <li className="flex items-start">
                          <Heart className="h-5 w-5 text-accent-green mr-2 mt-0.5 shrink-0" />
                          <span>Respect diverse interpretations within the Islamic community</span>
                        </li>
                        <li className="flex items-start">
                          <Heart className="h-5 w-5 text-accent-green mr-2 mt-0.5 shrink-0" />
                          <span>Report inappropriate content to maintain community standards</span>
                        </li>
                      </ul>
                    </div>

                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-deep-ocean-blue">Prohibited Activities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Sharing inappropriate or offensive content',
                          'Harassment or abuse of other users',
                          'Attempting to compromise app security',
                          'Creating fake accounts or impersonation',
                          'Spam or unsolicited messages',
                          'Commercial use without permission',
                          'Content against Islamic values',
                          'Unlawful activities of any kind'
                        ].map((prohibition, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-accent-red mt-0.5 shrink-0" />
                            <span className="text-sm body-text">{prohibition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Prayer Time Disclaimer */}
                <motion.section
                  id="disclaimers"
                  className="mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-2 mb-6 flex items-center">
                    <AlertTriangle className="h-8 w-8 mr-3 text-warm-sunset-orange" />
                    Important Disclaimers
                  </h2>

                  <div className="space-y-6">
                    <div className="glass-card p-6 border-l-4 border-accent-amber">
                      <h3 className="heading-3 mb-4 text-accent-amber flex items-center">
                        <Clock className="h-6 w-6 mr-2" />
                        Prayer Time Accuracy
                      </h3>
                      <div className="space-y-3 body-text">
                        <p>
                          <strong>Important:</strong> Prayer times are calculated using established Islamic methods 
                          and are provided as estimates. Times may vary based on local interpretation and conditions.
                        </p>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            <strong>Recommendation:</strong> Users should verify times with local Islamic authorities 
                            when needed. We are not responsible for missed prayers due to time variations.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="glass-card p-6">
                      <h3 className="heading-3 mb-4 text-deep-ocean-blue">Service Availability</h3>
                      <ul className="space-y-2 body-text">
                        <li className="flex items-start">
                          <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                          <span>We strive to maintain app availability but cannot guarantee 100% uptime</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                          <span>Maintenance or technical issues may temporarily interrupt service</span>
                        </li>
                        <li className="flex items-start">
                          <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                          <span>Location-based features depend on device GPS accuracy</span>
                        </li>
                      </ul>
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
                    <Mail className="h-8 w-8 mr-3 text-warm-sunset-orange" />
                    Contact Information
                  </h2>
                  
                  <div className="glass-card p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="heading-3 mb-4 text-deep-ocean-blue">General Support</h3>
                        <div className="space-y-3">
                          <a 
                            href="mailto:support@iqra-subac.com"
                            className="flex items-center text-deep-ocean-blue hover:text-warm-sunset-orange transition-colors"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            support@iqra-subac.com
                          </a>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            For general app support and questions
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="heading-3 mb-4 text-deep-ocean-blue">Legal Matters</h3>
                        <div className="space-y-3">
                          <a 
                            href="mailto:legal@iqra-subac.com"
                            className="flex items-center text-deep-ocean-blue hover:text-warm-sunset-orange transition-colors"
                          >
                            <Scale className="h-5 w-5 mr-2" />
                            legal@iqra-subac.com
                          </a>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                            For legal inquiries and formal disputes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Islamic Compliance Note */}
                <motion.div
                  className="glass-card p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-accent-green"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-accent-green mt-1 shrink-0" />
                    <div>
                      <h3 className="heading-3 mb-3 text-accent-green">
                        للمسلمين (For Muslims)
                      </h3>
                      <p className="body-text leading-relaxed">
                        We strive to operate this service in accordance with Islamic principles of justice, 
                        fairness, and community welfare. If you have concerns about Islamic compliance or 
                        suggestions for improvements, please contact us at{' '}
                        <a 
                          href="mailto:islamic-compliance@iqra-subac.com"
                          className="text-accent-green hover:text-deep-ocean-blue transition-colors font-medium"
                        >
                          islamic-compliance@iqra-subac.com
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Footer */}
      <section className="py-12 bg-warm-sunset-orange text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-3 mb-4">Agreement Acknowledgment</h3>
            <p className="body-text mb-6 opacity-90 max-w-3xl mx-auto">
              By using Iqra | The Subac Circle, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-white" />
                Islamic Principles
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-white" />
                Fair & Transparent
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-white" />
                Community Focused
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-white" />
                User Rights Protected
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}