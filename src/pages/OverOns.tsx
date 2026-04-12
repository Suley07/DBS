import { motion } from "framer-motion";
import aboutImage from "@/assets/about-control.jpg";

const OverOns = () => (
  <main className="pt-20">
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Over DBS</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
              Veiligheid Door
              <br />
              <span className="text-gradient-red">Vakmanschap</span>
            </h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Dienst Bewaking en Surveillance B.V. staat voor professionele beveiligingsdiensten
                op het hoogste niveau. Wij geloven dat veiligheid de basis vormt voor een succesvolle
                bedrijfsvoering.
              </p>
              <p>
                Ons team bestaat uit ervaren, gecertificeerde beveiligingsspecialisten die zijn
                opgeleid om in elke situatie adequaat te handelen. Van discrete persoonsbeveiliging
                tot grootschalige evenementenbeveiliging — wij leveren maatwerk.
              </p>
              <p>
                Integriteit, betrouwbaarheid en professionaliteit vormen de kern van onze
                bedrijfsfilosofie. Wij werken uitsluitend met gescreend en gediplomeerd personeel,
                en houden ons strikt aan alle wet- en regelgeving.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: "15+", label: "Jaar Ervaring" },
                { value: "500+", label: "Projecten" },
                { value: "24/7", label: "Beschikbaar" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src={aboutImage}
                alt="DBS Controlekamer"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary/30 rounded-bl-xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-primary/30 rounded-tr-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default OverOns;
