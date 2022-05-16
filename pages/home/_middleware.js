import { NextResponse } from 'next/server'

export async function middleware(req) {
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
  console.log(url)
  return NextResponse.rewrite(url)
}
