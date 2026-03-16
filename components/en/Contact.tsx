'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/shared/AnimatedSection'
import BrassLine from '@/components/shared/BrassLine'

const serviceOptions = [
  'Business & Financial Strategy Consultancy & Mentoring',
  'The Clarity Circle',
  'The Money Map',
  'The Financial Decision',
  'The Advisory',
  'Operations & Systems Consultancy',
  'Leadership Coaching for Entrepreneurs and Leaders',
  "I don't know yet",
]

export default function ContactEn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
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
              Let's see what the numbers say.
            </h2>
            <p className="font-sans text-grey text-[15px] leading-relaxed mb-8">
              The diagnostic conversation is free and without commitment.
              <br />
              30 minutes. Direct questions. Honest feedback.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">✉</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">Email</p>
                  <a
                    href="mailto:smaranda.andriciuc@gmail.com"
                    className="font-sans text-green text-[14px] hover:text-amber transition-colors"
                  >
                    smaranda.andriciuc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">📍</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">Location</p>
                  <p className="font-sans text-ink text-[14px]">Belgium · remote available</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">⏰</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">Availability</p>
                  <p className="font-sans text-ink text-[14px]">By appointment</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-brass text-lg">🔗</span>
                <div>
                  <p className="label-style text-lgrey text-[10px] mb-0.5">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/smaranda-andriciuc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-green text-[14px] hover:text-amber transition-colors"
                  >
                    Smaranda Andriciuc
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-l rounded-xl px-5 py-4 border border-green/15">
              <p className="font-mono text-green text-[13px] leading-relaxed">
                Not guessing. Calculating.
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
                <h3 className="font-cormorant text-green-d text-[28px] mb-3">Message sent!</h3>
                <p className="font-sans text-grey text-[14px] leading-relaxed">
                  I'll get back to you within 24 hours.
                  <br />
                  It's fine if you're not sure where to start yet.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream-l rounded-2xl p-8 border border-green/8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="en-name">
                    Full name
                  </label>
                  <input
                    id="en-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Last"
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="en-email">
                    Email
                  </label>
                  <input
                    id="en-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="en-company">
                    Company (optional)
                  </label>
                  <input
                    id="en-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream placeholder:text-lgrey focus:outline-none focus:border-amber/60 transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="en-service">
                    Area of interest
                  </label>
                  <select
                    id="en-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-green/15 rounded-xl px-4 py-3 font-sans text-[14px] text-ink bg-cream focus:outline-none focus:border-amber/60 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="label-style text-lgrey text-[10px] block mb-2" htmlFor="en-message">
                    Message (optional)
                  </label>
                  <textarea
                    id="en-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your situation or what you're trying to solve..."
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
                  {loading ? 'Sending...' : 'Send message'}
                </motion.button>

                <p className="font-sans text-lgrey text-[12px] text-center leading-relaxed">
                  I'll reply within 24 hours.
                  <br />
                  It's fine if you're not sure where to start.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
