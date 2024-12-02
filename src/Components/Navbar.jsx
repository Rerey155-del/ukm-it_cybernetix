import { useEffect, useState } from "react";
import Cx from "../assets/cx-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


 
const Navbar = () => {
  // State untuk mendeteksi apakah navbar sudah di-scroll
  const [isScrolled, setIsScrolled] = useState(false);


  const navigate = useNavigate();

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

  const Recruitment = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Saat ini, fitur ini masih dalam pengembangan",
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
          zIndex: 1,
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
          
        </div>

      </nav>
    </>
  );
};

export default Navbar;
