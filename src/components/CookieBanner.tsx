import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("dbs-cookie-accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("dbs-cookie-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border"
        >
          <div className="container px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/80 text-center sm:text-left">
              Wij gebruiken cookies om uw ervaring te verbeteren.{" "}
              <Link to="/privacy" className="text-primary hover:underline">Meer info</Link>
            </p>
            <button
              onClick={accept}
              className="btn-gradient-red text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide whitespace-nowrap"
            >
              Accepteren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
