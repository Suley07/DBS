import { motion } from "framer-motion";

const Privacy = () => (
  <main className="pt-32 pb-20">
    <div className="container px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Privacybeleid</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
          Privacybeleid
        </h1>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Wie zijn wij</h2>
            <p>
              Dienst Bewaking en Surveillance B.V. (hierna: "DBS"), gevestigd aan de
              Einsteinlaan 28, 2289CC Rijswijk, ingeschreven bij de Kamer van Koophandel onder
              nummer 93896034, is verantwoordelijk voor de verwerking van persoonsgegevens
              zoals beschreven in dit privacybeleid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Contactgegevens</h2>
            <p>
              E-mail: <a href="mailto:info@dienstbewakingensurveillance.nl" className="text-primary hover:underline">info@dienstbewakingensurveillance.nl</a>
              <br />
              Telefoon: <a href="tel:0611746464" className="text-primary hover:underline">06 11 74 64 64</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Welke gegevens verzamelen wij</h2>
            <p>
              Wanneer u via ons contactformulier of offerteformulier contact met ons opneemt,
              verzamelen wij de volgende gegevens:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Naam</li>
              <li>Bedrijfsnaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Inhoud van uw bericht of aanvraag</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Waarvoor gebruiken wij uw gegevens</h2>
            <p>
              Wij gebruiken uw gegevens uitsluitend om uw aanvraag te beantwoorden, een
              passende offerte op te stellen en — indien gewenst — onze diensten te leveren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Delen met derden</h2>
            <p>
              DBS deelt uw persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor
              de uitvoering van onze overeenkomst of om te voldoen aan een wettelijke
              verplichting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Bewaartermijn</h2>
            <p>
              Wij bewaren uw gegevens niet langer dan noodzakelijk voor het doel waarvoor ze
              zijn verzameld, of zolang wettelijk vereist.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-foreground mb-3">Uw rechten</h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten
              verwijderen. Neem hiervoor contact met ons op via de bovenstaande gegevens.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  </main>
);

export default Privacy;
