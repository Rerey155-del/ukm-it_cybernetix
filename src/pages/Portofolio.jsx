// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import glowEffect from "../assets/glow effect.svg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import porto1 from "../assets/porto1.jpg"
import porto2 from "../assets/porto2.jpg"

const Portofolio = () => {

  // pembikinan JSON dummy untuk portofolio
  const portofolioData = [
    {
      id: 1,
      title: "Nexus APP Official",
      description: "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
      foto: porto1,
      tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Donor.pdg",
      description: "A drag-and-drop task management application with real-time updates.",
      foto: porto2,
      tags: ["React", "Firebase", "Material-UI"],

    },
    {
      id: 3,
      title: "Website Voting Ketum Waketum Cybernetix",
      description: "A drag-and-drop task management application with real-time updates.",
      foto: porto2,
      tags: ["React", "Firebase", "Material-UI"],
    },

  ];


  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <section>
      <div style={{
        backgroundColor: darkMode ? "#1E2237" : "#FBF8EF", // Ubah warna berdasarkan darkMode
        color: darkMode ? "#FFFFFF" : "#000000", // Warna teks
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
        fontFamily: "Montserrat",
      }}
        className="overflow-y-auto text-black">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex p-[6rem] gap-8 cursor-pointer overflow-y-none">
          {portofolioData.map((user, index) => (
            <div key={index} className={`card  w-80 shadow-xl`} data-aos="fade-up"
            data-aos-duration="1000" > 
              <figure>
                <img
                  src={user.foto}
                  alt={user.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {user.description}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </section>
  );
};

export default Portofolio;
