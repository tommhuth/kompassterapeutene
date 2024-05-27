import Container from "@/components/container/container";
import Image from "next/image";
import style from "./page.module.scss"

import couple from "../../../assets/images/couple.jpeg"
import Footer from "@/components/footer/footer";

export default function Page() {
    return (
        <>
            <Container className="page-header">
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

            <Image
                src={couple}
                sizes="100vw"
                className={style.image}
                alt="Par på strand ved solnedgang."
            />

            <Footer tight />
        </>
    )
}