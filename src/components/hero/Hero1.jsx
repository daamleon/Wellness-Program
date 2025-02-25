import React from "react";
import bannerImg from "@/assets/banner.jpeg";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToMainContent = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPromotion = () => {
    document
      .getElementById("promotion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-full md:h-[650px] bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 w-full md:w-1/2 text-left flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black text-white text-center">
          SLEEP TOURISM & WELLNESS
        </h1>
        <h2 className="text-xl md:text-3xl mt-2 font-light text-white text-center">
          Recharge Your Body, Revive Your Mind
        </h2>
        <p className="text-center text-white mt-4">
          Nikmati pengalaman relaksasi terbaik...
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <button
            onClick={scrollToPromotion}
            className="bg-red-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-red-600 transition"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
      <div
        onClick={scrollToMainContent}
        className="absolute bottom-10 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-white text-3xl md:text-4xl" />
      </div>
    </section>
  );
}

export default Hero;
