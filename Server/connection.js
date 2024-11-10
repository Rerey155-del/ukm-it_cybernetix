/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv"; // Load environment variables
import cors from "cors";

// LOAD ENVIRONMENT VARIABLES
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parsing request body sebagai JSON

// Middleware untuk menyajikan gambar dari disk
// app.use(
//   "/assets",
//   express.static(
//     "C:\\Users\\Administrator\\Documents\\GitHub\\ukm-it_cybernetix\\src\\assets"
//   )
// );
app.use(
  "/assets",
  express.static(
    "D:\\Ngoding\\React_JS\\ukm-it_cybernetix\\ukm-it_cybernetix\\src\\assets"
  )
);

const port = process.env.PORT;
const url = process.env.MONGODB;
const namaDatabase = process.env.Database;
const namaKoleksiUser = process.env.DPO; // Koleksi untuk user
const namaKoleksiLitbang = process.env.Litbang; // Koleksi untuk litbang

let client;
let userCollection;
let litbangCollection;
let productCollection;

// Middleware untuk memastikan koneksi ke MongoDB
const mongoConnectionMiddleware = async (req, res, next) => {
  try {
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("Koneksi ke MongoDB berhasil");

      // Ambil database dan koleksi untuk user, litbang, dan product
      const db = client.db(namaDatabase);
      userCollection = db.collection(namaKoleksiUser);
      litbangCollection = db.collection(namaKoleksiLitbang);
    }
    next(); // Lanjutkan ke endpoint berikutnya
  } catch (error) {
    console.log("Koneksi ke MongoDB gagal", error);
    res.status(500).json({ message: "terjadi kesalahan koneksi ke database" });
  }
};

// Gunakan middleware pada semua route
app.use(mongoConnectionMiddleware);

app.get("/steeringcommittee", async (req, res) => {
  try {
    const data = await userCollection.find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.get("/litbang", async (req, res) => {
  try {
    const data = await litbangCollection.find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

// Endpoint POST untuk menambahkan data ke koleksi "user"
app.post("/steeringcommittee", async (req, res) => {
  try {
    const result = await userCollection.insertOne(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "terjadi kesalahan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
