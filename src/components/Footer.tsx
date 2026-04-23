import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo-dbs.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container px-4 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="DBS logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-extrabold tracking-tight"><span className="text-gradient-red">DBS</span></span>
          </div>
          <p className="text-sm text-foreground/75 leading-relaxed mb-5">
            Dienst Bewaking en Surveillance B.V.
            <br />
            Professionele beveiligingsdiensten door heel Nederland.
          </p>
          <a
            href="https://www.instagram.com/dbsbeveiliging"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DBS op Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Snelle Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Diensten", path: "/diensten" },
              { label: "Over Ons", path: "/over-ons" },
              { label: "FAQ", path: "/faq" },
              { label: "Offerte", path: "/offerte" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-foreground/75 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Bedrijfsgegevens</h4>
          <div className="text-sm text-foreground/75 space-y-2">
            <p>Dienst Bewaking en Surveillance B.V.</p>
            <p>KVK: 93896034</p>
            <p>ND-nummer: ND9198</p>
            <p>BTW-nummer: NL866564767B01</p>
            <p>Einsteinlaan 28, 2289CC Rijswijk</p>
            <p><a href="mailto:info@dienstbewakingensurveillance.nl" className="hover:text-primary transition-colors">info@dienstbewakingensurveillance.nl</a></p>
            <p><a href="tel:0611746464" className="hover:text-primary transition-colors">06 11 74 64 64</a></p>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center space-y-2">
        <p className="text-xs text-foreground/75">
          © {new Date().getFullYear()} Dienst Bewaking en Surveillance B.V. Alle rechten voorbehouden.
        </p>
        <p className="text-xs text-foreground/60">
          Vergund beveiligingsbedrijf | KVK: 93896034 |{" "}
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacybeleid</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
