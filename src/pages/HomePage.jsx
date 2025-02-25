import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/hero/Hero";
import HomeContent from "@/components/content/HomeContent1";

function HomePage() {
  return (
    <div className="w-full h-full bg-white">
      <Header />
        <Hero />
        <HomeContent />
      <Footer />
    </div>
  );
}

export default HomePage;
