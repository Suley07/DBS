import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServicesGrid = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Wat wij doen</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Onze diensten
        </h2>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Van vaste objectposten tot mobiele rondes en evenementenbeveiliging —
          beweeg over een dienst voor een korte preview.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-xl aspect-[3/5] bg-card border border-border"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              width={600}
              height={1000}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 className="text-base md:text-xl font-extrabold uppercase tracking-tight text-foreground mb-2 leading-tight">
                {service.title}
              </h3>

              {/* Hover preview */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-out">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 mt-1">
                  {service.preview}
                </p>
              </div>

              <Link
                to={`/diensten/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide"
              >
                Meer info
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
