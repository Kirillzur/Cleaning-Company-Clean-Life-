import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ScrollToHash from "./ScrollToHash";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <ScrollToHash />
      <div className="md:px-3.5 md:border-b md:border-secondary ">
        <Navbar />
      </div>
      <main className="p-1.5 md:p-5 max-w-[1480px] mx-auto sm:mt-13 md:mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
