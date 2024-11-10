import { useEffect, useState } from "react";
import Cx from "../assets/cx-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    // Inisialisasi AOS untuk animasi
    AOS.init({
      duration: 2000,
    });

    // Event listener untuk mendeteksi scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Jika scroll lebih dari 50px, set isScrolled menjadi true
    };

    // Tambahkan event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-opacity-50" : ""
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(10px)" : "none", // Jika di-scroll, tambahkan efek blur
        position: "fixed", // Navbar akan selalu tetap di atas
        width: "100%", // Lebar penuh
        top: 0, // Tetap di bagian atas layar
        zIndex: 1, // Z-index lebih tinggi untuk memastikan navbar berada di depan elemen lain
      }}
    >
      <div
        data-aos="fade-up"
        className="container mx-auto flex justify-start pl-14 items-center font-[inter]"
      >
        <ul className="flex space-x-4">
          <li>
            <img className="w-full h-8" src={Cx} alt="Logo" />
          </li>
          <li>
            <a href="#" onClick={Menu}>Home</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#" onClick={Struktural}>Struktural</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Recruitment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
