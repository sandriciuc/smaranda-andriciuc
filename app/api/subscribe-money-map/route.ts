import { NextRequest, NextResponse } from 'next/server'

// ─── MailerLite API v3 ────────────────────────────────────────────────────────
// Required env variable: MAILERLITE_API_KEY
// Optional env variable: MAILERLITE_GROUP_ID  (Money Map subscribers group)
//
// Setup in MailerLite dashboard:
//  1. Create a group called "Money Map Subscribers" and note its ID
//  2. Create custom fields: "phone", "business_type", "challenge"
//  3. Create an automation: Trigger = "Subscriber joins group [Money Map]"
//     → Send welcome email with the Money Map file as a link/attachment
//  4. Add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to .env.local

export async function POST(req: NextRequest) {
  try {
    const { email, phone, businessType, challenge } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
    }

    const groupId = process.env.MAILERLITE_GROUP_ID

    const payload: Record<string, unknown> = {
      email,
      status: 'active',
      fields: {
        ...(phone && { phone }),
        ...(businessType && { business_type: businessType }),
        ...(challenge && { last_note: challenge }),  // MailerLite built-in field
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
        { error: 'Could not subscribe. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('subscribe-money-map error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 })
  }
}
