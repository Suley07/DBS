import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

const serviceOptions = [
  "Objectbeveiliging",
  "Evenementenbeveiliging",
  "Bouwbeveiliging",
  "Mobiele Surveillance",
  "Toegangsbeheer & Receptiediensten",
  "Anders",
];

const aantalOptions = ["1-2", "3-5", "6-10", "10+"];

const initial = {
  naam: "",
  bedrijf: "",
  email: "",
  telefoon: "",
  dienst: "",
  locatie: "",
  startdatum: "",
  aantal: "",
  info: "",
};

const Offerte = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (key: keyof typeof form, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mqewlzyj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: "Nieuwe offerte-aanvraag DBS", ...form }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initial);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring";
  const labelCls = "block text-xs font-medium text-foreground mb-2 uppercase tracking-wider";

  return (
    <main className="pt-24">
      <section className="py-16 md:py-24 bg-gradient-dark border-b border-border/30">
        <div className="container px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Offerte</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-5">
              Vraag een vrijblijvende <span className="text-gradient-red">offerte</span> aan
            </h1>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Wij reageren binnen 24 uur met een passend voorstel op maat.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-3xl">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 bg-card/60 border border-border rounded-2xl p-6 md:p-10"
          >
            {status === "success" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/40 text-green-400 text-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Bedankt voor uw aanvraag! Wij nemen binnen 24 uur contact met u op.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/40 text-destructive text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons direct.</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="o-naam">Naam *</label>
                <input id="o-naam" required value={form.naam} onChange={(e) => update("naam", e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="o-bedrijf">Bedrijfsnaam *</label>
                <input id="o-bedrijf" required value={form.bedrijf} onChange={(e) => update("bedrijf", e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="o-email">E-mailadres *</label>
                <input id="o-email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="o-tel">Telefoonnummer *</label>
                <input id="o-tel" type="tel" required value={form.telefoon} onChange={(e) => update("telefoon", e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="o-dienst">Type dienst *</label>
                <select id="o-dienst" required value={form.dienst} onChange={(e) => update("dienst", e.target.value)} className={inputCls}>
                  <option value="">Selecteer een dienst</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="o-aantal">Geschat aantal beveiligers</label>
                <select id="o-aantal" value={form.aantal} onChange={(e) => update("aantal", e.target.value)} className={inputCls}>
                  <option value="">Selecteer aantal</option>
                  {aantalOptions.map((a) => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="o-locatie">Locatie / adres van beveiliging *</label>
                <input id="o-locatie" required value={form.locatie} onChange={(e) => update("locatie", e.target.value)} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="o-start">Gewenste startdatum</label>
                <input id="o-start" type="date" value={form.startdatum} onChange={(e) => update("startdatum", e.target.value)} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="o-info">Aanvullende informatie</label>
                <textarea id="o-info" rows={5} value={form.info} onChange={(e) => update("info", e.target.value)} className={`${inputCls} resize-none`} />
              </div>
            </div>

            <button type="submit" disabled={status === "loading"} className="w-full btn-gradient-red text-primary-foreground py-4 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60">
              {status === "loading" ? "Versturen..." : "Verstuur aanvraag"}
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Offerte;
