import Navbar from "../Components/Navbar";
const LandingPage = () => {
  return (
    <div style={{
      backgroundColor : "#FFF6E3",
      minHeight : "100vh",
      width : "100%",
      margin : "0",
      padding : "0",
      boxSizing : "border-box",
      overflowX : "hidden",
    }} className = "overflow-y-auto text-black">
      <section>
        <Navbar />
        <div className="p-20 items-center bg-[#FFF6E3]">
          <div className="font-[Lora] font-bold text-3xl mb-4">
            <h1>Unit Kegiatan Mahasiswa</h1>
            <h1>IT Cybernetix</h1>
          </div>
          <div>
            <p className="break-words w-[35em] mb-5">
              Wadah pemberdayaan mahasiswa yang berfokus membangun keterampilan
              dalam mengenal dunia teknologi
            </p>
            <div className="space-x-4 text-white">
              <button className="rounded-lg bg-[#F16634] p-3 font-semibold">
                Kenali Kami
              </button>
              <button className="rounded-lg bg-[#373737] p-3 font-semibold">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
