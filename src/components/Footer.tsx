import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-gradient-navy">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-primary" />
        <span className="font-heading text-lg tracking-wider text-foreground">
          GUARD<span className="text-primary">FORCE</span>
        </span>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} GuardForce Security. Alle rechten voorbehouden.
      </p>
    </div>
  </footer>
);

export default Footer;
