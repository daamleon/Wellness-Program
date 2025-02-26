import React, { useState, useEffect } from "react";
import AgendaItem from "@/components/agenda/AgendaItem";

const MainContent3 = ({ title, agendaData }) => {
  const [showAll, setShowAll] = useState(false);
  const [defaultItems, setDefaultItems] = useState(6);

  useEffect(() => {
    const updateDefaultItems = () => {
      setDefaultItems(window.innerWidth >= 768 ? 4 : 3);
    };

    updateDefaultItems();
    window.addEventListener("resize", updateDefaultItems);
    return () => window.removeEventListener("resize", updateDefaultItems);
  }, []);

  const displayedItems = showAll
    ? agendaData
    : agendaData.slice(0, defaultItems);

  return (
    <section id="next-content" className="relative mb-10 px-4 md:px-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-4">
        {displayedItems.map((agenda, index) => (
          <AgendaItem
            key={index}
            title={agenda.title}
            description={agenda.description}
            image={agenda.image}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-red-500 text-white font-medium px-5 py-2.5 rounded-full shadow-md hover:bg-red-600 transition-all"
        >
          {showAll ? "Tampilkan Sedikit" : "Tampilkan Semua"}
        </button>
      </div>
    </section>
  );
};

export default MainContent3;
