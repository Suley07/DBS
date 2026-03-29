import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "15+", label: "Jaar Ervaring" },
  { value: "500+", label: "Projecten" },
  { value: "24/7", label: "Beschikbaar" },
  { value: "100%", label: "Gecertificeerd" },
];

const points = [
  "Alle medewerkers zijn PoB-gecertificeerd",
  "Maatwerk beveiligingsplannen op locatie",
  "Directe communicatie via eigen meldkamer",
  "Verzekerd en NEN-gecertificeerd",
];

const AboutSection = () => (
  <section id="over-ons" className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-sm tracking-[0.3em] text-primary uppercase">Over Ons</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
            Beveiliging Waar U Op Kunt Bouwen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            GuardForce is al meer dan 15 jaar een toonaangevend beveiligingsbedrijf in Nederland.
            Onze ervaren en gecertificeerde medewerkers staan klaar om uw veiligheid te waarborgen,
            ongeacht de situatie of locatie.
          </p>
          <div className="space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-card border border-border rounded-lg p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-heading">{stat.value}</div>
              <div className="text-muted-foreground text-sm mt-2 font-heading tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
