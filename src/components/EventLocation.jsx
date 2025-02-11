import React from "react";
import LocationItem from "./LocationItem";
import Aset1 from "../assets/Location1.jpg";
import Aset2 from "../assets/Location2.jpg";
import Aset3 from "../assets/Location3.jpg";
import Aset4 from "../assets/Location4.jpg";
const locations = [
  {
    name: "Mercure Surabaya Grand Mirama",
    address: "Jl. Raya Darmo No.68-78, Surabaya, Jawa Timur",
    images: [Aset1, Aset4, Aset2],
  },
  {
    name: "Platinum Hotel Tunjungan",
    address: "Jl. Tunjungan No.1, Surabaya, Jawa Timur",
    images: [Aset4, Aset3, Aset1],
  },
];

function EventLocation() {
  return (
    <section className="py-12 bg-white px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Pilihan Lokasi
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
}

export default EventLocation;
