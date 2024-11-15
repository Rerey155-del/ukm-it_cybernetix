import { useEffect, useState } from "react";
import glowEffect from "../assets/glow effect.svg";
import Navbar from "../Components/Navbar";
import together from "../assets/Together.jpg";
import axios from "axios";
import Sidebar from "../Components/Sidebar";

const StrukturalPage = () => {
  const [users, setUsers] = useState([]);
  const [litbangUser, setLitbangUser] = useState([]);
  const [psdmUser, setPsdmUser] = useState([]);
  const [infokomUser, setInfokomUser] = useState([]);
  const [humasUser, setHumasUser] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("https://express-mongo-lac.vercel.app/steeringcommittee"),
      axios.get("https://express-mongo-lac.vercel.app/litbang"),
      axios.get("https://express-mongo-lac.vercel.app/psdm"),
      axios.get("https://express-mongo-lac.vercel.app/infokom"),
      axios.get("https://express-mongo-lac.vercel.app/humas"),
    ])
      .then(([steeringResponse, litbangResponse, psdmResponse, infokomResponse, humasResponse]) => {
        setUsers(steeringResponse.data);
        setLitbangUser(litbangResponse.data);
        setPsdmUser(psdmResponse.data);
        setInfokomUser(infokomResponse.data);
        setHumasUser(humasResponse.data)// Menyimpan data untuk pengguna litbang
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section style={{ overflow: "hidden" }}>
      <div

        style={{
          background: `linear-gradient(
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.5)
          ), url(${glowEffect})`,
          minHeight: "100vh",
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          overflowX: "hidden",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Lora",
        }}
        className="text-black"
      >
        <Navbar />
        <Sidebar />
        <div className="font-[Lora] p-4 sm:p-6 md:p-10 justify-center font-bold text-2xl md:text-3xl mb-4 max-w-full mt-6">
          <h2 data-aos="fade-up" className="text-center mb-6 sm:mb-8 md:mb-5">
            Struktural 2024/2025
          </h2>
          <img
            data-aos="zoom-in"
            className="rounded-2xl w-full h-auto max-h-[40rem] sm:max-h-[28rem] md:max-h-[32rem] lg:max-h-[36rem] object-cover mx-auto"
            src={together}
            alt=""
          />
        </div>


        <div className="px-2 lg:px-10 max-w-full mt-16">
          <h2 className="pl-4 text-2xl font-[Lora] font-semibold lg:text-3xl mb-4">
            Struktural Inti
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 space-y-3 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }}
          >
            {users.map((user, index) => (
              <div
                key={index}
                className="bg-white card-body sm:w-[10rem] p-6 text-sm  md:w-60  lg:w-60 rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-full h-auto rounded-t-3xl object-cover"
                />
                <div className="text-center mt-3">
                  <p className="font-bold text-base md:text-lg">{user.nama}</p>
                  <p className="text-sm md:text-base">{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="pl-4 text-2xl font-[Lora] font-semibold lg:text-3xl mb-4 mt-4">
            Bidang Penelitian & Pengembangan
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {litbangUser.map((user, index) => (
              <div
                key={index}
                className="bg-white card-body sm:w-[10rem] p-6 text-sm  md:w-60  lg:w-60  rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-full h-auto rounded-t-3xl"
                />
                <div className="text-center mt-3">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="pl-4 text-2xl font-[Lora] font-semibold lg:text-3xl mb-4 mt-4">
            Bidang Informasi dan Komunikasi
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {infokomUser.map((user, index) => (
              <div
                key={index}
                className="bg-white card-body sm:w-[10rem] p-6 text-sm  md:w-60  lg:w-60  rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-full h-auto rounded-t-3xl"
                />
                <div className="text-center mt-3">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="pl-4 text-2xl font-[Lora] font-semibold lg:text-3xl mb-4 mt-4">
            Bidang Hubungan Masyarakat
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {humasUser.map((user, index) => (
              <div
                key={index}
                className="bg-white card-body sm:w-[10rem] p-6 text-sm  md:w-60  lg:w-60  rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-full h-auto rounded-t-3xl"
                />
                <div className="text-center mt-3">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="pl-4 text-2xl font-[Lora] font-semibold lg:text-3xl mb-4 mt-4">
            Bidang Pengembangan Sumber Daya Manusia
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8 mx-auto justify-items-center font-[Inter]"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {psdmUser.map((user, index) => (
              <div
                key={index}
                className="bg-white card-body sm:w-[10rem] p-6 text-sm  md:w-60  lg:w-60  rounded-3xl"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src={user.foto}
                  alt={user.nama}
                  className="w-full h-auto rounded-t-3xl"
                />
                <div className="text-center mt-3">
                  <p className="font-bold">{user.nama}</p>
                  <p>{user.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturalPage;
