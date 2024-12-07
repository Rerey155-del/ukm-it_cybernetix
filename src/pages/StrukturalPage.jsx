import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import together from "../assets/Together.jpg";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import { useLocation } from "react-router-dom";

const StrukturalPage = () => {
  const [users, setUsers] = useState([]);
  const [litbangUser, setLitbangUser] = useState([]);
  const [psdmUser, setPsdmUser] = useState([]);
  const [infokomUser, setInfokomUser] = useState([]);
  const [humasUser, setHumasUser] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));


  useEffect(() => {
    // Logika autoscroll setiap kali rute berubah
    window.scrollTo(0, 0); // Scroll ke atas
  }, [location]); // Akan dijalankan saat lokasi (URL) berubah


  useEffect(() => {
    Promise.all([
      axios.get("https://express-mongo-lac.vercel.app/steeringcommittee"),
      axios.get("https://express-mongo-lac.vercel.app/litbang"),
      axios.get("https://express-mongo-lac.vercel.app/psdm"),
      axios.get("https://express-mongo-lac.vercel.app/infokom"),
      axios.get("https://express-mongo-lac.vercel.app/humas"),
    ])
      .then(
        ([
          steeringResponse,
          litbangResponse,
          psdmResponse,
          infokomResponse,
          humasResponse,
        ]) => {
          setUsers(steeringResponse.data);
          setLitbangUser(litbangResponse.data);
          setPsdmUser(psdmResponse.data);
          setInfokomUser(infokomResponse.data);
          setHumasUser(humasResponse.data); // Menyimpan data untuk pengguna litbang
        }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };


  return (
    <section style={{ overflow: "hidden" }}>
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
        className=" text-black"
      >
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar />
        <div className=" p-4 sm:p-6 md:p-10 justify-center font-bold text-2xl md:text-3xl mb-4 max-w-full mt-6">
          <h2 data-aos="fade-up"  className="text-center mb-6 sm:mb-8 md:mb-5">
            Struktural 2024/2025
          </h2>

          <img
            data-aos="zoom-in" 
            className="container rounded-2xl w-full h-zauto max-h-[40rem] sm:max-h-[28rem] md:max-h-[32rem] lg:max-h-[36rem] object-cover mx-auto shadow-xl"
            src={together}
            alt=""
          />
        </div>

        <div className=" px-2 lg:px-10 max-w-full mt-16">
        <div className="container mx-auto pl-4 text-2xl  font-semibold lg:text-3xl mb-4">
          <h2
          >
            Struktural Inti
          </h2>
</div>
          <div
            className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {/* Tampilkan Skeleton Loader jika users kosong */}
            {users.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"

                ></div>
              ))}
            {users.map((user, index) => (
              <div
                key={index}
                className={`card-body ${darkModes ? 'bg-[#32364F]' : 'bg-white'
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={user.foto} alt={user.nama} className="md:h-[12rem] rounded-xl w-full" />
                <div className={`absolute ${darkModes ? 'bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'
                  } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}></div>
                <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="container mx-auto pl-4 text-2xl  font-semibold lg:text-3xl mb-4">
          <h2 
          >
            Bidang Penelitian & Pengembangan
          </h2>
          </div>
          <div
            className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter] "
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {/* Tampilkan Skeleton Loader jika users kosong */}
            {litbangUser.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
                ></div>
              ))}
            {litbangUser.map((user, index) => (
              <div
                key={index}
                className={`card-body ${darkModes ? 'bg-[#32364F]' : 'bg-white'
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={user.foto} alt={user.nama} className="md:h-[12rem] rounded-xl w-full" />
                <div className={`absolute ${darkModes ? 'bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'
                  } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}></div>
                <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto pl-4 text-2xl  font-semibold lg:text-3xl mb-4">
          <h2>
            Bidang Informasi dan Komunikasi
          </h2>
          </div>
          <div
            className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {/* Tampilkan Skeleton Loader jika users kosong */}
            {infokomUser.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
                ></div>
              ))}
            {infokomUser.map((user, index) => (
              <div
                key={index}
                className={`card-body ${darkModes ? 'bg-[#32364F]' : 'bg-white'
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={user.foto} alt={user.nama} className="md:h-[12rem] rounded-xl w-full" />
                <div className={`absolute ${darkModes ? 'bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'
                  } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}></div>
                <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto pl-4 text-2xl  font-semibold lg:text-3xl mb-4">
          <h2
          >
            Bidang Hubungan Masyarakat
          </h2>
          </div>
          <div
            className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {/* Tampilkan Skeleton Loader jika users kosong */}
            {humasUser.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
                ></div>
              ))}
            {humasUser.map((user, index) => (
              <div
                key={index}
                className={`card-body ${darkModes ? 'bg-[#32364F]' : 'bg-white'
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={user.foto} alt={user.nama} className="md:h-[12rem] rounded-xl w-full" />
                <div className={`absolute ${darkModes ? 'bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'
                  } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}></div>
                <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container mx-auto pl-4 text-2xl  font-semibold lg:text-3xl mb-4">
          <h2
          >
            Bidang Pengembangan Sumber Daya Manusia
          </h2>
          </div>
          <div
            className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter] mb-6"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {/* Tampilkan Skeleton Loader jika users kosong */}
            {psdmUser.length === 0 &&
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
                ></div>
              ))}
            {psdmUser.map((user, index) => (
              <div
                key={index}
                className={`card-body ${darkModes ? 'bg-[#32364F]' : 'bg-white'
                  } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={user.foto} alt={user.nama} className="md:h-[12rem] rounded-xl w-full" />
                <div className={`absolute ${darkModes ? 'bg-gradient-to-t from-[#32364F] via-[#32364F]/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'
                  } inset-x-0 bottom-0 h-1/2  rounded-b-3xl pointer-events-none`}></div>
                <div className="text-center md:absolute z-10 inset-x-0 bottom-4 ">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer darkMode={darkModes} />
    </section>
  );
};

export default StrukturalPage;
