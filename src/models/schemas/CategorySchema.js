/* import { DECIMAL, INTEGER, STRING } from "sequelize";
import { MySQL } from "../../config/connections/mysql.js";
import { Postgres } from "../../config/connections/postgres.js";

export class CategorySchema {
  constructor() {
    this.schema = {
      category_id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: { type: STRING, allowNull: false },
      category_description: { type: STRING, allowNull: false },
    };

    this.connection = this.createConnection();

    this.config = {
      sequelize: this.connection.sequelize,
      modelName: "category",
      timestamps: false,
    };
  }

  createConnection = () => {
    if (process.argv[2] === "mysql") return new MySQL();

    if (process.argv[2] === "postgres") return new Postgres();
  };
}
 */
