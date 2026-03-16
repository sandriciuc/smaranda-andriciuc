import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, phone, businessType, challenge, program } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresa de email nu este validă.' }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    const groupId = process.env.MAILERLITE_GROUP_ID // Contact RO

    if (!apiKey) {
      return NextResponse.json({ error: 'Serviciul de email nu este configurat.' }, { status: 500 })
    }

    const payload: Record<string, unknown> = {
      email,
      status: 'active',
      fields: {
        ...(phone && { phone }),
        ...(program && { program_interes: program }),
        ...(businessType && { business_type: businessType }),
        ...(challenge && { mesaj: challenge }),
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
      return NextResponse.json({ error: 'Nu s-a putut înregistra. Încearcă din nou.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('subscribe-ro error:', err)
    return NextResponse.json({ error: 'Eroare neașteptată. Încearcă din nou.' }, { status: 500 })
  }
}
