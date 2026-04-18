import { motion } from "framer-motion";
import { Clock, UserCheck, Zap, FileText, MapPin, Heart } from "lucide-react";

const reasons = [
  { icon: Clock, title: "24/7 inzetbaar, altijd bereikbaar" },
  { icon: UserCheck, title: "Professioneel en representatief personeel" },
  { icon: Zap, title: "Snelle respons bij incidenten" },
  { icon: FileText, title: "Duidelijke rapportage en communicatie" },
  { icon: MapPin, title: "Flexibele inzet op elke locatie" },
  { icon: Heart, title: "Uitstekende klantenservice" },
];

const WhyUsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Waarom DBS</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5">
          Betrouwbaarheid die <span className="text-gradient-red">verder gaat</span> dan beveiliging
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Bij Dienst Bewaking en Surveillance geloven we dat échte veiligheid begint met vertrouwen.
          Onze beveiligers combineren ervaring, alertheid en moderne technologie om u rust en
          zekerheid te bieden — dag en nacht.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-center gap-4 p-5 rounded-xl bg-card/60 border border-border hover:border-primary/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm font-medium text-foreground">{r.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
