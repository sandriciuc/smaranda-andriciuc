'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const programs = [
  'Workshop trimestrial',
  'Program de Grup (6 luni)',
  'Business Plan 1 la 1',
  'Pachet Premium',
  'Nu știu încă',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulăm trimiterea — înlocuiește cu integrare reală (Resend, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <AnimatedSection>
            <p className="label-style text-brass mb-3">CONTACT</p>
            <BrassLine className="mb-6" />
            <h2 className="font-cormorant text-ink text-[clamp(28px,3.5vw,42px)] leading-tight mb-4">
              Hai să vedem ce spun cifrele tale.
            </h2>
            <p className="font-sans text-grey text-[15px] leading-relaxed mb-8">
              Prima conversație e gratuită și fără angajament.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">✉</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">Email</p>
                  {/* EMAIL DE COMPLETAT */}
                  <a
                    href="mailto:EMAIL_DE_COMPLETAT"
                    className="font-sans text-green text-[14px] hover:text-amber transition-colors"
                  >
                    EMAIL_DE_COMPLETAT
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">⏰</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">Program</p>
                  <p className="font-sans text-ink text-[14px]">Luni–Vineri, 9:00–18:00 (CET)</p>
                </div>
              </div>

              {/* LINKEDIN DE COMPLETAT */}
              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">🔗</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/PROFIL_DE_COMPLETAT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-green text-[14px] hover:text-amber transition-colors"
                  >
                    Smaranda Andriciuc
                  </a>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-green-l rounded-xl px-5 py-4 border border-green/15">
              <p className="font-cormorant italic text-green text-[18px] leading-relaxed">
                „Pe date, nu pe speranță."
              </p>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-l rounded-2xl p-10 text-center border border-green/20"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-cormorant text-green-d text-[28px] mb-3">
                  Mesaj trimis!
                </h3>
                <p className="font-sans text-grey text-[14px] leading-relaxed">
                  Îți răspund în maxim 24 de ore.
                  <br />
                  E în regulă să nu știi exact de unde să începi.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream-l rounded-2xl p-8 border border-green/8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="name">
                    Nume complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Prenume Nume"
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="adresa@email.com"
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="program">
                    Programul de interes
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream focus:outline-none focus:border-amber/60 transition-colors appearance-none"
                  >
                    <option value="">Selectează un program</option>
                    {programs.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="message">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Spune-mi pe scurt situația ta, ce te blochează sau ce vrei să obții..."
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber text-white font-sans font-medium py-3.5 rounded-full text-[15px] disabled:opacity-70"
                  whileHover={{ scale: loading ? 1 : 1.02, filter: loading ? 'none' : 'brightness(1.08)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  {loading ? 'Se trimite...' : 'Trimite'}
                </motion.button>

                <p className="font-sans text-lgrey text-[12px] text-center leading-relaxed">
                  Îți răspund în maxim 24 de ore.
                  <br />
                  E în regulă să nu știi exact de unde să începi.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
