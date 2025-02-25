import React from "react";
import ImageSlider from "./ImageSlider";

function LocationItem({ name, address, images }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{address}</p>
      <ImageSlider images={images} />
    </div>
  );
}

export default LocationItem;
