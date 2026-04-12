import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            <span className="text-primary">DBS</span> Security
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Dienst Bewaking en Surveillance B.V.
            <br />
            Professionele beveiligingsdiensten door heel Nederland.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Snelle Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Diensten", path: "/diensten" },
              { label: "Over Ons", path: "/over-ons" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Bedrijfsgegevens</h4>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Dienst Bewaking en Surveillance B.V.</p>
            <p>KVK: 93896034</p>
            <p>Einsteinlaan 28, 2289CC Rijswijk</p>
            <p>info@dienstbewakingensurveillance.nl</p>
            <p>06 11 74 64 64</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dienst Bewaking en Surveillance B.V. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
