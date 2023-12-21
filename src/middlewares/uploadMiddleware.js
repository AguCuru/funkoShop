import fs from "fs";
import multer from "multer";
import { resolve, extname, join } from "path";
import { v4 as uuidv4 } from "uuid";
import { ProductsServices } from "./../services/productsServices.js";

const productsServices = new ProductsServices();

const destination = (req, file, cb) => {
  try {
    const { licence_id } = req.body;
    const licenceName = productsServices.getLicenceNameById(licence_id);

    // Obtener la ruta del directorio de imágenes
    const imgDir = join("public", "assets", "img", licenceName.toLowerCase());

    // Construir la ruta completa al directorio de imágenes
    const licenceFolderPath = resolve(imgDir);

    // Verificar si el directorio existe, si no, crearlo
    if (!fs.existsSync(licenceFolderPath)) {
      fs.mkdirSync(licenceFolderPath, { recursive: true });
    }

    cb(null, licenceFolderPath);
  } catch (error) {
    cb(error);
  }
};

const filename = (req, file, cb) => {
  const originalName = file.originalname.replace(/\s+/g, "_");
  const shortId = uuidv4().split("-")[0];
  const fileExtension = extname(file.originalname);
  const uniqueFilename = `${originalName}_${shortId}${fileExtension}`;
  cb(null, uniqueFilename);
};

const config = { destination, filename };

const storage = multer.diskStorage(config);

export const uploadMiddleware = multer({ storage });
