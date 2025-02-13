import React, { useState } from "react";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

const rundownData = {
  day1: [
    {
      time: "14:00 - 15:00",
      title: "Check-In & Welcome Session",
      desc: "Welcome drink sehat dan penjelasan program.",
      pic: "HOTEL & TEAM AGENDAKOTA",
    },
    {
      time: "15:00 - 16:30",
      title: "Aqua Yoga",
      desc: "Sesi yoga di kolam renang dengan instruktur profesional.",
      pic: "Team Agendakota",
    },
    {
      time: "16:30 - 17:00",
      title: "Healthy Snack & Free Time",
      desc: "Kudapan sehat dan bersantai di area hotel.",
      pic: "Hotel",
    },
    {
      time: "17:00 - 18:30",
      title: "Mindfulness Walk",
      desc: "Jalan santai dengan panduan meditasi ringan.",
      pic: "Team Agendakota",
    },
    {
      time: "18:30 - 20:00",
      title: "Healthy Dinner",
      desc: "Santap malam sehat dengan menu seimbang.",
      pic: "Hotel",
    },
    {
      time: "20:00 - 21:30",
      title: "Sound Healing & Relaxation",
      desc: "Terapi suara untuk membantu tidur nyenyak.",
      pic: "Team Agendakota",
    },
    {
      time: "21:30 - Rest",
      title: "Personal Rest Time",
      desc: "Waktu istirahat dengan suasana kamar yang nyaman.",
      pic: "Hotel",
    },
  ],
  day2: [
    {
      time: "06:00 - 07:00",
      title: "Morning Yoga & Stretching",
      desc: "Sesi yoga pagi untuk mengaktifkan tubuh.",
      pic: "Team Agendakota & Instruktur Yoga",
    },
    {
      time: "07:00 - 08:00",
      title: "Medical Check-Up",
      desc: "MCU didukung oleh rumah sakit partner.",
      pic: "Team Agendakota & RS Partner",
    },
    {
      time: "08:00 - 09:00",
      title: "Healthy Breakfast",
      desc: "Sarapan sehat dengan granola dan teh herbal.",
      pic: "Hotel",
    },
    {
      time: "09:00 - 10:30",
      title: "Wellness Workshop",
      desc: "Edukasi pola hidup sehat dan teknik mengelola stres.",
      pic: "Agendakota & Partner",
    },
    {
      time: "10:30 - 11:30",
      title: "Free Time (Spa/Pool)",
      desc: "Menikmati fasilitas hotel seperti spa dan gym.",
      pic: "Hotel",
    },
    {
      time: "11:30 - 12:00",
      title: "Check-Out & Farewell Gift",
      desc: "Penutupan dengan souvenir aromaterapi.",
      pic: "Hotel",
    },
  ],
};

const RundownCard = ({ time, title, desc }) => (
  <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-400 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
    <span className="text-sm font-bold text-gray-700">{time}</span>
  </div>
);

const Rundown = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
        Rundown Event
      </h2>
      <div className="max-w-3xl mx-auto">
        {Object.entries(rundownData).map(([day, activities], index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{`Day ${
              index + 1
            }`}</h3>
            <div className="space-y-4">
              {(showFull ? activities : activities.slice(0, 3)).map(
                (item, idx) => (
                  <RundownCard key={idx} {...item} />
                )
              )}
            </div>
          </div>
        ))}
        <button
          className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? <FaChevronUp /> : <FaChevronDown />}{" "}
          {showFull ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua"}
        </button>
      </div>
    </div>
  );
};

export default Rundown;
