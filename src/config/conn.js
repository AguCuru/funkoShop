import mysql from "mysql2";
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

export default conn;
