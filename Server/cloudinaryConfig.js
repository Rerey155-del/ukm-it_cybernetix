// cloudinaryConfig.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dbc7scew4",  // ganti dengan cloud_name Anda
  api_key: "757651183822286",  // ganti dengan api_key Anda 
  api_secret: "ZHcy_zZF_C5o3XIWjpWpB8EPgXY"  // ganti dengan api_secret Anda
});

export default cloudinary;