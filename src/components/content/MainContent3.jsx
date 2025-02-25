import React, { useState, useEffect } from "react";
import AgendaItem from "@/components/agenda/AgendaItem";
import aquaYoga from "@/assets/aqua_yoga.jpg";
import mindfulnessWalk from "@/assets/walk.jpg";
import morningStretching from "@/assets/stretching.jpg";
import wellnessRetreat from "@/assets/relax.jpg";
import medicalCheckup from "@/assets/dinner.webp";
import mentalConsultation from "@/assets/consultation.jpg";
import soundHealing from "@/assets/soundhealing.jpg";
import breakfast from "@/assets/breakfast.webp";
import gift from "@/assets/gift.webp";
import dinner from "@/assets/dinner.webp";
import workshop from "@/assets/workshop.avif";
import morningyoga from "@/assets/morningyoga.jpg";
import relaxroom from "@/assets/relaxroom.jpg";
import checkup from "@/assets/checkup.jpg";

const agendaData = [
  {
    title: "Aqua Yoga",
    description: "Melatih keseimbangan tubuh...",
    image: aquaYoga,
  },
  {
    title: "Mindfulness Walk",
    description: "Berjalan santai di alam...",
    image: mindfulnessWalk,
  },
  {
    title: "Healthy Dinner",
    description: "Santap malam dengan menu sehat...",
    image: dinner,
  },
  {
    title: "Sound Healing & Relaxation",
    description: "Terapi suara untuk relaksasi...",
    image: soundHealing,
  },
  {
    title: "Room Relaxation",
    description: "Ruangan dengan aroma terapi...",
    image: relaxroom,
  },
  {
    title: "Morning Yoga & Stretching",
    description: "Gerakan yoga untuk pagi hari...",
    image: morningyoga,
  },
  {
    title: "Healthy Breakfast",
    description: "Menu sarapan sehat...",
    image: breakfast,
  },
  {
    title: "Wellness Workshop",
    description: "Edukasi pola hidup sehat...",
    image: workshop,
  },
  {
    title: "Wellness Retreat",
    description: "Pengalaman retreat holistik...",
    image: wellnessRetreat,
  },
  {
    title: "Medical Check-up",
    description: "Pemeriksaan kesehatan...",
    image: checkup,
  },
  {
    title: "Mental Health Consultation",
    description: "Sesi konsultasi mental health...",
    image: mentalConsultation,
  },
  {
    title: "Aromatherapy Gift",
    description: "Peserta mendapatkan aromaterapi gift...",
    image: gift,
  },
];

function MainContent3() {
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
        Apa saja agendanya?
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
}

export default MainContent3;
