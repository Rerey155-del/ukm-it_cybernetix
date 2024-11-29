import glowEffect from "../assets/glow effect.svg";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import UKM from "../assets/UKMIT.svg";
import Footer from "../Components/Footer";
import { useEffect } from "react";
const ProfilePage = () => {
    useEffect(()=> {
        window.scrollTo(0,0),[]
      }) 
    return (
        <section style={{ overflow: "hidden" }}>
            <div style={{
                backgroundColor: "#FBF8EF", // Warna putih dengan transparansi 80%
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
                className="text-black"
            >
                <Navbar />
                <Sidebar />
                <div className="container grid grid-cols-1 mx-auto md:grid-cols-2 p-5 md:p-20 gap-8 mt-10 md:mt-20 justify-center items-center">
                    <div className="rounded-3xl bg-white w-[15rem] mx-auto md:w-[20rem] h-[15rem] md:h-[20rem] p-5 md:p-8" data-aos="zoom-in">
                        <img src={UKM} alt="" className="pt-12 md:pt-14 mx-auto" />
                    </div>
                    <div className="text-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
                        <div className="text-2xl md:text-4xl font-bold">
                            <h2>Unit Kegiatan Mahasiswa</h2>
                            <h2 className="text-[#F16634]">IT Cybernetix</h2>
                        </div>
                        <p className="mt-3 md:mt-5 font-semibold md:font-semibold text-sm md:text-base">
                            Wadah pemberdayaan mahasiswa yang berfokus membangun keterampilan
                            dalam mengenal dunia teknologi.
                        </p>
                    </div>
                </div>

                <div className="p-8 md:p-16 mt-12 font-semibold ">
                    <p>
                        UKM-IT Cybernetix UPI YPTK Padang dibentuk oleh mahasiswa yang memiliki visi dan semangat yang sama untuk mengembangkan teknologi informasi di lingkungan kampus. Berawal dari keinginan Muhammad Riza Nurtam, Medio Nofriyanto, Hadad Samir, dan Rafles Susandi untuk mengaktifkan kembali kelompok belajar Linux yang telah ada sejak 2001, pada 18 Desember 2006 mereka mengadakan pertemuan pertama. Dalam pertemuan tersebut, hadir beberapa mahasiswa lain yang berbagi pandangan yang sama untuk membentuk UKM IT yang dapat diakui secara resmi oleh kampus.</p>
                    <br />
                    <p>
                        Langkah awal menuju pendirian UKM ini adalah dengan mengadakan pertemuan kedua pada 25 Desember 2006, yang dihadiri sekitar 25 mahasiswa. Dalam pertemuan ini, disepakati untuk mendekati pihak yang berwenang di kampus, yaitu Badan Eksekutif Mahasiswa (BEM), guna mendapatkan dukungan. Setelah proses pendekatan dan pengajuan proposal pembentukan, UKM ini resmi didukung oleh BEM. Namun, tantangan muncul ketika jumlah anggota tetap yang diperlukan berkurang, sehingga tim formatur kembali mencari anggota tambahan.
                    </p>
                    <br />
                    <p>
                        Melalui usaha keras, pada Sidang Umum yang diadakan pada 7-8 Juni 2007, UKM IT-CybernetiX akhirnya resmi didirikan dengan total anggota lebih dari 52 orang, di bawah naungan BEM dan diresmikan langsung oleh Presiden Mahasiswa.</p>
                    <br />
                    <p>
                        Sejak berdirinya, UKM IT-Cybernetix aktif berkontribusi dalam bidang pembelajaran, pengembangan, dan penelitian teknologi informasi. Beragam kegiatan telah dilakukan, mulai dari belajar bersama, berbagi ilmu, hingga mengadakan acara besar yang melibatkan seluruh mahasiswa UPI YPTK Padang serta mahasiswa dari universitas lain di Kota Padang. Kegiatan tersebut meliputi seminar, kompetisi IT, dan program kolaborasi antar universitas, dengan tujuan utama untuk mengembangkan minat dan keahlian mahasiswa di bidang teknologi informasi serta memperkuat jaringan antar mahasiswa di kota Padang.</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ProfilePage