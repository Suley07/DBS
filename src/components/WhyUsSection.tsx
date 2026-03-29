import { motion } from "framer-motion";
import { Clock, Award, Users, Headphones } from "lucide-react";

const reasons = [
  { icon: Clock, title: "24/7 Inzetbaar", text: "Dag en nacht bereikbaar voor al uw beveiligingsvragen en noodgevallen." },
  { icon: Award, title: "Gecertificeerd", text: "Volledig gecertificeerd volgens de Nederlandse wet- en regelgeving." },
  { icon: Users, title: "Ervaren Team", text: "Professioneel getrainde en ervaren beveiligingsspecialisten." },
  { icon: Headphones, title: "Eigen Meldkamer", text: "Directe communicatie en snelle responstijden via onze meldkamer." },
];

const WhyUsSection = () => (
  <section id="waarom-wij" className="py-24 md:py-32 bg-gradient-navy">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-heading text-sm tracking-[0.3em] text-primary uppercase">Waarom GuardForce</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Waarom Kiezen Voor Ons</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-foreground font-heading">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
