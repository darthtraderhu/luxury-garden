import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gépi Földmunka és Tereprendezés | Luxury Garden',
  description: 'Precíziós gépi földmunka, tükörkészítés, medence alapásás és tereprendezés saját gépparkkal Budapesten és Pest megyében.',
  openGraph: {
    title: 'Gépi Földmunka és Tereprendezés | Luxury Garden',
    description: 'Precíziós gépi földmunka, medence alapásás és törmelék elszállítás.',
    images: ['/images/foldmunka-1.webp'],
  },
};

export default function Foldmunka() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* ALOLDAL HERO */}
      <section className="inner-hero animate-up">
        <div className="availability-badge" style={{ marginBottom: '1.5rem' }}>
          <div className="pulse-dot"></div> Saját Géppark
        </div>
        <h1 className="outline">TEREP</h1>
        <h1 className="solid">RENDEZÉS & FÖLDMUNKA</h1>
        <p>Minden tartós kivitelezési projekt alapja a hajszálpontosan megtervezett és előkészített terep. Saját, professzionális és sokoldalú gépparkunkkal, valamint évtizedes rutinnal rendelkező gépkezelőinkkel garantáljuk a gyors, precíz és tiszta munkavégzést. Nálunk a legkötöttebb talaj, a meredek szintkülönbség vagy a szűkös helyszín sem jelent akadályt.</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* RÉSZLETES SZOLGÁLTATÁS BENTO GRID */}
      <section className="bento-section">
        <div className="bento-grid" style={{ gridAutoRows: 'minmax(350px, auto)' }}>
          
          {/* Precíziós Tereprendezés (foldmunka-1.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/foldmunka-1.webp" alt="Gépi Földmunka és Tükörkészítés" className="bento-bg" />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Precíziós Tükörkészítés & Szintezés</h3>
              <p>Egy kert, térkőburkolat vagy medence alapjának kialakítása nem tűri a pontatlanságot. Lézeres szintezőműszerekkel és finoman vezérelhető munkagépekkel végezzük a terület teljes letakarítását és a tökéletes „tükör” (az építés alapját képző sík felület) kialakítását. A munka során kiemelt figyelmet fordítunk a meglévő közművek (víz, gáz, villany) védelmére és a terület adottságainak megfelelő lejtésviszonyok kialakítására a tökéletes vízelvezetés érdekében.</p>
            </div>
          </div>

          {/* Medence Alapásás (foldmunka-2.webp) */}
          <div className="bento-item animate-up delay-2" style={{ gridColumn: 'span 6' }}>
            <img src="/images/foldmunka-2.webp" alt="Medence Alapásás" className="bento-bg" style={{ filter: 'grayscale(20%) brightness(0.4)' }} />
            <div className="bento-content">
              <h3>Medence Alap- és Árokásás</h3>
              <p>Vasbeton és kész medencék munkagödrének hajszálpontos, méretre történő kiemelése. Ezen felül vállaljuk a közművek, gépészeti csövek, öntözőrendszerek és kerti kábelezések precíz árokásását, hogy a gépészet nyomtalanul eltűnjön a föld alatt.</p>
            </div>
          </div>

          {/* Termőföld (foldmunka-3.webp) */}
          <div className="bento-item animate-up delay-3" style={{ gridColumn: 'span 6' }}>
            <img src="/images/foldmunka-3.webp" alt="Termőföld Csere és Töltés" className="bento-bg" style={{ filter: 'grayscale(30%) brightness(0.4)' }} />
            <div className="bento-content">
              <h3>Talajcsere & Prémium Termőföld</h3>
              <p>A silány minőségű, törmelékes vagy agyagos talaj nem alkalmas prémium növények és gyepszőnyeg telepítésére. Vállaljuk a teljes felső talajréteg eltávolítását, majd a terület feltöltését magas minőségű, darált és tápanyagdúsított termőfölddel.</p>
            </div>
          </div>

          {/* Törmelék Elszállítás (foldmunka-4.webp) */}
          <div className="bento-item animate-up delay-1" style={{ gridColumn: 'span 12' }}>
            <img src="/images/foldmunka-4.webp" alt="Törmelék és Föld Elszállítása" className="bento-bg" style={{ objectPosition: 'center 40%', filter: 'grayscale(40%) brightness(0.3)' }} />
            <div className="bento-content" style={{ maxWidth: '850px' }}>
              <h3>Tiszta Terep: Felesleges Föld & Törmelék Elszállítása</h3>
              <p>A bontás vagy a területrendezés során kitermelt föld- és törmelékhegyek eltüntetése gyakran a legnagyobb fejfájás az építkezéseken. Mi nem hagyunk magunk után koszt és káoszt. Cégünk saját teherautókkal, rugalmasan és gyorsan gondoskodik a felesleges sitt, zöldhulladék (gyökerek, tuskók) és az agyagos föld hivatalos lerakóhelyre történő elszállításáról.</p>
            </div>
          </div>

        </div>
      </section>

      {/* MONOLITIKUS KAPCSOLAT */}
      <section className="monolith-contact" style={{ marginTop: '5vw' }}>
        <div className="marquee-bg">
          FÖLDMUNKA /// LUXURY GARDEN /// PRÉMIUM KIVITELEZÉS /// FÖLDMUNKA ///
        </div>
        
        <div className="cta-monolith-card">
          <h2>BÍZD A NEHEZÉT<br />A PROFIKRA!</h2>
          <p>Kérj ingyenes helyszíni felmérést Budapesten és Pest megyében. Gépparkunk és szakembereink készen állnak a legkeményebb terepre is.</p>
          
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>

          <Link href="/contact" className="btn-brutal">Ingyenes Ajánlatkérés</Link>
        </div>
      </section>

    </main>
  );
}