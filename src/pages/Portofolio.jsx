// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import porto1 from "../assets/porto1.jpg"
import porto2 from "../assets/porto2.jpg"
import porto3 from "../assets/porto3.png"
import Sidebar from "../Components/Sidebar";

const Portofolio = () => {

  // pembikinan JSON dummy untuk portofolio
  const portofolioData = [
    {
      id: 1,
      title: "Nexus APP Official",
      description: " Aplikasi Bengkel Motor dirancang untuk memudahkan pengguna dalam merawat dan memperbaiki kendaraan bermotor mereka. Aplikasi ini menyediakan fungsionalitas berbasis web dan seluler yang terintegrasi dengan bengkel-bengkel mitra. Pengguna dapat melakukan pemantauan jarak tempuh motor, menerima rekomendasi perawatan, dan menemukan bengkel terdekat untuk servis. Aplikasi juga mendukung mitra bengkel dengan fitur administrasi suku cadang. responsive e-commerce platform built with Next.js and Stripe integration.",
      foto: porto2,
      tags: ["Figma", "React JS", "Tailwind CSS", "PHP", "MySQL","Lumen"],
    },
    {
      id: 2,
      title: "Donor.pdg",
      description: "Donor.Pdg adalah situs yang menyediakan Informasi tentang Donor darah bertujuna untuk membantu pasien yang membutuhkan darah, meningkatkan kesadaran akan pentingnya donor darah, atau mendukung persediaan darah di pusat-pusat kesehatan.",
      foto: porto1,
      tags: ["React", "Firebase", "Material-UI"],

    },
    {
      id: 3,
      title: "E-Voting Cybernetix",
      description: "E-Voting adalah sebuah platform digital yang dirancang untuk mendukung proses pengambilan suara secara online dalam pemilihan Ketua Umum (Ketum) dan Wakil Ketua Umum (Waketum) pada organisasi UKM IT Cybernetix. Platform ini bertujuan untuk menyediakan sistem voting yang cepat, aman, transparan, dan mudah diakses oleh seluruh anggota organisasi. Dengan menggunakan E-VOTING, pemilih dapat memberikan suaranya dari mana saja secara real-time, sekaligus meminimalkan risiko kesalahan perhitungan manual serta memastikan integritas hasil pemilihan.",
      foto: porto3,
      tags: ["React", "Firebase", "Material-UI"],
    }

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
        backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733466817/glow_effect_iulzny.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "Montserrat",
      }}
        className=" overflow-y-auto text-black">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />
        <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:p-[6rem]  overflow-hidden flex-wrap">
          {portofolioData.map((user, index) => (
            <div key={index} className={`card cursor-pointer mb-8 ${darkMode ? 'bg-[#32364F]' : 'bg-white'
          } w-80 shadow-xl`} data-aos="fade-up"
            data-aos-duration="1000" > 
              <figure>
                <img
                  src={user.foto}
                  alt={user.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {user.title}
                </h2>
                <p>{user.description.length > 100 ? `${user.description.substring(0, 100)}...` : user.description}</p>
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
