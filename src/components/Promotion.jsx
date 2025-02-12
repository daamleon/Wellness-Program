import React, { useState, useRef } from "react";
import bgImage from "../assets/Location1.jpg";
import EmbedEvent from "../components/EmbedEvent";

function PackageSection() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef(null);

  const handleShowEmbed = () => {
    setShowEmbed(true);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  return (
    <section
      className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed min-h-[600px] md:py-16 lg:py-20 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="z-10 w-full md:max-w-4xl lg:max-w-5xl text-center text-white bg-black bg-opacity-20 p-4 py-12 md:p-12 lg:p-16 rounded-xl shadow-xl">
        <h2 id="promotion" className="text-3xl md:text-4xl font-bold">
          Sleep & Wellness Tourism
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Medical Journey & Wellness Package
        </p>

        <p className="text-xl md:text-3xl font-semibold text-gray-300">
          <span className="line-through text-red-500">IDR 3.200.000</span>
        </p>
        <p className="text-3xl md:text-5xl font-black text-yellow-500">
          IDR 2.499.000 <span className="text-lg font-normal">net per-pax</span>
        </p>

        <p className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block animate-pulse">
          ✨ Kuota Terbatas, hanya untuk 10 Pendaftar pertama! ✨
        </p>
        <div className="mt-6">
          <button
            onClick={handleShowEmbed}
            className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Daftar Sekarang
          </button>
        </div>

        {showEmbed && (
          <div ref={embedRef} className="w-full max-w-4xl mx-auto">
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            "Healthy Dinner",
            "Medical Check-up",
            "Aqua Yoga",
            "Wellness Workshop",
            "Sound Healing & Relaxation",
            "Mental Health Consultation",
            "Morning Yoga & Stretching",
            "Mindfulness Walk",
            "Accomodation 2D1N",
            "Healthy Breakfast",
            "Mindfulness Eating",
            "Aromatherapy Gift",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-900 font-medium border border-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
