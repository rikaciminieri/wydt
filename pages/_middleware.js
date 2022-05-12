import { NextResponse } from 'next/server'

export async function middleware(req) {
  const url = req.nextUrl.clone()
  const { pathname } = url

  if (pathname === '/') {
    url.pathname = '/home'
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}
