import React, { useState, useRef } from "react";
import bgImage from "../assets/Location1.jpg";
import EmbedEvent from "../components/EmbedEvent";

function PackageSection() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const handleShowEmbed = () => {
    setShowEmbed(true);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  const items = [
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
  ];

  return (
    <section
      className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed min-h-[700px] md:py-20 lg:py-24 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="z-10 w-full max-w-5xl text-center text-white bg-black bg-opacity-30 p-6 py-14 md:p-14 lg:p-20 rounded-2xl shadow-2xl backdrop-blur-md">
        <h2
          id="promotion"
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Sleep & Wellness Tourism
        </h2>
        <p className="text-lg text-gray-300 mt-2 font-light">
          Medical Journey & Wellness Package
        </p>

        {/* Harga */}
        <div className="mt-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-400">
            <span className="line-through text-red-500">IDR 3.200.000</span>
          </p>
          <p className="text-4xl md:text-6xl font-black text-yellow-400">
            IDR 2.499.000{" "}
            <span className="text-lg font-medium text-gray-300">
              net per-pax
            </span>
          </p>
        </div>

        <p className="mt-4 border-lg text-white px-6 py-2 rounded-full text-lg font-bold inline-block animate-pulse">
          🚀 Kuota Terbatas, hanya untuk 10 pendaftar pertama!
        </p>

        {/* Tombol CTA */}
        <div className="mt-8">
          <button
            onClick={handleShowEmbed}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Daftar Sekarang
          </button>
        </div>

        {/* Formulir Embed */}
        {showEmbed && (
          <div ref={embedRef} className="w-full max-w-4xl mx-auto mt-8">
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )}

        {/* Fasilitas */}
        <h3 className="text-3xl font-bold mt-12 text-yellow-400">
          ✨ Apa yang akan Anda dapatkan?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {(showAll || window.innerWidth >= 768
            ? items
            : items.slice(0, 6)
          ).map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-900 font-medium border border-gray-300 text-center"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Tombol Tampilkan Semua (Hanya Mobile) */}
        <div className="mt-6 md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
          >
            {showAll ? "Tampilkan Sedikit" : "Tampilkan Semua"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
