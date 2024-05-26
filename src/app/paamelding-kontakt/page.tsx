import Container from "@/components/container/container"; 

export default function Page() {
    return (
        <Container>
            <h1 className="h1">Påmelding og kontakt</h1>
            <p className="p1">
                For påmelding eller spørsmål om kurs/samtaler, vennligst
                ta kontakt med oss på eposten vår: <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
            </p>
            <p className="p1">
                Kjenner du par som vil lære mer? Gi et <strong>gavekort</strong> på noen av kursene eller samtaletilbudet vårt.
            </p>
            <p className="p1">Vi har <strong>15% studentrabatt</strong> på alle våre tjenester</p>
        </Container>
    )
}