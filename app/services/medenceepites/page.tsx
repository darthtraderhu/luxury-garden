import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prémium Medenceépítés és Gépészet | Luxury Garden',
  description: 'Luxus feszített víztükrös és zsaluköves medencék építése, hőszivattyús fűtés és okos gépészet telepítése életre szóló minőségben.',
  openGraph: {
    title: 'Prémium Medenceépítés | Luxury Garden',
    description: 'Luxus medencék építése, hőszivattyús fűtés és okos gépészet telepítése.',
    images: ['/images/medence-1.webp'],
  },
};

export default function Medenceepites() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* ALOLDAL HERO */}
      <section className="inner-hero animate-up">
        <div className="availability-badge" style={{ marginBottom: '1.5rem' }}>
          <div className="pulse-dot"></div> Prémium Kivitelezés
        </div>
        <h1 className="outline">MEDENCE</h1>
        <h1 className="solid">ÉPÍTÉS</h1>
        <p>Hozd létre saját, kompromisszummentes privát wellness oázisodat a saját kertedben. Egy prémium medence nem csupán egy vízzel teli medence: precíz mérnöki tervezést, masszív szerkezetépítést és modern, okos gépészetet igényel. A pontos földmunkától a vasbeton szerkezeten át a fűtés és az okosvezérlés beüzemeléséig mindent egy kézben tartunk, így neked csak élvezned kell a végeredményt.</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* RÉSZLETES SZOLGÁLTATÁS BENTO GRID */}
      <section className="bento-section">
        <div className="bento-grid" style={{ gridAutoRows: 'minmax(350px, auto)' }}>
          
          {/* Masszív Szerkezet (medence-1.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/medence-1.webp" alt="Masszív Vasbeton Medenceépítés" className="bento-bg" />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Zsaluköves & Vasbeton Szerkezetek</h3>
              <p>Az időtálló medence titka a láthatatlan, de elpusztíthatatlan alapokban rejlik. Kizárólag masszív, dupla vasalással ellátott zsaluköves vagy monolit vasbeton szerkezeteket építünk, amelyek évtizedekig ellenállnak a talajmozgásoknak és a víznyomásnak. Legyen szó feszített víztükrös luxus kivitelről, vagy egy letisztult, süllyesztett skimmeres modern medencéről, a statikai biztonságra és a hajszálpontos szintezésre életre szóló garanciát vállalunk.</p>
            </div>
          </div>

          {/* Gépészet (medence-2.webp) */}
          <div className="bento-item animate-up delay-2" style={{ gridColumn: 'span 6' }}>
            <img src="/images/medence-2.webp" alt="Medence Gépészet és Vízforgatás" className="bento-bg" style={{ filter: 'grayscale(20%) brightness(0.5)' }} />
            <div className="bento-content">
              <h3>Okos Gépészet & Sós Víz</h3>
              <p>Felejtsd el a klórszagot és a folyamatos kézi méregetést. Modern, automatizált vízforgató és adagoló rendszereket telepítünk. A bőrbarát, sós vizes bontóberendezések és az okostelefonról vezérelhető gépészet kristálytiszta vizet garantál minimális karbantartás mellett.</p>
            </div>
          </div>

          {/* Fűtés (medence-3.webp) */}
          <div className="bento-item animate-up delay-3" style={{ gridColumn: 'span 6' }}>
            <img src="/images/medence-3.webp" alt="Hőszivattyús Medencefűtés" className="bento-bg" style={{ filter: 'grayscale(20%) brightness(0.6)' }} />
            <div className="bento-content">
              <h3>Hőszivattyús Fűtési Rendszerek</h3>
              <p>Hosszabbítsd meg a fürdési szezont tavasztól egészen késő őszig! Energiahatékony, inverteres hőszivattyúkat integrálunk a medence gépészetébe, amelyek gazdaságosan és csendesen tartják állandó, tökéletes hőmérsékleten a vizet, függetlenül a kinti időjárástól.</p>
            </div>
          </div>

          {/* Fedés & Burkolatok (medence-4.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/medence-4.webp" alt="Medence Fedés és Teraszburkolat" className="bento-bg" style={{ objectPosition: 'center 60%', filter: 'grayscale(10%) brightness(0.5)' }} />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Elegáns Fedésrendszerek & Prémium Burkolatok</h3>
              <p>A biztonság és a hőtartás érdekében elengedhetetlen a megfelelő fedés. Vállaljuk elegáns, alacsony profilú polikarbonát fedések, vagy teljesen rejtett, motoros redőnyös (rolós) medencetakarók telepítését. Emellett gondoskodunk a medence közvetlen környezetéről is: csúszásmentes, fagyálló prémium burkolatokkal, elegáns szegélykövekkel és vízelvezetéssel tesszük teljessé a luxus élményt.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MONOLITIKUS KAPCSOLAT */}
      <section className="monolith-contact" style={{ marginTop: '5vw' }}>
        <div className="marquee-bg">
          MEDENCEÉPÍTÉS /// LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// MEDENCEÉPÍTÉS ///
        </div>
        
        <div className="cta-monolith-card">
          <h2>KÉSZEN ÁLLSZ AZ ELSŐ<br />CSOBBANÁSRA?</h2>
          <p>Kérj ingyenes helyszíni felmérést Budapesten és Pest megyében. Szakembereink felmérik a területet és elkészítik a személyre szabott, átlátható árajánlatot az új medencédre.</p>
          
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>

          <Link href="/contact" className="btn-brutal">Ingyenes Ajánlatkérés</Link>
        </div>
      </section>

    </main>
  );
}