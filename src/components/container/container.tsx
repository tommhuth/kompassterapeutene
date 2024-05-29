import { CSSProperties, ReactNode } from "react"
import styles from "./container.module.scss"
import classNames from "classnames";

interface ContainerProps {
    style?: CSSProperties;
    children: ReactNode;
    className?: string
}

export default function Container({ children, className, style }: ContainerProps) {
    return (
        <div 
            className={classNames(styles.container, className)} 
            style={style}
        >
            {children}
        </div>
    )
}