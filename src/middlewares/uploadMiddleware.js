import multer from "multer";
import { resolve, extname } from "path";

const destination = (req, file, cb) => {
  cb(null, resolve() + "/public/assets/img");
};

const filename = (req, file, cb) => {
  console.log(
    "Extensión del archivo:",
    extname(file.originalname).toLowerCase()
  );

  const allowedExtensions = [".jpg", ".jpeg"];

  if (allowedExtensions.includes(extname(file.originalname).toLowerCase())) {
    const time = new Date()
      .toString()
      .replace(/ /g, "_")
      .replace(/:/g, "-")
      .slice(0, 33);
    cb(null, time + "_" + file.originalname);
  } else {
    cb(new Error("Solo se admiten archivos JPG o JPEG."));
  }
};

const config = { destination, filename };

const storage = multer.diskStorage(config);

export const uploadMiddleware = multer({ storage });
