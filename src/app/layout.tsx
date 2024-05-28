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

export default function RootLayout({
    children,
}: { children: React.ReactNode; }) {
    return (
        <html lang="no">
            <body>
                <Header />

                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
