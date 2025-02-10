import bannerImg from "../assets/banner.jpeg";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToMainContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full h-auto md:h-[650px] bg-cover bg-center relative z-10 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Text and Buttons */}
      <div className="w-full md:w-1/2 text-left flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-white">
          SLEEP TOURISM
        </h1>
        <h2 className="text-xl md:text-3xl mt-2 font-light drop-shadow-lg text-white">
          Recharge Your Body, Revive Your Mind
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
            Daftar Sekarang
          </button>
          <a
            href="https://wa.me/youradminnumber"
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Chat Admin
          </a>
        </div>
      </div>

      {/* Scroll Button */}
      <div
        onClick={scrollToMainContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-white text-3xl md:text-4xl" />
      </div>
    </section>
  );
}

export default Hero;
