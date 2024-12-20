import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rerey from "../assets/Rereyy.png";
import Figma from "../assets/figma.png";
import Reactjs from "../assets/reactjs.png";
import Tailwind from "../assets/tailwind.png";
import Express from "../assets/express.png";
import Mongodb from "../assets/mongodb.png";
import Nodejs from "../assets/nodejs.png";
import Mufid from "../assets/mupiddev.png";
import Keyfa from "../assets/keyfadev.png";
import Jevin from "../assets/jevindev.png";
import Agil from "../assets/agildev.png";


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
      name: "CX - Mufid",
      role: "UI/UX Designer",
      image: [Mufid],
    },
    {
      name: "CX - Keyfa",
      role: "UI/UX Designer",
      image: [Keyfa],
    },
    {
      name: "CX - Jevin",
      role: "UI/UX Designer",
      image: [Jevin],
    },
    {
      name: "CX - Agil",
      role: "Frontend Developer",
      image: [Agil],
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


        <div className="container mx-auto text-center md:mt-24 mb-6" data-aos="fade-up" data-aos-duration="1500" >
          <h2 className=" font-bold text-5xl"><span className="text-[#F16634]">CX</span> DEV !</h2>
          <p className="text-sm">great person who made this website</p>
          <h2 className="text-2xl text-start pl-20 font-bold hidden lg:block">Our Developers</h2>
        </div>
        
        {/* About Projects */}
        <div className="container mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-14 text-center md:text-left" data-aos="fade-up"
            data-aos-duration="1500">
          {/* Teks di atas pada ponsel */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">About Projects</h2>
            <p className="text-md mt-4 md:text-lg">
              Website ini kami ciptakan dengan sepenuh hati, sebagai wujud dedikasi kami yang mendalam kepada UKM-IT Cybernetix. Kami
              mengorbankan waktu, tenaga, dan pemikiran untuk mewujudkan visi ini, dan kini hasilnya dapat Anda nikmati dan gunakan. Setiap detik
              yang kami habiskan dalam perjalanan ini adalah langkah menuju mewujudkan impian tersebut.
            </p>
            <p className="text-md mt-4 md:text-lg">
              Website ini dirancang menggunakan berbagai teknologi canggih untuk memastikan pengalaman yang responsif dan mulus bagi semua
              pengguna.
            </p>
            <br />
            <div className="flex size-10 gap-4 swap-on tooltip">
              <img className=" transform hover:scale-105 transition-transform" data-tip="Figma" src={Figma} />
              <img className=" transform hover:scale-105 transition-transform" data-tip="React JS" src={Reactjs} />
              <img className=" transform hover:scale-105 transition-transform" data-tip="Tailwind" src={Tailwind} />
              <img className=" transform hover:scale-105 transition-transform" data-tip="Express.js" src={Express} />
              <img className=" transform hover:scale-105 transition-transform" data-tip="MongoDB"src={Mongodb} />
              <img className=" transform hover:scale-105 transition-transform" data-tip="Node.js" src={Nodejs} />

            </div>
          </div>

          {/* Gambar di bawah pada ponsel */}
          <div className="container mx-auto order-1 md:order-1 card bg-[#32364F] sm:w-full md:w-full lg:w-full shadow-lg rounded-3xl transform hover:scale-105 transition-transform">
            <img
              src={developers[0].image}
              alt={developers[0].name}
              className="w-full h-full object-cover rounded-3xl mb-4 md:w-full md:h-full"
            />

            <div
              className="absolute bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent inset-x-0 bottom-0 h-1/2 rounded-b-3xl pointer-events-none"
            ></div>
            <div className="text-center md:absolute z-10 inset-x-0  md:bottom-6 text-white">
              <h3 className="font-bold text-lg">CX-Rerey</h3>
              <p className="mt-2 mb-4">Project Lead / Full Stack Dev</p>
            </div>
          </div>
        </div>


        {/* Developers Section */}
        <div className="container mb-6 mx-auto p-6 md:p-20 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1500">
          {developers.slice(1).map((dev, index) => (
            <div
              key={index}
              className="text-center rounded-3xl shadow-md transform hover:scale-105 transition-transform"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-full h-full object-cover rounded-3xl mb-4"
              />
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
