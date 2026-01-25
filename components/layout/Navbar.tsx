'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/app' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div className="container-elegant">
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass rounded-2xl px-6 py-3 shadow-lg shadow-black/5'
              : 'px-0 py-0'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo mark */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[var(--color-primary)] rounded-xl transition-transform duration-300 group-hover:scale-95" />
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

            {/* Logo text */}
            <div className="hidden sm:block">
              <span className="font-['Playfair_Display'] text-xl font-semibold text-[var(--color-text-primary)]">
                Iqra
              </span>
              <span className="text-sm text-[var(--color-text-secondary)] ml-2 hidden md:inline">
                The Subac Circle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-[var(--color-primary)] bg-[var(--color-accent-muted)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="p-2.5 rounded-xl bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-accent-muted)] transition-all duration-300"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                  ) : (
                    <Moon className="w-5 h-5 text-[var(--color-primary)]" />
                  )}
                </motion.div>
              </button>
            )}

            {/* Download CTA */}
            <Link
              href="/app"
              className="btn-primary text-sm py-3 px-6"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={handleThemeToggle}
                className="p-2.5 rounded-xl bg-[var(--color-bg-tertiary)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--color-primary)]" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[var(--color-text-primary)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--color-text-primary)]" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-4 right-4 mt-2 z-50 lg:hidden"
            >
              <div className="bg-[var(--color-card)] rounded-2xl shadow-xl border border-[var(--color-border)] p-4">
                <nav className="space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                          pathname === item.href
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                  <Link
                    href="/app"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Get the App
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
