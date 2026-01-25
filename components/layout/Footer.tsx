'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  app: [
    { name: 'Features', href: '/app' },
    { name: 'Download', href: '/app#download' },
    { name: 'Community', href: '/community' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    { name: 'Contact', href: '/support#contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[var(--color-bg)]">
      {/* Main Footer */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-elegant py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-[var(--color-primary)] rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L12 22" />
                      <path d="M4 12C4 7.58172 7.58172 4 12 4" />
                      <path d="M20 12C20 16.4183 16.4183 20 12 20" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </div>
                <span className="font-['Playfair_Display'] text-xl font-semibold text-[var(--color-text-primary)]">
                  Iqra
                </span>
              </Link>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                Connecting the Somali Muslim community through technology, built with intention and Islamic values.
              </p>
            </div>

            {/* App Links */}
            <div>
              <h4 className="text-label mb-5">App</h4>
              <ul className="space-y-3">
                {footerLinks.app.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-label mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-label mb-5">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="container-elegant py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-sm text-[var(--color-text-secondary)]">
                © {currentYear} Iqra Development Team
              </p>
              <span className="hidden md:block w-px h-4 bg-[var(--color-border)]" />
              <p className="hidden md:block font-['Amiri'] text-sm text-[var(--color-primary)]" style={{ direction: 'rtl' }}>
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)]">
              Made with care for the Ummah
            </p>
          </div>
        </div>
      </div>

      {/* Islamic Quote */}
      <motion.div
        className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container-elegant py-8">
          <blockquote className="text-center">
            <p className="text-sm text-[var(--color-text-secondary)] italic max-w-2xl mx-auto leading-relaxed">
              "Read! In the Name of your Lord Who created. He created man from a clot.
              Read! And your Lord is the Most Generous."
            </p>
            <cite className="block mt-3 text-xs text-[var(--color-primary)] not-italic font-medium">
              — Surah Al-Alaq (96:1-3)
            </cite>
          </blockquote>
        </div>
      </motion.div>
    </footer>
  )
}
