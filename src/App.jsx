// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Struktural from "./pages/StrukturalPage";
import Activity from "./pages/ActivityPage";
import Profile from "./pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/struktural" element={<Struktural />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;