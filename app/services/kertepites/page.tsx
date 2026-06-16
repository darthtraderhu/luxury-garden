import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prémium Kertépítés és Gyepszőnyegezés | Luxury Garden',
  description: 'Teljes körű kertépítés, prémium gyepszőnyegezés, parkosítás és okos öntözőrendszerek telepítése kompromisszumok nélkül Budapesten és Pest megyében.',
  openGraph: {
    title: 'Prémium Kertépítés | Luxury Garden',
    description: 'Teljes körű kertépítés, prémium gyepszőnyegezés és okos öntözőrendszerek.',
    images: ['/images/kert-1.webp'],
  },
};

export default function Kertepites() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* ALOLDAL HERO */}
      <section className="inner-hero animate-up">
        <div className="availability-badge" style={{ marginBottom: '1.5rem' }}>
          <div className="pulse-dot"></div> Teljeskörű Kivitelezés
        </div>
        <h1 className="outline">KERT</h1>
        <h1 className="solid">ÉPÍTÉS</h1>
        <p>A lélegzetelállító, prémium kert nem a véletlen műve. Egy prémium kert nem csupán növények halmaza, hanem a házad természetes kiterjesztése, egy élő, lélegző műalkotás. A precíz földmunkától és a láthatatlan gépészettől kezdve a minőségi növények szakszerű telepítéséig mindent mérnöki pontossággal végzünk. Legyen szó letisztult minimál stílusról, buja trópusi oázisról vagy klasszikus eleganciáról, mi kompromisszumok nélkül keltjük életre az elképzeléseidet.</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* RÉSZLETES SZOLGÁLTATÁS BENTO GRID */}
      <section className="bento-section">
        <div className="bento-grid" style={{ gridAutoRows: 'minmax(350px, auto)' }}>
          
          {/* Gyepszőnyeg (kert-1.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/kert-1.webp" alt="Prémium Gyepszőnyeg és Talajelőkészítés" className="bento-bg" />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Prémium Gyepszőnyegezés & Vakondháló</h3>
              <p>A tökéletes, sűrű és gyommentes pázsit az exkluzív kertek alapja. Nem hiszünk a hetekig tartó magvetésben és a bizonytalan eredményekben. Kizárólag válogatott, sűrű szövésű prémium gyepszőnyeggel dolgozunk, amely azonnali, vakítóan zöld vizuális élményt nyújt. A folyamat a tökéletes talaj-előkészítéssel, vegyszeres gyomirtással és szintezéssel kezdődik, majd egy masszív, süllyedésbiztos vakondháló telepítésével folytatódik, ami garantálja, hogy a pázsitod évtizedekig érintetlen és hibátlan maradjon.</p>
            </div>
          </div>

          {/* Öntözőrendszer (kert-2.webp) */}
          <div className="bento-item animate-up delay-2" style={{ gridColumn: 'span 6' }}>
            <img src="/images/kert-2.webp" alt="Okos öntözőrendszer" className="bento-bg" style={{ filter: 'grayscale(30%) brightness(0.5)' }} />
            <div className="bento-content">
              <h3>Okos Öntözőrendszerek</h3>
              <p>A gyönyörű kert titka a láthatatlan, de hajszálpontos gondoskodás. Teljesen automatizált, okostelefonról is vezérelhető öntözőrendszereket építünk ki, eső- és talajnedvesség-érzékelőkkel integrálva. A rejtett szórófejek és csepegtetőrendszerek garantálják az optimális, víztakarékos hidratálást minden növény számára.</p>
            </div>
          </div>

          {/* Növénytelepítés (kert-3.webp) */}
          <div className="bento-item animate-up delay-3" style={{ gridColumn: 'span 6' }}>
            <img src="/images/kert-3.webp" alt="Növénytelepítés és Parkosítás" className="bento-bg" style={{ filter: 'grayscale(20%) brightness(0.6)' }} />
            <div className="bento-content">
              <h3>Parkosítás & Exkluzív Növénytelepítés</h3>
              <p>A növényzet adja meg a kert valódi karakterét. Szakértő kertészmérnökeink gondosan válogatják össze az exkluzív megjelenésű növényeket, kifejlett fákat és cserjéket. A szakszerű ültetés, a prémium termőföld-csere és a professzionális tápanyag-utánpótlás biztosítja a robbanásszerű és egészséges fejlődést.</p>
            </div>
          </div>

          {/* Kerti Építmények & Világítás (kert-4.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/kert-4.webp" alt="Kerti Világítás és Sziklakert" className="bento-bg" style={{ objectPosition: 'center 60%' }} />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Kerti Építmények & Hangulatvilágítás</h3>
              <p>A naplemente után kezdődik a kert második élete. A zöldfelületek mellett vállaljuk a kerti utak, látványos sziklakertek, modern tipegők és design támfalak kialakítását, hogy a tér logikusan és esztétikusan tagolt legyen. A prémium intelligens LED-es hangulatvilágítással és a növények alulról történő diszkrét megvilágításával pedig olyan luxus atmoszférát teremtünk, amely minden este lenyűgözi a családot és az ideérkező vendégeket.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MONOLITIKUS KAPCSOLAT */}
      <section className="monolith-contact" style={{ marginTop: '5vw' }}>
        <div className="marquee-bg">
          KERTÉPÍTÉS /// LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// KERTÉPÍTÉS ///
        </div>
        
        <div className="cta-monolith-card">
          <h2>KÉSZEN ÁLLSZ A<br />KERTED MEGÚJÍTÁSÁRA?</h2>
          <p>Kérj ingyenes helyszíni felmérést Budapesten és Pest megyében. Szakembereink felmérik a területet és elkészítik a személyre szabott, átlátható árajánlatot.</p>
          
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>

          <Link href="/contact" className="btn-brutal">Ingyenes Ajánlatkérés</Link>
        </div>
      </section>

    </main>
  );
}