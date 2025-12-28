import { useState } from "react";
import NavButton from "../UI/NavButton";

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
            <a className="" href="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="#027E6F"
                />
                <path
                  d="M18.5537 17.2627L21.0762 18.0625C20.6895 19.4688 20.0449 20.5146 19.1426 21.2002C18.2461 21.8799 17.1064 22.2197 15.7236 22.2197C14.0127 22.2197 12.6064 21.6367 11.5049 20.4707C10.4033 19.2988 9.85254 17.6992 9.85254 15.6719C9.85254 13.5273 10.4062 11.8633 11.5137 10.6797C12.6211 9.49023 14.0771 8.89551 15.8818 8.89551C17.458 8.89551 18.7383 9.36133 19.7227 10.293C20.3086 10.8438 20.748 11.6348 21.041 12.666L18.4658 13.2812C18.3135 12.6133 17.9941 12.0859 17.5078 11.6992C17.0273 11.3125 16.4414 11.1191 15.75 11.1191C14.7949 11.1191 14.0186 11.4619 13.4209 12.1475C12.8291 12.833 12.5332 13.9434 12.5332 15.4785C12.5332 17.1074 12.8262 18.2676 13.4121 18.959C13.998 19.6504 14.7598 19.9961 15.6973 19.9961C16.3887 19.9961 16.9834 19.7764 17.4814 19.3369C17.9795 18.8975 18.3369 18.2061 18.5537 17.2627Z"
                  fill="white"
                />
              </svg>
            </a>
            <p className="font-bold text-primary text-xl font-secondary">
              CleanLife
            </p>
          </div>

          <div className="gap-8 items-center md:flex hidden">
            <div className="items-center font-semibold text-primary    hover:text-[#015a50] transition-colors">
              <a href="#">Palvelumme</a>
            </div>
            <div className="items-center font-semibold text-primary   hover:text-[#015a50] transition-colors">
              <a href="#">Hinnasto</a>
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
          <a
            href="#palvelumme"
            className="text-lg font-semibold text-text hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Palvelumme
          </a>
          <a
            href="#hinnasto"
            className="text-lg font-semibold text-text hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Hinnasto
          </a>
          <a
            href="#hinnasto"
            className="text-lg font-semibold text-primary hover:text-light_gray transition-colors"
            onClick={closeSidebar}
          >
            Ota Yhteyttä
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
