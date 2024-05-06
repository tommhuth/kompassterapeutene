import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Påmelding, priser og kontakt</h1>
            <p>
                For påmelding eller spørsmål om kurs/samtaler, vennligst
                ta kontakt med oss på eposten vår: <a href="mailto:kompassterapeutene@outlook.com">kompassterapeutene@outlook.com</a>
            </p>
            <p>
                Kjenner du par som vil lære mer? Gi et gavekort på noen av kursene eller samtaletilbudet vårt.
            </p>
            <p>Vi har 15% studentrabatt på alle våre tjenester</p>

            <h2>Kurs</h2>
            <h3>PREP helgekurs</h3>
            <p>
                Vil dere ha et kræsjkurs i parforhold? Ta helgekurset vårt som holdes lørdag og søndag kl. 10-16
                med andre deltagere. Ingen presentasjon eller rollespill! Meld dere på nå, invester i parforholdet
                og ikke vent med det. Vi ser frem til å treffes og bli bedre kjent!
            </p>
            <p>
                Påmeldingen er bindende. Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                Ved avbestillinger senere enn det, refunderes ikke beløpet.
            </p>
            <p><strong>4700,- per par</strong></p>
            <p>Neste kurs 7-8 sept. </p>

            <h3>PREP kurs</h3>
            <p>
                Ønsker dere å ta et parkurs mer privat og uten andre deltagere? Ta kursrekken alene over 4 ganger på
                1,5 time. Få muligheten til å bli bedre kjent med hverandre som par og ha kurset helt for dere selv.
            </p>
            <p>
                Påmeldingen er bindende. Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                Ved ønske om reduserte antall samtaler, så regnes prisen ut fra en PREP time (se informasjon om PREP timer).
            </p>
            <p><strong>5200,- for et par, digitalt eller fysisk</strong></p>

            <h3>PREP timer</h3>
            <p>
                Hvis dere ønsker å delta på enkelte temaer i PREP kurset, så tilbyr vi 1,5 time samtale på hvert tema. Samtalene er uten andre deltagere, men med dere alene.
            </p>
            <p>
                Ved avbestilling senest 3 uker før timen, refunderes halve beløpet. Ved avbestillinger senere, refunderes ikke beløpet.
            </p>
            <p><strong>1500,- for et par, digitalt eller fysisk </strong></p>

            <h4>Oversikt over temaer</h4>
            <ul>
                <li>Da vi ble et par og å leve med forskjeller</li>
                <li>Negative konfliktmønstre. Vennskap og glede</li>
                <li>Løsninger og seksualitet</li>
                <li>Tilgivelse og hvordan bli gamle sammen?</li>
            </ul>

            <h3>Tuning into kids/teens helgekurs</h3>
            <p>
                <Link href="/hvem-er-vi#monica">Monica</Link> tilbyr kurset i helger, enten med deg/dere alene eller i gruppe. Ved avbestillinger innen 3 uker før kurset, refunderes halve beløpet.
                Ved avbestillinger senere, refunderes ikke beløpet. Kurset tilbys etter forespørsel.
            </p>
            <p><strong>4700,- per foreldrepar/aleneforelder</strong></p>

            <h3>Tuning into kids/teens kurs</h3>
            <p>
                <Link href="/hvem-er-vi#monica">Monica</Link> tilbyr kurset over enkelttimer, alene eller i gruppe på 60 min. Ved avbestilling senest 3 uker før
                timen, refunderes halve beløpet. Ved avbestillinger senere, refunderes ikke beløpet. Kurset tilbys etter
                forespørsel.
            </p>
            <p><strong>5200,- per foreldrepar/aleneforelder, digitalt eller fysisk</strong></p>

            <h3>Familieterapi/foreldreveiledning/parterapi 60 min.</h3>
            <p> <Link href="/hvem-er-vi#susanne">Susanne</Link> tilbyr samtaler.</p>
            <ul>
                <li>1 time 1200,-</li>
                <li>3 timer 3000,-</li>
            </ul>
            <p>Temaer kan være:</p>
            <ul>
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
                <li>Og mer</li>
            </ul>
        </>
    )
}