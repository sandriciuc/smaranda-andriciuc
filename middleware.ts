import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only apply to the root path
  if (pathname !== '/') return NextResponse.next()

  const country = request.headers.get('x-vercel-ip-country') ?? ''

  if (country === 'RO') {
    return NextResponse.redirect(new URL('/ro', request.url))
  }

  return NextResponse.redirect(new URL('/en', request.url))
}

export const config = {
  matcher: '/',
}
