import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import campus1 from "../assets/Logo.png";
import campus2 from "../assets/Logo.png";

const campusLogos = [campus1, campus2];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

function CampusPartners() {
  return (
    <div className="w-full bg-gray-100 py-10 text-center">
      <h2 className="text-2xl text-gray-800 font-bold mb-4">Our Partners</h2>
      <Slider {...sliderSettings} className="max-w-5xl mx-auto">
        {campusLogos.map((logo, index) => (
          <div key={index} className="flex place-items-center">
            <img src={logo} alt={`Campus ${index + 1}`} className="h-24" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CampusPartners;
