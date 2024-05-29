import Container from "@/components/container/container";

export default function NotFound( ) {
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
            <p className="p1">Den siden finner vi ikke, kanskje en feil i linken?</p>
        </Container>
    )
}