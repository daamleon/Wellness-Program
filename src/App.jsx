import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SleepTourism from "./pages/SleepTourism";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import WellnessCamp from "./pages/WellnessCamp"
import "./index.css";
import "@fontsource/inter";

function App() {
  console.log("App loaded!"); // Debugging

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/sleep-tourism" element={<SleepTourism />} />
        <Route path="/program/wellness-camp" element={<WellnessCamp />} />
        <Route path="/program/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
