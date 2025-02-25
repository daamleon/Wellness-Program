import React, { useState, useRef } from "react";
import Header from "@/components/common/Header";
import NavMobile from "@/components/common/NavMobile";
import Footer from "@/components/common/Footer";
import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/content/HomeContent1";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const embedRef = useRef(null);
  return (
    
    <div className="w-full h-full bg-white">
     <Header setIsOpen={setIsOpen} /> 
          <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default HomePage;
