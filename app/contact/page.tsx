import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <div className="aura-core-2"></div>

      {/* KAPCSOLAT HERO */}
      <section className="inner-hero animate-up">
        <h1 className="outline">PROJEKT</h1>
        <h1 className="solid">INDÍTÁSA</h1>
        <p>Minden nagyszerű kert és exkluzív medence egy beszélgetéssel kezdődik. Töltsd ki az alábbi űrlapot, vagy keress minket telefonon, és vágjunk bele a közös tervezésbe!</p>
      </section>

      <div className="architectural-divider">
        <div className="glow-line"></div>
        <div className="divider-symbol">///</div>
      </div>

      {/* KAPCSOLAT GRID RENDSZER */}
      <section className="contact-section">
        <div className="contact-grid">
          
          {/* BAL OLDAL: INFÓK ÉS FOLYAMAT */}
          <div className="contact-left animate-up delay-1">
            <h2>KÖZVETLEN ELÉRHETŐSÉG</h2>
            <p className="lead-text">Kapacitásaink a szezonban végesek, ezért kérjük, minél hamarabb jelezd felénk az igényeidet. Cégünk Budapesten és Pest megyében vállal kivitelezéseket.</p>
            
            <div className="info-bento-cards">
              {/* Telefon Kártya */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-card-content">
                  <h4>Központi Telefonszám</h4>
                  <a href="tel:+36703008801">06 70 300 88 01</a>
                </div>
              </div>
              
              {/* Email Kártya */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-card-content">
                  <h4>E-mail címünk</h4>
                  <a href="mailto:info@luxurygarden.hu">info@luxurygarden.hu</a>
                </div>
              </div>
              
              {/* Helyszín Kártya */}
              <div className="info-card">
                <div className="info-card-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-card-content">
                  <h4>Kiszállás & Munkavégzés</h4>
                  <span>Budapest és Pest megye</span>
                </div>
              </div>
            </div>

            <div className="process-steps">
              <h3>HOGYAN DOLGOZUNK?</h3>
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">
                  <h4>Kapcsolatfelvétel</h4>
                  <p>Küldd el az űrlapot vagy hívj minket. Egyeztetjük az alapvető elképzeléseidet és az igényelt szolgáltatásokat.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">
                  <h4>Helyszíni felmérés</h4>
                  <p>Szakértőnk kimegy a helyszínre, felméri a területet, a talajviszonyokat, és pontosítja a műszaki lehetőségeket.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">
                  <h4>Tervezés és Kivitelezés</h4>
                  <p>Elkészítjük a részletes árajánlatot és a terveket. Elfogadás után saját gépparkunkkal és szakembereinkkel elindítjuk a munkát.</p>
                </div>
              </div>
            </div>

          </div>

          {/* JOBB OLDAL: GLASSMORPHISM ŰRLAP */}
          <div className="contact-right animate-up delay-2">
            <div className="contact-form-wrapper">
              <h2 className="form-title">KÉRJ INGYENES AJÁNLATOT</h2>
              
              {/* VÉGLEGES FORMSPREE LINK BEKÖTVE */}
              <form action="https://formspree.io/f/xqeojnbp" method="POST">
                
                <div className="form-group">
                  <label htmlFor="name">Teljes név</label>
                  <input type="text" id="name" name="Név" className="form-input" placeholder="Kovács Péter" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefonszám</label>
                  <input type="tel" id="phone" name="Telefonszám" className="form-input" placeholder="+36 30 123 4567" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail cím</label>
                  <input type="email" id="email" name="Email" className="form-input" placeholder="pelda@email.hu" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Melyik szolgáltatás érdekel?</label>
                  <select id="service" name="Szolgáltatás" className="form-select" required defaultValue="">
                    <option value="" disabled>Válassz a listából...</option>
                    <option value="Teljeskörű Kertépítés">Teljeskörű Kertépítés</option>
                    <option value="Prémium Medenceépítés">Prémium Medenceépítés</option>
                    <option value="Térkövezés & Kocsibeállók">Térkövezés & Kocsibeállók</option>
                    <option value="Tereprendezés & Földmunka">Tereprendezés & Földmunka</option>
                    <option value="Komplex projekt">Komplex projekt (több szolgáltatás)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Projekt rövid leírása</label>
                  <textarea id="message" name="Üzenet" className="form-textarea" placeholder="Írd le röviden, mit szeretnél megvalósítani, mekkora a terület stb..." required></textarea>
                </div>
                
                <button type="submit" className="btn-brutal">Ajánlatkérés elküldése</button>
              </form>

            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}