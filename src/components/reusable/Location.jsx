import React from "react";
import LocationItem from "@/components/ui/LocationItem";

const Location = ({ title, locations }) => {
  return (
    <section className="py-12 bg-white px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            name={location.name}
            address={location.address}
            images={location.images}
          />
        ))}
      </div>
    </section>
  );
};

export default Location;
