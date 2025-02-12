import bannerImg from "../assets/banner.jpeg";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToMainContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPromotion = () => {
    const mainContent = document.getElementById("promotion");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-full md:h-[650px] bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 py-10"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay untuk meningkatkan keterbacaan teks */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Konten utama */}
      <div className="relative z-10 w-full md:w-1/2 text-left flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg text-white text-center">
          SLEEP TOURISM & WELLNESS
        </h1>
        <h2 className="text-xl md:text-3xl mt-2 font-light drop-shadow-lg text-white text-center">
          Recharge Your Body, Revive Your Mind
        </h2>
        <p className="text-center text-white drop-shadow-lg mt-4">
          Temukan keseimbangan tubuh dan pikiran melalui pengalaman relaksasi
          terbaik. Nikmati aktivitas wellness, perbaiki kualitas tidur, dan
          rasakan energi baru dengan program Sleep Tourism.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <button
            onClick={scrollToPromotion}
            className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Daftar Sekarang
          </button>
          <a
            href="https://wa.me/081235189247"
            className="border md:border-2 border-gradient-to-r border-red-500 text-red-500 hover:text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Hubungi Admin
          </a>
        </div>
      </div>

      {/* Scroll Button */}
      <div
        onClick={scrollToMainContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <FaArrowDown className="text-white text-center text-3xl md:text-4xl" />
      </div>
    </section>
  );
}

export default Hero;
