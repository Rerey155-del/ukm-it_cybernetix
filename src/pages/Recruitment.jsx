import fotolagi from "../assets/kakak.png";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Garis from "../assets/garis.png";
import Footer from "../Components/Footer";



const Recruitment = () => {
    const [darkMode, setDarkMode] = useState(false);
    const darkModes = JSON.parse(localStorage.getItem("darkMode"));
    

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode); // Toggle dark mode
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

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
                <div className="container p-6 sm:p-8 md:p-12 lg:px-4 mx-auto items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:space-x-20 mb-10 sm:mb-16 mt-4 sm:mt-6">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="text-center md:text-left"
                    >
                        <div className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-2 sm:mb-4 text-left">
                            <h2 className="text-2xl text-[#2A9D8F]">#GabungBarengCX</h2>
                            <h1>UKM-IT</h1>
                            <h1>
                                <span className="text-[#F16634]">C</span>
                                YBERNETI
                                <span className="text-[#F16634]">X</span>
                            </h1>
                        </div>

                        <div>
                            <p className="break-words w-full md:w-[30em] lg:w-[35em] mx-auto md:mx-0 mb-5 font-[Inter] text-sm sm:text-base text-left md:text-lg lg:text-xl">
                                Yuk! gabung sama Unit Kegiatan Mahasiswa berbasis IT terbaik dan terbesar di Universitas Putra Indonesia “YPTK” Padang.
                            </p>
                            <div className="flex space-x-4 mb-8 justify-center md:justify-start text-white font-[Inter]">
                                <button
                                    onClick={() => {
                                        window.open(
                                            "https://bit.ly/RecruitmentCX-17UKM-ITCYBERNETIX",
                                            "_blank"
                                        );
                                    }}
                                    className="rounded-3xl bg-[#F16634] p-3 px-6 font-semibold cursor-pointer transition duration-300 hover:scale-105 hover:shadow-lg"
                                >
                                    Daftar Yuk!
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="image-container mx-auto md:mx-0 z-10"
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                    >
                        <label className="text-9xl">


                            <div>
                                <img
                                    src={fotolagi}
                                    alt=""
                                    className=" w-[250px] h-full md:w-[450px] md:h-full lg:w-[450px] lg:h-full max-w-full"
                                />
                            </div>

                        </label>
                    </div>
                    <div>
                        <img src={Garis} className="absolute top-0 left-0 w-[100%] h-auto z-0 md:w-full h-full pointer-events-none max-w-full" alt="" />
                    </div>
                </div>
               
            </div>
            <Footer darkMode={darkModes} />
        </section>
    )
}

export default Recruitment