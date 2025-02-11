import React from "react";
import { FaBed, FaHeartbeat, FaSpa, FaUsers } from "react-icons/fa";
import img1 from "../assets/img2.jpeg"; // Gambar utama

function MainContent2() {
  const scrollToNextContent = () => {
    const mainContent = document.getElementById("next-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="main-content"
      className="bg-gray-100 shadow-lg p-6 md:p-12 rounded-xl mx-4 md:mx-auto max-w-6xl my-10"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Kenapa Harus Ikut Program Sleep Tourism & Wellness?
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Gambar di Sisi Kiri */}
        <div className="w-full flex justify-center">
          <img
            src={img1}
            alt="Sleep Tourism Experience"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Konten di Sisi Kanan */}
        <div className="space-y-6">
          {/* <div className="p-4">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center">
              Sleep tourism adalah konsep perjalanan yang berfokus pada
              relaksasi, peningkatan kualitas tidur, dan revitalisasi tubuh.
            </p>
          </div> */}

          {/* Highlight Data */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaBed className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-base md:text-lg">
                62% orang dewasa mengalami gangguan tidur (World Sleep Society,
                2022)
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHeartbeat className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-base md:text-lg">
                Tidur berkualitas meningkatkan sistem imun & mengurangi risiko
                penyakit kardiovaskular
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaSpa className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-base md:text-lg">
                Program termasuk yoga, sound healing, dan pola makan sehat
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-base md:text-lg">
                Cocok untuk profesional, orang tua, dan pecinta wellness
              </p>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="text-center md:text-left mt-6">
            <button
              onClick={scrollToNextContent}
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Explore Sleep Tourism
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent2;
