import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Target, Heart, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/about-team.png";

const pillars = [
  { icon: Eye, title: "Visie", text: "Wij geloven dat veiligheid persoonlijk is. Geen twee opdrachten zijn hetzelfde — daarom luisteren wij eerst en bouwen daarna." },
  { icon: Target, title: "Missie", text: "Bedrijven, evenementen en publieke ruimtes voorzien van eerlijke, betrokken beveiliging waarop u kunt bouwen." },
  { icon: Heart, title: "Waarden", text: "Integriteit, transparantie en respect. Voor onze opdrachtgevers, hun gasten én voor elkaar." },
  { icon: ShieldCheck, title: "Normen", text: "Wij werken strikt volgens de Wpbr en de gedragscode van de Nederlandse beveiligingsbranche." },
];

const OverOns = () => (
  <main className="pt-24">
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Over DBS</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
              Veiligheid door
              <br />
              <span className="text-gradient-red">vakmanschap & vertrouwen</span>
            </h1>
            <div className="space-y-5 text-foreground/75 leading-relaxed">
              <p>
                Dienst Bewaking en Surveillance B.V. is een jonge, ambitieuze beveiligingsorganisatie
                gevestigd in Rijswijk. Opgericht door professionals met een achtergrond in de
                beveiligings- en veiligheidssector, met een duidelijke ambitie: kwaliteit en
                persoonlijk contact terugbrengen in een branche die vaak anoniem aanvoelt.
              </p>
              <p>
                Wij geloven dat goede beveiliging veel verder gaat dan iemand in uniform op een
                vaste plek neerzetten. Het draait om meedenken, anticiperen en oprechte aandacht
                voor de mensen en het pand dat u ons toevertrouwt.
              </p>
              <p>
                Klein genoeg om persoonlijk te blijven, professioneel genoeg om elke opdracht
                aan te kunnen — dat is de belofte van DBS.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border aspect-[3/4]">
              <img src={aboutImage} alt="DBS beveiliger" className="w-full h-full object-cover" loading="lazy" width={1080} height={1440} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary/40 rounded-bl-xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-primary/40 rounded-tr-xl" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-24 bg-gradient-dark border-y border-border/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Waar wij voor staan
          </h2>
          <p className="text-foreground/75 leading-relaxed">
            Onze visie, missie en waarden zijn het fundament van elke opdracht die wij uitvoeren.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/60 border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/contact" className="btn-gradient-red text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase inline-flex items-center transition-all hover:shadow-lg hover:shadow-primary/20">
            Maak kennis met ons
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default OverOns;
