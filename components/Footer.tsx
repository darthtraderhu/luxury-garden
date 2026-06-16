import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="avantgarde-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>LUXURY <span>GARDEN</span></h3>
          <p>20 év szakmai tapasztalat, süllyedésmentes alapozás, kompromisszumok nélküli prémium minőség Budapesten és Pest megyében.</p>
        </div>
        
        <div className="footer-col">
          <h4>Szolgáltatások</h4>
          <ul className="footer-links">
            {/* JAVÍTOTT, PONTOS LINKKED AZ ALOLDALAKRA */}
            <li><Link href="/services/kertepites">Teljeskörű Kertépítés</Link></li>
            <li><Link href="/services/medenceepites">Prémium Medenceépítés</Link></li>
            <li><Link href="/services/terkovezes">Térkövezés & Támfalak</Link></li>
            <li><Link href="/services/foldmunka">Gépi Földmunka</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Információk</h4>
          <ul className="footer-links">
            {/* Rólunk oldal még nincs, marad a # */}
            <li><Link href="#">Rólunk</Link></li>
            {/* Referenciák a főoldalra mutat */}
            <li><Link href="/">Referenciák</Link></li>
            <li><Link href="/contact">Kapcsolat</Link></li>
            {/* Adatkezelési még nincs, marad a # */}
            <li><Link href="#">Adatkezelési Tájékoztató</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          &copy; 2026 Luxury Garden. Minden jog fenntartva.
        </div>
        <a href="https://thegbr.eu" target="_blank" rel="noopener noreferrer" className="gbr-signature" style={{ textDecoration: 'none' }}>
          <span>GBR</span> Develop and Management
        </a>
      </div>
    </footer>
  );
}