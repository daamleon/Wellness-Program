import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import Hero1 from "@/components/hero/Hero1";
import Footer from "@/components/common/Footer";
import NavMobile from "@/components/common/NavMobile";
import VidPlayer from "@/components/common/VideoPlayer";


function ProgramPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header setIsOpen={setIsOpen} /> 
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero1 />
        <VidPlayer videoId="72ZVFzu0WnE" />
        <Footer />
      </div>
    </div>
  );
}

export default ProgramPage;
