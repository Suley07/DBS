import { motion } from "framer-motion";

const partners = [
  { name: "Schiphol Group" },
  { name: "Heineken" },
  { name: "ProRail" },
  { name: "Gemeente Den Haag" },
  { name: "Jaarbeurs" },
];

const PartnerLogo = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 mx-10 md:mx-16 flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
    <div className="w-7 h-7 rounded-md bg-foreground/90 flex items-center justify-center">
      <span className="text-background text-xs font-extrabold">{name.charAt(0)}</span>
    </div>
    <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground/80 whitespace-nowrap">
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
      className="text-center text-sm md:text-base font-medium text-muted-foreground tracking-wide mb-14"
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
      <div className="flex animate-marquee w-max">
        {[...partners, ...partners].map((p, i) => (
          <PartnerLogo key={`${p.name}-${i}`} name={p.name} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default PartnersMarquee;
