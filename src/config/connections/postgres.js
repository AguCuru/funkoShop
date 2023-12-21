import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export class Postgres {
  constructor() {
    this.sequelize = new Sequelize({
      dialect: "postgres",
      host: process.env.HOST,
      port: process.env.PORTDB,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      pool: { max: 10, min: 0 },
    });

    this.sequelize
      .authenticate()
      .then(() => console.log("conectado con exito"))
      .catch((e) => console.log("problema en la conexión:", e));
  }
}
