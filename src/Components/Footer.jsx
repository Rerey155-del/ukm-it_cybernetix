const Footer = () => {
  return (
    <footer className="bg-[#1D3D71] text-white opacity-90 py-12">
      <div className="container mx-auto px-6">
        {/* Bagian Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bagian Kiri */}
          <div className="flex flex-col items-center lg:items-start">
            <img src="/src/assets/cx-logo.svg" alt="Logo" className="mb-4 w-32" />
            <h2 className="text-lg font-semibold text-center lg:text-left">
              Unit Kegiatan Mahasiswa
              <br />
              Information Technology
              <br />
              Cybernetix
            </h2>
            <p className="mt-4 text-center lg:text-left">
              &copy; 2007 - 2023 <strong>WebDev</strong> - UKM IT Cybernetix
            </p>
          </div>

          {/* Bagian Divisi dan Sekretariat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Divisi */}
            <div>
              <h3 className="font-semibold mb-4 text-center sm:text-left">Divisi</h3>
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
              <h3 className="font-semibold mb-4 text-center sm:text-left">Sekretariat</h3>
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
          </div>
        </div>

        {/* Bagian Personalia, Explore, Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Personalia */}
          <div>
            <h3 className="font-semibold mb-2 text-center lg:text-left">Personalia</h3>
            <ul className="space-y-1 text-center lg:text-left">
              <li>DPO</li>
              <li>Struktural</li>
              <li>Anggota Aktif</li>
              <li>Alumni Luar Biasa</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-2 text-center lg:text-left">Explore</h3>
            <ul className="space-y-1 text-center lg:text-left">
              <li>Blog</li>
              <li>Mentor</li>
              <li>Kelas Online</li>
              <li>Validasi Sertifikat</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-2 text-center lg:text-left">Links</h3>
            <ul className="space-y-1 text-center lg:text-left">
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
