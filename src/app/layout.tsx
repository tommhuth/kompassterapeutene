import "../../assets/style/app.scss"

import type { Metadata } from "next"
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
            </head>
            <body>
                <Header />

                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
