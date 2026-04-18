import { Link } from "react-router-dom";
import logo from "@/assets/logo-dbs.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="DBS logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-extrabold tracking-tight"><span className="text-gradient-red">DBS</span></span>
          </div>
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
              { label: "FAQ", path: "/faq" },
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
            <p><a href="mailto:info@dienstbewakingensurveillance.nl" className="hover:text-primary transition-colors">info@dienstbewakingensurveillance.nl</a></p>
            <p><a href="tel:0611746464" className="hover:text-primary transition-colors">06 11 74 64 64</a></p>
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
