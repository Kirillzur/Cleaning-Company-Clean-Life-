import { useState } from "react";
import NavButton from "../UI/NavButton";
import geminiLogo from "../../Media/Icons/Gemini_CompanyLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const openSidebar = () => {
    setSideMenu(true);
  };

  const closeSidebar = () => {
    setSideMenu(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className=" md:border-secondary max-w-[1440px] mx-auto">
        <div className="flex justify-between py-3 px-1.5">
          <div className="flex gap-2  items-center">
            <Link className="" to="/">
              <img src={geminiLogo} alt="Gemini logo" width={38} height={38} />
            </Link>
            <p className="font-bold text-primary text-xl font-secondary">
              CleanLife
            </p>
          </div>

          <div className="gap-8 items-center md:flex hidden">
            <div className="items-center font-semibold text-primary    hover:text-[#015a50] transition-colors">
              <Link to="/#services">Palvelumme</Link>
            </div>
            <div className="items-center font-semibold text-primary   hover:text-[#015a50] transition-colors">
              <Link to="/#price-calculator">Hinnasto</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NavButton label="Ota Yhteyttä" />
            <button
              type="button"
              aria-label="Open sidebar menu"
              onClick={openSidebar}
              className=" md:hidden "
            >
              <svg
                width="34"
                height="24"
                viewBox="0 0 35 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.25H33.25M1.25 11.75H33.25M1.25 22.25H33.25"
                  stroke="#0E101A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {sideMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!sideMenu}
      >
        <div className="flex items-center justify-between px-2.5 py-4 border-b border-secondary">
          <p className="font-semibold text-lg text-text">Valikko</p>
          <button
            type="button"
            aria-label="Close sidebar menu"
            onClick={closeSidebar}
            className="p-2"
          >
            <svg
              width="34"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#0E101A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 py-5 px-2.5">
          <Link
            to="/#services"
            className="text-lg font-semibold text-text hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Palvelumme
          </Link>
          <Link
            to="/#price-calculator"
            className="text-lg font-semibold text-text hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Hinnasto
          </Link>
          <Link
            to="/#contacts"
            className="text-lg font-semibold text-primary hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Ota Yhteyttä
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
