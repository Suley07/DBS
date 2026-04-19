import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Clock, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import AboutIntro from "@/components/AboutIntro";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ContactFormSection from "@/components/ContactFormSection";

const values = [
  { icon: ShieldCheck, title: "Betrouwbaar", description: "Gecertificeerde beveiligers met uitgebreide screening en ervaring." },
  { icon: Award, title: "Gecertificeerd", description: "Volledig vergund conform Nederlandse wet- en regelgeving." },
  { icon: Clock, title: "24/7 Beschikbaar", description: "Dag en nacht inzetbaar door heel Nederland, met snelle responstijd." },
];

const stats = [
  { value: "100+", label: "Beveiligde objecten" },
  { value: "98%", label: "Tevreden opdrachtgevers" },
  { value: "24/7", label: "Inzetbaar door heel Nederland" },
];

const Home = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="DBS beveiliger bij modern kantoorpand" className="w-full h-full object-cover object-[80%_center]" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm font-medium text-primary uppercase tracking-[0.25em] mb-5"
          >
            Dienst Bewaking en Surveillance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6 drop-shadow-lg"
          >
            Wij waken,
            <br />
            zodat <span className="text-gradient-red">u rustig</span>
            <br />
            kunt ondernemen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0 }}
            className="text-lg text-foreground/75 max-w-xl mb-10 leading-relaxed drop-shadow-md"
          >
            Persoonlijke beveiliging op maat — voor uw pand, uw evenement of uw bouwplaats.
            Een team dat meedenkt, snel handelt en u 24/7 dekking biedt door heel Nederland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/diensten"
              className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ontdek onze diensten
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center btn-gradient-red text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 glow-red"
            >
              Offerte aanvragen
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>

    {/* Values */}
    <section className="py-20 bg-gradient-dark">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-background border-l-2 border-primary/60 p-10 overflow-hidden group"
            >
              <span className="absolute top-4 right-6 text-6xl font-extrabold text-primary/20 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <item.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-xl font-extrabold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <AboutIntro />
    <ServicesGrid />
    <WhyUsSection />
    <PartnersMarquee />

    {/* Stats */}
    <section className="py-20 bg-gradient-dark border-y border-border/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-gradient-red mb-3">
                {s.value}
              </div>
              <p className="text-sm md:text-base text-foreground/75 tracking-wide">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ContactFormSection />
  </main>
);

export default Home;
