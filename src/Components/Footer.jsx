const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-orange-500 text-white opacity-80 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 px-6">
        {/* Bagian Kiri Lebih Lebar */}
        <div className="col-span-2 flex flex-col items-center justify-center max-w-lg mx-auto lg:mx-0">
          <img src="/src/assets/cx-logo.svg" alt="Logo" className="w-20 mb-4" />
          <h2 className="text-lg font-semibold text-center">
            Unit Kegiatan Mahasiswa
            <br />
            Information Technology
            <br />
            Cybernetix
          </h2>
          <p className="mt-4 text-center">
            &copy; 2007-2023 <strong>WebDev</strong> - UKM IT Cybernetix
          </p>
        </div>

        {/* Bagian Kolom */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-grow">
          {/* Divisi */}
          <div>
            <h3 className="font-semibold mb-4">Divisi</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold mb-4">Sekretariat</h3>
            <address className="not-italic space-y-2">
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
            <h3 className="font-semibold mb-4">Personalia</h3>
            <ul className="space-y-2">
              <li>DPO</li>
              <li>Struktural</li>
              <li>Anggota Aktif</li>
              <li>Alumni Luar Biasa</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Mentor</li>
              <li>Kelas Online</li>
              <li>Validasi Sertifikat</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
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
