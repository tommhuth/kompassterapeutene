"use client"

import React, { ReactNode } from "react"

export default function ScrollList({ children }: { children: ReactNode }) {
    return (
        <ul
            className="arrow-list p2"
            onClick={e => {
                let target = e.target as HTMLAnchorElement

                if (target.tagName === "A") {
                    e.preventDefault()

                    let element = document.getElementById(target.hash.substring(1))

                    history.pushState(null, "", target.hash)
                    element?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    })
                }
            }}
        >
            {React.Children.map(children, (c, index) => {
                return (
                    <li key={index}>
                        {c}
                    </li>
                )
            })}
        </ul>
    )
}