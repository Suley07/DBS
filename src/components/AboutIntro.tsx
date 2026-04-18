import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const AboutIntro = () => (
  <section className="py-24 md:py-32 bg-gradient-dark">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Over DBS</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Een team dat <span className="text-gradient-red">meedenkt</span>,
            geen leverancier die afwacht.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Dienst Bewaking en Surveillance bestaat uit een hecht team van gecertificeerde
              beveiligers met jarenlange ervaring in uiteenlopende sectoren. Wij combineren die
              ervaring met een innovatieve, frisse blik op veiligheid.
            </p>
            <p>
              Geen standaard contracten of voorgekookte oplossingen. Wij luisteren eerst, lopen
              uw locatie door en bouwen samen met u de perfecte beveiliging op maat. Dat
              kan vandaag al, of als langlopend partnership.
            </p>
            <p>
              Persoonlijk, betrokken en altijd bereikbaar — zo maken wij het verschil.
            </p>
          </div>

          <Link
            to="/over-ons"
            className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-sm uppercase tracking-wide group"
          >
            Lees ons verhaal
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-border aspect-[3/4]">
            <img
              src={aboutImage}
              alt="DBS beveiliger"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary/40 rounded-bl-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-primary/40 rounded-tr-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutIntro;
