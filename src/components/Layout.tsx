import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
