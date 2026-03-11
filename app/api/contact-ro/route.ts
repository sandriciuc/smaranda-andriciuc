import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, program, message } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresa de email nu este validă.' }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    const groupId = process.env.MAILERLITE_GROUP_ID

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return NextResponse.json({ error: 'Serviciul de email nu este configurat.' }, { status: 500 })
    }

    // Split name into first/last for MailerLite standard fields
    const parts = (name || '').trim().split(' ')
    const firstName = parts[0] || ''
    const lastName = parts.slice(1).join(' ') || ''

    const payload: Record<string, unknown> = {
      email,
      status: 'active',
      fields: {
        ...(firstName && { name: firstName }),
        ...(lastName && { last_name: lastName }),
        ...(program && { company: program }),   // program de interes → câmpul company
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
      return NextResponse.json(
        { error: 'Nu s-a putut înregistra. Încearcă din nou.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('contact-ro error:', err)
    return NextResponse.json({ error: 'Eroare neașteptată. Încearcă din nou.' }, { status: 500 })
  }
}
