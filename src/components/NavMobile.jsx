import React from "react";

function NavMobile({ isOpen, setIsOpen }) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full bg-purple-800 bg-opacity-90 text-white flex flex-col items-center justify-center transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden z-50`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white bg-orange-600 bg-opacity-0 text-4xl"
      >
        &times;
      </button>
      <a
        href="#"
        className="p-4 text-lg hover:bg-white w-full text-center text-white"
      >
        Home
      </a>
      <a
        href="#"
        className="p-4 text-lg hover:bg-white w-full text-center text-white"
      >
        About
      </a>
      <a
        href="#"
        className="p-4 text-lg hover:bg-white w-full text-center text-white"
      >
        Services
      </a>
      <a
        href="#"
        className="p-4 text-lg hover:bg-white w-full text-center text-white"
      >
        Contact
      </a>
    </nav>
  );
}

export default NavMobile;
