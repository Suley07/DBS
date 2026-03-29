import { motion } from "framer-motion";
import { Calendar, Building2, Eye, UserCheck, Camera, Shield } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Evenementenbeveiliging",
    description: "Professionele beveiliging voor festivals, concerten, beurzen en bedrijfsevenementen. Volledige planning en uitvoering.",
  },
  {
    icon: Building2,
    title: "Pandbeveiliging",
    description: "24/7 bewaking van uw bedrijfspand, kantoor of winkel. Preventief en reactief optreden bij incidenten.",
  },
  {
    icon: Eye,
    title: "Objectbeveiliging",
    description: "Bescherming van waardevolle objecten, bouwplaatsen en infrastructuur met ervaren beveiligingsmedewerkers.",
  },
  {
    icon: UserCheck,
    title: "Persoonsbeveiliging",
    description: "Discrete en professionele beveiliging voor VIP's, directieleden en publieke figuren.",
  },
  {
    icon: Camera,
    title: "Camerabewaking",
    description: "Installatie en monitoring van geavanceerde camerasystemen met live-opvolging vanuit onze meldkamer.",
  },
  {
    icon: Shield,
    title: "Horecabeveiliging",
    description: "Portiers en beveiliging voor clubs, bars en restaurants. Gastvrij én veilig.",
  },
];

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-24 md:py-32 bg-gradient-navy">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-heading text-sm tracking-[0.3em] text-primary uppercase">Wat wij doen</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-foreground">Onze Diensten</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card border border-border rounded-lg p-8 hover:border-glow transition-colors group"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
