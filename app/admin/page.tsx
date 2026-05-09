'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        setError('Invalid demo credentials.');
        setLoading(false);
        return;
      }

      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      setError('Unable to sign in at the moment. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="container section" style={{ minHeight: '70vh' }}>
      <section className="card" style={{ maxWidth: 500, margin: '2rem auto' }}>
        <h2>Admin Portal</h2>
        <p className="subtitle">Demo admin access for operations monitoring and approvals.</p>
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '.9rem' }}>
          <label>Email<input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
          <label>Password<input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
        </form>
        {error && <p style={{ color: '#b3261e' }}>{error}</p>}
      </section>
    </main>
  );
}
