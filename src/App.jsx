import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import MainContent1 from "./components/MainContent1";
import MainContent2 from "./components/MainContent2";
import MainContent3 from "./components/MainContent3";
import MainContent4 from "./components/MainContent4";
import Location from "./components/EventLocation";
import Footer from "./components/Footer";
import NavMobile from "./components/NavMobile";
import EmbedEvent from "./components/EmbedEvent";
import Promo from "./components/Promotion";
import "./index.css";
import "@fontsource/inter";
import VidPlayer from "./components/VideoPlayer";

function App() {
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
        <Hero />
        <VidPlayer videoId="72ZVFzu0WnE" />

        {/* <MainContent1 /> */}
        <MainContent2 />
        <MainContent3 />
        <MainContent4 />
        <Location />
        <Promo />

        {/* <div className="text-center">
          <button
            onClick={handleShowEmbed}
            className="mb-12 mt-6 px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Daftar Sekarang
          </button>
        </div>
        {showEmbed && (
          <div ref={embedRef} className="w-full max-w-4xl mx-auto py-10">
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )} */}

        {/* <CampusPartners />
        <Sponsor /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
