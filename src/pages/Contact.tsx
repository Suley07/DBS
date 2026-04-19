import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ naam: "", bedrijf: "", email: "", bericht: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container px-4">
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
              <p className="text-foreground/75 leading-relaxed mb-12">
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
                      <p className="text-sm text-foreground/75">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <iframe
                  title="DBS locatie Einsteinlaan 28 Rijswijk"
                  src="https://www.google.com/maps?q=Einsteinlaan+28,+2289CC+Rijswijk&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-embed"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "success" && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/40 text-destructive text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons direct.</p>
                  </div>
                )}
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
                  disabled={status === "loading"}
                  className="w-full btn-gradient-red text-primary-foreground py-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
                >
                  {status === "loading" ? "Versturen..." : "Verstuur"}
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
