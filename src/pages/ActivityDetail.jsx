import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ActivityDetail = () => {
  const [artikel, setArtikel] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { id } = useParams(); // Ambil ID dari URL
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));
  const location = useLocation();
  const [highlightArticles, setHighlightArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  useEffect(() => {
    // Menggunakan Promise.all untuk menjalankan kedua permintaan API secara bersamaan
    Promise.all([
      axios.get(`https://express-mongo-lac.vercel.app/articles/${id}`), // Ambil artikel berdasarkan id
      axios.get("https://express-mongo-lac.vercel.app/articles") // Ambil semua artikel
    ])
      .then(([artikelResponse, allArtikelResponse]) => {
        setArtikel(artikelResponse.data); // Set data artikel berdasarkan id
        setHighlightArticles(allArtikelResponse.data); // Set data artikel highlight
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Efek dijalankan setiap kali id berubah

  const showartikelDetail = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/activitydetail/${id}`); // Arahkan ke halaman detail artikel dengan ID
    }, 2000);
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, [location]);

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
          {/* Kondisi jika artikel masih null */}
          {!artikel ? (
            <div className="skeleton mx auto bg-transparent mb-6 mt-16 p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full h-[35rem] animate-pulse" />
          ) : (
            <>
              <img
                className="w-full h-auto sm:h-[20rem] md:h-[30rem] object-cover"
                src={artikel.gambar}
                alt={artikel.nama}
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <div
                className="flex flex-col lg:flex-row gap-4 container mx-auto p-4"
                data-aos="fade-up"
              >
                <div className="p-5">
                  <h2 className="font-bold text-2xl lg:text-3xl">{artikel.nama}</h2>
                  <div className="flex gap-5 mt-5 mb-5">
                    <p>UKM-IT Cybernetix</p>
                    <p>11 Desember 2023</p>
                  </div>
                  <p>{artikel.isi}</p>

                  <div className="grid gap-10 mt-6 justify-center grid-cols-1 sm:grid-cols-2">
                    {/* Kartu Review Peserta */}
                    <div
                      className={`card ${darkModes ? "bg-[#32364F]" : "bg-white"} h-full shadow-xl w-full gap-5 p-6 md:p-10 items-center`}
                    >
                      <p className="font-bold ">Apa kata peserta?</p>
                      {artikel.reviewPeserta?.map((review, index) => (
                        <div
                          key={index}
                          className={`p-4 card shadow-xl w-full ${darkModes ? "bg-[#383E5E]" : "bg-white"}`}
                        >
                          <div className="flex items-center gap-5">
                            {artikel.fotoReviewPeserta &&
                              artikel.fotoReviewPeserta[index] && (
                                <img
                                  src={artikel.fotoReviewPeserta[index]}
                                  className="w-12 h-12 object-cover rounded-full items-center"
                                />
                              )}
                            <p className="text-sm">{review}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Kartu Review CX */}
                    <div
                      className={`card ${darkModes ? "bg-[#32364F]" : "bg-white"} shadow-xl w-full gap-5 h-full p-6 md:p-10 items-center`}
                    >
                      <p className="font-bold">Apa kata CX?</p>
                      {artikel.reviewCX?.map((review, index) => (
                        <div
                          key={index}
                          className={`p-4 card shadow-xl w-full ${darkModes ? "bg-[#383E5E]" : "bg-white"}`}
                        >
                          <div className="flex items-center gap-5">
                            {artikel.fotoReviewCX &&
                              artikel.fotoReviewCX[index] && (
                                <img
                                  src={artikel.fotoReviewCX[index]}
                                  className="w-12 h-12 object-cover rounded-full items-center"
                                />
                              )}
                            <p className="text-sm">{review}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                <div
                  className={`card ${darkModes ? "bg-[#32364F]" : "bg-white"} h-full shadow-xl w-full sm:w-[25rem] gap-5 p-10 items-center mx-auto`}
                >
                  <p className="font-bold">Highlight Activity</p>
                  {highlightArticles.length > 0 ? (
                    // Randomize articles and take only the first 4
                    highlightArticles
                      .sort(() => Math.random() - 0.5) // Randomize the array
                      .slice(0, 4) // Take the first 4 articles
                      .map((article, index) => (
                        <div
                          key={index}
                          className={`card shadow-xl w-full sm:w-[20rem] rounded-xl cursor-pointer mx-auto`}
                          onClick={() => showartikelDetail(article.numericId)}
                        >
                          <img
                            src={article.gambar}
                            alt={article.nama}
                            className="w-full h-40 object-cover rounded-xl"
                          />
                          <div
                            className={`absolute ${darkModes
                              ? "bg-gradient-to-t from-black via-black/90 to-transparent"
                              : "bg-gradient-to-t from-black via-black/90 to-transparent"
                              } inset-x-0 bottom-0 h-4/6 rounded-b-lg pointer-events-none`}
                          ></div>
                          <h3 className="absolute bottom-2 p-2 text-white">{article.nama}</h3>
                        </div>
                      ))
                  ) : (
                    <p>Memuat Artikel Terbaru...</p>
                  )}
                </div>

              </div>
            </>
          )}
        </div>
        {/* =============  Modal Loading  ================= */}
        {isLoading && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center font-[Inter]">
            <div className=" p-6 rounded-lg flex flex-col items-center">
              <l-grid size="70" speed="1.75" color="#F16634"></l-grid>
              <p className="mt-4 font-bold text-lg text-white">Loading...</p>
            </div>
          </div>
        )}
        <Footer darkMode={darkModes} />
      </div>
    </section>
  );
};

export default ActivityDetail;
