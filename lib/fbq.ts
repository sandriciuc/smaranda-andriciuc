declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function fbqLead(contentName?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', contentName ? { content_name: contentName } : {})
  }
}

export function fbqPurchase(value: number, currency = 'RON', contentName?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value,
      currency,
      ...(contentName && { content_name: contentName }),
    })
  }
}

export function fbqInitiateCheckout(value: number, currency = 'RON', contentName?: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value,
      currency,
      ...(contentName && { content_name: contentName }),
    })
  }
}
