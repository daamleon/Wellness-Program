import React from "react";
import { FaBriefcase, FaHome, FaSpa, FaPlane } from "react-icons/fa";

const audienceData = [
  {
    title: "Profesional dengan Rutinitas Tinggi",
    description: "Pekerja kantoran yang sering stres.",
    icon: <FaBriefcase className="text-red-500 text-4xl" />,
  },
  {
    title: "Ibu Rumah Tangga",
    description: "Orang tua yang sibuk mengurus keluarga.",
    icon: <FaHome className="text-red-500 text-4xl" />,
  },
  {
    title: "Pecinta Wellness",
    description: "Orang yang tertarik dengan gaya hidup sehat.",
    icon: <FaSpa className="text-red-500 text-4xl" />,
  },
  {
    title: "Wisatawan Domestik",
    description: "Pelancong yang ingin menikmati staycation.",
    icon: <FaPlane className="text-red-500 text-4xl" />,
  },
];

function MainContent4() {
  return (
    <section className="py-2 px-4 md:px-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Cocok untuk siapa?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {audienceData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainContent4;
