import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Betrouwbaar",
    description: "Gecertificeerde beveiligers met uitgebreide screening en jarenlange ervaring in de sector.",
  },
  {
    icon: Award,
    title: "Gecertificeerd",
    description: "Volledig vergund conform Nederlandse wetgeving. Alle medewerkers beschikken over de vereiste diploma's.",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaar",
    description: "Dag en nacht inzetbaar door heel Nederland. Snelle responstijd en flexibele planning.",
  },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professionele beveiliging" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
          >
            Premium Beveiliging
            <br />
            <span className="text-gradient-red">Voor Uw Objecten</span>
            <br />
            En Evenementen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Landelijk inzetbare beveiligingsspecialisten. Van objectbeveiliging tot
            evenementenbeveiliging — wij leveren discretie, betrouwbaarheid en professionaliteit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/diensten"
              className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ontdek Onze Diensten
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center btn-gradient-red text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 glow-red"
            >
              Offerte Aanvragen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="py-24 md:py-32 bg-gradient-dark">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Home;
