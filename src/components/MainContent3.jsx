import React, { useState, useEffect } from "react";
// import { ChevronDoubleDown, ChevronDoubleUp } from "lucide-react";
import AgendaItem from "./AgendaItem";
import aquaYoga from "../assets/aqua_yoga.jpg";
import mindfulnessWalk from "../assets/walk.jpg";
import morningStretching from "../assets/stretching.jpg";
import wellnessRetreat from "../assets/relax.jpg";
import medicalCheckup from "../assets/dinner.webp";
import mentalConsultation from "../assets/consultation.jpg";
import soundHealing from "../assets/soundhealing.jpg";
import breakfast from "../assets/breakfast.webp";
import gift from "../assets/gift.webp";
import dinner from "../assets/dinner.webp";
import workshop from "../assets/workshop.avif";
import morningyoga from "../assets/morningyoga.jpg";
import relaxroom from "../assets/relaxroom.jpg";
import checkup from "../assets/checkup.jpg";

const agendaData = [
  {
    title: "Aqua Yoga",
    description:
      "Melatih keseimbangan tubuh dan pikiran melalui gerakan yoga di dalam air yang menenangkan.",
    image: aquaYoga,
  },
  {
    title: "Mindfulness Walk",
    description:
      "Berjalan santai di alam dengan kesadaran penuh untuk menenangkan pikiran dan mengurangi stres.",
    image: mindfulnessWalk,
  },
  {
    title: "Healthy Dinner",
    description:
      "Santap malam dengan menu sehat yang seimbang, seperti sup hangat, salad, dan protein rendah lemak.",
    image: dinner,
  },
  {
    title: "Sound Healing & Relaxation",
    description:
      "Terapi suara menggunakan alat seperti gong, singing bowl, dan musik relaksasi untuk membantu tidur lebih nyenyak.",
    image: soundHealing,
  },
  {
    title: "Room Relaxation",
    description:
      "Ruangan yang di set-up dengan Suasasana Relaksasi dengan aromatherapy",
    image: relaxroom,
  },
  {
    title: "Morning Yoga & Stretching",
    description:
      "Memulai hari dengan gerakan yoga yang lembut dan peregangan untuk meningkatkan fleksibilitas tubuh.",
    image: morningyoga,
  },
  {
    title: "Healthy Breakfast",
    description:
      "Menu sarapan yang mendukung energi pagi, seperti granola, buah-buahan segar, dan teh herbal.",
    image: breakfast,
  },
  {
    title: "Wellness Workshop",
    description:
      "Sesi edukasi tentang pola hidup sehat, tips tidur berkualitas, dan teknik mengelola stres.",
    image: workshop,
  },
  {
    title: "Wellness Retreat",
    description:
      "Pengalaman retreat holistik dengan berbagai aktivitas untuk menyeimbangkan fisik, mental, dan emosional.",
    image: wellnessRetreat,
  },

  {
    title: "Medical Check-up",
    description:
      "Pemeriksaan kesehatan menyeluruh untuk memastikan kondisi tubuh dalam keadaan prima selama program berlangsung.",
    image: checkup,
  },

  {
    title: "Mental Health Consultation",
    description:
      "Sesi konsultasi dengan ahli untuk memahami dan mengelola kesehatan mental dengan lebih baik.",
    image: mentalConsultation,
  },
  {
    title: "Aromatherapy Gift",
    description:
      "Seluruh Peserta Mendapatkan Gift Cantik , Aromatheraphy untuk Relaxasi",
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
    <section
      id="next-content"
      className="relative mb-10 px-4 md:px-12"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Apa saja agendanya?
      </h3>

      <div className="relative">
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

        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
        )}
      </div>
      <div className="text-center mt-6 relative">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-red-400 to-red-500 text-white font-medium px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {showAll ? "Tampilkan Sedikit" : "Tampilkan Semua"}
        </button>
      </div>
    </section>
  );
}

export default MainContent3;
