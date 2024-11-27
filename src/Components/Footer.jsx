import Cx from "../assets/cx-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-r from-blue-100 via-white to-red-100 text-gray-800 py-12 overflow-hidden">
      {/* Lingkaran Gradien */}
      <div className="absolute top-0 left-[-150px] w-[400px] h-[400px] bg-gradient-radial from-blue-300/40 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 right-[-150px] w-[400px] h-[400px] bg-gradient-radial from-red-300/40 to-transparent rounded-full"></div>

      <div className="container mx-auto px-6">
        {/* Bagian Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian Kiri */}
          <div className="flex flex-col items-center lg:items-start lg:ml-20">
            <img
              src={Cx}
              alt="Logo"
              className="mb-4 w-32 lg:ml-20 lg:mt-20"
            />
            <h2 className="text-lg font-semibold text-center lg:text-center lg:ml-9">
              Unit Kegiatan Mahasiswa <br /> Information Technology <br />{" "}
              Cybernetix
            </h2>
            <p className="mt-5 text-center lg:text-left text-sm lg:text-center">
              &copy; 2007 - {currentYear} <strong>WebDev</strong> - UKM-IT
              Cybernetix
            </p>
          </div>

          {/* Bagian Divisi dan Sekretariat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm ">
            {/* Divisi */}
            <div>
              <h3 className="font-semibold mb-4 text-center sm:text-left">
                Divisi
              </h3>
              <ul className="space-y-2 text-center sm:text-left">
                <li>Software Development</li>
                <li>UI & UX Design</li>
                <li>Networking</li>
                <li>Multimedia</li>
                <li>Hardware</li>
                <li>Operating System</li>
              </ul>
            </div>

            {/* Sekretariat */}
            <div>
              <h3 className="font-semibold mb-4 text-center sm:text-left">
                Sekretariat
              </h3>
              <address className="not-italic space-y-2 text-center sm:text-left">
                Universitas Putra Indonesia YPTK
                <br />
                Jl. Raya Lubuk Begalung Student Center Lt. 2<br />
                Padang, Sumatera Barat
                <br />
                25145
                <br />
                <a
                  href="mailto:humas.cybernetix@gmail.com"
                  className="hover:underline"
                >
                  humas.cybernetix@gmail.com
                </a>
              </address>
            </div>

            {/* Personalia */}
            <div>
              <h3 className="font-semibold mb-2 text-center lg:text-left">
                Personalia
              </h3>
              <ul className="space-y-1 text-center lg:text-left">
                <li>DPO</li>
                <li>Struktural</li>
                <li>Anggota Aktif</li>
                <li>Alumni Luar Biasa</li>
              </ul>
            </div>

            {/* Explore */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-1 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-center lg:text-left">
                  Explore
                </h3>
                <ul className="space-y-1 text-center lg:text-left lg:whitespace-nowrap">
                  <li>Blog</li>
                  <li>Mentor</li>
                  <li>Kelas Online</li>
                  <li>Validasi Sertifikat</li>
                </ul>
              </div>

              {/* Links */}
              <div className="lg:ml-10">
                <h3 className="font-semibold mb-2 text-center lg:text-left">
                  Links
                </h3>
                <ul className="space-y-1 text-center lg:text-left lg:whitespace-nowrap">
                  <li>Privacy & Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
