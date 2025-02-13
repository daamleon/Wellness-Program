import React from "react";
import sleepTourismImage from "../assets/relax.jpg";
import indonesiaLogo from "../assets/agendakota.png";
import dailyHotelsLogo from "../assets/dailyhotels.png";

function MainContent1() {
  return (
    <section className="bg-white shadow-lg rounded-xl mx-4 md:mx-auto max-w-6xl my-10 flex flex-col-reverse md:flex-row items-stretch">
      {/* Bagian Teks */}
      <div className="w-full p-6 flex flex-col justify-center">
        {/* <div className="flex items-center gap-4 mb-4">
          <img src={indonesiaLogo} alt="Wonderful Indonesia" className="h-8" />
          <img src={dailyHotelsLogo} alt="Daily Hotels" className="h-6" />
        </div> */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed md:text-center text-justify">
          Sebuah program 2 hari, 1 malam yang membantu kamu untuk{" "}
          <span className="text-pink-600">
            melepaskan stres berkepanjangan.
          </span>
        </h3>
        <p className="text-gray-700 text-md md:text-lg mt-4 leading-relaxed text-justify md:text-center">
          <strong>Wellness Tourism Program</strong> adalah kegiatan yang
          ditujukan bagi kamu yang ingin menghilangkan kepenatan sejenak.
          Difasilitasi oleh instruktur berpengalaman, program ini membantu kamu
          beristirahat sejenak dari rutinitas sehari-hari dan mengembalikan
          energi tubuh serta pikiran.
        </p>
      </div>

      {/* Bagian Gambar */}
      {/* <div className="md:w-2/5 h-56 md:h-auto flex items-center justify-center">
        <img
          src={sleepTourismImage}
          alt="Sleep Tourism Program"
          className="w-full h-full object-cover rounded-t-xl md:rounded-l-none md:rounded-r-xl"
        />
      </div> */}
    </section>
  );
}

export default MainContent1;
