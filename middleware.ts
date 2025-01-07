// Regular Middleware Function
import { NextResponse } from 'next/server';

export function middleware(request: any) {
  // Example: Add a custom header
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'My Custom Middleware');

  // Example: Block access to a specific path
  const url = request.nextUrl.clone();
  if (url.pathname.startsWith('/restricted')) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return response;
}

// Configuration for middleware paths (optional)
export const config = {
  matcher: ['/restricted', '/example/:path*'] // Define paths for middleware
};
