import { useEffect, useState } from "react";
import Cx from "../assets/cx-logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { styled } from '@mui/material/styles';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


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


  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));


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
          <div className="flex justify-end ml-auto">
            <FormControlLabel 
              control={<MaterialUISwitch defaultChecked />}

            />
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
