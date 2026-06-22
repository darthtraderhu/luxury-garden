import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* KINETIKUS HERO */}
      <section id="home" className="hero-kinetic">
        <div className="hero-image-floating"></div>
        <div className="hero-text-content">
          <div className="hero-logo-mobile animate-up">LUXURY <span>GARDEN</span></div>
          <div className="hero-title-outline animate-up delay-1">A TI ÁLMOTOK</div>
          <div className="hero-title-solid animate-up delay-2">A MI HIVATÁSUNK</div>
          <p className="hero-subtitle animate-up delay-3">
            20 év szakmai tapasztalattal a hátunk mögött vállaljuk kertek és medencék teljes körű építését országosan. Nálunk nincsenek rejtett költségek és csúszások: a tervezőasztaltól a kulcsrakész átadásig mindent egy kézben tartunk.
          </p>
          <div className="animate-up delay-3">
            <Link href="/contact" className="btn-brutal">Projekt Indítása</Link>
          </div>
        </div>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* BENTO BOX SZOLGÁLTATÁSOK */}
      <section id="szolgaltatasok" className="bento-section">
        <div className="bento-header animate-up">
          <h2>MIVEL <span>FOGLALKOZUNK?</span></h2>
          <p>Kompromisszumok nélküli minőség. Süllyedésmentes alapoktól a privát wellness oázisig.</p>
        </div>
        <div className="bento-grid">
          
          {/* HELYI WEBP KÉP */}
          <Link href="/services/kertepites" className="bento-item item-kert">
            <img src="/images/kertepites.webp" alt="Kertépítés" className="bento-bg" />
            <div className="bento-content">
              <h3>Teljeskörű Kertépítés</h3>
              <p>Gyepszőnyegezés, parkosítás, szakszerű növénytelepítés és kerti építmények kivitelezése. Kerttervezőink és szakembereink gondoskodnak róla, hogy a végeredmény hosszú távon is fenntartható legyen.</p>
            </div>
          </Link>

          {/* HELYI WEBP KÉP */}
          <Link href="/services/medenceepites" className="bento-item item-medence">
            <img src="/images/medence.webp" alt="Medenceépítés" className="bento-bg" />
            <div className="bento-content">
              <h3>Prémium Medenceépítés</h3>
              <p>Medencék építése, modern gépészeti szerelése, esztétikus fedésrendszerek. Kialakítjuk a saját privát wellness oázisodat.</p>
            </div>
          </Link>

          {/* HELYI WEBP KÉP */}
          <Link href="/services/terkovezes" className="bento-item item-terko">
            <img src="/images/terko.webp" alt="Térkő" className="bento-bg" />
            <div className="bento-content">
              <h3>Térkő & Kocsibeállók</h3>
              <p>Időtálló térkőburkolatok, masszív kocsibeállók és kerti támfalak. Kizárólag süllyedésmentes alapozással dolgozunk az évtizedes tartósságért.</p>
            </div>
          </Link>

          {/* HELYI WEBP KÉP */}
          <Link href="/services/foldmunka" className="bento-item item-fold">
            <img src="/images/foldmunka.webp" alt="Földmunka" className="bento-bg" />
            <div className="bento-content">
              <h3>Tereprendezés & Földmunka</h3>
              <p>Szakszerű gépi földmunka, árokásás és precíz tereprendezés. Saját, modern gépparkkal rendelkezünk, a legnehezebb terepviszonyok sem akadályok.</p>
            </div>
          </Link>

          {/* 5. ÚJ KÁRTYA: KERÍTÉSÉPÍTÉS (Teljes szélességű) */}
          <Link href="/services/keritesepites" className="bento-item" style={{ gridColumn: 'span 12' }}>
            <img src="/images/keritesepites.webp" alt="Prémium Kerítésépítés" className="bento-bg" />
            <div className="bento-content">
              <h3>Kerítésépítés & Úszókapuk</h3>
              <p>Zárd ki a külvilágot stílusosan, kompromisszummentes határoló rendszerekkel. A zsaluköves alapoktól a WPC betéteken át az okos kapuautomatizálásig mindent egy kézben tartunk.</p>
            </div>
          </Link>

        </div>
      </section>

      <div className="architectural-divider">
        <div className="glow-line" style={{ animationDelay: '-2s' }}></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* MONOLITIKUS KAPCSOLAT */}
      <section className="monolith-contact">
        <div className="marquee-bg">
          LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// ORSZÁGOS LEFEDETTSÉG /// LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// 
        </div>
        
        <div className="cta-monolith-card">
          <div className="availability-badge">
            <div className="pulse-dot"></div> Kapacitás: Korlátozott
          </div>
          
          <h2>ELKEZDTÜK AZ IDEI<br />MUNKÁK FELVÉTELÉT</h2>
          <p>A piac diktál, kapacitásaink végesek a szezonban. Ha komolyan gondolod a fejlesztést, és valódi prémium kivitelezést keresel kompromisszumok nélkül, vedd fel velünk a kapcsolatot.</p>
          
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>

          <Link href="/contact" className="btn-brutal">Kérj Ajánlatot</Link>
        </div>
      </section>
    </main>
  );
}