import { ReactNode } from "react"
import styles from "./container.module.scss"

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={styles.container + " " + className}>
            {children}
        </div>
    )
}