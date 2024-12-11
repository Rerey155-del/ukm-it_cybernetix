import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const DeveloperPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Mendapatkan informasi lokasi/rute saat ini
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };


  return (
     <section>
      <div
        style={{
          backgroundColor: darkModes ? "#1E2237" : "#FBF8EF", // Warna berdasarkan mode
          color: darkModes ? "#FFFFFF" : "#000000", // Warna teks
          minHeight: "100vh",
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          overflowX: "hidden",
          backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733543685/glow_effect_odggcl.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Montserrat",
        }}
        className=" flex flex-col"
      > <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
      <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} /></div>
      <Footer darkMode={darkModes} />
      </section>
      
  )
}

export default DeveloperPage