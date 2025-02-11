import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-600 text-white p-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      {/* Bagian Kiri */}
      <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-[60%]">
        <div>
          <p className="text-white text-xl font-bold">
            Sleep Tourism & Wellness Program
          </p>
          <p className="text-sm">
            powered by{" "}
            <a
              href="https://agendakota.id"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-gray-300 transition"
            >
              agendakota.id
            </a>
          </p>
        </div>
        <p className="text-sm md:text-base">
          Sleep tourism atau pariwisata tidur adalah konsep perjalanan yang
          berfokus pada pengalaman relaksasi, perbaikan kualitas tidur, dan
          revitalisasi tubuh.
        </p>
      </div>

      {/* Bagian Kanan */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="flex space-x-4 md:pt-8">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition text-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition text-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div>
          <p className="text-sm mt-4 md:mt-0 text-center md:text-left">
            &copy; 2025 Sleep Tourism & Wellness Program by Agendakota.id. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
