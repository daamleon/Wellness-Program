import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/reusable/Hero";
import MainContent1 from "@/components/reusable/MainContent1";
import MainContent2 from "@/components/reusable/MainContent2";
import MainContent3 from "@/components/reusable/MainContent3";
import MainContent4 from "@/components/reusable/MainContent4";
import EventLocation from "@/components/event/EventLocation";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import Promo from "@/components/event/Promotion";
import VidPlayer from "@/components/reusable/VideoPlayer";
import bannerImg from "@/assets/banner.jpeg";
import { FaBriefcase, FaHome, FaSpa, FaPlane } from "react-icons/fa";
import { FaBed, FaHeartbeat, FaUsers } from "react-icons/fa";
import aquaYoga from "@/assets/aqua_yoga.jpg";
import mindfulnessWalk from "@/assets/walk.jpg";
import dinner from "@/assets/dinner.webp";
import soundHealing from "@/assets/soundhealing.jpg";
import relaxroom from "@/assets/relaxroom.jpg";
import morningyoga from "@/assets/morningyoga.jpg";
import breakfast from "@/assets/breakfast.webp";
import workshop from "@/assets/workshop.avif";
import wellnessRetreat from "@/assets/relax.jpg";
import checkup from "@/assets/checkup.jpg";
import mentalConsultation from "@/assets/consultation.jpg";
import gift from "@/assets/gift.webp";
import img1 from "@/assets/img2.jpeg";


function ProgramPage() {
  const [isOpen, setIsOpen] = useState(false);
 const agendaData = [
   {
     title: "Aqua Yoga",
     description:
       "Melatih keseimbangan tubuh dalam air untuk relaksasi dan fleksibilitas.",
     image: aquaYoga,
   },
   {
     title: "Mindfulness Walk",
     description:
       "Berjalan santai di alam untuk meningkatkan kesadaran dan ketenangan pikiran.",
     image: mindfulnessWalk,
   },
   {
     title: "Healthy Dinner",
     description:
       "Santap malam dengan menu sehat yang dirancang untuk keseimbangan nutrisi.",
     image: dinner,
   },
   {
     title: "Sound Healing & Relaxation",
     description:
       "Terapi suara menggunakan frekuensi untuk membantu relaksasi mendalam.",
     image: soundHealing,
   },
   {
     title: "Room Relaxation",
     description:
       "Ruangan dengan aromaterapi dan pencahayaan khusus untuk kenyamanan maksimal.",
     image: relaxroom,
   },
   {
     title: "Morning Yoga & Stretching",
     description:
       "Gerakan yoga pagi untuk meningkatkan energi dan keseimbangan tubuh.",
     image: morningyoga,
   },
   {
     title: "Healthy Breakfast",
     description:
       "Menu sarapan sehat untuk memulai hari dengan energi yang optimal.",
     image: breakfast,
   },
   {
     title: "Wellness Workshop",
     description: "Sesi edukasi tentang pola hidup sehat dan manajemen stres.",
     image: workshop,
   },
   {
     title: "Wellness Retreat",
     description:
       "Pengalaman retreat holistik untuk memperkuat keseimbangan tubuh dan pikiran.",
     image: wellnessRetreat,
   },
   {
     title: "Medical Check-up",
     description:
       "Pemeriksaan kesehatan untuk memastikan kondisi tubuh yang prima.",
     image: checkup,
   },
   {
     title: "Mental Health Consultation",
     description:
       "Sesi konsultasi dengan ahli untuk kesehatan mental yang lebih baik.",
     image: mentalConsultation,
   },
   {
     title: "Aromatherapy Gift",
     description:
       "Peserta mendapatkan hadiah berupa aromaterapi untuk relaksasi di rumah.",
     image: gift,
   },
 ];


  const audienceData = [
    {
      title: "Profesional",
      description: "Pekerja kantoran yang sering stres.",
      icon: <FaBriefcase className="text-red-500 text-4xl" />,
    },
    {
      title: "Ibu Rumah Tangga",
      description: "Orang tua yang sibuk mengurus keluarga.",
      icon: <FaHome className="text-red-500 text-4xl" />,
    },
    {
      title: "Pecinta Wellness",
      description: "Orang yang tertarik dengan gaya hidup sehat.",
      icon: <FaSpa className="text-red-500 text-4xl" />,
    },
    {
      title: "Wisatawan",
      description: "Pelancong yang ingin menikmati staycation.",
      icon: <FaPlane className="text-red-500 text-4xl" />,
    },
  ];

  


  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero
          title="SLEEP TOURISM & WELLNESS"
          subtitle="Recharge Your Body, Revive Your Mind."
          backgroundImage={bannerImg}
          buttonText="Daftar Sekarang"
          buttonLink="/register"
        />
        <MainContent1
          title="Sebuah program 2 hari, 1 malam yang membantu kamu untuk"
          highlight="melepaskan stres berkepanjangan."
          description="Wellness Tourism Program adalah kegiatan yang ditujukan bagi kamu yang ingin menghilangkan kepenatan sejenak. Difasilitasi oleh instruktur berpengalaman, program ini membantu kamu beristirahat sejenak dari rutinitas sehari-hari dan mengembalikan energi tubuh serta pikiran."
        />
        <VidPlayer videoId="72ZVFzu0WnE" />

        <MainContent2
          title="Kenapa Harus Ikut Program Sleep Tourism & Wellness?"
          description="Di tengah gaya hidup modern yang penuh tekanan, kualitas tidur sering kali terabaikan. Lebih dari 62% orang dewasa mengalami gangguan tidur. Sleep Tourism hadir sebagai solusi untuk membantu tubuh dan pikiran beristirahat lebih baik melalui kombinasi relaksasi, meditasi, dan gaya hidup sehat."
          image={img1}
          highlights={[
            {
              icon: FaBed,
              text: "62% orang dewasa mengalami gangguan tidur (World Sleep Society, 2022)",
            },
            {
              icon: FaHeartbeat,
              text: "Tidur berkualitas meningkatkan sistem imun & mengurangi risiko penyakit kardiovaskular",
            },
            {
              icon: FaSpa,
              text: "Program termasuk yoga, sound healing, dan pola makan sehat",
            },
            {
              icon: FaUsers,
              text: "Cocok untuk profesional, orang tua, dan pecinta wellness",
            },
          ]}
        />
        <MainContent3 title="Apa saja agendanya?" agendaData={agendaData} />
        <MainContent4 title="Cocok untuk siapa?" audienceData={audienceData} />
        <EventLocation />
        <Promo />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
