import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import NotFound from "./pages/NotFound";
import "./index.css";
import "@fontsource/inter";

function App() {
  console.log("App loaded!"); // Debugging

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program/:programId" element={<ProgramPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
