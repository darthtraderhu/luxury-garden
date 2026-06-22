'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* ASZTALI FELSŐ NAVIGÁCIÓ */}
      <nav className="desktop-nav">
        <Link href="/" className="nav-logo">LUXURY <span>GARDEN</span></Link>
        <div className="nav-links">
          <Link href="/">Főoldal</Link>
          
          {/* LENYÍLÓ MENÜ (DROPDOWN) A SZOLGÁLTATÁSOKNAK */}
          <div className="nav-dropdown">
            <Link href="/services" className="dropdown-toggle">Szolgáltatások</Link>
            <div className="dropdown-menu">
              <Link href="/services/kertepites">Kertépítés</Link>
              <Link href="/services/medenceepites">Medenceépítés</Link>
              <Link href="/services/terkovezes">Térkövezés</Link>
              <Link href="/services/foldmunka">Földmunka</Link>
              <Link href="/services/keritesepites">Kerítésépítés & Úszókapuk</Link>
            </div>
          </div>

          <Link href="/contact">Kapcsolat</Link>
        </div>
        <div className="nav-btn-container">
          <Link href="/contact" className="nav-btn">Ajánlatkérés</Link>
        </div>
      </nav>

      {/* MOBIL ALSÓ APP NAVIGÁCIÓ (Marad a letisztult 3 gombos) */}
      <nav className="mobile-app-nav">
        <Link href="/" className={`app-nav-item ${pathname === '/' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Főoldal</span>
        </Link>
        
        <Link href="/services" className={`app-nav-item ${pathname === '/services' || pathname.includes('/services/') ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>Szolgáltatás</span>
        </Link>
        
        <Link href="/contact" className={`app-nav-item ${pathname === '/contact' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>Kapcsolat</span>
        </Link>
      </nav>
    </>
  );
}