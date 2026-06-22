import Link from 'next/link';

export default function Services() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* BELSŐ OLDAL HERO */}
      <section className="inner-hero animate-up">
        <h1 className="outline">PRÉMIUM</h1>
        <h1 className="solid">KIVITELEZÉS</h1>
        <p>A tervezőasztaltól az utolsó fűszál elültetéséig és a medence gépészetének beüzemeléséig teljes körű megoldásokat kínálunk. Cégünk 20 év szakmai tapasztalattal a hátunk mögött elkötelezett a prémium minőségű kültéri életterek megteremtése iránt. Ismerd meg 5 fő szolgáltatási területünket, ahol a több évtizedes szaktudás, a minőségi alapanyagok és a legkorszerűbb modern technológia találkozik. Számunkra a kertépítés és medencekivitelezés nem csupán munka, hanem igazi hivatás, amelyet országos lefedettséggel, kompromisszumok nélkül végzünk.</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* SZOLGÁLTATÁSOK SHOWCASE */}
      <section className="services-showcase">
        
        {/* 1. KERTÉPÍTÉS (HELYI WEBP) */}
        <div className="showcase-row row-left animate-up delay-1">
          <div className="showcase-image-wrapper">
            <img src="/images/kertepites.webp" alt="Teljeskörű Kertépítés és Gyepszőnyegezés" />
          </div>
          <div className="showcase-card">
            <h2>Teljeskörű Kertépítés</h2>
            <p>A lélegzetelállító, prémium kert nem a véletlen műve, hanem gondos mérnöki precizitás és mély botanikai szaktudás eredménye. Vállaljuk a terület teljes körű felmérését, a 3D-s látványtervezést, valamint a komplex kivitelezést. Ide tartozik az azonnali zöld felületet biztosító prémium gyepszőnyegezés, a látványos parkosítás, a víztakarékos, okos öntözőrendszerek precíz kiépítése és a klímának megfelelő, minőségi növények szakszerű telepítése.</p>
            <Link href="/services/kertepites" className="btn-brutal">Részletek megtekintése</Link>
          </div>
        </div>

        {/* 2. MEDENCEÉPÍTÉS (HELYI WEBP) */}
        <div className="showcase-row row-right animate-up delay-2">
          <div className="showcase-image-wrapper">
            <img src="/images/medence.webp" alt="Prémium Medenceépítés és Gépészet" />
          </div>
          <div className="showcase-card">
            <h2>Prémium Medenceépítés</h2>
            <p>Hozd létre a saját, prémium kategóriás privát wellness oázisodat a saját kertedben, kompromisszumok nélkül. Masszív, időtálló és statikailag kifogástalan medencéket építünk, a legmodernebb, teljesen automatizált vízforgató gépészettel felszerelve. Kínálatunkban szerepelnek a gazdaságos hőszivattyús fűtési rendszerek, az elegáns polikarbonát vagy rolós fedésrendszerek, valamint az exkluzív medence körüli burkolatok kialakítása is.</p>
            <Link href="/services/medenceepites" className="btn-brutal">Részletek megtekintése</Link>
          </div>
        </div>

        {/* 3. TÉRKŐ (HELYI WEBP) */}
        <div className="showcase-row row-left animate-up delay-3">
          <div className="showcase-image-wrapper">
            <img src="/images/terko.webp" alt="Térkövezés, Kocsibeállók és Támfalak" />
          </div>
          <div className="showcase-card">
            <h2>Térkő & Kocsibeállók</h2>
            <p>Egy esztétikus és masszív térkőburkolat élettartama a láthatatlan, szakszerű alapozásban rejlik. Csapatunk kizárólag többrétegű, teherbíró, süllyedésmentes ágyazattal és a piacvezető gyártók prémium kategóriás térköveivel dolgozik. Legmagasabb szintű precíziós kialakítást biztosítunk nagy teherbírású kocsibeállóknál, elegáns kerti utaknál, pihenő teraszoknál, valamint masszív, tartós kerti támfalak építésénél egyaránt.</p>
            <Link href="/services/terkovezes" className="btn-brutal">Részletek megtekintése</Link>
          </div>
        </div>

        {/* 4. FÖLDMUNKA (HELYI WEBP) */}
        <div className="showcase-row row-right animate-up">
          <div className="showcase-image-wrapper">
            <img src="/images/foldmunka.webp" alt="Gépi Földmunka és Tereprendezés" />
          </div>
          <div className="showcase-card">
            <h2>Tereprendezés & Földmunka</h2>
            <p>Minden professzionális és tartós kivitelezési projekt alapja a hajszálpontosan megtervezett és tökéletesen előkészített terep. Saját, modern és nagy teljesítményű gépparkkal, valamint évtizedes tapasztalattal rendelkező gépkezelőkkel végezzük a komplex tereprendezést, az árokásást, az alapok és medencék precíz tükörkészítését, illetve a felesleges föld- és törmelék szakszerű elszállítását.</p>
            <Link href="/services/foldmunka" className="btn-brutal">Részletek megtekintése</Link>
          </div>
        </div>

        {/* 5. KERÍTÉSÉPÍTÉS & ÚSZÓKAPUK (HELYI WEBP) */}
        <div className="showcase-row row-left animate-up">
          <div className="showcase-image-wrapper">
            <img src="/images/keritesepites.webp" alt="Kerítésépítés és Automata Úszókapuk" />
          </div>
          <div className="showcase-card">
            <h2>Kerítésépítés & Úszókapuk</h2>
            <p>Az ingatlan biztonsága, privát szférája és eleganciája a telekhatáron kezdődik. Komplett kerítésrendszerek kivitelezését vállaljuk a sávalap kiásásától, zsalukövezéstől és vasalástól kezdve a gondozásmentes fém vagy WPC betétek beépítéséig. Emellett milliméter pontos futású, egyedi úszó- és tolókapukat gyártunk, amelyeket a piacvezető gyártók csendes okosmotorjaival automatizálunk.</p>
            <Link href="/services/keritesepites" className="btn-brutal">Részletek megtekintése</Link>
          </div>
        </div>

      </section>

      {/* SZOLGÁLTATÁSOK SPLIT CTA BANNER */}
      <section className="services-cta-banner">
        <div className="cta-watermark">START</div>
        
        <div className="cta-content-left">
          <div className="availability-badge">
            <div className="pulse-dot"></div> Szabad Kapacitás: Limitált
          </div>
          <h2>VALÓSÍTSUK MEG<br />AZ ELKÉPZELÉSEIDET.</h2>
          <p>Kiválasztottad a számodra megfelelő szolgáltatást, vagy esetleg egy komplex, mindent átfogó projektben gondolkodsz? Legyen szó egy teljesen új, parkosított kert építéséről, egy luxus medence telepítéséről, vagy teherbíró térkövezésről, több évtizedes tapasztalattal rendelkező szakembereink készen állnak a kihívásra.</p>
        </div>

        <div className="cta-panel-right">
          <div className="contact-numbers">
            <a href="tel:+36703008801">06 70 300 88 01</a>
          </div>
          <Link href="/contact" className="btn-brutal">Kérj Ajánlatot</Link>
        </div>
      </section>
    </main>
  );
}