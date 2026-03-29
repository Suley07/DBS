import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professionele beveiligingsdienst" className="w-full h-full object-cover" width={1920} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="font-heading text-sm tracking-[0.3em] text-primary uppercase">
              Gecertificeerd & Betrouwbaar
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6 text-foreground">
            Uw Veiligheid,
            <br />
            <span className="text-gradient-red">Onze Missie</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-light">
            Professionele beveiligingsdiensten voor evenementen, panden en objecten.
            24/7 bescherming waar u op kunt vertrouwen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity glow-red"
            >
              Offerte Aanvragen
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded font-heading text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
            >
              Onze Diensten
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
