import React, { useState, useRef, useEffect } from "react";
import EmbedEvent from "@/components/event/EmbedEvent";

const Promotion = ({
  title,
  subtitle,
  originalPrice,
  discountedPrice,
  benefits,
  backgroundImage,
}) => {
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

  useEffect(() => {
    const handleResize = () => setShowAll(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed min-h-[700px] md:py-20 lg:py-24 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="z-10 w-full max-w-5xl text-center text-white py-16 p-6 lg:p-20 md:rounded-2xl shadow-2xl backdrop-blur-md bg-black bg-opacity-30">
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="text-md text-gray-300 mt-2 font-light">{subtitle}</p>

        <div className="mt-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-400">
            <span className="line-through text-red-500">{originalPrice}</span>
          </p>
          <p className="text-2xl md:text-4xl font-black text-yellow-400">
            {discountedPrice}{" "}
            <span className="text-lg font-medium text-yellow-300">
              net per-pax
            </span>
          </p>
        </div>

        <p className="mt-4 text-red-500 px-6 py-2 rounded-full text-md font-bold inline-block animate-pulse">
          🚀 Kuota Terbatas, hanya untuk 10 pendaftar pertama!
        </p>

        <div className="mt-8">
          <button
            onClick={handleShowEmbed}
            className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Daftar Sekarang
          </button>
        </div>

        {showEmbed && (
          <div ref={embedRef} className="w-full max-w-4xl mx-auto mt-4">
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold mt-8 text-white">
          Apa yang akan Anda dapatkan?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
          {(showAll ? benefits : benefits.slice(0, 6)).map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-2 rounded-lg shadow-md text-gray-900 font-medium border border-gray-300 text-center text-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 py-1 bg-transparent text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300 text-sm"
          >
            {showAll ? "Tampilkan Sedikit" : "Tampilkan Semua"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
