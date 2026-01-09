'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Shield, 
  FileText, 
  HelpCircle, 
  Heart, 
  MapPin,
  Phone,
  Globe
} from 'lucide-react'
import Logo from '@/components/ui/Logo'

const footerLinks = {
  legal: [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ],
  app: [
    { name: 'App Features', href: '/app' },
    { name: 'Download iOS', href: '/app#download' },
    { name: 'System Requirements', href: '/app#requirements' },
    { name: 'Release Notes', href: '/app#releases' },
  ],
  community: [
    { name: 'Mosque Partners', href: '/community#partners' },
    { name: 'User Stories', href: '/community#stories' },
    { name: 'Islamic Calendar', href: '/community#calendar' },
    { name: 'Events', href: '/community#events' },
  ],
  resources: [
    { name: 'Prayer Guide', href: '/resources/prayer-guide' },
    { name: 'Subac Traditions', href: '/resources/subac-traditions' },
    { name: 'Islamic Calendar', href: '/resources/islamic-calendar' },
    { name: 'Tutorials', href: '/resources/tutorials' },
  ]
}

const contactInfo = {
  email: 'support@iqra-subac.com',
  privacy: 'privacy@iqra-subac.com',
  legal: 'legal@iqra-subac.com'
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-midnight-navy via-gray-900 to-deep-ocean-blue text-white">
      {/* Islamic Pattern Background */}
      <div className="islamic-pattern opacity-5 absolute inset-0 pointer-events-none" />
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="h-12 w-12" animated={false} />
                <div>
                  <h3 className="text-xl font-bold">Iqra</h3>
                  <p className="text-sm text-gray-300">The Subac Circle</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Strengthening the Somali Muslim community through technology. 
                Manage your Subac circles, track prayer times, and connect with mosques.
              </p>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-400 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Serving Muslim communities worldwide
                </p>
                <p className="text-sm text-gray-400 flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-warm-sunset-orange" />
                  Built with Islamic values
                </p>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-warm-sunset-orange">
                Legal & Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-warm-sunset-orange transition-colors duration-200 flex items-center group"
                      >
                        <Icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* App Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-warm-sunset-orange">
                App
              </h4>
              <ul className="space-y-3">
                {footerLinks.app.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-warm-sunset-orange">
                Community
              </h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-warm-sunset-orange">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-700/50">
          <div className="container-custom py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <h5 className="font-semibold mb-2 text-warm-sunset-orange">General Support</h5>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <h5 className="font-semibold mb-2 text-warm-sunset-orange">Privacy Inquiries</h5>
                <a 
                  href={`mailto:${contactInfo.privacy}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  {contactInfo.privacy}
                </a>
              </div>
              
              <div className="text-center md:text-right">
                <h5 className="font-semibold mb-2 text-warm-sunset-orange">Legal Matters</h5>
                <a 
                  href={`mailto:${contactInfo.legal}`}
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center md:justify-end"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {contactInfo.legal}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© {currentYear} Iqra Development Team. All rights reserved.</p>
                <p className="mt-1">
                  <span className="arabic-text text-warm-sunset-orange">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span>
                  {" "}Built with Islamic values and community in mind.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-warm-sunset-orange animate-pulse" />
                <span>for the Ummah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Islamic Quote */}
        <motion.div 
          className="border-t border-gray-700/50 bg-deep-ocean-blue/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container-custom py-4">
            <p className="text-center text-sm text-gray-300 italic">
              "And whoever reads the Qur'an, whether little or much, it will be a light for him on the Day of Resurrection"
              <span className="block mt-1 text-xs text-warm-sunset-orange">
                - Prophet Muhammad (ﷺ)
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}