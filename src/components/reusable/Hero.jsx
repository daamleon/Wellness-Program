import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

function Hero({
  title,
  subtitle,
  backgroundImage,
  showButton = true,
  buttonText,
  buttonLink,
}) {
  const scrollToMainContent = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-6 md:px-12 py-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl mt-2 font-light drop-shadow-lg">
          {subtitle}
        </h2>

        {showButton && (
          <div className="flex justify-center mt-8">
            <Link
              to={buttonLink}
              className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-red-600 transition"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>

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
