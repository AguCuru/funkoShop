import path from "path";
import dotenv from "dotenv";
import express from "express";
import methodOverride from "method-override";
import authRoutes from "./src/routes/authRoutes.js";
import { AdminRoutes } from "./src/routes/adminRoutes.js";
import { ShopRoutes } from "./src/routes/shopRoutes.js";
import { MainRoutes } from "./src/routes/mainRoutes.js";

dotenv.config();

const app = express();
const root = path.resolve();
const PORT = process.env.PORT || 4000;
const shopRoutes = new ShopRoutes();
const mainRoutes = new MainRoutes();
const adminRoutes = new AdminRoutes();

app.set("view engine", "ejs");
app.set("views", root + `/src/views`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(`public`));
app.use(`/`, mainRoutes.router);
app.use(`/shop`, shopRoutes.router);
app.use(`/admin`, adminRoutes.router);
app.use(`/auth`, authRoutes);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
