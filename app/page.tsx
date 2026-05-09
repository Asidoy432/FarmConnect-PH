import Link from 'next/link';
import { products, stats } from '@/data/content';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <h1>Professional farm-to-market digital infrastructure for the Philippines.</h1>
          <p className="subtitle">FarmConnect PH connects farmers, buyers, and logistics in one trusted platform with transparent pricing, quality checks, and fulfillment tracking.</p>
          <div style={{ display: 'flex', gap: '.8rem', marginTop: '1rem' }}>
            <Link className="btn" href="#market">Browse Produce</Link>
            <Link className="btn" style={{ background: '#2f9b59' }} href="/admin">Admin Portal</Link>
          </div>
        </div>
        <div className="hero-card">
          <h3>Live Platform KPIs</h3>
          {stats.map((item) => <p key={item.label}>{item.label}: <b>{item.value}</b></p>)}
        </div>
      </section>

      <section id="market" className="section">
        <h2>Verified Marketplace Listings</h2>
        <div className="grid3">
          {products.map((item) => (
            <article key={item.id} className="card">
              <h4>{item.name}</h4>
              <p>{item.farm}</p>
              <p><b>₱{item.price}/{item.unit}</b></p>
              <p>Available: {item.available} {item.unit}</p>
              <button className="btn">Request Purchase</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section card" style={{ marginBottom: '2rem' }}>
        <h2>Enterprise-grade Support</h2>
        <p className="subtitle">Includes partner onboarding support, procurement workflows, and reporting for LGUs, institutions, and food businesses.</p>
      </section>
    </main>
  );
}
