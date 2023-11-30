import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./src/routes/mainRoutes.js";
import shopRoutes from "./src/routes/shopRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import path from "path";

dotenv.config();

const app = express();
const root = path.resolve();

app.set("view engine", "ejs");
app.set("views", root + `/src/views`);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(`public`));

app.use(`/`, mainRoutes);
app.use(`/shop`, shopRoutes);
app.use(`/admin`, adminRoutes);
app.use(`/auth`, authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
