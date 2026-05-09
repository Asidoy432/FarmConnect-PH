import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (cookieStore.get('farmconnect_admin')?.value !== 'true') redirect('/admin');

  return (
    <main className="container section">
      <h2>Admin Dashboard</h2>
      <p className="subtitle">Manage farmer onboarding, orders, and operations.</p>
      <div className="grid3">
        <article className="card"><h4>Pending Farmer Verifications</h4><p style={{ fontSize: '2rem' }}>14</p></article>
        <article className="card"><h4>Orders Requiring Dispatch</h4><p style={{ fontSize: '2rem' }}>38</p></article>
        <article className="card"><h4>Support Tickets</h4><p style={{ fontSize: '2rem' }}>7</p></article>
      </div>
      <LogoutButton />
    </main>
  );
}
