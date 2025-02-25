import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero1 from "@/components/hero/Hero1";
import MainContent1 from "@/components/content/MainContent1";
import MainContent2 from "@/components/content/MainContent2";
import MainContent3 from "@/components/content/MainContent3";
import MainContent4 from "@/components/content/MainContent4";
import EventLocation from "@/components/event/EventLocation";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import Promo from "@/components/event/Promotion";
import VidPlayer from "@/components/common/VideoPlayer";
// import Rundown from "@/components/agenda/Rundown"; // Uncomment jika ingin digunakan

function ProgramPage() {
  const [showEmbed, setShowEmbed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const embedRef = useRef(null);

  const handleShowEmbed = () => {
    setShowEmbed(true);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} /> {/* Kirimkan setIsOpen ke Header */}
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      {/* Kirimkan isOpen dan setIsOpen ke NavMobile */}
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero1 />
        <MainContent1 />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <MainContent2 />
        <MainContent3 />
        {/* <Rundown /> Uncomment jika ingin digunakan */}
        <MainContent4 />
        <EventLocation />
        <Promo />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
