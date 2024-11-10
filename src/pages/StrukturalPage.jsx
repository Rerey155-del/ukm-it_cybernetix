// eslint-disable-next-line no-unused-vars
import React from 'react'
import glowEffect from "../assets/glow effect.svg";
import Navbar from "../Components/Navbar";

const StrukturalPage = () => {
  return (
    <section>
        <div style={{
          backgroundColor: "#FFFFFF",
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
          fontFamily: "Lora",
        }}
        className="overflow-y-auto text-black">
            <Navbar />
        </div>

    </section>
  )
}

export default StrukturalPage