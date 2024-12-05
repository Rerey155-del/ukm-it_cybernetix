// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Struktural from "./pages/StrukturalPage";
import Activity from "./pages/ActivityPage";
import Profile from "./pages/ProfilePage";
import Programming from "./pages/Programming";
import Multimedia from "./pages/Multimedia";
import Networking from "./pages/Networking";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/struktural" element={<Struktural />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/networking" element={<Networking />} />
      </Routes>
    </Router>
  );
};

export default App;
