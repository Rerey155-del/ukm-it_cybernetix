import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Struktural from "./pages/StrukturalPage";
import Activity from "./pages/ActivityPage";
import Profile from "./pages/ProfilePage";
import Programming from "./pages/Programming";
import Multimedia from "./pages/Multimedia";
import Networking from "./pages/Networking";
import Portofolio from "./pages/Portofolio";
import Activitydetail from "./pages/ActivityDetail";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/struktural" element={<Struktural />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/activitydetail" element={<Activitydetail />} />
      </Routes>
    </Router>
  );
};

export default App;
