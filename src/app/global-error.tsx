"use client"

import Container from "@/components/container/container";

export default function Error( ) {
    return (
        <Container 
            style={{ 
                textAlign: "center",
                marginTop: "35vh",
                marginBottom: "35vh",
                display:"flex",
                gap: ".5em",
                flexDirection: "column"
            }}
        >
            <h1 className="h2">Ojsann!</h1>
            <p className="p1">Noe helt forferdelig skjedde.</p>
        </Container>
    )
}