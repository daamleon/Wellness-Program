import React from "react";
import sleepTourismImage from "@/assets/relax.jpg";
import indonesiaLogo from "@/assets/agendakota.png";
import dailyHotelsLogo from "@/assets/dailyhotels.png";

function MainContent1() {
  return (
    <section
      id="main"
      className="mx-4 md:mx-auto max-w-4xl my-10 flex flex-col-reverse md:flex-row items-stretch"
    >
      <div className="w-full p-6 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-center">
          Sebuah program 2 hari, 1 malam yang membantu kamu untuk{" "}
          <span className="text-pink-600 text-3xl">
            melepaskan stres berkepanjangan.
          </span>
        </h3>
        <p className="text-gray-700 text-md md:text-lg mt-4 leading-relaxed text-center">
          <strong>Wellness Tourism Program</strong> adalah kegiatan yang
          ditujukan bagi kamu yang ingin menghilangkan kepenatan sejenak.
          Difasilitasi oleh instruktur berpengalaman, program ini membantu kamu
          beristirahat sejenak dari rutinitas sehari-hari dan mengembalikan
          energi tubuh serta pikiran.
        </p>
      </div>
    </section>
  );
}

export default MainContent1;
