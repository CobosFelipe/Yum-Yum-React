import React, { useState } from "react";
import { Router, Link } from "react-router-dom";
import logo from "../assets/logo-yum-yum.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 bg-white shadow w-full absolute z-2">
        <div className="px-4 py-2 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link to="/">
                <div className="w-auto h-6 sm:h-7">
                  <img src={logo} alt="logo-yum-yum" className="h-6 cursor-pointer hover:drop-shadow-[0px_2px_theme(colors.rose.300)]" />
                </div>
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center min-w-md lg:min-w-2xs ${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-4">
                <Link to="/Productos">
                  <div className="px-1 py-0.5 mx-auto text-gray-500 font-normal transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-pink-400 cursor-pointer hover:shadow-lg">
                    Productos
                  </div>
                </Link>
                <button
                  className="px-1 py-0.5 mx-auto text-gray-500 font-normal transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-pink-400 cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    alert("Funciona");
                  }}
                >
                  Nosotros
                </button>
                <button
                  className="px-1 py-0.5 mx-auto text-gray-500 font-normal transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-pink-400 cursor-pointer hover:shadow-lg"
                  onClick={() => {
                    alert("Funciona");
                  }}
                >
                  Contacto
                </button>
              </div>

              <div className="flex flex-col items-center mt-2 lg:mt-0 justify-center gap-1 lg:flex-row">
                {/* User button */}
                <button
                  className="mx-1 text-gray-600 transition-colors duration-300 transform lg:block hover:text-pink-300 focus:text-pink-400 focus:outline-none hover:shadow-lg"
                  aria-label="show user"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </button>
                {/* Shopping bag button */}
                <button
                  className="mx-1 text-gray-600 transition-colors duration-300 transform lg:block hover:text-pink-300 focus:text-pink-400 focus:outline-none hover:shadow-lg"
                  aria-label="show shopping bag"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mb-10 h-11 w-full"></div>
    </>
  );
};

export default Navbar;
