import glowEffect from "../assets/glow effect.svg";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import UKM from "../assets/UKMIT.svg";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import porto1 from "../assets/porto1.jpg";
import porto2 from "../assets/porto2.jpg";


const Programming = ({ darkMode, toggleDarkMode }) => {
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
          backgroundImage: `url(${glowEffect})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Montserrat",
        }}
        className="text-black"
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />

        {/* Header Section */}
        <div className="container mx-auto px-4 py-10 mt-6">
          <h2 className="text-4xl font-bold text-center mb-6">Networking</h2>
          <p className="text-lg text-black mb-10">
            Divisi Networking UKM-IT Cybernetix adalah ruang bagi anggota untuk
            mendalami konsep jaringan komputer dan keamanan siber. Divisi ini
            dirancang untuk memberikan pengetahuan dan keterampilan praktis
            terkait pengelolaan, pemeliharaan, serta keamanan jaringan, yang
            sangat penting di dunia teknologi saat ini.
          </p>
          <section className="mb-10">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong> Dasar Jaringan Komputer:</strong> Mengajarkan
                prinsip-prinsip dasar jaringan, mulai dari model OSI, TCP/IP,
                hingga konfigurasi jaringan lokal(LAN) dan jaringan luas(WAN).
              </li>
              <li>
                <strong>Keamanan Jaringan:</strong> Memperkenalkan konsep
                keamanan jaringan, termasuk firewall, enkripsi, dan pencegahan
                intrusi, guna membekali anggota dengan keterampilan dalam
                melindungi data dan sistem dari ancaman siber.
              </li>
              <li>
                <strong>Administrasi dan konfigurasi:</strong> Melatih anggota
                dalam konfigurasi perangkat jaringan, seperti router dan switch,
                serta teknik troubleshooting jaringan untuk memastikan jaringan
                berfungsi dengan baik
              </li>
            </ul>
          </section>
          <p className="text-lg text-black mb-10">
            Melalui berbagai pelatihan praktis, simulasi, dan proyek
            kolaboratif, Divisi Networking UKM-IT Cybernetix mencipatakan
            lingkungan yang mendukung untuk belajar dan berksperimen.Anggota
            dibimbing unutk menjadi ahli dalam pengelolaan jaringan yang stabil,
            aman, dan efektif.Mempersiapkan mereka menghadapi kebutuhan
            teknologi informasi yang semakin kompleks.
          </p>
        </div>

        {/* Portfolio Programming Section */}
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-semibold text-center mb-8 text-black">
            Portofolio Networking
          </h2>
          <div className="flex flex-col gap-12">
            {[
              {
                title: "re-Design UI Kopi Kenangan",
                description:
                  "Event ini diadakan untuk memperkenalkan dunia Teknologi Informasi (TI) kepada masyarakat dan mahasiswa. Acara ini mencakup beberapa kegiatan, seperti Coding, Cerdas Cermat, Seminar, UI/UX, Video Pendek, Poster, dan Bazar.",
                image: porto1,
              },
              {
                title: "UI Design Train Tic",
                description:
                  "Kegiatan ini diadakan untuk meningkatkan sumber daya manusia yang ada pada UKM IT Cybernetix. Bootcamp ini dilakukan secara daring melalui platform Discord dan menggunakan materi yang relevan dengan dunia industri.",
                image: porto2,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-6"
              >
                {/* Bagian Gambar */}
                <div className="w-full lg:w-1/2 max-w-[500px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>

                {/* Bagian Konten */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-black mb-6">{item.description}</p>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-200">
                    Lihat detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Programming;
