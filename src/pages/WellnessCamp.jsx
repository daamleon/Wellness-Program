import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "@/components/reusable/Hero";
import MainContent1 from "../components/reusable/MainContent1";
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
        <MainContent1
                  title="Sebuah program 2 hari, 1 malam yang membantu kamu untuk"
                  highlight="melepaskan stres berkepanjangan."
                  description="Acara Wellness Camp adalah kegiatan retreat selama 2 hari 1malam yang diselenggarakan di Batu pada tanggal XXXXX Dengan berbagai aktivitas yang dirancang untuk meningkatkankesejahteraan fisik dan mental, acara ini menawarkan kesempatan untuk beristirahat dari rutinitas sehari-hari dan menikmati keindahan alam."
                />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
