import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", bericht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Bericht verzonden", description: "Wij nemen zo snel mogelijk contact met u op." });
    setForm({ naam: "", bedrijf: "", email: "", bericht: "" });
  };

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Contact</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                Neem Contact Op
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte ontvangen?
                Neem gerust contact met ons op.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Telefoon", value: "06 11 74 64 64" },
                  { icon: Mail, label: "Email", value: "info@dienstbewakingensurveillance.nl" },
                  { icon: MapPin, label: "Adres", value: "Einsteinlaan 28, 2289CC Rijswijk" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "naam", label: "Naam", type: "text" },
                  { id: "bedrijf", label: "Bedrijf", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [field.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-foreground mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="bericht"
                    rows={5}
                    required
                    value={form.bericht}
                    onChange={(e) => setForm((prev) => ({ ...prev, bericht: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-gradient-red text-primary-foreground py-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Verstuur
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
