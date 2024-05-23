import Link from "next/link"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}> 
            Kompassterapautene &copy;  {new Date().getFullYear()}
            <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
        </footer>

    )
}