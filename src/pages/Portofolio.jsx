import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import porto1 from "../assets/porto1.jpg";
import porto2 from "../assets/porto2.jpg";
import porto3 from "../assets/porto3.png";
import Sidebar from "../Components/Sidebar";
import nexus1 from "../assets/nexus1.png";
import nexus2 from "../assets/nexus2.png";
import nexus3 from "../assets/nexus3.png";
import nexus4 from "../assets/nexus4.png";
import nexus5 from "../assets/nexus5.png";
import donorpdg1 from "../assets/donorpdg1.png";
import donorpdg2 from "../assets/donorpdg2.png";
import donorpdg3 from "../assets/donorpdg3.png";
import donorpdg4 from "../assets/donorpdg4.png";
import voting1 from "../assets/voting1.png"
import voting2 from "../assets/voting2.png"
import voting3 from "../assets/voting3.png"
import voting4 from "../assets/voting4.png"


const Portofolio = () => {
  const portofolioData = [
    {
      id: 1,
      title: "Nexus APP Official",
      description:
        "Aplikasi Bengkel Motor dirancang untuk memudahkan pengguna dalam merawat dan memperbaiki kendaraan bermotor mereka. Fitur meliputi jadwal servis otomatis, rekomendasi spare part, serta pelaporan langsung kerusakan. Nexus APP bertujuan memberikan pengalaman pengguna yang cepat dan efisien dalam perawatan kendaraan sehari-hari.",
      foto: porto2,
      screenshot: [nexus1, nexus2, nexus3, nexus4, nexus5],
      tags: ["Figma", "React JS", "Tailwind CSS", "PHP", "MySQL", "Lumen"],
    },
    {
      id: 2,
      title: "Donor.pdg",
      description:
        "Donor.Pdg adalah situs yang menyediakan informasi tentang donor darah untuk membantu pasien yang membutuhkan darah dengan cepat. Platform ini memfasilitasi pengguna untuk menemukan pendonor potensial serta menyimpan riwayat pendonoran untuk keperluan medis masa depan.",
      foto: porto1,
      screenshot: [donorpdg1, donorpdg2, donorpdg3, donorpdg4],
      tags: ["Figma", "ReactJS", "Tailwind CSS", "MySQL"],
    },
    {
      id: 3,
      title: "E-Voting Cybernetix",
      description:
        "E-Voting adalah platform digital yang dirancang untuk mendukung proses pengambilan suara secara online. Sistem ini menawarkan keamanan data, transparansi hasil, dan kemudahan akses bagi semua peserta yang terlibat dalam proses voting.",
      foto: porto3,
      screenshot: [voting1, voting2, voting3, voting4],
      tags: ["Figma", "Laravel Blade", "Tailwind CSS", "MySQL"],
    },
  ];


  const [darkMode, setDarkMode] = useState(false);
  const [selectedPortofolio, setSelectedPortofolio] = useState(null); // State untuk menyimpan data card yang dipilih
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section>
      <div
        style={{
          backgroundColor: darkMode ? "#1E2237" : "#FBF8EF",
          color: darkMode ? "#FFFFFF" : "#000000",
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
        className="overflow-y-auto text-black"
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />
        <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-[6rem] overflow-hidden flex-wrap">
          {portofolioData.map((item) => (
            <div
              key={item.id}
              className={` card cursor-pointer mb-8 ${darkMode ? "bg-[#32364F]" : "bg-white"
                } w-80 shadow-xl`}
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={() => setSelectedPortofolio(item)} // Buka modal dengan data card yang dipilih
            >
              <figure>
                <img src={item.foto} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="truncate">{item.description}</p>
                <div className="card-actions justify-end pt-5">
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer darkMode={darkMode} />

      {/* Modal */}
      {selectedPortofolio && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="container bg-white rounded-xl w-11/12 sm:w-10/12 md:w-8/12 lg:w-8/12 max-w-5xl p-4">
            {/* Carousel */}
            <div className="container carousel w-full">
              {selectedPortofolio.screenshot.map((image, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item w-full h-[10rem] md:h-[15rem]"
                >
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>


            {/* Carousel Navigation */}
            <div className="flex w-full justify-center gap-2 py-2">
              {selectedPortofolio.screenshot.map((_, index) => (
                <a
                  key={index}
                  href={`#item${index + 1}`}
                  className="btn btn-xs sm:btn-sm rounded-full"
                >
                  {index + 1}
                </a>
              ))}
            </div>

            {/* Title and Description */}
            <h3 className="font-bold text-lg text-black text-center sm:text-left">
              {selectedPortofolio.title}
            </h3>
            <p className="py-2 text-black text-sm sm:text-base text-center sm:text-left">
              {selectedPortofolio.description}
            </p>

            {/* Tags */}
            <p className="text-black text-sm sm:text-base text-center sm:text-left">
              Teknologi:
            </p>
            <div className="card-actions flex flex-wrap gap-2 justify-center sm:justify-start mt-2">
              {selectedPortofolio.tags.map((tag, idx) => (
                <div key={idx} className="badge badge-outline text-black">
                  {tag}
                </div>
              ))}
            </div>

            {/* Close Button */}
            <div className="text-center sm:text-right mt-4">
              <button
                className="btn bg-[#F16634] border-none text-white"
                onClick={() => setSelectedPortofolio(null)}
              >
                Close
              </button>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};

export default Portofolio;
