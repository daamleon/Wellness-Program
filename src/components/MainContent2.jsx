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
    <section id="main-content" className="mx-4 md:mx-auto max-w-6xl my-2 mb-10">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Kenapa Harus Ikut Program Sleep Tourism & Wellness?
      </h3>

      <p className="text-gray-600 text-md md:text-xl text-justify md:text-center max-w-3xl mx-auto leading-relaxed mb-6 px-6">
        Di tengah gaya hidup modern yang penuh tekanan, kualitas tidur sering
        kali terabaikan. Lebih dari{" "}
        <strong className="text-gray-800">62% orang dewasa</strong> mengalami
        gangguan tidur. Sleep Tourism hadir sebagai solusi untuk membantu tubuh
        dan pikiran beristirahat lebih baik melalui kombinasi relaksasi,
        meditasi, dan gaya hidup sehat.
      </p>

      {/* Grid untuk MD ke atas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 shadow-lg p-6 md:p-12 rounded-xl">
        {/* Gambar */}
        <div className="w-full flex justify-center">
          <img
            src={img1}
            alt="Sleep Tourism Experience"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Poin Highlight */}
        <div className="space-y-6">
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
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={scrollToNextContent}
          className="bg-gradient-to-r from-red-400 to-red-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Explore Sleep Tourism
        </button>
      </div>
    </section>
  );
}

export default MainContent2;
