import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MainContent1 from "../components/content/MainContent1";
import MainContent2 from "../components/content/MainContent2";
import MainContent3 from "../components/content/MainContent3";
import MainContent4 from "../components/content/MainContent4";
import EventLocation from "../components/event/EventLocation";
import Promotion from "../components/event/Promotion";

function ProgramPage() {
  const { programId } = useParams(); // Ambil parameter dari URL

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header />
      <div className="pt-12 flex-1 overflow-x-hidden">
        <h1 className="text-center text-2xl font-bold">Program: {programId}</h1>
        <MainContent1 />
        <MainContent2 />
        <MainContent3 />
        <MainContent4 />
        <EventLocation />
        <Promotion />
      </div>
      <Footer />
    </div>
  );
}

export default ProgramPage;
