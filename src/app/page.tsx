import Container from "@/components/container/container"
import Link from "next/link"
import styles from "./page.module.scss"
import Image, { getImageProps } from "next/image";
import Footer from "@/components/footer/footer";

import family1wide from "../../assets/images/family1_wide.png"
import family1squarey from "../../assets/images/family1_squarey.png"
import logo from "../../assets/images/logo.jpg"
import { Metadata } from "next";
import { APP_URL } from "./sitemap";

export const metadata: Metadata = {
    description: "Forbedre deres parforhold og familieforhold med Kompassterapeutene. Vi tilbyr kurs og samtaler for å styrke relasjoner og øke livskvaliteten. Kontakt oss for hjelp med parforhold, barneoppdragelse og familieliv.",
    alternates: {
        canonical: APP_URL + "/"
    }
}

export default function Home() {
    const common = { 
        alt: "Mor og far med barn i sommereng.", 
        sizes: '100vw',
        quality: 60,
    }
    const desktop = getImageProps({
        ...common,
        src: family1wide,
        width: 5791,
        height: 2167
    })
    const mobile = getImageProps({
        ...common,
        src: family1squarey,
        width: 3032,
        height: 1827
    })

    return (
        <>
            <Container className="page-header">
                <Image
                    className={styles.logo}
                    src={logo}
                    loading="eager"
                    sizes="150px"
                    alt="Kompassterapeutene logo"
                />
                <h1 className="h1">Kompassterapeutene</h1>
                <p className="p1">
                    Gjør deres parforhold eller familieforhold bedre. Vi vet at livskvaliteten øker med gode familieliv og samliv.
                    Kjærligheten må pleies for at den skal blomstre, det eneste eneste som går av seg selv er forfallet. 
                    Kompassterapeutene tilbyr kurs og samtaler for par og familier som ønsker å bedre relasjonene sine.
                </p>
            </Container>

            <figure className={styles.figure}>
                <picture>
                    <source media="(orientation: landscape)" srcSet={desktop.props.srcSet} />
                    <source media="(orientation: portrait)" srcSet={mobile.props.srcSet} />
                    <img
                        className={styles.figure__image} 
                        alt={common.alt}
                        sizes={common.sizes}
                        src={desktop.props.src}
                        style={{ width: '100%', height: 'auto' }}
                        width={mobile.props.width}
                        height={mobile.props.height}
                    />
                </picture>

            </figure>

            <Container>
                <p className="p2">
                    <Link href="/kurs">På våre kurs</Link> arbeider vi med hvordan dere kan gå veien som par inn i
                    fremtiden sammen. Vi hjelper dere med eksisterende utfordringer, å forebygge problemer, og rett og slett gi
                    forholdet et boost.
                </p>
                <p className="p2">
                    Vi er Østlandsbasert i Oslo og Fredrikstad. Kurssted kan variere ut fra lokalene som benyttes. Vi tilbyr også samtaler og kurs digitalt.
                </p>
            </Container>

            <Container>

                <hgroup className="hgroup">
                    <h2 className="h2">PREP helgekurs</h2> 
                </hgroup>

                <p className="p2">
                    Kurset handler om å forebygge og forsterke parforhold inspirert av PREP-modellen (Prevention and relationship enhancement program) fra Samlivssenteret ved Modum Bad.
                    PREP er et samlivskurs som opprinnelig startet opp i USA på 80-tallet.
                    Det er senere blitt tilpasset nordmenns samliv av Modum Bad. Studier viser at 50% av de som deltar på et samlivskurs etter PREP modellen vil ha større sjanse for å fortsette i parforholdet.
                </p>

                <p className="p2">
                    Dette samlivskurset er en boost for parforholdet. 
                    På kurset kan dere bli kjent på en ny måte og dere vil lære praktiske grep. 
                    De er ment for å hjelpe på kommunikasjonen og gi dere verktøy for problemløsning, og mye mer.  
                    Kurset kan være lett og lekent, eller dere kan gå i dybden på litt vanskeligere temaer.
                    Det er lett for oss å differensiere da dere i deler av kurset jobber individuelt og privat.
                </p>

                <hgroup className="hgroup">
                    <h2 className="h2" lang="en">Tuning into kids/teens</h2>
                </hgroup>
                <p className="p2">
                    <em lang="en">Tuning into kids</em> er et evidensbasert foreldrekurs utviklet av Dr. Sophie Havighurst og Ann Harley. Kurset fokuserer på det
                    emosjonelle båndet mellom barnet ditt og deg. Monica er sertifisert kursholder i <em lang="en">Tuning into kids</em> og tilbyr det etter forespørsel.
                </p>
                <p className="p2">
                    <em lang="en">Tuning into kids</em> er for deg som ønsker å vite mer om foreldreskap og vil lære mer om ditt eget barn. Du vil få verktøy til å bli bedre kjent med deg som forelder og til å styrke relasjonen med barnet ditt.
                </p>

                <p className="p2">
                    Vi har eget kurs for tenåringsforeldre, som er <em lang="en">Tuning into teens</em>. Der jobbes det med å forstå mer om relasjonen mellom deg og tenåringen din, slik at du skal kunne håndtere
                    tenåringsfasen bedre. Monica har et tett samarbeid med sertifiserte i <em lang="en">Tuning into teens</em> og kan tilbys etter forespørsel.
                </p>
            </Container>

            <Footer />
        </>
    );
}
