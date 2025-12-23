import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Network from "../assets/Networking.svg";
import Multimedia from "../assets/Multimedia.svg";
import Programming from "../assets/Programming.svg";
import axios from "axios";
import { tailChase } from "ldrs";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
tailChase.register();
import Footer from "../Components/Footer";
import Frame from "../assets/header/avatar.svg";
import porto1 from "../assets/porto1.jpg";
import porto2 from "../assets/porto2.jpg";
import porto3 from "../assets/porto3.png";
import { Link } from "react-router-dom"; // Import Link dari React Router
import fotolagi from "../assets/fotolagi.png";
import bootcamp from "../assets/bootcamp.png";
import diesnatalis from "../assets/diesnatalis.png";
import outbond from "../assets/outbond.png";
import ldk from "../assets/LDK.png";
import Outdoor from "../assets/Outdoor.png";
import Webinar from "../assets/Webinar.png";
import cyberfest from "../assets/cyberfest.png";

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Mendapatkan informasi lokasi/rute saat ini
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas
  }, [location]); // Akan dijalankan saat lokasi (URL) berubah

  useEffect(() => {
    axios
      .get("https://express-mongo-lac.vercel.app/steeringcommittee")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const showLoadingStruktural = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/struktural"); // Ganti "/nextPage" dengan path halaman tujuan Anda
    }, 2000);
  };
  const showLoadingPortofolio = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/portofolio"); // Ganti "/nextPage" dengan path halaman tujuan Anda
    }, 2000);
  };

  return (
    <section>
      <div
        style={{
          backgroundColor: darkModes ? "#1E2237" : "#FBF8EF", // Ubah warna berdasarkan darkMode
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
        className=" overflow-y-auto text-black"
      >
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />

        <div className="container p-6 sm:p-8 md:p-12 lg:px-4 mx-auto items-center grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-10 sm:mb-16 mt-4 sm:mt-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-center md:text-left"
          >
            <div className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-2 sm:mb-4 text-left">
              <h1>UKM-IT</h1>
              <h1>
                <span className="text-[#F16634]">C</span>
                YBERNETI
                <span className="text-[#F16634]">X</span>
              </h1>
            </div>

            <div>
              <p className="break-words w-full md:w-[30em] lg:w-[35em] mx-auto md:mx-0 mb-5 font-[Inter] text-sm sm:text-base text-left md:text-lg lg:text-xl">
                Wadah pemberdayaan mahasiswa yang berfokus membangun
                keterampilan dalam mengenal dunia teknologi
              </p>
              <a
                href="https://forms.gle/3JPxgNGxx2xNWRev8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-3xl bg-[#F16634] text-white p-3 px-4 font-semibold cursor-pointer transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                Gabung Sekarang
              </a>
            </div>
          </div>
          <div
            className="image-container mx-auto md:mx-0"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <label className="swap swap-flip text-9xl">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              <div className="swap-on tooltip" data-tip="😍">
                <img
                  src={fotolagi}
                  alt=""
                  className="w-[300px] h-[350px] md:w-[450px] md:h-full lg:w-[450px] lg:h-full max-w-full"
                />
              </div>
              <div className="swap-off tooltip" data-tip="😁">
                <img
                  src={Frame}
                  alt=""
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] max-w-full"
                />
              </div>
            </label>
          </div>
        </div>

        <div>
          <div className="text-xl justify-center text-center font-bold lg:text-2xl mb-16">
            <h2>Unit Kegiatan Mahasiswa </h2>
            <h2>Dengan Divisi Standar Industri</h2>
          </div>

          <div className="container grid grid-cols-1 gap-4 px-6 mx-auto justify-items-center font-[Inter] md:grid-cols-2 lg:grid-cols-3">
            <div
              className={`sm:h-[200px] ${
                darkModes ? "bg-[#32364F]" : "bg-white"
              } card-body lg:h-full w-80 shadow-2xl rounded-3xl cursor-pointer  hover:shadow-lg`}
            >
              <div className="cursor-pointer">
                <Link to="/multimedia" className="block">
                  <img
                    src={Multimedia}
                    alt=""
                    className="w-20 lg:w-28 lg:h-28"
                  />
                </Link>
              </div>
              <Link to="/multimedia" className="block">
                <h2 className="card-title">Multimedia</h2>
                <p>UIX Design, Design, Video Editing</p>
              </Link>
            </div>

            <div
              className={`sm:h-[200px] ${
                darkModes ? "bg-[#32364F]" : "bg-white"
              } card-body lg:h-full w-80 shadow-2xl rounded-3xl cursor-pointer  hover:shadow-lg`}
            >
              <div className="cursor-pointer">
                <Link to="/programming" className="block">
                  <img
                    src={Programming}
                    alt=""
                    className="w-16 lg:w-28 lg:h-28"
                  />
                </Link>
              </div>
              <Link to="/programming" className="block">
                <h2 className="card-title">Programming</h2>
                <p>Frontend Dev & Backend Dev</p>
              </Link>
            </div>

            <div
              className={`sm:h-[200px] ${
                darkModes ? "bg-[#32364F]" : "bg-white"
              } card-body lg:h-full w-80 shadow-2xl rounded-3xl cursor-pointer  hover:shadow-lg`}
            >
              <div className="cursor-pointer">
                <Link to="/networking" className="block">
                  <img src={Network} alt="" className="w-20 lg:w-28 lg:h-28" />
                </Link>
              </div>
              <Link to="/networking" className="block">
                <h2 className="card-title">Networking</h2>
                <p>Networking Fundamental</p>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mb-20 mt-[8rem]">
          <div>
            <div className="justify-center text-xl text-center font-bold lg:text-2xl lg:mb-5">
              <h2>Portofolio Kami</h2>
            </div>
            <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 mx-auto justify-items-center font-[Inter]">
              <div className="bg-white card w-80 shadow-xl rounded-3xl ">
                <img src={porto1} alt="" className="rounded-3xl" />
              </div>

              <div className="bg-white card w-80 shadow-xl rounded-3xl  ">
                <img src={porto2} alt="" className="rounded-3xl" />
              </div>

              <div className="bg-white card w-80 shadow-xl rounded-3xl  ">
                <img src={porto3} alt="" className="rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="flex justify-center font-semibold text-lg mb-24 mt-7 font-[Inter]">
            <button
              className="p-3 bg-[#F16634] text-white rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg "
              onClick={showLoadingPortofolio}
            >
              Selengkapnya
            </button>
          </div>

          <div
            className={`p-4 h-16 ${
              darkModes ? "bg-[#F16634]" : "bg-[#383838]"
            }   lg:h-36 w-full  lg:p-8  `}
          >
            <div className="gap-6 flex items-center justify-center text-white text-xl lg:gap-40  ">
              <div className="text-xs text-center lg:space-y-3 lg:text-xl ">
                <p>340+</p>
                <p>anggota aktif</p>
              </div>
              <div className="space-x-3">
                <span>|</span>
              </div>
              <div className="text-xs text-center lg:space-y-3 lg:text-xl">
                <p>340+</p>
                <p>Total Alumni</p>
              </div>
              <div className="space-x-3">
                <span>|</span>
              </div>
              <div className="text-xs text-center lg:space-y-3 lg:text-xl ">
                <p>n/A</p>
                <p>Project</p>
              </div>
            </div>
          </div>

          <div className="text-xl justify-center text-center font-bold lg:text-2xl mb-7 mt-[3rem]">
            <h2>Dedikasi Berbuah Cerita Yang Mengesankan</h2>

            <div className="mx-auto justify-items-center container grid grid-cols-1 flex gap-4 px-8 mt-10 lg:flex gap-4 mt-10 lg:px-12 ">
              {/* Gambar Utama */}
              <div className="flex-1 relative">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={cyberfest}
                  alt="Featured Image"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                  Cyberfest 2023
                </div>
              </div>

              {/* Grid 4 Gambar */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg object-cover"
                    src={bootcamp}
                    alt="Image 2"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    CX Bootcamp 2023
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg c object-cover"
                    src={diesnatalis}
                    alt="Image 3"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    Dies Natalis 17th
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg object-cover"
                    src={outbond}
                    alt="Image 4"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    CX Outbound
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg object-cover"
                    src={ldk}
                    alt="Image 5"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    Latihan Dasar Kepemimpinan
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg object-cover "
                    src={Outdoor}
                    alt="Image 5"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    CX Outdoor
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="h-auto w-full rounded-lg object-cover"
                    src={Webinar}
                    alt="Image 5"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm rounded-lg">
                    Webinar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 lg:px-10 max-w-full mt-16">
            <div>
              <h2 className="text-xl text-center font-bold lg:text-2xl mb-5">
                Hilangkan Rasa Penasaran Dengan mengenal bagian dari kami
              </h2>
            </div>

            <div className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:p-8 mx-auto justify-items-center font-[Inter]">
              {/* Tampilkan Skeleton Loader jika users kosong */}
              {users.length === 0 &&
                [...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
                  ></div>
                ))}

              {/* Tampilkan Data dari Database */}
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`card-body ${
                    darkModes ? "bg-[#32364F]" : "bg-white"
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={user.foto}
                    alt={user.nama}
                    className="md:h-[12rem] rounded-xl w-full"
                  />
                  <div
                    className={`absolute ${
                      darkModes
                        ? "bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent"
                        : "bg-gradient-to-t from-white via-white/90 to-transparent"
                    } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}
                  ></div>
                  <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                    <p className="font-bold">{user.nama}</p>
                    <p>{user.jabatan}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center font-semibold text-lg mb-10 mt-7 font-[Inter]">
              <button
                className="p-3 bg-[#F16634] text-white rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                onClick={showLoadingStruktural}
              >
                Selengkapnya
              </button>
            </div>
          </div>
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
      </div>
      <Footer darkMode={darkModes} />
    </section>
  );
};

export default LandingPage;
