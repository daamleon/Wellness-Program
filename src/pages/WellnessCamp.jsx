import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/reusable/Hero";
import MainContent1 from "@/components/reusable/MainContent1";
import MainContent2 from "@/components/reusable/MainContent2";
import MainContent3 from "@/components/reusable/MainContent3";
import MainContent4 from "@/components/reusable/MainContent4";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import Promo from "@/components/reusable/Promotion";
import VidPlayer from "@/components/reusable/VideoPlayer";
import Location from "@/components/reusable/Location";
import bannerImg from "@/assets/banner2.jpeg";
import { FaBriefcase, FaHome, FaSpa, FaPlane } from "react-icons/fa";
import { FaCampground, FaLeaf, FaHiking, FaFire } from "react-icons/fa";
import img1 from "@/assets/img2.jpeg";
import bgImage from "@/assets/banner2.jpeg";

import Aset1 from "@/assets/Location1.jpg";
import Aset2 from "@/assets/Location2.jpg";
import Aset3 from "@/assets/Location3.jpg";
import Aset4 from "@/assets/Location4.jpg";

function WellnessCamp() {
  const [isOpen, setIsOpen] = useState(false);

  const agendaData = [
    {
      title: "Yoga Gunung",
      description:
        "Kegiatan spiritual yoga di pagi hari dengan suasana alam terbuka.",
      image: img1,
    },
    {
      title: "Forest Bathing & Meditation",
      description:
        "Metode relaksasi dengan fokus pada napas di alam, untuk mengurangi stres.",
      image: img1,
    },
    {
      title: "Medical Check-Up",
      description: "Pemeriksaan kesehatan lengkap oleh tim medis profesional.",
      image: img1,
    },
    {
      title: "Mindfulness Eating",
      description:
        "Makan dengan penuh kesadaran untuk kesehatan fisik dan mental.",
      image: img1,
    },
    {
      title: "Sharing Session: Manajemen Stres",
      description:
        "Diskusi dan sharing dengan ahli untuk mengelola stres dengan lebih baik.",
      image: img1,
    },
    {
      title: "Fun Games",
      description:
        "Permainan kelompok untuk membangun kebersamaan dan teamwork.",
      image: img1,
    },
    {
      title: "Api Unggun & Storytelling",
      description:
        "Berbagi pengalaman sambil menikmati suasana hangat di sekitar api unggun.",
      image: img1,
    },
  ];

  const audienceData = [
    {
      title: "Profesional",
      description: "Karyawan yang ingin rehat sejenak dari tekanan kerja.",
      icon: <FaBriefcase className="text-red-500 text-4xl" />,
    },
    {
      title: "Pecinta Alam",
      description: "Orang yang ingin menikmati alam dan pengalaman camping.",
      icon: <FaLeaf className="text-red-500 text-4xl" />,
    },
    {
      title: "Wisatawan Spiritual",
      description:
        "Mereka yang ingin meningkatkan keseimbangan mental dan spiritual.",
      icon: <FaHiking className="text-red-500 text-4xl" />,
    },
    {
      title: "Kelompok & Komunitas",
      description: "Cocok untuk perusahaan, komunitas, atau kelompok keluarga.",
      icon: <FaCampground className="text-red-500 text-4xl" />,
    },
  ];

  const locations = [
    {
      name: "Camping Ground Batu",
      address: "Batu, Jawa Timur",
      images: [Aset1, Aset2, Aset3],
    },
  ];

  const benefits = [
    "Yoga Gunung",
    "Forest Bathing & Meditation",
    "Medical Check-Up",
    "Mindfulness Eating",
    "Sharing Session: Manajemen Stres",
    "Fun Games",
    "Api Unggun & Storytelling",
    "Accomodation 2D1N (Camping)",
    "Shuttle Bus (Surabaya - Batu)",
    "BBQ Dinner Music",
    "T-Shirt",
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero
          title="WELLNESS CAMP"
          subtitle="Cultivating Wellness, Celebrating Spirituality"
          backgroundImage={bannerImg}
          buttonText="Daftar Sekarang"
          buttonLink="/register"
        />
        <MainContent1
          title="Sebuah program 2 hari, 1 malam yang membantu kamu untuk"
          highlight="melepaskan stres dan meningkatkan kesejahteraan."
          description="Acara Wellness Camp adalah kegiatan retreat selama 2 hari 1 malam yang diselenggarakan di Batu. Dengan berbagai aktivitas yang dirancang untuk meningkatkan kesejahteraan fisik dan mental, acara ini menawarkan kesempatan untuk beristirahat dari rutinitas sehari-hari dan menikmati keindahan alam."
        />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <MainContent2
          title="Kenapa Harus Ikut Wellness Camp?"
          description="Di dunia yang semakin sibuk, penting untuk meluangkan waktu untuk diri sendiri. Wellness Camp dirancang untuk membantu peserta melepaskan stres, mengembalikan keseimbangan tubuh dan pikiran, serta meningkatkan kualitas hidup melalui aktivitas berbasis wellness dan spiritualitas."
          image={img1}
          highlights={[
            {
              icon: FaCampground,
              text: "Menginap 2D1N di Camping Ground Batu.",
            },
            {
              icon: FaLeaf,
              text: "Merasakan manfaat meditasi dan yoga di alam terbuka.",
            },
            { icon: FaHiking, text: "Kegiatan tracking dan eksplorasi alam." },
            {
              icon: FaFire,
              text: "Api unggun, storytelling, dan hiburan musik akustik.",
            },
          ]}
        />
        <MainContent3 title="Apa saja agendanya?" agendaData={agendaData} />
        <MainContent4 title="Cocok untuk siapa?" audienceData={audienceData} />
        <Location title="Lokasi Kegiatan" locations={locations} />
        <Promo
          title="Wellness Camp"
          subtitle="Medical Journey & Wellness Package"
          originalPrice="IDR 1.275.000"
          discountedPrice="IDR 1.275.000"
          benefits={benefits}
          backgroundImage={bgImage}
        />
        <Footer />
      </div>
    </div>
  );
}

export default WellnessCamp;
