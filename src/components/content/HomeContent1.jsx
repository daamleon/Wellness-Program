import React from "react";
import { Link } from "react-router-dom";
import { FaSpa, FaBed, FaHeartbeat } from "react-icons/fa";

const HomeContent = () => {
  return (
    <div className="relative z-10 w-full md:w-3/5 text-center flex flex-col justify-center items-center text-white">
      {/* Pilihan Program */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Link
          to="/program/sleep-tourism"
          className="bg-white bg-opacity-90 text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-lg font-semibold hover:bg-opacity-100 transition"
        >
          <FaBed className="text-red-500" />
          Sleep Tourism
        </Link>
        <Link
          to="/program/wellness-retreat"
          className="bg-white bg-opacity-90 text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-lg font-semibold hover:bg-opacity-100 transition"
        >
          <FaSpa className="text-red-500" />
          Wellness Retreat
        </Link>
        <Link
          to="/program/mindfulness"
          className="bg-white bg-opacity-90 text-black px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-lg font-semibold hover:bg-opacity-100 transition"
        >
          <FaHeartbeat className="text-red-500" />
          Mindfulness Program
        </Link>
      </div>

      
    </div>
  );
};

export default HomeContent;
