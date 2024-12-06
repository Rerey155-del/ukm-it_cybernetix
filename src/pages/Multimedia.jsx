
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import multimedia from "../assets/multimedia.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Programming = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Mendapatkan informasi lokasi/rute saat ini

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };
  return (
    <section style={{ overflow: "hidden" }}>
      <div
        style={{
          backgroundColor: darkMode ? "#1E2237" : "#FBF8EF", // Warna berdasarkan mode
          color: darkMode ? "#FFFFFF" : "#000000", // Warna teks
          minHeight: "100vh",
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          overflowX: "hidden",
          backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733469856/glow-effect_htt6qz.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Montserrat",
        }}
        className=" flex flex-col"
      >
        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />

        {/* Konten Utama */}
        <div className="container p-8 flex-grow container mx-auto md:px-4 py-16 md:mt-[8rem] md:mb-[6rem]"
          data-aos="fade-up"
          data-aos-duration="1000">
          <div className="flex flex-col gap-12">
            {[
              {
                title: "Multimedia",
                description:
                  "Divisi Multi Media UKM-IT Cybernetix adalah wadah untuk mengembangkan kreativitas dan keterampilan anggota dalam bidang visual, desain, dan multimedia. Divisi ini terbuka bagi mahasiswa yang ingin belajar dan bereksplorasi dalam desain UI/UX, desain grafis, dan Video editing, dengan tujuan utama memperkaya pengetahuan dan kemampuan setiap anggota di bidang multimedia.",
                image: multimedia,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6"
              >
                {/* Bagian Konten */}
                <div className="w-full lg:w-1/2 lg:ml-12">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mt-12">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bagian Gambar */}
                <div className="w-full lg:w-1/2 max-w-[500px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </section>
  );
};

export default Programming;
