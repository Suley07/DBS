import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceObject from "@/assets/service-object.jpg";
import serviceEvent from "@/assets/service-event.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import serviceHospitality from "@/assets/service-hospitality.jpg";

const services = [
  {
    image: serviceObject,
    title: "Objectbeveiliging",
    description: "Permanente bewaking van bedrijfspanden, kantoren en industriële complexen. Preventief en reactief optreden bij incidenten.",
  },
  {
    image: serviceEvent,
    title: "Evenementenbeveiliging",
    description: "Professionele beveiliging voor festivals, concerten, beurzen en bedrijfsevenementen. Volledige planning en coördinatie.",
  },
  {
    image: serviceConstruction,
    title: "Bouwbeveiliging",
    description: "Bescherming van bouwplaatsen, materialen en machines tegen diefstal en vandalisme. 24/7 surveillance.",
  },
  {
    image: serviceHospitality,
    title: "Hospitality & Receptiediensten",
    description: "Gastvrije ontvangst combineren met scherpe beveiliging. Ideaal voor hotels, kantoren en exclusieve evenementen.",
  },
];

const Diensten = () => (
  <main className="pt-20">
    {/* Header */}
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Ons Aanbod</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Onze Diensten
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Van object- en bouwbeveiliging tot evenementen en hospitality — wij bieden
            maatwerkoplossingen voor elke beveiligingsbehoefte.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Service Cards */}
    <section className="pb-24 md:pb-32">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/diensten/${["objectbeveiliging", "evenementenbeveiliging", "bouwbeveiliging", "hospitality"][i]}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide"
                >
                  Meer Informatie
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Diensten;
