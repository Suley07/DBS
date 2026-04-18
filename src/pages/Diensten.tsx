import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Diensten = () => (
  <main className="pt-24">
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Onze <span className="text-gradient-red">Diensten</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Van vaste objectposten tot mobiele surveillance en evenementen —
            wij bieden maatwerkoplossingen voor elke beveiligingsbehoefte.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="pb-24 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group rounded-xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.short}
                </p>
                <Link
                  to={`/diensten/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide"
                >
                  Meer informatie
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
