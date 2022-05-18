import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/api') //  exclude all API routes
    // pathname.startsWith("/static") || // exclude static files
    // pathname.includes(".") // exclude all files in the public folder
  ) {
    return NextResponse.next()
  }

  const { nextUrl: url, geo } = req

  const country = geo.country || 'US'
  const city = geo.city || 'Diamond Bar'
  const region = geo.region || 'CA'
  // const lat = geo.latitude || '32.0085'
  const lat = geo.latitude || '32.7157'
  // const long = geo.longitude || '-117.8136'
  const long = geo.longitude || '-117.1611'

  url.searchParams.set('country', country)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)
  url.searchParams.set('latitude', lat)
  url.searchParams.set('longitude', long)
  
  return NextResponse.rewrite(url)
}
