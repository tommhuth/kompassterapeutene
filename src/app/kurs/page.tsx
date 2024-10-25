import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import Price from "@/components/price/price";
import ScrollList from "@/components/scroll-list/scroll-list";
import { Metadata } from "next";
import Link from "next/link";
import { APP_URL } from "../sitemap";

function Arrow() {
    return (
        <svg viewBox="0 0 20 8" fill="none">
            <path
                d="M19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464465C15.9763 0.269203 15.6597 0.269203 15.4645 0.464465C15.2692 0.659727 15.2692 0.97631 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.73079 15.9763 7.73079 16.1716 7.53553L19.3536 4.35355ZM1.32883e-07 4.5L19 4.5L19 3.5L-1.32883e-07 3.5L1.32883e-07 4.5Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: "Kurs",
    alternates: {
        canonical: APP_URL + "/kurs"
    },
    description: "Vi tilbyr internasjonalt anerkjente kurs som PREP og Tuning into kids/teens for å styrke parforhold og familierelasjoner. Våre tjenester passer for alle aldre og kan tilbys fysisk eller digitalt, tilpasset deres behov."
}

export default function Kurs() {
    return (
        <>
            <Container className="page-header">
                <h1 className="h1">Kurs</h1>

                <p className="p1">
                    For påmelding eller spørsmål om kurs og samtaler, vennligst
                    ta kontakt med oss på eposten vår: <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
                </p>

                <ScrollList>
                    <a href="#prep-helgekurs"><Arrow /> PREP helgekurs</a>
                    <a href="#prep-kurs-privat"><Arrow /> PREP kurs privat</a>
                    <a href="#prep-timer"><Arrow /> PREP timer</a>
                    <a href="#tuning-into-kids-teens-kurs"><Arrow /> Tuning into kids/teens kurs</a>
                    <a href="#tuning-into-kids-teens-enkelttimer"><Arrow /> Tuning into kids/teens enkelttimer</a>
                    <a href="#familieterapi-foreldreveiledning-og-parterapi"><Arrow /> Familieterapi, foreldreveiledning og parterapi</a>
                </ScrollList>

                <hgroup className="hgroup" id="prep-helgekurs">
                    <h2 className="h2">PREP helgekurs</h2> 
                </hgroup>
                <p className="p2">
                    Vil dere ha et kræsjkurs i parforhold? Ta helgekurset vårt som holdes lørdag og søndag kl. 10-16
                    med andre deltagere. Ingen presentasjon eller rollespill! Meld dere på nå, invester i parforholdet
                    og ikke vent med det. Vi ser frem til å treffes og bli bedre kjent!
                </p>
                <p className="p2">
                    Påmeldingen er bindende. Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                    Ved avbestillinger senere enn det, refunderes ikke beløpet.
                </p>
                <ul className="tags">
                    <li><Price value={4700} /> for et par</li>
                </ul>

                <h2 className="h2 hgroup" id="prep-kurs-privat">PREP kurs privat</h2>
                <p className="p2">
                    Ønsker dere å ta et parkurs mer privat og uten andre deltagere? Ta kursrekken alene over 4 ganger på
                    1,5 time. Få muligheten til å bli bedre kjent med hverandre som par og ha kurset helt for dere selv.
                </p>
                <p className="p2">
                    Påmeldingen er bindende. Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                    Ved ønske om reduserte antall samtaler, så regnes prisen ut fra en PREP time (se informasjon om PREP timer).
                </p>
                <ul className="tags">
                    <li><Price value={1500} /> per time</li>
                    <li>Digitalt eller fysisk</li>
                </ul>

                <h2 className="h2 hgroup" id="prep-timer">PREP timer</h2>
                <p className="p2">
                    Hvis dere ønsker å delta på enkelte temaer i PREP kurset, så tilbyr vi 1,5 time samtale
                    på hvert tema. Samtalene er uten andre deltagere, men med dere alene.
                </p>
                <p className="p2">
                    Ved avbestilling senest 3 uker før timen, refunderes halve beløpet. Ved avbestillinger senere, refunderes ikke beløpet.
                </p>
                <ul className="tags">
                    <li><Price value={1500} /> for et par </li>
                    <li>Digitalt eller fysisk</li>
                </ul>

                <h3 className="l1">Temaer kan være</h3>
                <ul className="p2 list">
                    <li>Da vi ble et par og å leve med forskjeller</li>
                    <li>Negative konfliktmønstre</li>
                    <li>Vennskap og glede</li>
                    <li>Løsninger og seksualitet</li>
                    <li>Tilgivelse og hvordan bli gamle sammen?</li>
                </ul>

                <hgroup className="hgroup" id="tuning-into-kids-teens-kurs">
                    <h2 className="h2">Tuning into kids/teens kurs</h2> 
                </hgroup>
                <p className="p2">
                    Kurset tilbys i gruppe, ukentlig eller i helger.  Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                    Ved avbestillinger senere, refunderes ikke beløpet. Kurset tilbys etter forespørsel.
                </p>

                <ul className="tags">
                    <li><Price value={4700} /> per foreldrepar/aleneforelder</li>
                </ul>

                <h2 className="h2 hgroup" id="tuning-into-kids-teens-enkelttimer">
                    Tuning into kids/teens kurs enkelttimer
                </h2>
                <p className="p2">
                    Kurset tilbys som enkelttimer på 60 min privat. 
                    Ved avbestilling senest 3 uker før timen, refunderes halve beløpet. Ved avbestillinger senere, 
                    refunderes ikke beløpet. Kurset tilbys etter forespørsel.
                </p>

                <ul className="tags">
                    <li><Price value={5200} /> per foreldrepar/aleneforelder</li>
                    <li>Digitalt eller fysisk</li>
                </ul>

                <h2 className="h2 hgroup" id="familieterapi-foreldreveiledning-og-parterapi">
                    Familieterapi, foreldreveiledning og parterapi
                </h2>

                <p className="p2">Det tilbys samtaler:</p>
 
                <ul className="p2 list">
                    <li>Kommunikasjon</li>
                    <li>Tid til parforholdet eller familien</li>
                    <li>Økonomi</li>
                    <li>Ulike behov</li>
                    <li>Intimitet</li>
                    <li>Arbeidsfordeling i hjemmet</li>
                    <li>Foreldreskap og foreldreveiledning</li>
                    <li>Bonusfamilier</li>
                    <li>Øvrig familie</li>
                    <li>Kulturutfordringer</li>
                    <li>Sorg og savn</li>
                    <li>Samarbeid etter brudd</li>
                </ul>

                <ul className="tags">
                    <li>1 time <Price value={1200} /></li>
                    <li>3 timer <Price value={3000} /></li>
                </ul>
            </Container>

            <Footer />
        </>
    )
}