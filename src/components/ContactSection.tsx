import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-heading text-sm tracking-[0.3em] text-primary uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
            Neem Contact Op
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Heeft u een beveiligingsvraag of wilt u een vrijblijvende offerte ontvangen?
            Neem gerust contact met ons op.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Telefoon</div>
                <div className="text-foreground font-medium">+31 (0)20 123 4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">E-mail</div>
                <div className="text-foreground font-medium">info@guardforce.nl</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Adres</div>
                <div className="text-foreground font-medium">Veiligheidsweg 42, Amsterdam</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card border border-border rounded-lg p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-heading tracking-wider uppercase">Naam</label>
              <input
                type="text"
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Uw naam"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-heading tracking-wider uppercase">Telefoon</label>
              <input
                type="tel"
                className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Uw telefoonnummer"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block font-heading tracking-wider uppercase">E-mail</label>
            <input
              type="email"
              className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Uw e-mailadres"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block font-heading tracking-wider uppercase">Bericht</label>
            <textarea
              rows={5}
              className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Beschrijf uw beveiligingsvraag..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity glow-red"
          >
            Verstuur Bericht
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
