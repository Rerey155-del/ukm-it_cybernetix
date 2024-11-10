import { useEffect, useState } from "react"; // Fixed imports by removing duplicate `useEffect`
import Navbar from "../Components/Navbar";
import foto1 from "../assets/fotobersama.svg";
import glowEffect from "../assets/glow effect.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Network from "../assets/Networking.svg";
import Multimedia from "../assets/Multimedia.svg";
import Programming from "../assets/Programming.svg";
import axios from "axios";
import { tailChase } from 'ldrs'
import { useNavigate } from "react-router-dom";
tailChase.register()

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:2080/steeringcommittee")
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

  const showLoadingModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/struktural"); // Ganti "/nextPage" dengan path halaman tujuan Anda
    }, 2000);
  };

  // const Struktural = () => {
  //   navigate("/struktural");
  // };

  return (
    <section>
      <div
        style={{
          backgroundColor: "#FFFFFF",
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
        <div className="p-20 items-center grid grid-cols-2 space-x-40 mb-28 mt-10">
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
            <div className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div>
                <img src={Multimedia} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Multimedia</h2>
              <p>UIX Design, Design, Video Editing</p>
            </div>

            <div className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div>
                <img src={Programming} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Programming</h2>
              <p>Frontend Dev & Backend Dev</p>
            </div>

            <div className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div>
                <img src={Network} alt="" className="size-28" />
              </div>
              <h2 className="card-title">Networking</h2>
              <p>Networking Fundamental</p>
            </div>
          </div>
        </div>
        <div className="mb-20 mt-28">
          <div>
            <div className="justify-center text-center font-bold text-2xl mb-5">
              <h2>Portofolio Kami</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 p-8 mx-auto justify-items-center font-[Inter]">
              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>

              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>

              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>
              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>
              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>
              <div
                className="bg-white card-body w-80 shadow-2xl rounded-3xl cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              ></div>
            </div>
          </div>
          <div className="flex justify-center font-semibold text-lg mb-10 mt-7 font-[Inter]">
            <button
              className="p-3 bg-[#F16634] text-white rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg" 
             
            >
              Selengkapnya
            </button>

           
          </div>
          <div className="justify-center text-center font-bold text-2xl mb-7 mt-[10rem]">
            <h2>Dedikasi Berbuah Cerita Yang Mengesankan</h2>

            <div className="grid gap-4 px-20 mt-10">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:shadow-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
                  alt="Featured Image"
                />
              </div>

              <div className="grid grid-cols-5 gap-4">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    alt="Image 1"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                    alt="Image 2"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                    alt="Image 3"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                    alt="Image 4"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                    alt="Image 5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28">
            <div>
              <h2 className="text-center font-bold text-2xl mb-5">
                Hilangkan Rasa Penasaran Dengan mengenal bagian dari kami
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-8 p-8 mx-auto justify-items-center font-[Inter]">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-white card-body w-60 shadow-2xl rounded-3xl"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={user.foto} />
                  <div className="text-center mt-3">
                    <p className="font-bold">{user.nama}</p>
                    <p>{user.jabatan}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center font-semibold text-lg mb-10 mt-7 font-[Inter]">
              <button className="p-3 bg-[#F16634] text-white rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"  onClick={showLoadingModal}>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
         {/* =============  Modal Loading  ================= */}
         {isLoading && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center font-[Inter]">
                <div className=" p-6 rounded-lg flex flex-col items-center">
                  <l-grid
                    size="70"
                    speed="1.75"
                    color="#F16634"
                  ></l-grid>
                  <p className="mt-4 font-bold text-lg text-white">Loading...</p>
                </div>
              </div>
            )}
      </div>
    </section>
  );
};

export default LandingPage;
