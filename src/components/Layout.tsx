import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
