import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/hero/Hero";
import VideoPlayer from "../components/common/VideoPlayer";

function HomePage() {
  console.log("HomePage loaded!"); // Debugging

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header />
      <div className="pt-12 flex-1 overflow-x-hidden">
        <Hero />
        <VideoPlayer videoId="72ZVFzu0WnE" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
