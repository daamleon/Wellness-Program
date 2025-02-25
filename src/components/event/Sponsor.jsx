import React from "react";
import sponsorLogo from "@/assets/Logo.png";

function Sponsor() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[sponsorLogo, sponsorLogo, sponsorLogo].map((logo, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center rounded-lg"
            >
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
