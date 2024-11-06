import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import foto1 from "../assets/fotobersama.svg";
import glowEffect from "../assets/glow effect.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Network from "../assets/Networking.svg";
import Multimedia from "../assets/Multimedia.svg";
import Programming from "../assets/Programming.svg";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section>
      <div
        style={{
          backgroundColor: "#FFF6E3",
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
          fontFamily: "Lora",
        }}
        className="overflow-y-auto text-black"
      >
        <Navbar />
        <div className="p-20 items-center grid grid-cols-2 space-x-40 mb-6 ">
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className=" font-bold text-3xl mb-4">
              <h1>Unit Kegiatan Mahasiswa</h1>
              <h1>IT Cybernetix</h1>
            </div>
            <div>
              <p className="break-words w-[35em] mb-5 font-[Inter]">
                Wadah pemberdayaan mahasiswa yang berfokus membangun
                keterampilan dalam mengenal dunia teknologi
              </p>
              <div className="space-x-4 text-white font-[Inter]">
                <button className="rounded-lg bg-[#F16634] p-3 font-semibold cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  Kenali Kami
                </button>
                <button className="rounded-lg bg-[#373737] p-3 font-semibold cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
                  Gabung Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="image-container" data-aos="zoom-in">
            <img src={foto1} alt="" className="size-[25rem]" />
          </div>
        </div>
        <div>
          <div className="justify-center text-center font-bold text-2xl mb-10">
            <h2>Unit Kegiatan Mahasiswa </h2>
            <h2>Dengan Divisi Standar Industri</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 p-8 mx-auto justify-items-center font-[Inter]">
            <div
              className="card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg" data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div >
                <img src={Multimedia} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Multimedia</h2>
              <p>UIX Design, Design, Video Editing</p>
            </div>

            <div
              className="card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg  " data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              
            >
              <div>
                <img src={Programming} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Programming</h2>
              <p>Frontend Dev & Backend Dev</p>
            </div>

            <div className="card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg" data-aos="fade-down"
              data-aos-anchor-placement="top-bottom">
              <div>
                <img src={Network} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Networking</h2>
              <p>Networking Fundamental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
