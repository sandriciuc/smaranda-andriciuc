'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface FooterProps {
  lang?: 'ro' | 'en'
}

export default function Footer({ lang = 'ro' }: FooterProps) {
  const isRo = lang === 'ro'

  return (
    <footer className="bg-green-d text-cream relative">
      {/* Brass decorative line */}
      <div className="h-px w-full bg-brass opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Left — Brand */}
          <div>
            <h3 className="font-cormorant text-2xl text-cream mb-1">Smaranda Andriciuc</h3>
            <p className="label-style text-brass-l mb-4">
              {isRo ? 'Claritate financiară. Decizii reale.' : 'Clarity. Systems. Results.'}
            </p>
            <p className="text-sm text-cream/60 leading-relaxed font-sans">
              {isRo
                ? 'Consultant operațional și mentor de claritate financiară. Bazată în Bornem, Belgia.'
                : 'Operational consultant and business mentor. Based in Bornem, Belgium.'}
            </p>
          </div>

          {/* Center — Links */}
          <div>
            <p className="label-style text-brass-l mb-4">
              {isRo ? 'Navigare' : 'Navigation'}
            </p>
            <ul className="space-y-2">
              {isRo ? (
                <>
                  <li>
                    <a href="#servicii" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Servicii
                    </a>
                  </li>
                  <li>
                    <a href="#despre" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Despre
                    </a>
                  </li>
                  <li>
                    <a href="#proces" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Proces
                    </a>
                  </li>
                  <li>
                    <a href="#testimoniale" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Testimoniale
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Contact
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="#services" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Process
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm text-cream/70 hover:text-cream font-sans transition-colors">
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <p className="label-style text-brass-l mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                {/* EMAIL DE COMPLETAT */}
                <a
                  href="mailto:EMAIL_DE_COMPLETAT"
                  className="text-sm text-cream/70 hover:text-cream font-sans transition-colors"
                >
                  EMAIL_DE_COMPLETAT
                </a>
              </li>
              <li>
                {/* LINKEDIN DE COMPLETAT */}
                <a
                  href="https://linkedin.com/in/PROFIL_DE_COMPLETAT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 hover:text-cream font-sans transition-colors flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <p className="text-sm text-cream/50 font-sans">
                  {isRo ? 'Luni–Vineri, 9:00–18:00 (CET)' : 'Mon–Fri, 9:00–18:00 (CET)'}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-sans">
            © 2025 Smaranda Andriciuc
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-cream/40 hover:text-cream/70 font-sans transition-colors">
              {isRo ? 'Politică confidențialitate' : 'Privacy Policy'}
            </Link>
            <Link href="#" className="text-xs text-cream/40 hover:text-cream/70 font-sans transition-colors">
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
