import React from "react";
import { Link } from "react-router-dom";

function NavMobile({ isOpen, setIsOpen }) {
  const scrollToPromotion = () => {
    const mainContent = document.getElementById("promotion");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    const mainContent = document.getElementById("next-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const scrollToHome = () => {
  //   const mainContent = document.getElementById("home");
  //   if (mainContent) {
  //     mainContent.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 text-white flex flex-col items-center justify-center transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden z-50`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-black bg-orange-600 bg-opacity-0 text-4xl border-none"
      >
        &times;
      </button>
      {/* <a
        onClick={() => {
          scrollToHome();
          setIsOpen(false);
        }}
        
        className="p-4 text-lg w-full text-center text-red-500 transform hover:scale-105 transition-all duration-300 hover:text-red-500 hover:cursor-pointer"
      >
        Home
      </a> */}
      <Link
        to="/"
        className="hover:cursor-pointer p-2 text-red-500 rounded-lg transform hover:scale-105 transition-all duration-300 hover:text-red-500"
      >
        Home
      </Link>

      <a
        onClick={() => {
          scrollToServices();
          setIsOpen(false);
        }}
        className="hover:cursor-pointer p-4 text-lg w-full text-center text-red-500 pb-8 transform hover:scale-105 transition-all duration-300 hover:text-red-500"
      >
        Services
      </a>
      <button
        onClick={() => {
          scrollToPromotion();
          setIsOpen(false);
        }}
        className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full text-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Daftar Sekarang
      </button>
    </nav>
  );
}

export default NavMobile;
