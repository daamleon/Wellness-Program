import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/reusable/Hero";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import VidPlayer from "@/components/reusable/VideoPlayer";
import bannerImg from "@/assets/banner2.jpeg";

function ProgramPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} />
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero
          title="WELLNESS CAMP"
          subtitle="Recharge Your Body, Revive Your Mind."
          backgroundImage={bannerImg}
          buttonText="Daftar Sekarang"
          buttonLink="/register"
        />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
