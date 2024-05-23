import Link from "next/link"
import styles from "./header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    Kompassterapeutene
                </Link>

                <ul className={styles.list}>
                    <li>
                        <Link href="/hvem-er-vi">
                            Hvem er vi
                        </Link>
                    </li>
                    <li>
                        <Link href="/kurs">
                            Kurs
                        </Link>
                    </li>
                    <li>
                        <Link href="/paamelding-kontakt">
                            Påmelding og kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}