import Container from "@/components/container/container"
import style from "./page.module.scss"

export default function Page() {
    return (
        <>
            <Container>
                <h1 className="h1">Hvem er vi?</h1>

                <p className="p1">
                    Susanne og Monica møttes i 2019 da de studerte master i familiebehandling på OsloMet. De fant straks ut at de hadde like 
                    tanker rundt arbeidet som par- og familieterapeuter og at de lot seg inspirere av de samme psykologene i feltet. 
                    Susanne og Monica tok senere sertifisering som PREP-kurs holdere ved Modum bad sammen og med ønske om å holde kurs sammen.
                </p>
            </Container>

            <figure className={style.image}>
                <img className={style.image__src} src="/susanne-monica.jpg" />
                <figcaption className={style.image__caption}>
                    <Container>
                        Susanne (til venstre) og Monica.
                    </Container>
                </figcaption>
            </figure>

            <Container>
                <hgroup className="hgroup"> 
                    <h2 className="h2 " id="susanne">Susanne</h2>
                    <p className="h3">Par- og familieterapeut</p>
                </hgroup>
                <p className="p2">
                    Susanne har erfaring som parterapeut og familieterapeut i det offentlige og private. Hun er også
                    utdannet adjunkt med tilleggsutdanning og har over 10 års erfaring som kontaktlærer i grunnskolen bak
                    seg før hun startet som familieterapeut. Susanne ferdigstilte master i familiebehandling/familieterapi ved OsloMet.
                    Masteroppgaven hadde temaet «Samlivsbrudd i småbarnsperioden». Hun er sertifisert PREP-kurs holder ved Modum bad.

                </p>
                <p className="p2">
                    Susanne jobber som familieterapeut og familieveileder for Sarpsborg kommune, og har hatt praksis ved
                    familievernkontoret i Fredrikstad og hos Fossumkollektivets pårørende avdeling. Susanne har kjennskap til
                    COSP (Cicle of security), PMTO (Parent manegement training- Oregon) og Tuning into kids, som er foreldreveiledende kurs.
                    Hennes tidligere lærerkarriere har gitt henne mange års erfaring med samarbeid med barn, unge og deres foreldre.
                    Hun trives godt med pedagogisk arbeid og anvender det hos familiene hun møter.
                </p>
                <p className="p2">
                    Parterapi og familieterapi er en dyp interesse for Susanne. Hun liker tankene til den belgiske psykologen Esther Perel,
                    den amerikanske psykologen John Gottman, og de norske psykologene Peder Kjøs og Sissel Gran. I sitt arbeid lar hun seg
                    også inspirere av emosjonsfokusert terapi, sosiologi og buddhistisk filosofi. Hun er opptatt av å se par og familier i relasjon
                    til sine omgivelser, samspillsmønstre som oppstår mellom mennesker, og måter vi kommuniserer på.
                </p>
                <p className="p2">
                    Susanne er gift og har to egne barn og tre bonusbarn.
                </p>

                <hgroup className="hgroup"> 
                    <h2 className="h2" id="monica">Monica</h2>
                    <p className="h3">Barn, ungdom og familien</p>
                </hgroup>
                <p className="p2">
                    Monica har arbeidet med barn, ungdom og familier i over 10 år. Hun har arbeidet med barn og ungdom som har strevd med
                    traumehendelser i livene sine. Hun har arbeidet med barn med spesielle behov og har erfaring med kommunikasjonsverktøy
                    som tegn til tale og ASK. Hun har møtt foreldre som har hatt ulike belastninger i livene sine, med rus, vold eller psykiske vansker
                    som påvirket familiedynamikken. Monica har arbeidet på spesialavdeling for barn i skole, barnevern og med vold i nære relasjoner.
                </p>
                <p className="p2">
                    Hun har vært utplassert i praksis hos barn - og ungdomspsykiatrisk familieavdeling, hvor det ble arbeidet med
                    relasjonene mellom foreldre og barn. Arbeid med foreldrenes parforhold og søskenrelasjoner ble også fokusert på. I arbeidet
                    sitt er Monica opptatt av å fremme en bedre kommunikasjon mellom partene og lete etter ressurser hos hverandre. Hun er lydhør
                    og ønsker alles stemmer hørt, og har tro på kommunikasjon som viktig for å endre på fastlåste situasjoner.
                </p>
                <p className="p2">
                    Endring er et felles prosjekt mellom familiemedlemmene og henne, for å nå et felles mål. En løsning passer ikke alle,
                    da hele bildet må ses og vurderinger bli tatt ut fra familiens eller parets behov. Til vanlig er Monica bosatt i Oslo
                    og tilbyr samtaler ved Bislett. Hun bruker fritiden på mann, barn og aktiviteter. Hennes faglige bakgrunn er i pedagogikk,
                    barnevern og familieterapi. Hun i likhet med Susanne sertifisert PREP-kurs holder ved Modum bad.
                </p>
                <p className="p2">
                    Hun ser frem til å møte deg eller dere. Det tilbys ikke samtaler hvor alvorlig psykisk uhelse er til stede.
                </p>
            </Container>
        </>
    )
}