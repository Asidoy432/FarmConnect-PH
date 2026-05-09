import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FarmConnect PH',
  description: 'Connecting Filipino farmers directly to households and businesses.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link className="logo" href="/">FarmConnect PH</Link>
            <nav className="nav-links">
              <Link href="#features">Features</Link>
              <Link href="#market">Market</Link>
              <Link href="#impact">Impact</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer"><div className="container">© 2026 FarmConnect PH. Built for transparent local food supply chains.</div></footer>
      </body>
    </html>
  );
}
