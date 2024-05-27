import "../../assets/style/app.scss"

import type { Metadata } from "next"
import Header from "@/components/header/header" 

export const metadata: Metadata = {
    title: "Kompassterapeutene",
    description: "Kompassterapeutene",
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
