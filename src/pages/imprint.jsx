import React from "react";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";
import SEO from "../components/SEO/SEO";

export default () => (
    <div>
        <Helmet>
            <title>{`${config.siteTitle} | Impressum`}</title>
        </Helmet>
        <SEO />
        <HeaderImage imagePath={config.siteUrl + config.headers.imprint}>
            <h1>Impressum</h1>
        </HeaderImage>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <div>
            <p>
                Philippe Schild<br/>
                Greversweg 78c<br/>
                47574 Goch
            </p>
            <p>
                Telefon: <a href={`tel:${config.contact.mobile}`}>{config.contact.mobile}</a><br/>
                E-Mail: <a href={`mailto:${config.contact.mail}`}>{config.contact.mail}</a>
            </p>
        </div>
        <h2>Haftungsausschluss:</h2>
        <b>Haftung für Inhalte</b>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        <b>Haftung für Links</b>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    </div>
);