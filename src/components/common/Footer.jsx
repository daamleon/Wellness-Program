import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-red-400 to-red-500 text-white py-6 md:py-8 px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
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
        <p className="text-sm md:text-base leading-relaxed">
          Sleep tourism atau pariwisata tidur adalah konsep perjalanan yang
          berfokus pada pengalaman relaksasi, perbaikan kualitas tidur, dan
          revitalisasi tubuh.
        </p>
      </div>

      {/* Bagian Kanan */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-4 md:pt-6">
          {[
            { icon: FaFacebookF, label: "Facebook" },
            { icon: FaTwitter, label: "Twitter" },
            { icon: FaInstagram, label: "Instagram" },
            { icon: FaLinkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, label }, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-gray-200 transition text-lg"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
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
