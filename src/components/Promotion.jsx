import React from "react";
import bgImage from "../assets/Location1.jpg";

function PackageSection() {
  return (
    <section
      className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed min-h-[600px] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 container mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl text-center text-white bg-black bg-opacity-20 p-8 md:p-12 lg:p-16 rounded-xl shadow-xl">
        {/* Header */}
        <h2 id="promotion" className="text-3xl md:text-4xl font-bold">
          Sleep & Wellness Tourism
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Medical Journey & Wellness Package
        </p>

        <p className="text-xl md:text-3xl font-semibold text-gray-300">
          <span className="line-through text-red-500">IDR 3.200.000</span>
        </p>
        <p className="text-4xl md:text-5xl font-black text-yellow-500">
          IDR 2.499.000{" "}
          <span className="text-lg  font-normal">net per-pax</span>
        </p>

        <p className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block animate-pulse">
          ✨ Penawaran Terbatas! ✨
        </p>

        {/* Paket Benefit */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 mt-6">
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
