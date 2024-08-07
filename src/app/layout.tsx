import "../../assets/style/app.scss"

import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/header/header"

export const metadata: Metadata = {
    description: "Kompassterapeutene",
    title: {
        template: '%s — Kompassterapeutene',
        default: 'Kompassterapeutene',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="no">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet" />
               
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
            </head>
            <body>
                <Header />

                <main>
                    {children}
                </main>
                
                <SpeedInsights />
            </body>
        </html>
    )
}
