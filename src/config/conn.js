// sequelize.js
/* import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  port: process.env.PORTDB,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  pool: { max: 10, min: 0 },
});

// Verificar la conexión
try {
  await sequelize.authenticate();
  console.log("Conexion establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

export default sequelize; */

/* import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const PORTDB = process.env.PORTDB;

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORTDB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const conn = pool.promise();

export default conn; */
