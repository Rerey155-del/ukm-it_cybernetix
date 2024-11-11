import { useEffect, useState } from "react";
import glowEffect from "../assets/glow effect.svg";
import Navbar from "../Components/Navbar";
import together from "../assets/Together.jpg";
import axios from "axios";

const StrukturalPage = () => {
  const [users, setUsers] = useState([]);
  const [litbangUser, setLitbangUser] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:2080/steeringcommittee"),
      axios.get("http://localhost:2080/litbang"),
    ])
      .then(([steeringResponse, litbangResponse]) => {
        setUsers(steeringResponse.data);
        setLitbangUser(litbangResponse.data); // Menyimpan data untuk pengguna litbang
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section style={{ overflow: "hidden" }}>
      <div
      
        style={{
          
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          overflowX: "hidden",
          overflowY: "hidden", // Menghilangkan scroll vertikal
          backgroundImage: `url(${glowEffect})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontFamily: "Lora",
        }}
        className="text-black"
      >
        <Navbar />
        <div className="font-[Lora] p-10 justify-center font-bold text-3xl mb-4 max-w-full mt-6">
          <h2 data-aos="fade-up" className="text-center mb-10">
            Struktural 2024/2025
          </h2>
          <img
            data-aos="zoom-in"
            className="rounded-2xl h-[28rem] mx-auto"
            src={together}
            alt=""
          />
        </div>

        <div className="px-10 max-w-full mt-16">
          <h2 className="font-[Lora] font-semibold text-3xl mb-4">
            Struktural Inti
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 mx-auto justify-items-center font-[Inter] w-full"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {users.map((user, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-48 md:w-60 shadow-lg rounded-3xl p-4 sm:p-6 md:p-8"
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
          <h2 className="font-[Lora] font-semibold text-3xl mb-4 mt-6">
            Bidang Penelitian & Pengembangan
          </h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 mx-auto justify-items-center font-[Inter] w-full"
            style={{ overflow: "hidden" }} // Menghilangkan scroll di grid
          >
            {litbangUser.map((user, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-48 md:w-60 shadow-lg rounded-3xl p-4 sm:p-6 md:p-8"
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
