import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-orange-500 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 px-6">
        {/* Bagian Kiri */}
        <div className="max-w-xs">
          <img src="/src/assets/cx-logo.svg" alt="Logo" className="w-20 mb-4" />
          <h2 className="text-lg font-semibold">
            Unit Kegiatan Mahasiswa
            <br />
            Information Technology
            <br />
            Cybernetix
          </h2>
          <p className="mt-4">
            &copy; 2007-2023 <strong>WebDev</strong> - UKM IT Cybernetix
          </p>
        </div>

        {/* Bagian Kolom */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
              Universitas Putra Indonesia "YPTK"
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
