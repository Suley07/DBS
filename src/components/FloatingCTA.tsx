import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

const FloatingCTA = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/contact"
            className="btn-gradient-red text-primary-foreground rounded-full pl-5 pr-6 py-3.5 shadow-2xl shadow-primary/30 flex items-center gap-2.5 text-sm font-semibold tracking-wide animate-pulse-soft hover:scale-[1.03] transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            Neem contact op
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
