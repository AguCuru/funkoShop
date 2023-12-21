/* import { DECIMAL, INTEGER, STRING } from "sequelize";
import { MySQL } from "../../config/connections/mysql.js";
import { Postgres } from "../../config/connections/postgres.js";

export class LicenceSchema {
  constructor() {
    this.schema = {
      licence_id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      licence_name: { type: STRING, allowNull: false },
      licence_description: { type: STRING, allowNull: false },
      licence_img: { type: STRING, allowNull: true },
    };

    this.connection = this.createConnection();

    this.config = {
      sequelize: this.connection.sequelize,
      modelName: "licence",
      timestamps: false,
    };
  }

  createConnection = () => {
    if (process.argv[2] === "mysql") return new MySQL();

    if (process.argv[2] === "postgres") return new Postgres();
  };
}
 */
