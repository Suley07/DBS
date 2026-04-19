import { motion } from "framer-motion";

const partners = [
  "Bouwbedrijf Visser",
  "Logistics Nederland",
  "EventPro NL",
  "Vastgoed Groep Zuid",
  "TechCampus Rijswijk",
];

const PartnerLabel = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 mx-6 md:mx-10 px-6 py-3 border border-border/60 rounded-lg bg-card/30 hover:border-primary/40 transition-colors">
    <span className="text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-foreground/80 whitespace-nowrap">
      {name}
    </span>
  </div>
);

const PartnersMarquee = () => (
  <section className="py-20 md:py-24 bg-background border-y border-border/30 overflow-hidden">
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center text-sm md:text-base font-medium text-foreground/75 tracking-wide mb-14"
    >
      Vertrouwd door toonaangevende organisaties
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="marquee-mask"
    >
      <div className="flex animate-marquee w-max items-center">
        {[...partners, ...partners].map((name, i) => (
          <PartnerLabel key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default PartnersMarquee;
