import React from "react";
import sleep1 from "../assets/sleep1.jpg";
import sleep2 from "../assets/sleep2.jpg";

function MainContent1() {
  return (
    <section className="bg-gray-100 shadow-lg p-6 md:p-12 rounded-xl mx-4 md:mx-auto max-w-6xl my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={sleep1}
              alt="Sleep Issue"
              className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg"
            />
            <img
              src={sleep2}
              alt="Stress"
              className="absolute top-10 left-10 w-36 h-36 md:w-44 md:h-44 rounded-lg shadow-lg z-10"
            />
            <img
              src={sleep2}
              alt="Overworked"
              className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Kenapa Kualitas Tidur Penting?
          </h3>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Di tengah gaya hidup modern yang penuh tekanan, kualitas tidur
            sering kali terabaikan. Lebih dari{" "}
            <strong className="text-gray-800">62% orang dewasa</strong>{" "}
            mengalami gangguan tidur. Sleep Tourism hadir sebagai solusi untuk
            membantu tubuh dan pikiran beristirahat lebih baik melalui kombinasi
            relaksasi, meditasi, dan gaya hidup sehat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainContent1;
