import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  naam: z.string().trim().min(2, "Naam is te kort").max(100),
  bedrijf: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  bericht: z.string().trim().min(5, "Bericht is te kort").max(1000),
});

const ContactFormSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", bericht: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Controleer uw gegevens", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Bericht verzonden", description: "Wij nemen zo snel mogelijk contact met u op." });
    setForm({ naam: "", bedrijf: "", email: "", bericht: "" });
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              Direct in gesprek met <span className="text-gradient-red">DBS</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Vertel ons in een paar zinnen wat u zoekt. Binnen één werkdag krijgt u
              een persoonlijk advies of een vrijblijvende offerte op maat.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Telefoon:</span> 06 11 74 64 64</p>
              <p><span className="text-foreground font-medium">Email:</span> info@dienstbewakingensurveillance.nl</p>
              <p><span className="text-foreground font-medium">Adres:</span> Einsteinlaan 28, 2289CC Rijswijk</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 bg-card/60 border border-border rounded-2xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-naam" className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Naam</label>
                <input id="cf-naam" required maxLength={100} value={form.naam} onChange={(e) => setForm({ ...form, naam: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="cf-bedrijf" className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Bedrijf</label>
                <input id="cf-bedrijf" maxLength={100} value={form.bedrijf} onChange={(e) => setForm({ ...form, bedrijf: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label htmlFor="cf-email" className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Email</label>
              <input id="cf-email" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="cf-bericht" className="block text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Bericht</label>
              <textarea id="cf-bericht" rows={5} required maxLength={1000} value={form.bericht} onChange={(e) => setForm({ ...form, bericht: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full btn-gradient-red text-primary-foreground py-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20">
              Verstuur bericht
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
