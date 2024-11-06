import { useEffect } from "react";
import Cx from "../assets/cx-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <nav data-aos="fade-up" data-aos-duration="2000" className="p-5 fixed top-0 left-0 w-full transition-all duration-300 bg-[#FFF6E3]i">
      <div className="container mx-auto flex justify-start pl-14 items-center font-[inter]">
        <ul className="flex space-x-4">
          <li >
            <img className="w-full h-8"src={Cx} />
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Struktural</a>
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
