import { useState } from "react";
import Menu from "../assets/menu.svg";
import clock from "../assets/clock_loader.svg";
import registration from "../assets/app_registration.svg";
import account from "../assets/account_circle.svg";
import people from "../assets/Groups.svg";
import home from "../assets/home.svg";
import Cx from "../assets/cx-logo.svg";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import info from "../assets/info.png";
import { helix } from "ldrs";
helix.register();



// eslint-disable-next-line react/prop-types
const Sidebar = ({ darkMode, toggleDarkMode }) => {
    // Tambahkan state untuk mengelola visibilitas Sidebar
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const navigate = useNavigate();

    // Fungsi untuk membuka dan menutup Sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    ;

    const Dashboard = () => {
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

    const showLoadingRecruitment = () => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/recruitment"); // Ganti "/nextPage" dengan path halaman tujuan Anda
        }, 2000);
      };

    // const Recruitment = () => {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Saat ini, fitur ini masih dalam pengembangan",
    //     });
    // }


    return (
        <div>
            {/* Tombol untuk membuka Sidebar, hanya tampil di tablet dan mobile */}
            <div className=" p-3 md:hidden justify-between flex m-4 ">
                <img src={Cx} alt="" />
                <img src={Menu} onClick={toggleSidebar} alt="Menu icon" className="bg-white p-4 rounded-full" />
            </div>

            {/* Sidebar */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform font-[Inter] ${isOpen ? "translate-x-0" : "-translate-x-full"} ${darkMode ? 'bg-[#32364F]' : 'bg-white'
                    }`}
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
                                <img src={home} alt="" />
                                <span className={`ms-3 ${darkMode ? "text-white" : "text-black hover:text-white"}`}>Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Struktural}>
                            <img src={people} alt="" />
                                <span className={`ms-3 ${darkMode ? "text-white" : "text-black hover:text-white"}`}>Struktural</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Activity}>
                            <img src={clock} alt="" />
                                <span className={`ms-3 ${darkMode ? "text-white" : "text-black hover:text-white"}`}>Activity</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={Profile}>
                            <img src={account} alt="" />
                                <span className={`ms-3 ${darkMode ? "text-white" : "text-black hover:text-white"}`}>Profile</span>
                            </a>
                        </li>
                        <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#F16634] group" onClick={showLoadingRecruitment}>
                                 <img src={registration} alt="" />
                                <span className={`ms-3 ${darkMode ? "text-white" : "text-black hover:text-white"}`}>
                                    Recruitment
                                </span>
                                
                            </a>
                        </li>

                    </ul>

                </div>
                <div className="flex justify-center gap-8 pt-80 ml-auto">
                    <button
                        onClick={(e) => {
                            e.preventDefault(); // Mencegah aksi default tombol
                            developer(); // Memanggil fungsi developer
                        }}
                    >
                        <img className="w-6 h-6" src={info} alt="Info Icon" />
                    </button>
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
                </div>
            </div>
            {/* =============  Modal Loading  ================= */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center font-[Inter]">
          <div className=" p-6 rounded-lg flex flex-col items-center">
            <l-helix size="70" speed="2.5" color="#F16634"></l-helix>
            <p className="mt-4 font-bold text-lg text-white">Memasuki dunia lain...</p>
          </div>
        </div>
      )}
        </div>
    );
};

export default Sidebar;
