import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/agendakota.png";

function Header({ isOpen, setIsOpen }) {
  const scrollToHome = () => {
    const mainContent = document.getElementById("home");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };
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

  return (
    <header className="h-[65px] bg-white p-4 flex items-center justify-between fixed top-0 w-full z-50 rounded-b-xl shadow-md">
      <div className="flex items-center">
        <a href="home">
          <img
            src={logo}
            alt="Agenda Kota Logo"
            className="h-8 md:h-12 object-contain cursor-pointer"
          />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white text-gray-800 pr-2"
      >
        <Menu size={24} />
      </button>

      <nav className="hidden md:flex items-center space-x-6">
        <a
          onClick={scrollToHome}
          className="hover:cursor-pointer p-2 text-red-500 rounded-lg transform hover:scale-105 transition-all duration-300 hover:text-red-500"
        >
          Home
        </a>
        <a
          onClick={scrollToServices}
          className="hover:cursor-pointer np-2 text-red-500 transform hover:scale-105 transition-all duration-300 hover:text-red-500"
        >
          Services
        </a>
        <button
          onClick={scrollToPromotion}
          className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full text-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Daftar Sekarang
        </button>
      </nav>
    </header>
  );
}

export default Header;
