import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rerey from "../assets/developer/1.png";
import Figma from "../assets/figma.png";
import Tailwind from "../assets/tailwind.png";
import Laravel from "../assets/laravel.svg";
import Mongodb from "../assets/mongodb.png";

import Diva from "../assets/developer/2.png";
import Keyfa from "../assets/developer/5.png";
import Raka from "../assets/developer/3.png";
import Adit from "../assets/developer/4.png";
import Rofiq from "../assets/developer/6.png";
import Rafif from "../assets/developer/7.png";
import Vazra from "../assets/developer/8.jpg";

const CXDevelopers = () => {
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

  const developers = [
    {
      name: "CX - Rerey",
      role: "Project Lead / Full Stack Dev",
      image: [Rerey],
    },
    {
      name: "CX - Diva",
      role: "Secretary Programmer",
      image: [Diva],
    },
    {
      name: "CX - Raka",
      role: "Programmer",
      image: [Raka],
    },
    {
      name: "CX - Adit",
      role: "Programmer",
      image: [Adit],
    },
    {
      name: "CX - Keyfa",
      role: "UI/UX Designer",
      image: [Keyfa],
    },
    {
      name: "CX - Rofiq",
      role: "UI/UX Designer",
      image: [Rofiq],
    },
    {
      name: "CX - Rafif",
      role: "UI/UX Designer",
      image: [Rafif],
    },
    {
      name: "CX - Vazra",
      role: "UI/UX Designer",
      image: [Vazra],
    },
  ];

  return (
    <section style={{ overflow: "hidden" }}>
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
          fontFamily: "Outfit",
        }}
        className="flex flex-col"
      >
        {/* Navbar */}
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <div>
          {/* Header */}
          <div
            className="container mx-auto text-center md:mt-24 mb-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="font-bold text-5xl">
              <span className="text-[#F16634]">CX</span> DEV !
            </h2>
            <p className="text-sm">great person who made this website</p>
          </div>

          {/* About Projects */}
          <div
            className="container mx-auto px-10 md:px-20 
               grid grid-cols-1 md:grid-cols-2 
               gap-14 text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold">About Projects</h2>

              <p className="text-md mt-4 md:text-lg">
                Website ini kami ciptakan dengan sepenuh hati, sebagai wujud
                dedikasi kami yang mendalam kepada UKM-IT Cybernetix.
              </p>

              <p className="text-md mt-4 md:text-lg">
                Website ini dirancang menggunakan berbagai teknologi canggih
                untuk memastikan pengalaman yang responsif dan mulus.
              </p>

              <div className="flex gap-5 mt-6 justify-center md:justify-start">
                <img
                  src={Figma}
                  alt="Figma"
                  className="w-10 h-10 md:w-12 md:h-12 
               object-contain 
               hover:scale-110 transition-transform"
                />
                <img
                  src={Laravel}
                  alt="Laravel"
                  className="w-10 h-10 md:w-12 md:h-12 
               object-contain 
               hover:scale-110 transition-transform"
                />
                <img
                  src={Tailwind}
                  alt="Tailwind"
                  className="w-10 h-10 md:w-12 md:h-12 
               object-contain 
               hover:scale-110 transition-transform"
                />

                <img
                  src={Mongodb}
                  alt="MongoDB"
                  className="w-10 h-10 md:w-12 md:h-12 
               object-contain 
               hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
          <div
            className="container mx-auto mt-16 px-6 md:px-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-2xl font-bold text-center md:text-left">
              Our Developers
            </h2>
          </div>

          <div
            className="container mx-auto mt-6 px-6 md:px-20
             grid grid-cols-2 md:grid-cols-4
             gap-5 mb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {developers.map((dev, index) => (
              <div
                key={index}
                className="mx-auto w-full max-w-[220px]
                 rounded-2xl overflow-hidden
                 bg-white/5 backdrop-blur
                 shadow-sm hover:shadow-md
                 transition-all duration-300
                 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-[3/4]">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developers Section */}

        {/* Footer */}
        <Footer darkMode={darkModes} />
      </div>
    </section>
  );
};

export default CXDevelopers;
