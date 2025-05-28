import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add paths that should be accessible without authentication
const publicPaths = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next()
  }

  // Get the user from the session
  const user = request.cookies.get('user')

  // If there's no user and the path is not public, redirect to login
  if (!user && !publicPaths.includes(pathname)) {
    const url = new URL('/login', request.url)
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
} 