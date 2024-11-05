// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Components/Navbar";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="p-20 items-center">
          <div className="font-[Lora] font-bold text-3xl mb-4">
            <h1>Unit Kegiatan Mahasiswa</h1>
            <h1>IT Cybernetix</h1>
          </div>
          <div>
          <p className="break-words w-[35em] mb-5">
              Wadah pemberdayaan mahasiswa yang berfokus membangun keterampilan
              dalam mengenal dunia teknologi
            </p>
            <div className="space-x-4">
              <button className="rounded-lg bg-slate-600 p-2">
                Kenali Kami
              </button>
              <button className="rounded-lg bg-slate-600 p-2">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
