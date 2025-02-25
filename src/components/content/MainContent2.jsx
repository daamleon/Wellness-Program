import React from "react";
import { FaBed, FaHeartbeat, FaSpa, FaUsers } from "react-icons/fa";
import img1 from "@/assets/img2.jpeg";

function MainContent2() {
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

      <div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden">
        <div className="md:w-2/5 h-56 md:h-auto">
          <img
            src={img1}
            alt="Sleep Tourism Experience"
            className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          />
        </div>

        <div className="md:w-3/5 p-6 md:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaBed className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-sm md:text-lg">
                62% orang dewasa mengalami gangguan tidur (World Sleep Society,
                2022)
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHeartbeat className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-sm md:text-lg">
                Tidur berkualitas meningkatkan sistem imun & mengurangi risiko
                penyakit kardiovaskular
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaSpa className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-sm md:text-lg">
                Program termasuk yoga, sound healing, dan pola makan sehat
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaUsers className="text-red-500 text-3xl" />
              <p className="text-gray-800 font-semibold text-sm md:text-lg">
                Cocok untuk profesional, orang tua, dan pecinta wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent2;
