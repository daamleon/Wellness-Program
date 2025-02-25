import React from "react";
import CardProgram from "@/components/ui/CardProgram";
import { FaSpa, FaBed, FaHeartbeat } from "react-icons/fa";

// Import gambar dengan new URL
const programs = [
  {
    title: "Sleep Tourism",
    icon: <FaBed className="text-red-500 text-3xl" />,
    link: "/program/sleep-tourism",
    image: new URL("@/assets/img4.jpeg", import.meta.url).href,
  },
  {
    title: "Wellness Retreat",
    icon: <FaSpa className="text-red-500 text-3xl" />,
    link: "/program/coming-soon",
    image: new URL("@/assets/relax.jpg", import.meta.url).href,
  },
  {
    title: "Mindfulness Program",
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    link: "/program/coming-soon",
    image: new URL("@/assets/stretching.jpg", import.meta.url).href,
  },
  {
    title: "Wellness Retreat",
    icon: <FaSpa className="text-red-500 text-3xl" />,
    link: "/program/coming-soon",
    image: new URL("@/assets/relax.jpg", import.meta.url).href,
  },
];

const HomeContent = () => {
  return (
    <div
      id="main"
      className="relative z-10 w-full mx-auto text-center flex flex-col justify-center items-center text-gray-900 py-12 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Pilih Program Wellness Anda
      </h2>

      {/* Grid Program */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <CardProgram
            key={index}
            title={program.title}
            image={program.image}
            icon={program.icon}
            link={program.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
