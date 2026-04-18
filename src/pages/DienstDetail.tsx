import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { getService } from "@/data/services";

const DienstDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Dienst niet gevonden</h1>
          <Link to="/diensten" className="text-primary hover:underline">Terug naar diensten</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="container relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/diensten" className="inline-flex items-center gap-2 text-sm text-primary mb-4 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Alle Diensten
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">{service.title}</h1>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl">{service.short}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.intro}</p>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-10">
                <Link to="/contact" className="btn-gradient-red text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase inline-flex items-center transition-all hover:shadow-lg hover:shadow-primary/20">
                  Offerte Aanvragen
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <h3 className="text-lg font-bold text-foreground mb-6">Wat wij bieden</h3>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DienstDetail;
