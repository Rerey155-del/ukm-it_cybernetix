import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import porto1 from "../assets/porto1.jpg";
import porto2 from "../assets/porto2.jpg";
import porto3 from "../assets/porto3.png";
import Sidebar from "../Components/Sidebar";

const Portofolio = () => {
  const portofolioData = [
    {
      id: 1,
      title: "Nexus APP Official",
      description:
        "Aplikasi Bengkel Motor dirancang untuk memudahkan pengguna dalam merawat dan memperbaiki kendaraan bermotor mereka. Fitur meliputi jadwal servis otomatis, rekomendasi spare part, serta pelaporan langsung kerusakan. Nexus APP bertujuan memberikan pengalaman pengguna yang cepat dan efisien dalam perawatan kendaraan sehari-hari.",
      foto: porto2,
      tags: ["Figma", "React JS", "Tailwind CSS", "PHP", "MySQL", "Lumen"],
    },
    {
      id: 2,
      title: "Donor.pdg",
      description:
        "Donor.Pdg adalah situs yang menyediakan informasi tentang donor darah untuk membantu pasien yang membutuhkan darah dengan cepat. Platform ini memfasilitasi pengguna untuk menemukan pendonor potensial serta menyimpan riwayat pendonoran untuk keperluan medis masa depan.",
      foto: porto1,
      tags: ["React", "Firebase", "Material-UI"],
    },
    {
      id: 3,
      title: "E-Voting Cybernetix",
      description:
        "E-Voting adalah platform digital yang dirancang untuk mendukung proses pengambilan suara secara online. Sistem ini menawarkan keamanan data, transparansi hasil, dan kemudahan akses bagi semua peserta yang terlibat dalam proses voting.",
      foto: porto3,
      tags: ["React", "Firebase", "Material-UI"],
    },
  ];

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

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
          backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733469856/glow-effect_htt6qz.webp')`,
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
              className={`tekan card cursor-pointer mb-8 ${darkMode ? "bg-[#32364F]" : "bg-white"
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
                <p>{truncateText(item.description, 50)}</p>
                <div className="card-actions justify-end">
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
          <div className="bg-white rounded-lg w-11/12 max-w-5xl p-4">
            <h3 className="font-bold text-lg text-black">{selectedPortofolio.title}</h3>
            <p className="py-2 text-black">{selectedPortofolio.description}</p>
            <div className="card-actions flex flex-wrap gap-2">
              {selectedPortofolio.tags.map((tag, idx) => (
                <div key={idx} className="badge badge-outline text-black">
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-right mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setSelectedPortofolio(null)} // Tutup modal
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
