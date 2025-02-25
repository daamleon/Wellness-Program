import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/content/HomeContent1";

function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      <div className="flex-grow w-full">
        <Hero />
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
