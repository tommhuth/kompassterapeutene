"use client";

import Link from "next/link"
import styles from "./header.module.scss"
import logo from "../../../assets/images/logo.jpg"
import Image from "next/image"
import { useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function Header() {
    let [open, setOpen] = useState(false)
    let pathname = usePathname()
    let links = [
        {
            name: "Hvem er vi",
            href: "/hvem-er-vi",
        },
        {
            name: "Kurs",
            href: "/kurs",
        },
        {
            name: "Påmelding og kontakt",
            href: "/paamelding-kontakt",
        }
    ]

    useEffect(() => {
        setOpen(false);
    }, [pathname])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"

            return () => {
                document.body.style.overflow = ""
            }
        }
    }, [open])

    useEffect(() => {
        let onResize = () => {
            if (window.innerWidth > 600) {
                setOpen(false)
            }
        }

        window.addEventListener("resize", onResize)
    }, [])

    return (
        <header
            className={classNames(styles.header, {
                [styles["header--open"]]: open
            })}
        >
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <Image src={logo} sizes="32px" alt="Kompassterapeutene logo" />
                    Kompassterapeutene
                </Link>

                <button
                    className={styles.toggler}
                    onClick={() => setOpen(!open)}
                >
                    <span className="visually-hidden">{open ? "Lukk" : "Åpne"} meny</span>

                    {open && ( 
                        <svg viewBox="0 0 64 64" fill="none" >
                            <line x1="16.0901" y1="15.383" x2="48.617" y2="47.9099" stroke="currentColor" strokeWidth={3} />
                            <line x1="15.383" y1="47.9099" x2="47.9099" y2="15.383" stroke="currentColor" strokeWidth={3} />
                        </svg>
                    )}

                    {!open && (
                        <svg viewBox="0 0 64 64" fill="none">
                            <line x1="9" y1="17.5" x2="55" y2="17.5" stroke="currentColor" strokeWidth={3} />
                            <line x1="9" y1="31.5" x2="55" y2="31.5" stroke="currentColor" strokeWidth={3} />
                            <line x1="9" y1="45.5" x2="55" y2="45.5" stroke="currentColor" strokeWidth={3} />
                        </svg> 
                    )}
                </button>

                <ul
                    className={classNames(styles.list, {
                        [styles["list--open"]]: open
                    })}
                    onClick={(e) => {
                        let element = e.target as HTMLAnchorElement

                        if (element.tagName === "A" && element.pathname === pathname) {
                            setOpen(false)
                        }
                    }}
                >
                    {links.map(i => {
                        return (
                            <li
                                key={i.name}
                                style={{
                                    fontWeight: pathname === i.href ? "bold" : undefined,
                                    color: pathname === i.href ? "var(--wheat)" : undefined,
                                }}
                            >
                                <Link href={i.href}>{i.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>

    )
}