import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith('/admin/dashboard')) return NextResponse.next();

  const session = req.cookies.get('farmconnect_admin')?.value;
  if (session === 'true') return NextResponse.next();

  return NextResponse.redirect(new URL('/admin', req.url));
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
};
