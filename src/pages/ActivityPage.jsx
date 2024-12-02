// eslint-disable-next-line no-undef
import glowEffect from "../assets/glow effect.svg";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const ActivityPage = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
    AOS.refresh(); // Memastikan animasi ter-update
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0), []
  })

  useEffect(() => {
    axios
      .get("https://express-mongo-lac.vercel.app/articles")
      .then((response) => {
        setArtikel(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section>
      <div
        style={{
          backgroundColor: "#FBF8EF", // Warna putih dengan transparansi 80%
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
        className="overflow-y-auto text-black"
      >
        <Navbar />
        <Sidebar />
        <div className=" p-4 sm:p-6 md:p-10 justify-center text-2xl md:text-3xl mb-4 max-w-full mt-6">
          <h2 className=" mt-2 text-center text-2xl font-semibold lg:text-3xl mb-4">
            Activity of Cybernetix
          </h2>

          <div className=" px-4 py-4 mb-6">
            {/* menamplkan skeleton */}
            {artikel.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton rounded-3xl shadow-md mb-6 p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 min-w-[300px] h-[23rem] border animate-pulse"
                ></div>
              ))}
            {/* mapping data */}
            {artikel.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md mb-6 p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 min-w-[300px] border"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {/* Bagian Gambar */}
                <div className="w-full">
                  <img
                    src={user.gambar}
                    alt={user.nama}
                    className="w-full h-auto lg:h-[20rem] rounded-3xl object-cover"
                  />
                </div>

                {/* Bagian Konten */}
                <div className="px-4 lg:pt-4 w-full">
                  <p className="text-2xl font-bold mb-4">{user.nama}</p>
                  <p className="text-sm text-gray-600 mb-4">{user.isi.length > 100 ? `${user.isi.substring(0, 100)}...` : user.isi}</p>
                  <button className="font-[Inter] text-sm rounded bg-[#F16634] px-4 py-2 text-white hover:bg-[#d14f28] transition">
                    Lihat detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  )
}

export default ActivityPage