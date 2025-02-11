import React from "react";
import AgendaItem from "./AgendaItem";
import aquaYoga from "../assets/aqua_yoga.jpg";
import mindfulnessWalk from "../assets/walk.jpg";
import morningStretching from "../assets/stretching.jpg";
import wellnessRetreat from "../assets/relax.jpg";
import medicalCheckup from "../assets/dinner.webp";
import mentalConsultation from "../assets/consultation.jpg";

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
    title: "Morning Yoga & Stretching",
    description:
      "Memulai hari dengan gerakan yoga yang lembut dan peregangan untuk meningkatkan fleksibilitas tubuh.",
    image: morningStretching,
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
    image: medicalCheckup,
  },
  {
    title: "Mental Health Consultation",
    description:
      "Sesi konsultasi dengan ahli untuk memahami dan mengelola kesehatan mental dengan lebih baik.",
    image: mentalConsultation,
  },
];

function MainContent3() {
  return (
    <section id="next-content" className="mb-10 px-4 md:px-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Apa saja agendanya?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {agendaData.map((agenda, index) => (
          <AgendaItem
            key={index}
            title={agenda.title}
            description={agenda.description}
            image={agenda.image}
          />
        ))}
      </div>
    </section>
  );
}

export default MainContent3;
