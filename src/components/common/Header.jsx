import React from "react";
import { Menu } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "@/assets/agendakota.png";

function Header({ isOpen, setIsOpen }) {
  return (
    <header className="h-[65px] bg-white p-4 flex items-center justify-between fixed top-0 w-full z-50 rounded-b-xl shadow-md">
      <div className="flex items-center">
        <Link to="/wellness-program">
          <img
            src={logo}
            alt="Agenda Kota Logo"
            className="h-8 md:h-12 object-contain cursor-pointer"
          />
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white text-gray-800 pr-2"
      >
        <Menu size={24} />
      </button>

      <nav className="hidden md:flex items-center space-x-6">
        <Link
          to="/wellness-program"
          className="hover:cursor-pointer p-2 text-red-500 rounded-lg transform hover:scale-105 transition-all duration-300 hover:text-red-500"
        >
          Home
        </Link>
        <Link
          to="/programs"
          className="hover:cursor-pointer np-2 text-red-500 transform hover:scale-105 transition-all duration-300 hover:text-red-500"
        >
          Programs
        </Link>
        <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full text-md font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
          Daftar Sekarang
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;
