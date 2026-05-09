'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/admin');
    router.refresh();
  };

  return <button className="btn" onClick={logout} style={{ marginTop: '1rem' }}>Log Out</button>;
}
