'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface NavbarProps {
  lang?: 'ro' | 'en'
}

const serviceLines = {
  ro: {
    label: 'Structură pentru business-uri.',
    items: [
      { title: 'Business & Financial Strategy Consultancy & Mentoring', href: '/ro/servicii/linia-1' },
      { title: 'Operations & Systems Consultancy | Business Architecture', href: '/ro/servicii/linia-2' },
      { title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/ro/servicii/linia-3' },
    ],
  },
  en: {
    label: 'Systems for business.',
    items: [
      { title: 'Business & Financial Strategy Consultancy & Mentoring', href: '/en/services/line-1' },
      { title: 'Operations & Systems Consultancy | Business Architecture', href: '/en/services/line-2' },
      { title: 'Leadership Coaching for Entrepreneurs & Leaders', href: '/en/services/line-3' },
    ],
  },
}

export default function Navbar({ lang = 'ro' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const isRo = lang === 'ro'
  const lines = serviceLines[lang]

  const navLinks = isRo
    ? [
        { label: 'Despre', href: '#despre' },
        { label: 'Testimoniale', href: '#testimoniale' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'About', href: '#about' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setServicesOpen(false)
    if (!href.startsWith('#')) return
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On a sub-page — navigate to homepage with hash
      const home = isRo ? '/ro' : '/en'
      window.location.href = `${home}${href}`
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
              {isRo ? 'Claritate. Sisteme. Rezultate.' : 'Clarity. Systems. Results.'}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick(isRo ? '#despre' : '#about')}
              className="text-cream/75 hover:text-cream font-sans text-sm font-medium transition-colors"
            >
              {isRo ? 'Despre' : 'About'}
            </button>

            {/* Servicii / Services — dropdown only, no navigation */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-cream/75 hover:text-cream font-sans text-sm font-medium transition-colors"
              >
                {isRo ? 'Servicii' : 'Services'}
                <motion.svg
                  className="w-3 h-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-3 w-80 bg-green-d rounded-xl border border-brass/15 shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="px-4 pt-4 pb-2">
                      <p
                        className="font-mono text-[11px] uppercase tracking-widest"
                        style={{ color: '#B89A6E' }}
                      >
                        {lines.label}
                      </p>
                    </div>
                    <div className="h-px bg-brass/15 mx-4" />
                    {lines.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 w-full px-4 py-3 hover:bg-green/50 transition-colors group"
                      >
                        <span className="font-mono text-cream/40 text-[10px] mt-0.5 flex-shrink-0">0{i + 1}</span>
                        <span className="font-sans text-cream/80 group-hover:text-cream text-[13px] transition-colors leading-snug">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                    <div className="h-3" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
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
            <div className="hidden md:flex items-center gap-1 bg-green/40 rounded-full p-1">
              <Link
                href="/ro"
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
                  isRo ? 'bg-amber text-white' : 'text-cream/60 hover:text-cream'
                }`}
              >
                RO
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all ${
                  !isRo ? 'bg-amber text-white' : 'text-cream/60 hover:text-cream'
                }`}
              >
                EN
              </Link>
            </div>

            <motion.a
              href="https://calendar.app.google/t2Am29cmi49yoQ468"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-amber text-white text-sm font-sans font-medium px-5 py-2 rounded-full"
              whileHover={{ scale: 1.02, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97 }}
            >
              {isRo ? 'Programează o conversație' : 'Book a conversation'}
            </motion.a>

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
            className="fixed inset-0 z-30 bg-green-d flex flex-col pt-28 px-8 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              <motion.button
                onClick={() => handleNavClick(isRo ? '#despre' : '#about')}
                className="text-left text-cream font-cormorant text-3xl font-light"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                {isRo ? 'Despre' : 'About'}
              </motion.button>

              {/* Servicii mobile — expandable */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 }}
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center gap-3 text-left text-cream font-cormorant text-3xl font-light w-full"
                >
                  {isRo ? 'Servicii' : 'Services'}
                  <motion.svg
                    className="w-5 h-5 text-cream/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      className="mt-3 ml-2 flex flex-col gap-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p
                        className="font-mono text-[10px] uppercase tracking-widest mb-1"
                        style={{ color: '#B89A6E' }}
                      >
                        {lines.label}
                      </p>
                      {lines.items.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-2"
                        >
                          <span className="font-mono text-cream/30 text-[11px] mt-1">0{i + 1}</span>
                          <span className="font-sans text-cream/70 text-[15px] leading-snug">{item.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.slice(1).map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-cream font-cormorant text-3xl font-light"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

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

            <motion.a
              href="https://calendar.app.google/t2Am29cmi49yoQ468"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-amber text-white font-sans font-medium px-6 py-3 rounded-full text-center w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isRo ? 'Programează o conversație' : 'Book a conversation'}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
