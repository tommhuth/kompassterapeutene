import classNames from "classnames"
import styles from "./footer.module.scss"

export default function Footer({ tight = false }: { tight?: boolean }) {
    return (
        <footer
            className={classNames(styles.footer, {
                [styles["footer--tight"]]: tight
            })}
        >
            Kompassterapeutene &copy;  {new Date().getFullYear()}
            <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
        </footer>
    )
}