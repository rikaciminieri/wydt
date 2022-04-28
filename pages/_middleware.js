import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { nextUrl: url, geo } = req
  console.log(geo)
  const country = geo.country || 'US'
  const city = geo.city || 'Diamond Bar'
  const region = geo.region || 'CA'
  const lat = geo.latitude || '34.0085'
  const long = geo.longitude || '-117.8136'

  url.searchParams.set('country', country)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)
  url.searchParams.set('latitude', lat)
  url.searchParams.set('longitude', long)

  return NextResponse.rewrite(url)
}
