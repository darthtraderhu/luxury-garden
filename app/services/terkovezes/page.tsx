import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prémium Térkövezés, Kocsibeállók és Támfalak | Luxury Garden',
  description: 'Süllyedésmentes térkőburkolatok, masszív kocsibeállók és kerti támfalak építése többrétegű alapozással, precíz vízelvezetéssel.',
  openGraph: {
    title: 'Prémium Térkövezés és Kocsibeállók | Luxury Garden',
    description: 'Süllyedésmentes térkőburkolatok, masszív kocsibeállók és támfalak építése.',
    images: ['/images/terko-1.webp'],
  },
};

export default function Terkovezes() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* ALOLDAL HERO */}
      <section className="inner-hero animate-up">
        <div className="availability-badge" style={{ marginBottom: '1.5rem' }}>
          <div className="pulse-dot"></div> Időtálló Megoldások
        </div>
        <h1 className="outline">TÉRKŐ &</h1>
        <h1 className="solid">KOCSIBEÁLLÓK</h1>
        <p>Egy prémium térkőburkolat élettartama nem a kő színén, hanem a láthatatlan alapokon múlik. Kizárólag többrétegű, süllyedésmentes ágyazattal és a legmagasabb minőségű anyagokkal dolgozunk, hogy a kocsibeállód, a teraszod és a kerti utaid évtizedek múltán is tökéletes síkban maradjanak. Nem kötünk kompromisszumot az alapozásnál, mert tudjuk: a valódi luxus a tartósságban rejlik.</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* RÉSZLETES SZOLGÁLTATÁS BENTO GRID */}
      <section className="bento-section">
        <div className="bento-grid" style={{ gridAutoRows: 'minmax(350px, auto)' }}>
          
          {/* Süllyedésmentes Alapozás (terko-1.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/terko-1.webp" alt="Süllyedésmentes Térkő Alapozás" className="bento-bg" />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Többrétegű, Süllyedésmentes Alapozás</h3>
              <p>A legtöbb térkőburkolat az elégtelen alapozás miatt süllyed meg néhány év után. Mi minden munkát a precíz földkitermeléssel (tükörkészítéssel) kezdünk. A teherhordó rétegeket mart aszfaltból, zúzottkőből, illetve igény esetén CKT betonból építjük fel, folyamatos és szakszerű gépi tömörítés mellett. A kopóréteg alá fagyálló, finom zúzalékágyat húzunk, amely garantálja, hogy a térkő nem fagy fel, nem süllyed meg, és tökéletesen elvezeti a csapadékot.</p>
            </div>
          </div>

          {/* Prémium Térkőburkolatok (terko-2.webp) */}
          <div className="bento-item animate-up delay-2" style={{ gridColumn: 'span 6' }}>
            <img src="/images/terko-2.webp" alt="Prémium Kerti Teraszburkolat" className="bento-bg" style={{ filter: 'grayscale(30%) brightness(0.5)' }} />
            <div className="bento-content">
              <h3>Kerti Utak & Pihenő Teraszok</h3>
              <p>Összekötjük a kerted funkcionális pontjait stílusosan és elegánsan. A piacvezető gyártók prémium térköveit (pl. antikolt, mosott felületű vagy modern, nagyméretű lapok) hajszálpontos vágásokkal és esztétikus fuga-kialakítással fektetjük le, hogy a burkolat harmonizáljon a házad stílusával.</p>
            </div>
          </div>

          {/* Kocsibeállók (terko-3.webp) */}
          <div className="bento-item animate-up delay-3" style={{ gridColumn: 'span 6' }}>
            <img src="/images/terko-3.webp" alt="Nagy Teherbírású Kocsibeállók" className="bento-bg" style={{ filter: 'grayscale(20%) brightness(0.5)' }} />
            <div className="bento-content">
              <h3>Nagy Teherbírású Kocsibeállók</h3>
              <p>Gépjárműforgalomra tervezett, megerősített burkolatok építése. A stabil oldaltartást rejtett, masszív betonba ágyazott szegélykövekkel biztosítjuk, így a kocsibeálló a legnagyobb igénybevétel (pl. SUV-ok, terepjárók) esetén sem tud oldalirányba elcsúszni vagy szétnyílni.</p>
            </div>
          </div>

          {/* Támfalak és Vízelvezetés (terko-4.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/terko-4.webp" alt="Kerti Támfalak és Vízelvezetés" className="bento-bg" style={{ objectPosition: 'center 50%', filter: 'grayscale(10%) brightness(0.4)' }} />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Támfalak Építése & Precíz Vízelvezetés</h3>
              <p>Lejtős, szintkülönbségekkel rendelkező telkek esetén elengedhetetlen a professzionális területrendezés. Vállaljuk masszív, zsaluköves vagy dekoratív növénytámfalak építését betonozással és vasalással. A tartós burkolat másik kulcsa a vízkezelés: a csapadékot láthatatlan folyókák, folyókarendszerek és gondosan beállított dőlésszögek segítségével biztonságosan elvezetjük az alapoktól és a ház falától.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MONOLITIKUS KAPCSOLAT */}
      <section className="monolith-contact" style={{ marginTop: '5vw' }}>
        <div className="marquee-bg">
          TÉRKÖVEZÉS /// LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// TÉRKÖVEZÉS ///
        </div>
        
        <div className="cta-monolith-card">
          <h2>STABIL ALAPOKRA<br />VÁGYSZ?</h2>
          <p>Kérj ingyenes helyszíni felmérést Budapesten és Pest megyében. Szakembereink megvizsgálják a talajviszonyokat, és elkészítik az időtálló burkolat részletes árajánlatát.</p>
          
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>

          <Link href="/contact" className="btn-brutal">Ingyenes Ajánlatkérés</Link>
        </div>
      </section>

    </main>
  );
}