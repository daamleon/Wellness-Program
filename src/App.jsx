import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SleepTourism from "./pages/SleepTourism";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import WellnessCamp from "./pages/WellnessCamp";
import "./index.css";
import "@fontsource/inter";

function App() {
  console.log("App loaded!");

  return (
    <Router>
      <Routes>
        <Route path="/wellness-program/" element={<HomePage />} />
        <Route
          path="/wellness-program/program/sleep-tourism"
          element={<SleepTourism />}
        />
        <Route
          path="/wellness-program/program/wellness-camp"
          element={<WellnessCamp />}
        />
        <Route
          path="/wellness-program/program/coming-soon"
          element={<ComingSoon />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
