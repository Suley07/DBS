import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-dbs.png";

const services = [
  { label: "Objectbeveiliging", path: "/diensten/objectbeveiliging" },
  { label: "Evenementenbeveiliging", path: "/diensten/evenementenbeveiliging" },
  { label: "Bouwbeveiliging", path: "/diensten/bouwbeveiliging" },
  { label: "Mobiele Surveillance", path: "/diensten/mobiele-surveillance" },
  { label: "Toegangsbeheer & Receptie", path: "/diensten/toegangsbeheer" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Diensten", path: "/diensten", dropdown: true },
  { label: "Over Ons", path: "/over-ons" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ContactPill = ({
  href, label, children, external = false,
}: { href: string; label: string; children: React.ReactNode; external?: boolean }) => (
  <a
    href={href}
    aria-label={label}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group relative w-9 h-9 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/30 flex items-center justify-center hover:from-primary hover:to-primary/70 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-24">
        {/* Logo + contact icons */}
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={logo}
                alt="DBS — Dienst Bewaking en Surveillance"
                className="relative w-16 h-16 md:w-[72px] md:h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(153,27,27,0.35)]"
              />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-foreground hidden sm:block leading-none">
              <span className="text-gradient-red">DBS</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2 ml-1 border-l border-border/60 pl-5">
            <ContactPill href="https://wa.me/31611746464" label="WhatsApp ons" external>
              <WhatsAppIcon className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
            </ContactPill>
            <ContactPill href="tel:0611746464" label="Bel ons">
              <Phone className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
            </ContactPill>
            <ContactPill href="mailto:info@dienstbewakingensurveillance.nl" label="Email ons">
              <Mail className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
            </ContactPill>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.path} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    location.pathname.startsWith("/diensten")
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
                    >
                      <Link
                        to="/diensten"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors border-b border-border"
                      >
                        Alle Diensten
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="btn-gradient-red text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Offerte Aanvragen
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                <ContactPill href="https://wa.me/31611746464" label="WhatsApp" external>
                  <WhatsAppIcon className="w-5 h-5 text-foreground" />
                </ContactPill>
                <ContactPill href="tel:0611746464" label="Bel">
                  <Phone className="w-5 h-5 text-foreground" />
                </ContactPill>
                <ContactPill href="mailto:info@dienstbewakingensurveillance.nl" label="Email">
                  <Mail className="w-5 h-5 text-foreground" />
                </ContactPill>
              </div>

              <Link to="/" onClick={() => setOpen(false)} className={`text-sm font-medium py-2 transition-colors ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"}`}>
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`text-sm font-medium py-2 transition-colors flex items-center gap-1 w-full ${location.pathname.startsWith("/diensten") ? "text-primary" : "text-muted-foreground"}`}
                >
                  Diensten
                  <svg className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-4">
                      <Link to="/diensten" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground py-2 hover:text-primary">Alle Diensten</Link>
                      {services.map((s) => (
                        <Link key={s.path} to={s.path} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground py-2 hover:text-primary">{s.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/over-ons" onClick={() => setOpen(false)} className={`text-sm font-medium py-2 transition-colors ${location.pathname === "/over-ons" ? "text-primary" : "text-muted-foreground"}`}>Over Ons</Link>
              <Link to="/faq" onClick={() => setOpen(false)} className={`text-sm font-medium py-2 transition-colors ${location.pathname === "/faq" ? "text-primary" : "text-muted-foreground"}`}>FAQ</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className={`text-sm font-medium py-2 transition-colors ${location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"}`}>Contact</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-gradient-red text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold text-center mt-2">Offerte Aanvragen</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
