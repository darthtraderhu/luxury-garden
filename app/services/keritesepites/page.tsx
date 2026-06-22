import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prémium Kerítésépítés és Úszókapuk | Luxury Garden',
  description: 'Komplex kerítésépítés, zsaluköves rendszerek, WPC és fém betétek, valamint automatizált úszókapuk kivitelezése A-tól Z-ig Budapesten és Pest megyében.',
  keywords: ['kerítésépítés', 'úszókapu készítés', 'tolókapu', 'zsaluköves kerítés', 'WPC kerítés', 'kapuautomatizálás', 'prémium kerítés'],
};

export default function FencingPage() {
  return (
    <main>
      {/* HERO SZEKCIÓ (A meglévő prémium címsor stílus) */}
      <section className="inner-hero">
        <h1 className="outline">Prémium</h1>
        <h1 className="solid">Kerítésépítés</h1>
        <p>
          Az otthonod biztonsága és eleganciája a telekhatáron kezdődik. Nem csupán kerítéseket építünk, 
          hanem masszív, időtálló és dizájnos határoló rendszereket, amelyek tökéletesen illeszkednek 
          az ingatlanod stílusához. A sávalap kiásásától az okosmotor beüzemeléséig mindent egy kézben tartunk.
        </p>
      </section>

      {/* SZOLGÁLTATÁS RÉSZLETEK (A meglévő üveghatású kártyákkal) */}
      <section className="contact-section" style={{ paddingTop: '2vw' }}>
        <div className="info-bento-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <div className="info-card-content">
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '10px' }}>A-tól Z-ig Kivitelezés</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>Felejtsd el a szakik összehangolását! Saját gépparkunkkal elvégezzük a precíz földmunkát, a sávalap betonozását, a zsalukő rakást, a vasalást és a burkolást.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div className="info-card-content">
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '10px' }}>Úszó- és Tolókapuk</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>Egyedi méretre gyártott, masszív acélszerkezetű kapuk. Garantáljuk a milliméter pontos futást és a hosszú távú, nyikorgásmentes működést nagy fesztávoknál is.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <div className="info-card-content">
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '10px' }}>Kapuautomatizálás</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>Piacvezető, csendes motorokkal (Hörmann, Sommer) dolgozunk. Távirányítós vagy okostelefonos (Wi-Fi) vezérlés beállítása, akár videós kaputelefonnal.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-icon">
              <svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <div className="info-card-content">
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '10px' }}>Modern Betétek</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>A betonvázak közé prémium, UV-álló WPC deszkákat, modern alumínium lécezést, vagy teljesen egyedi, lézervágott dizájn paneleket építünk be.</p>
            </div>
          </div>

        </div>
      </section>

      {/* WORKFLOW / HOGYAN DOLGOZUNK (A meglévő sorszámozott listával) */}
      <section className="contact-section" style={{ paddingTop: '2vw' }}>
        <div className="process-steps" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '4rem' }}>A tökéletes kerítés születése</h3>
          
          <div className="step-item">
            <div className="step-number">01</div>
            <div className="step-text">
              <h4>Tervezés és Kijelölés</h4>
              <p>Lézeres szintezéssel és pontos telekhatár-kiméréssel kezdünk, hogy a kerítés nyílegyenes és tökéletes legyen.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">02</div>
            <div className="step-text">
              <h4>Földmunka és Alapozás</h4>
              <p>Fagyhatár alá ásott, masszívan vasalt beton sávalapot készítünk, amely évtizedekig ellenáll a talajmozgásnak.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">03</div>
            <div className="step-text">
              <h4>Zsalukő és Szerkezet</h4>
              <p>Kötésben rakott, betonnal és betonacéllal kitöltött zsalukő oszlopok és lábazat építése a maximális stabilitásért.</p>
            </div>
          </div>
          <div className="step-item" style={{ marginBottom: 0 }}>
            <div className="step-number">04</div>
            <div className="step-text">
              <h4>Kapu és Betétek</h4>
              <p>Helyszínre szállítjuk és beépítjük az egyedi gyártású úszókaput, a motorikát, és a kiválasztott dizájn betéteket.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALSÓ CTA (A meglévő hatalmas sötét monolitikus blokkal) */}
      <section className="monolith-contact">
        <div className="marquee-bg">KERÍTÉSÉPÍTÉS ÚSZÓKAPU</div>
        <div className="cta-monolith-card">
          <h2>Zárd ki a külvilágot stílusosan!</h2>
          <p>Kérj ajánlatot komplett kerítésrendszerek és okos kapuk tervezésére és kivitelezésére.</p>
          <br />
          <Link href="/contact" className="btn-brutal">
            Ajánlatot Kérek
          </Link>
        </div>
      </section>

    </main>
  );
}