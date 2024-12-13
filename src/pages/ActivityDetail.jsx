import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ActivityDetail = () => {
  const [artikel, setArtikel] = useState(null); 
  const [darkMode, setDarkMode] = useState(false);
  const { id } = useParams(); // Ambil ID dari URL
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    // Menggunakan id untuk fetch data dari backend
    axios
      .get(`https://express-mongo-lac.vercel.app/articles/${id}`) // Endpoint backend untuk mengambil artikel berdasarkan id
      .then((response) => {
        setArtikel(response.data); // Set data yang diterima ke state artikel
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Efek dijalankan setiap kali id berubah

  // Pastikan artikel ada sebelum mencoba merender
  if (!artikel) {
    return (
      <div className="skeleton w-full h-full bg-gray-300 animate-pulse">
        
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
        <div className="flex flex-col gap-6">
          <img className="w-full h-full" src={artikel.gambar} alt={artikel.nama} data-aos="zoom-in" />
          <div className="flex mt-4 container mx-auto" data-aos="fade-up">
            <div className=" p-5">
              <h2 className="font-bold text-2xl">{artikel.nama}</h2>
              <div className="flex gap-5 mt-5 mb-5">
                <p>UKM-IT Cybernetix</p>
                <p>11 Desember 2023</p>
              </div>
              <p>{artikel.isi}</p>

              <div className="flex gap-10 mt-6 justify-center">
                <div className={`card ${darkModes? "bg-[#32364F]" : "bg-white"} h-full shadow-xl w-[25rem] gap-5 p-10 items-center`}>
                  <p className="font-bold ">Apa kata peserta?</p>
                  {artikel.reviewPeserta?.map((review, index) => (
                    <div key={index} className= {`p-4 ${darkModes? "bg-[#383E5E]" : "bg-white"} card bg-black shadow-xl w-[20rem]`}>
                      <p>{review}</p> 
                    </div>
                  ))}

                </div>
                <div className={`card ${darkModes? "bg-[#32364F]" : "bg-white"} shadow-xl w-[25rem] gap-5 h-full p-10 items-center`}>
                  <p className="font-bold">Apa kata CX?</p>

                  {artikel.reviewCX?.map((review, index) => (
                    <div key={index} className={`p-4  card shadow-xl w-[20rem] ${
                      darkModes ? "bg-[#383E5E]" : "bg-white"
                    }`}>
                      <p>{review}</p> 
                    </div>
                  ))}

                </div>

              </div>
            </div>
            <div className={`card ${darkModes?"bg-[#32364F]" : "bg-white"} h-full shadow-xl w-[25rem] gap-5 p-10 items-center`}>
              <p className=" font-bold ">Highlight Activity</p>
                {artikel.reviewCX?.map((review, index) => (
                <div key={index} className={`p-4  card shadow-xl w-[20rem] ${
                  darkModes ? "bg-[#383E5E]" : "bg-white"
                }`}>
                  <p>{review}</p>
                </div>
              ))}

            </div>
          </div>
        </div>

        <Footer darkMode={darkModes} />
      </div>
    </section>
  );
};

export default ActivityDetail;
