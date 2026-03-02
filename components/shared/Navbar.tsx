'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  lang?: 'ro' | 'en'
}

const navLinksRo = [
  { label: 'Despre', href: '#despre' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Contact', href: '#contact' },
]

const navLinksEn = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ lang = 'ro' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isRo = lang === 'ro'
  const navLinks = isRo ? navLinksRo : navLinksEn

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-green-d"
        animate={{
          paddingTop: scrolled ? '10px' : '20px',
          paddingBottom: scrolled ? '10px' : '20px',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.18)' : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={isRo ? '/ro' : '/en'} className="flex flex-col">
            <span className="font-cormorant text-cream text-[22px] leading-tight tracking-wide">
              Smaranda Andriciuc
            </span>
            <span className="label-style text-brass-l" style={{ letterSpacing: '0.18em', fontSize: '10px' }}>
              {isRo ? 'Claritate financiară. Decizii reale.' : 'Clarity. Systems. Results.'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-cream/75 hover:text-cream font-sans text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden md:flex items-center gap-1 bg-green/40 rounded-full p-1">
              <Link
                href="/ro"
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
                  isRo
                    ? 'bg-amber text-white'
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                RO
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
                  !isRo
                    ? 'bg-amber text-white'
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                EN
              </Link>
            </div>

            {/* CTA button */}
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:block bg-amber text-white text-sm font-sans font-medium px-5 py-2 rounded-full"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              {isRo ? 'Hai să vedem cifrele' : 'Book a conversation'}
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-cream"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-cream"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-cream"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-green-d flex flex-col pt-28 px-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-cream font-cormorant text-3xl font-light"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Language toggle mobile */}
            <div className="mt-10 flex items-center gap-3">
              <Link
                href="/ro"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${
                  isRo ? 'bg-amber text-white' : 'text-cream/60 border border-cream/20'
                }`}
              >
                Română
              </Link>
              <Link
                href="/en"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all ${
                  !isRo ? 'bg-amber text-white' : 'text-cream/60 border border-cream/20'
                }`}
              >
                English
              </Link>
            </div>

            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="mt-8 bg-amber text-white font-sans font-medium px-6 py-3 rounded-full text-center w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isRo ? 'Hai să vedem cifrele' : 'Book a conversation'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
