import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      name: "Rerey",
      role: "Project Lead / Full Stack Dev",
      image: "/src/assets/rereydev.png",
    },
    {
      name: "CX - Mufid",
      role: "UI/UX Designer",
      image: "/src/assets/mupiddev.png",
    },
    {
      name: "CX - Keyfa",
      role: "UI/UX Designer",
      image: "/src/assets/keyfadev.png",
    },
    {
      name: "CX - Jevin",
      role: "UI/UX Designer",
      image: "/src/assets/jevindev.png",
    },
    {
      name: "CX - Agil",
      role: "Frontend Developer",
      image: "/src/assets/agildev.png",
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
          fontFamily: "Montserrat",
        }}
        className="flex flex-col"
      >
        {/* Navbar */}
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />

        {/* About Projects */}
        <div className="py-12 px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-800 text-center md:text-left p-6 rounded-lg shadow-md">
            <img
              src={developers[0].image}
              alt={developers[0].name}
              className="w-full md:w-auto h-60 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold text-white">
              {developers[0].name}
            </h3>
            <p className="text-lg text-white mt-2">{developers[0].role}</p>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">About Projects</h2>
            <p className="mt-4 text-lg">
              Website ini kami ciptakan dengan sepenuh hati, sebagai wujud
              dedikasi kami yang mendalam kepada UKM-IT Cybernetix. Kami
              mengorbankan waktu, tenaga, dan pemikiran untuk mewujudkan visi
              ini, dan kini hasilnya dapat Anda nikmati dan gunakan.Setiap detik
              yang kami habiskan dalam perjalan ini adalah langkah menuju
              mewujudkan impian tersebut.
            </p>
            <p className="mt-2 text-lg">
              Website ini dirancang menggunakan berbagai teknologi canggih untuk
              memastikan pengalaman yang responsif dan mulus bagi semua
              pengguna.
            </p>
          </div>
        </div>

        {/* Developers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {developers.slice(1).map((dev, index) => (
            <div
              key={index}
              className="bg-blue-800 text-center p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{dev.name}</h3>
              <p className="text-sm text-white mt-2">{dev.role}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <Footer darkMode={darkModes} />
      </div>
    </section>
  );
};

export default CXDevelopers;
