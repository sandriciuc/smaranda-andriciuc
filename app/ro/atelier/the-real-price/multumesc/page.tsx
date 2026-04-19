'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { fbqPurchase } from '@/lib/fbq'

const SITE_URL = 'https://www.smaranda-andriciuc.com'
const REDIRECT_SECONDS = 10

function capitalize(str: string) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export default function Multumesc() {
  const searchParams = useSearchParams()
  const [remaining, setRemaining] = useState(REDIRECT_SECONDS)

  const rawName = searchParams.get('name') || searchParams.get('customer_name') || ''
  const firstName = capitalize(rawName.trim().split(' ')[0])

  useEffect(() => {
    fbqPurchase(250, 'RON', 'The Real Price')
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = SITE_URL
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: '#F5F2EE',
        color: '#2A2A2A',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: 'fixed', top: -180, right: -120,
        width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(184,154,110,0.07)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed', bottom: -200, left: -100,
        width: 600, height: 600, borderRadius: '50%',
        background: 'rgba(61,90,76,0.04)', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 580, width: '100%', textAlign: 'center' }}>

        {/* Icon mark */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 10, height: 44, background: '#3D5A4C', borderRadius: '3px 3px 1px 1px' }} />
          <div style={{ width: 10, height: 36, background: '#C4873A', borderRadius: '3px 3px 1px 1px' }} />
          <div style={{ width: 10, height: 30, background: '#B89A6E', borderRadius: '3px 3px 1px 1px' }} />
        </div>

        {/* Accent line */}
        <div style={{ width: 48, height: 2, background: '#C4873A', margin: '0 auto 32px', borderRadius: 1 }} />

        {/* Label */}
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#C4873A', fontWeight: 500, marginBottom: 16 }}>
          Atelier Trimestrial
        </p>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,6vw,42px)', fontWeight: 300, lineHeight: 1.15, color: '#3D5A4C', marginBottom: 24 }}>
          {firstName ? `${firstName}, locul tău` : 'Locul tău'}{' '}
          <em style={{ fontStyle: 'italic', color: '#B89A6E' }}>e confirmat.</em>
        </h1>

        {/* Message */}
        <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5A5A5A', fontWeight: 300, maxWidth: 460, margin: '0 auto 12px' }}>
          Plata a fost procesată. Vei primi un email cu toate detaliile — subiectul sesiunii, data exactă și ce să pregătești.
        </p>

        {/* Confirm box */}
        <div style={{
          background: '#E8E3DB', borderRadius: 12, padding: '24px 28px',
          margin: '32px auto 0', maxWidth: 420,
          borderLeft: '3px solid #C4873A', textAlign: 'left',
        }}>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5A5A5A' }}>
            <strong style={{ color: '#3D5A4C', fontWeight: 500 }}>Ce urmează:</strong>{' '}
            verifică inbox-ul (și spam-ul) în următoarele minute. Emailul conține tot ce ai nevoie ca să vii pregătită.
          </p>
        </div>

        {/* Countdown */}
        <p style={{ marginTop: 36, fontSize: 13, color: '#8A8A8A', fontWeight: 300 }}>
          Vei fi redirecționată în{' '}
          <span style={{ fontWeight: 500, color: '#5A5A5A' }}>{remaining}</span>{' '}
          secunde ·{' '}
          <a href={SITE_URL} style={{ color: '#3D5A4C', textDecoration: 'none', fontWeight: 400, borderBottom: '1px solid rgba(61,90,76,0.2)' }}>
            mergi acum pe site →
          </a>
        </p>

        {/* Progress bar */}
        <div style={{ width: 120, height: 2, background: '#E8E3DB', borderRadius: 1, margin: '12px auto 0', overflow: 'hidden' }}>
          <div style={{
            height: '100%', background: '#3D5A4C', borderRadius: 1,
            width: `${((REDIRECT_SECONDS - remaining) / REDIRECT_SECONDS) * 100}%`,
            transition: 'width 1s linear',
          }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 400, color: '#8A8A8A', letterSpacing: 0.5 }}>
          Smaranda Andriciuc
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['#E8E3DB', '#3D5A4C', '#B89A6E', '#C4873A'].map((c) => (
            <div key={c} style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}
