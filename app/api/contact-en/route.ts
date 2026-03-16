import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, message } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    const groupId = process.env.MAILERLITE_GROUP_EN_ID

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const parts = (name || '').trim().split(' ')
    const firstName = parts[0] || ''
    const lastName = parts.slice(1).join(' ') || ''

    const payload: Record<string, unknown> = {
      email,
      status: 'active',
      fields: {
        ...(firstName && { name: firstName }),
        ...(lastName && { last_name: lastName }),
        ...(company && { company }),
        ...(service && { program_interes: service }),
        ...(message && { mesaj: message }),
      },
      ...(groupId && { groups: [groupId] }),
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('MailerLite error:', err)
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('contact-en error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 })
  }
}
