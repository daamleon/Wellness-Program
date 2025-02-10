import React from "react";

function MainContent({ handleShowEmbed }) {
  return (
    <div
      id="main-content"
      className="w-full bg-gray-100 py-10 text-center px-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        Sleep & Wellness Tourism: Recharge Your Body, Revive Your Mind
      </h2>
      <p className="text-gray-700 mb-8">
        Temukan keseimbangan tubuh dan pikiran melalui pengalaman relaksasi
        terbaik. Nikmati aktivitas wellness, perbaiki kualitas tidur, dan
        rasakan energi baru dengan program <b>Sleep Tourism</b>.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">Aqua Yoga</h3>
          <p className="text-gray-600 mt-2">
            Sesi yoga di kolam renang dengan instruktur profesional untuk
            meningkatkan fleksibilitas dan relaksasi.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Wellness Retreat
          </h3>
          <p className="text-gray-600 mt-2">
            Bebaskan diri dari kepenatan dengan menikmati fasilitas spa, sauna,
            dan pijat relaksasi.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Medical Check-up
          </h3>
          <p className="text-gray-600 mt-2">
            Periksa kesehatanmu dengan paket check-up yang mencakup tes gula
            darah, kolesterol, dan konsultasi medis.
          </p>
        </div>
      </div>
      <button
        onClick={handleShowEmbed}
        className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition"
      >
        Daftar Sekarang
      </button>
    </div>
  );
}

export default MainContent;
