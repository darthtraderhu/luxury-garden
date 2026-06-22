import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prémium Kerítésépítés és Úszókapuk | Luxury Garden',
  description: 'Komplex kerítésépítés, zsaluköves rendszerek, WPC és fém betétek, valamint automatizált úszókapuk kivitelezése A-tól Z-ig Budapesten és Pest megyében.',
  keywords: ['kerítésépítés', 'úszókapu készítés', 'tolókapu', 'zsaluköves kerítés', 'WPC kerítés', 'kapuautomatizálás', 'prémium kerítés'],
};

export default function FencingPage() {
  return (
    <main className="service-page-container">
      {/* HERO SZEKCIÓ */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Prémium Kerítésépítés & <br /> <span className="highlight">Okos Úszókapuk</span></h1>
          <p>
            Az otthonod biztonsága és eleganciája a telekhatáron kezdődik. Nem csupán kerítéseket építünk, 
            hanem masszív, időtálló és dizájnos határoló rendszereket, amelyek tökéletesen illeszkednek 
            az ingatlanod stílusához. A sávalap kiásásától az okosmotor beüzemeléséig mindent egy kézben tartunk.
          </p>
          <Link href="/kapcsolat" className="primary-btn">
            Ingyenes Helyszíni Felmérés
          </Link>
        </div>
      </section>

      {/* BENTO GRID / SZOLGÁLTATÁS RÉSZLETEK */}
      <section className="service-details">
        <div className="bento-grid">
          
          <div className="bento-card">
            <h3>🏗️ A-tól Z-ig Kivitelezés</h3>
            <p>
              Felejtsd el a szakik összehangolását! Saját gépparkunkkal elvégezzük a precíz földmunkát, 
              a sávalap betonozását, a zsalukő rakást, a vasalást és a végső burkolást (pl. műkő, mészkő, vagy vakolás).
            </p>
          </div>

          <div className="bento-card">
            <h3>⚙️ Prémium Úszó- és Tolókapuk</h3>
            <p>
              Egyedi méretre gyártott, masszív acélszerkezetű úszó- és tolókapuk, valamint személybejárók készítése. 
              Garantáljuk a milliméter pontos futást és a hosszú távú, nyikorgásmentes működést, akár nagy fesztávok esetén is.
            </p>
          </div>

          <div className="bento-card">
            <h3>📱 Okos Kapuautomatizálás</h3>
            <p>
              Kizárólag piacvezető, csendes és megbízható motorokkal (pl. Hörmann, Sommer, Roger) dolgozunk. 
              Legyen szó távirányítós, okostelefonos (Wi-Fi/Bluetooth) vezérlésről, vagy integrált videós kaputelefonról, 
              mi bekötjük és beállítjuk.
            </p>
          </div>

          <div className="bento-card">
            <h3>🪵 WPC, Fém és Lézervágott Betétek</h3>
            <p>
              A betonvázak közé a legmodernebb, gondozásmentes betéteket építjük be. Választhatsz prémium, 
              UV-álló WPC deszkákat, modern alumínium lécezést, vagy teljesen egyedi, lézervágott dizájn paneleket.
            </p>
          </div>

        </div>
      </section>

      {/* WORKFLOW / HOGYAN DOLGOZUNK */}
      <section className="service-workflow">
        <h2>A tökéletes kerítés születése</h2>
        <div className="workflow-steps">
          <div className="step">
            <span className="step-number">01</span>
            <h4>Tervezés és Kijelölés</h4>
            <p>Lézeres szintezéssel és pontos telekhatár-kiméréssel kezdünk, hogy a kerítés nyílegyenes és tökéletes legyen.</p>
          </div>
          <div className="step">
            <span className="step-number">02</span>
            <h4>Földmunka és Alapozás</h4>
            <p>Fagyhatár alá ásott, masszívan vasalt beton sávalapot készítünk, amely évtizedekig ellenáll a talajmozgásnak.</p>
          </div>
          <div className="step">
            <span className="step-number">03</span>
            <h4>Zsalukő és Szerkezet</h4>
            <p>Kötésben rakott, betonnal és betonacéllal kitöltött zsalukő oszlopok és lábazat építése a maximális stabilitásért.</p>
          </div>
          <div className="step">
            <span className="step-number">04</span>
            <h4>Kapu és Betétek</h4>
            <p>Helyszínre szállítjuk és beépítjük az egyedi gyártású úszókaput, a motorikát, és a kiválasztott dizájn betéteket.</p>
          </div>
        </div>
      </section>

      {/* ALSÓ CTA */}
      <section className="service-bottom-cta">
        <h2>Zárd ki a külvilágot stílusosan!</h2>
        <p>Kérj ajánlatot komplett kerítésrendszerek és okos kapuk tervezésére és kivitelezésére.</p>
        <Link href="/kapcsolat" className="primary-btn">
          Ajánlatot Kérek
        </Link>
      </section>

    </main>
  );
}