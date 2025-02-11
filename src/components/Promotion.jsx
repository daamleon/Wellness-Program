import React from "react";
import bgImage from "../assets/Location1.jpg";

function PackageSection() {
  return (
    <section
      className="relative bg-cover bg-center py-12 px-6 md:px-12 text-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Sleep & Wellness Tourism
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Medical Journey & Wellness Package
        </p>
        <p className="text-3xl font-extrabold text-yellow-400">
          IDR. 2.499.000{" "}
          <span className="text-lg font-normal">net per-pax</span>
        </p>

        {/* Paket List */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
