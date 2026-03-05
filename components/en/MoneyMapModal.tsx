'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MoneyMapModalProps {
  isOpen: boolean
  onClose: () => void
}

const BUSINESS_TYPES = [
  'Freelancer / Consultant',
  'Service-based business',
  'Product-based business',
  'Coach / Trainer',
  'Creative / Artist',
  'Other',
]

export default function MoneyMapModal({ isOpen, onClose }: MoneyMapModalProps) {
  const [form, setForm] = useState({
    email: '',
    phone: '',
    businessType: '',
    challenge: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe-money-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClose = () => {
    if (status === 'loading') return
    onClose()
    setTimeout(() => {
      setStatus('idle')
      setForm({ email: '', phone: '', businessType: '', challenge: '' })
      setErrorMsg('')
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-ink/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="bg-cream w-full max-w-[540px] pointer-events-auto relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="bg-green px-8 py-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-brass mb-0.5">Free · 6 Weeks</p>
                  <p className="font-cormorant text-[22px] text-cream leading-tight">The Money Map</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-cream/50 hover:text-cream transition-colors text-[22px] leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="px-8 py-7">
                {status === 'success' ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green text-[22px]">✓</span>
                    </div>
                    <h3 className="font-cormorant text-[24px] text-ink mb-2">You're in.</h3>
                    <p className="font-sans text-[14px] text-grey leading-[1.7] mb-4">
                      Check your inbox — you'll receive The Money Map template shortly.
                      <br />You're also subscribed to future updates.
                    </p>
                    <button
                      onClick={handleClose}
                      className="font-sans text-[11px] tracking-[1.5px] uppercase text-green border border-green px-6 py-2.5 hover:bg-green hover:text-cream transition-all"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <p className="font-sans text-[13px] text-grey leading-[1.65] mb-6">
                      Leave your details below and you'll receive the Excel template by email — ready to use from day one.
                    </p>

                    {/* Email */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Email address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+32 ..."
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors"
                      />
                    </div>

                    {/* Business type */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Type of business
                      </label>
                      <select
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink focus:outline-none focus:border-green transition-colors appearance-none"
                      >
                        <option value="" disabled>Select one...</option>
                        {BUSINESS_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Your main challenge right now
                      </label>
                      <textarea
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        rows={3}
                        placeholder="In a few words — what are you trying to figure out?"
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <p className="font-sans text-[12px] text-red-500 mb-4">{errorMsg}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading' || !form.email}
                      className="w-full bg-amber text-white font-sans text-[11px] tracking-[2px] uppercase py-3.5 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-95 transition-all"
                      whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Send me The Money Map'}
                    </motion.button>

                    <p className="font-sans text-[10px] text-lgrey mt-3 text-center">
                      No spam. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
