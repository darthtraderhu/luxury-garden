import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'; // Az optimalizált csomag behívása

// Továbbfejlesztett, profi SEO és Megosztás Meta adatok
export const metadata: Metadata = {
  title: 'Luxury Garden | Prémium Kert és Medenceépítés',
  description: 'Kompromisszumok nélküli luxuskertek és prémium medencék kivitelezése 20 év tapasztalattal Budapesten és Pest megyében. Kertépítés, térkövezés, földmunka egy kézben.',
  keywords: ['kertépítés', 'medenceépítés', 'térkövezés', 'földmunka', 'prémium kert', 'luxus medence', 'kertépítő cég', 'Budapest', 'Pest megye'],
  authors: [{ name: 'Luxury Garden' }],
  openGraph: {
    title: 'Luxury Garden | Prémium Kert és Medenceépítés',
    description: 'A tervezőasztaltól a kulcsrakész átadásig. Prémium kültéri életterek kialakítása kompromisszumok nélkül.',
    url: 'https://luxurygarden.hu',
    siteName: 'Luxury Garden',
    images: [
      {
        url: '/images/kert-1.webp', // Ez jelenik meg, ha Facebookon megosztod a főoldalt
        width: 1200,
        height: 630,
        alt: 'Luxury Garden Prémium Kertépítés',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  // Ha később mégis kell a GSC kód, ide be tudod tenni, de valószínűleg nem fog kelleni (lásd lent)
  // verification: {
  //   google: 'IDE_JONN_A_KOD', 
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <div className="avantgarde-wrapper">
          
          {/* A felső és alsó menük beemelése */}
          <Navbar />

          {/* MOBIL LEBEGŐ HÍVÁS GOMB (Minden oldalon ott lesz) */}
          <a href="tel:+36703008801" className="floating-phone-btn">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          {/* ITT JELENIK MEG AZ ADOTT ALOLDAL TARTALMA */}
          {children}

          {/* A Lábléc beemelése */}
          <Footer />

        </div>

        {/* GOOGLE ANALYTICS KOMPONENS BEKÖTVE */}
        <GoogleAnalytics gaId="G-G487GXWENQ" />
        
      </body>
    </html>
  );
}