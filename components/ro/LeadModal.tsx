'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  program: string  // pre-filled program
}

const BUSINESS_TYPES = [
  'Freelancer / Consultant',
  'Business de servicii',
  'Business de produse',
  'Coach / Trainer',
  'Creativ / Artist',
  'Altul',
]

export default function LeadModal({ isOpen, onClose, program }: LeadModalProps) {
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
      const res = await fetch('/api/subscribe-ro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, program }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Ceva nu a funcționat.')
      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ceva nu a funcționat. Încearcă din nou.')
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
              className="bg-cream w-full max-w-[540px] pointer-events-auto relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="bg-green px-8 py-5 flex items-center justify-between sticky top-0">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-brass mb-0.5">Gratuit · Linia 01</p>
                  <p className="font-cormorant text-[22px] text-cream leading-tight">{program}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-cream/50 hover:text-cream transition-colors text-[22px] leading-none"
                  aria-label="Închide"
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
                    <h3 className="font-cormorant text-[24px] text-ink mb-2">Ești înregistrată.</h3>
                    <p className="font-sans text-[14px] text-grey leading-[1.7] mb-4">
                      Îți voi trimite detaliile pe email în curând.
                      <br />Ești și abonată la actualizări viitoare.
                    </p>
                    <button
                      onClick={handleClose}
                      className="font-sans text-[11px] tracking-[1.5px] uppercase text-green border border-green px-6 py-2.5 hover:bg-green hover:text-cream transition-all"
                    >
                      Închide
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <p className="font-sans text-[13px] text-grey leading-[1.65] mb-6">
                      Lasă-ți datele mai jos și te contactez cu detaliile.
                    </p>

                    {/* Email */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Adresă de email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Număr de telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+40 ..."
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors"
                      />
                    </div>

                    {/* Business type */}
                    <div className="mb-4">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Tipul de business
                      </label>
                      <select
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink focus:outline-none focus:border-green transition-colors appearance-none"
                      >
                        <option value="" disabled>Selectează...</option>
                        {BUSINESS_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <label className="block font-mono text-[9px] tracking-[0.25em] uppercase text-brass mb-1.5">
                        Provocarea ta principală acum
                      </label>
                      <textarea
                        name="challenge"
                        value={form.challenge}
                        onChange={handleChange}
                        rows={3}
                        placeholder="În câteva cuvinte — ce încerci să îți dai seama?"
                        className="w-full bg-white border border-cream-d px-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-lgrey focus:outline-none focus:border-green transition-colors resize-none"
                      />
                    </div>

                    {errorMsg && (
                      <p className="font-sans text-[12px] text-red-500 mb-4">{errorMsg}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading' || !form.email}
                      className="w-full bg-green text-cream font-sans text-[11px] tracking-[2px] uppercase py-3.5 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-d transition-all"
                      whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? 'Se trimite...' : 'Mă înregistrez'}
                    </motion.button>

                    <p className="font-sans text-[10px] text-lgrey mt-3 text-center">
                      Fără spam. Te poți dezabona oricând.
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
