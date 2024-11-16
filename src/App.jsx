// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Struktural from "./pages/StrukturalPage";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/struktural" element={<Struktural />} />
      </Routes>
    </Router>
  );
};

export default App;
