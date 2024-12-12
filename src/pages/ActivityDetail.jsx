import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ActivityDetail = () => {
  const [artikel, setArtikel] = useState(null); // Menyimpan artikel sebagai null sementara
  const [darkMode, setDarkMode] = useState(false);
  const { id } = useParams(); // Ambil ID dari URL
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    axios
      .get("https://express-mongo-lac.vercel.app/articles") // Ambil data artikel dari API
      .then((response) => {
        const data = response.data;
        console.log("Data yang diterima:", data); // Pastikan data ada dan sesuai
        const filteredArtikel = data.find((item) => item._id === id); // Filter berdasarkan ID
        if (filteredArtikel) {
          setArtikel(filteredArtikel); // Set artikel jika ditemukan
        } else {
          console.error("Artikel tidak ditemukan dengan ID:", id);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Akan dijalankan ulang jika ID berubah

  // Pastikan artikel ada sebelum mencoba merender
  if (!artikel) {
    return (
      <div className="skeleton w-full h-full bg-gray-300 animate-pulse">
        {/* Skeleton loading jika data belum dimuat */}
      </div>
    );
  }

  return (
    <section>
      <div
        style={{
          backgroundColor: darkModes ? "#1E2237" : "#FBF8EF",
          color: darkModes ? "#FFFFFF" : "#000000",
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
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col p-6 gap-6">
          <img className="w-full h-full" src={artikel.gambar} alt={artikel.nama} />
          <div>
            <h2 className="font-bold text-2xl">{artikel.nama}</h2>
            <div className="flex gap-5 mt-5 mb-5">
              <p>UKM-IT Cybernetix</p>
              <p>11 Desember 2023</p>
            </div>
            <p>{artikel.isi}</p>
          </div>
          <div className="flex gap-10 mt-6 justify-center">
            <div className="card bg-white shadow-xl w-[20rem] gap-5 p-10 items-center">
              <p className="font-bold">Apa kata peserta?</p>
              <div className="card bg-black shadow-xl w-[15rem] h-full">
                {/* Ulasan peserta */}
              </div>
            </div>
            <div className="card bg-white shadow-xl w-[20rem] gap-5 h-[20rem] p-10 items-center">
              <p className="font-bold">Apa kata CX?</p>
              <div className="card bg-black shadow-xl w-[15rem] h-full">
                {/* Ulasan CX */}
              </div>
            </div>
          </div>
        </div>
        <Footer darkMode={darkModes} />
      </div>
    </section>
  );
};

export default ActivityDetail;
