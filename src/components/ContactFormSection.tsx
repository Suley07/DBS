import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Controleer uw gegevens", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mqewlzyj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ naam: "", bedrijf: "", email: "", bericht: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-dark">
      <div className="container px-4">
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
            <p className="text-foreground/75 leading-relaxed mb-8 max-w-md">
              Vertel ons in een paar zinnen wat u zoekt. Binnen één werkdag krijgt u
              een persoonlijk advies of een vrijblijvende offerte op maat.
            </p>
            <div className="space-y-3 text-sm text-foreground/75">
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
            {status === "success" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/40 text-destructive text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Er ging iets mis bij het verzenden. Probeer het later opnieuw of bel ons direct.</p>
              </div>
            )}
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
            <button type="submit" disabled={status === "loading"} className="w-full btn-gradient-red text-primary-foreground py-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60">
              {status === "loading" ? "Versturen..." : "Verstuur bericht"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
