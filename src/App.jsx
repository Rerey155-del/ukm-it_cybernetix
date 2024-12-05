import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Struktural from "./pages/StrukturalPage";
import Activity from "./pages/ActivityPage";
import Profile from "./pages/ProfilePage";
import Portofolio from "./pages/Portofolio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/struktural" element={<Struktural />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;