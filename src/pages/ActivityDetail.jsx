import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import foto1 from "../Assets/activity1.png";


const DeveloperPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const location = useLocation(); // Mendapatkan informasi lokasi/rute saat ini
  const darkModes = JSON.parse(localStorage.getItem("darkMode"));

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll ke atas
  // }, [location]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };


  return (
    <section>
      <div
        style={{
          backgroundColor: darkModes ? "#1E2237" : "#FBF8EF", // Warna berdasarkan mode
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
          fontFamily: "Outfit",
        }}
        className=" flex flex-col"
      > <Navbar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <Sidebar darkMode={darkModes} toggleDarkMode={toggleDarkMode} />
        <img className="w-full h-full" src={foto1} alt="" />
        <div className="flex p-6 gap-6">
          <div>
            <h2 className="font-bold text-2xl">Cybernetix Festival 2023: Tech Connect Bridging Digital Realims</h2>
            <div className="flex gap-5 mt-5 mb-5">
              <p>UKM-IT Cybernetix</p>
              <p>11 Desember 2023</p>
            </div>
            <div>
              <p>Cybernetix Festival 2023 kembali hadir sebagai program kerja terbesar  UKM-IT Cybernetix yang membawa semangat inovasi dan teknologi kepada generasi muda.
                Acara ini menjadi wadah inspirasi, edukasi dan hiburan bagi para pecinta teknologi di Padang dan sekitarnya.
                Mengusung tema “Tech Connect Bridging Digital Realms”, festival ini bertujuan untuk menampilkan perkembangan teknologi terkini dan memberikan pengalaman berharga kepada peserta. Cybernetix Festival tidak hanya melulu soal teknologi, namun juga  hiburan menarik berupa pertunjukan seni dan musik oleh masyarakat setempat.</p>
              <p>Ini adalah waktu yang tepat untuk bersantai dan menikmati suasana pesta.
                Salah satu yang menarik dari festival ini adalah Bazaar Teknologi yang menarik banyak pengunjung.
                Di sini peserta dapat menemukan produk-produk dari UMKM lokal, karya kreatif mahasiswa, dan perangkat teknologi terkini.
                Suasana  bazar yang semarak ini menjadi bukti antusiasme masyarakat terhadap perkembangan teknologi dan digitalisasi.</p>
            </div>
            <div className="flex gap-10 mt-6 justify-center">
              <div className="card bg-white shadow-xl w-[20rem]  gap-5 p-10 items-center">
                <p className="font-bold">Apa kata peserta?</p>
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
              </div>
              <div className="card card bg-white shadow-xl w-[20rem] gap-5 h-[20rem] p-10 items-center ">
                <p className="font-bold">Apa kata CX?</p>
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
                <div className="card bg-black shadow-xl w-[15rem] h-full " />
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-xl w-[100rem] h-[50rem] gap-5 p-10 items-center">
            <div className="card bg-black shadow-xl w-[15rem] h-full " />
            <div className="card bg-black shadow-xl w-[15rem] h-full " />
            <div className="card bg-black shadow-xl w-[15rem] h-full " />
          </div>
        </div>
      </div>
      <Footer darkMode={darkModes} />
    </section>

  )
}

export default DeveloperPage