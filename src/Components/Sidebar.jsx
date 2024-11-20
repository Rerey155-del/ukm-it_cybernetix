import { useState } from "react";
import Menu from "../assets/menu.svg";
import Tentang from "../assets/divisi.svg";
import Proyek from "../assets/proyek.svg";
import Cx from "../assets/cx-logo.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Sidebar = () => {
    // Tambahkan state untuk mengelola visibilitas Sidebar
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    // Fungsi untuk membuka dan menutup Sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const Dashboard = () => {
        navigate("/");
      };

      const Struktural = () => {
        navigate("/struktural");
      };
      const Activity = () => {
        navigate("/activity");
      };

      const Recruitment = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Saat ini, fitur ini masih dalam pengembangan",
          });
      }


    return (
        <div>
            {/* Tombol untuk membuka Sidebar, hanya tampil di tablet dan mobile */}
            <div className="p-3 md:hidden justify-between flex m-4 ">
                <img src={Cx} alt="" />
                <img src={Menu} onClick={toggleSidebar} alt="Menu icon" className="bg-white p-4 rounded-full" />
            </div>

            {/* Sidebar */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform font-[Inter] ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-white `}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button
                    type="button"
                    onClick={toggleSidebar}
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 rounded-lg text-gray-900 hover:text-white hover:bg-[#F16634] dark:text-white group" onClick={Dashboard}
                            > 
                                <img src={Tentang} alt="" />
                                <span className="ms-3 text-black hover:text-white">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Struktural}>
                            <img src={Proyek} alt="" />
                                <span className="ms-3 text-black hover:text-white">Struktural</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Activity}>
                            <img src={Proyek} alt="" />
                                <span className="ms-3 text-black hover:text-white">Activity</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Recruitment}>
                            <img src={Proyek} alt="" />
                                <span className="ms-3 text-black hover:text-white">Recruitment</span>
                            </a>
                        </li>
                        
                       
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
