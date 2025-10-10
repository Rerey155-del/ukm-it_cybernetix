import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import header1 from "../assets/header/1.png";
import header2 from "../assets/header/2.png";
import header3 from "../assets/header/3.png";
import header4 from "../assets/header/4.png";
import header5 from "../assets/header/5.png";
import header6 from "../assets/header/6.png";
import { useLocation } from "react-router-dom";

const StrukturalPage = () => {
  const [users, setUsers] = useState([]);
  const [litbangUser, setLitbangUser] = useState([]);
  const [psdmUser, setPsdmUser] = useState([]);
  const [infokomUser, setInfokomUser] = useState([]);
  const [humasUser, setHumasUser] = useState([]);
  const [programmingUser, setProgrammingUser] = useState([]);
  const [multimediaUser, setMultimediaUser] = useState([]);
  const [networkingUser, setNetworkingUser] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));
  const [current, setCurrent] = useState(0);

  const headers = [header1, header2, header3, header4, header5, header6];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    Promise.all([
      axios.get("https://express-mongo-lac.vercel.app/steeringcommittee"),
      axios.get("https://express-mongo-lac.vercel.app/litbang"),
      axios.get("https://express-mongo-lac.vercel.app/psdm"),
      axios.get("https://express-mongo-lac.vercel.app/infokom"),
      axios.get("https://express-mongo-lac.vercel.app/humas"),
      axios.get("https://express-mongo-lac.vercel.app/programming"),
      axios.get("https://express-mongo-lac.vercel.app/multimedia"),
      axios.get("https://express-mongo-lac.vercel.app/networking"),
    ])
      .then(
        ([
          steeringResponse,
          litbangResponse,
          psdmResponse,
          infokomResponse,
          humasResponse,
          programmingResponse,
          multimediaResponse,
          networkingResponse,
        ]) => {
          setUsers(steeringResponse.data);
          setLitbangUser(litbangResponse.data);
          setPsdmUser(psdmResponse.data);
          setInfokomUser(infokomResponse.data);
          setHumasUser(humasResponse.data);
          setProgrammingUser(programmingResponse.data);
          setMultimediaUser(multimediaResponse.data);
          setNetworkingUser(networkingResponse.data);
        }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // ✅ Auto fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headers.length]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <section style={{ overflow: "hidden" }}>
      <div
        style={{
          backgroundColor: darkModes ? "#1E2237" : "#FBF8EF",
          color: darkModes ? "#FFFFFF" : "#000000",
          minHeight: "100vh",
          width: "100%",
          boxSizing: "border-box",
          backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733543685/glow_effect_odggcl.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Montserrat",
        }}
      >
        <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />

        {/* ========== Carousel Section ========== */}
        <div className="p-4 sm:p-6 md:p-10 justify-center font-bold text-2xl md:text-3xl mb-4 max-w-full">
          <h2
            data-aos="fade-up"
            className="text-center mb-6 sm:mb-8 md:mb-5 mt-6"
          >
            Struktural 2025/2026
          </h2>

          {/* ✅ Fading Carousel */}
          <div
            className="container mx-auto flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative w-full h-[20rem] sm:h-[28rem] md:h-[40rem] lg:h-[46rem] rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              {headers.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Header ${index + 1}`}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
                    index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                  } 
      object-contain sm:object-cover bg-black`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================= CONTENT STRUCTURE ============================= */}
        <div className="px-2 lg:px-10 max-w-full mt-16">
          <Section
            title="Struktural Inti"
            users={users}
            darkModes={darkModes}
          />
          <Section
            title="Bidang Penelitian & Pengembangan"
            users={litbangUser}
            darkModes={darkModes}
          />
          <Section
            title="Bidang Informasi dan Komunikasi"
            users={infokomUser}
            darkModes={darkModes}
          />
          <Section
            title="Bidang Hubungan Masyarakat"
            users={humasUser}
            darkModes={darkModes}
          />
          <Section
            title="Bidang Pengembangan Sumber Daya Manusia"
            users={psdmUser}
            darkModes={darkModes}
          />

          <div className="container mx-auto text-center text-2xl font-semibold lg:text-3xl mb-4">
            <h2>Divisi</h2>
          </div>

          <Section
            title="Programming"
            users={programmingUser}
            darkModes={darkModes}
          />
          <Section
            title="Multimedia"
            users={multimediaUser}
            darkModes={darkModes}
          />
          <Section
            title="Networking"
            users={networkingUser}
            darkModes={darkModes}
          />
        </div>
      </div>

      <Footer darkMode={darkModes} />
    </section>
  );
};

// 🔹 Komponen reusable untuk bagian struktur
const Section = ({ title, users, darkModes }) => (
  <>
    <div className="container mx-auto pl-4 text-2xl font-semibold lg:text-3xl mb-4">
      <h2>{title}</h2>
    </div>

    <div
      className="container grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
      style={{ overflow: "hidden" }}
    >
      {users.length === 0 &&
        [...Array(4)].map((_, i) => (
          <div
            key={i}
            className="skeleton w-[8rem] sm:w-[10rem] md:w-48 lg:w-60 aspect-square bg-gray-300 rounded-3xl animate-pulse"
          ></div>
        ))}

      {users.map((user, i) => (
        <div
          key={i}
          className={`card-body ${
            darkModes ? "bg-[#32364F]" : "bg-white"
          } sm:w-[10rem] p-6 text-sm md:w-60 lg:w-60 shadow-lg rounded-3xl relative`}
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
            } inset-x-0 bottom-0 h-1/2 rounded-b-3xl pointer-events-none`}
          ></div>
          <div className="text-center md:absolute z-10 inset-x-0 bottom-4">
            <p className="font-bold">{user.nama}</p>
            <p>{user.jabatan}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default StrukturalPage;
