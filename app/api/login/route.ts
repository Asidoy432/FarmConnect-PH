import { NextResponse } from 'next/server';

const DEMO_EMAIL = process.env.DEMO_ADMIN_EMAIL ?? 'arnolfoasidoy155@gmail.com';
const DEMO_PASSWORD = process.env.DEMO_ADMIN_PASSWORD ?? 'asidoy12345';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ success: false, message: 'Email and password are required.' }, { status: 400 });
  }

  if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set('farmconnect_admin', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return response;
}
