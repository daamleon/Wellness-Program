import React from "react";
import { Menu } from "lucide-react";
import logo from "../assets/agendakota.png"; // Import logo

function Header({ isOpen, setIsOpen }) {
  return (
    <header className="h-[65px] bg-white p-4 flex items-center justify-between fixed top-0 w-full z-50 rounded-b-xl shadow-md">
      {/* Logo Kiri */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Agenda Kota Logo"
          className="h-10 md:h-12 object-contain"
        />
      </div>

      {/* Menu Hamburger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white text-gray-800 pr-2"
      >
        <Menu size={24} />
      </button>

      {/* Navigasi Menu (Desktop) */}
      <nav className="hidden md:flex md:space-x-4">
        <a
          href="#"
          className="p-2 hover:bg-red-500 text-red-700 hover:text-white rounded-lg transition-all duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="p-2 hover:bg-red-500 text-red-700 hover:text-white rounded-lg transition-all duration-300"
        >
          Services
        </a>
        <a
          href="#"
          className="p-2 hover:bg-red-500 text-red-700 hover:text-white rounded-lg transition-all duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
