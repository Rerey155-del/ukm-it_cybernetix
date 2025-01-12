import { useEffect, useState } from "react";
import Cx from "../assets/cx-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import info from "../assets/info.png";
import { helix } from "ldrs";
helix.register();



// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, toggleDarkMode }) => {



  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);

  const Menu = () => {
    navigate("/");
  };

  const Struktural = () => {
    navigate("/struktural");
  };

  const Activity = () => {
    navigate("/activity");
  };

  const Profile = () => {
    navigate("/Profile");
  };

  const developer = () => {
    navigate("/developer");
  }
 
  // const showLoadingRecruitment = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     navigate("/recruitment"); // Ganti "/nextPage" dengan path halaman tujuan Anda
  //   }, 2000);
  // };

  const Recruitment = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Maaf, udah tutup pendaftarannya 😊",
    });
  }

  useEffect(() => {
    // Inisialisasi AOS untuk animasi
    AOS.init({
      duration: 2000,
    });

    // Event listener untuk mendeteksi scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`p-4 fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? "bg-opacity-50" : ""} hidden md:block`}
        style={{
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          className="container mx-auto flex justify-start pl-14 items-center font-[inter]"
        >
          <ul className="flex space-x-4">
            <div className="text-center">
            </div>

            <li>
              <img className="w-full h-8" src={Cx} alt="Logo" />
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  Menu();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  Activity();
                }}
              >Activity</a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  Struktural();
                }}
              >
                Struktural
              </a>
            </li>
            <li>
              <a href=""
                onClick={(e) => {
                  e.preventDefault();
                  Profile();
                }}>Profile</a>
            </li>
            <li>
              <a href=""
                onClick={(e) => {
                  e.preventDefault();
                  Recruitment();
                }}>Recruitment</a>
            </li>


          </ul>
          <div className="flex justify-end ml-auto pt-1 gap-6">

            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <button
              onClick={(e) => {
                e.preventDefault(); // Mencegah aksi default tombol
                developer(); // Memanggil fungsi developer
              }}
            >
              <img className="w-6 h-6" src={info} alt="Info Icon" />
            </button>

          </div>

        </div>

      </nav>
      {/* =============  Modal Loading  ================= */}
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center font-[Inter]">
          <div className=" p-6 rounded-lg flex flex-col items-center">
            <l-helix size="70" speed="2.5" color="#F16634"></l-helix>
            <p className="mt-4 font-bold text-lg text-white">Memasuki dunia lain...</p>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
