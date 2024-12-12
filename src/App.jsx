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
import DeveloperPage from "./pages/DeveloperPage";

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
<<<<<<< HEAD
        <Route path="/activitydetail" element={<Activitydetail />} />
        <Route path="/developer" element={<DeveloperPage />} />
=======
        <Route path="/activitydetail/:id" element={<Activitydetail />} />

>>>>>>> 7f83feb0d9e34f338f0e9f0094788855cdce2d78
      </Routes>
    </Router>
  );
};

export default App;
