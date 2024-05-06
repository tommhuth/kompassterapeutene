import type { Metadata } from "next"; 
import "./globals.css"; 
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kompassterapeutene",
  description: "Kompassterapeutene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>
        <header> 
          <nav>
            <Link href="/">
              Kompassterapeutene
            </Link>
            
            <ul>
              <li> 
                <Link href="/hvem-er-vi">
                  Hvem er vi
                </Link>
              </li>
              <li> 
                <Link href="/paamelding-priser-kontakt">
                  Påmelding, priser og kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main> 
          {children}
        </main>

        <footer>
          Kompassterapautene &copy;  {new Date().getFullYear()}
          <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
        </footer>
      </body>
    </html>
  );
}
