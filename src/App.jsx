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
// import EmbedEvent from "./components/EmbedEvent";
import Promo from "./components/Promotion";
import "./index.css";
import "@fontsource/inter";
import VidPlayer from "./components/VideoPlayer";
// import Rundown from "./components/rundown";

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
        {/* <Rundown /> */}
        <MainContent4 />
        <Location />
        <Promo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
