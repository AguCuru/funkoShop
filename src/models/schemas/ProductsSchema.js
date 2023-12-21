import { DECIMAL, INTEGER, STRING } from "sequelize";
import { MySQL } from "../../config/connections/mysql.js";
import { Postgres } from "../../config/connections/postgres.js";

export class ProductsSchema {
  constructor() {
    this.schema = {
      product_id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: { type: STRING, allowNull: false },
      product_description: { type: STRING, allowNull: false },
      product_price: { type: DECIMAL, allowNull: false },
      product_stock: { type: INTEGER, allowNull: false },
      product_discount: { type: INTEGER, allowNull: false },
      product_sku: { type: STRING, allowNull: false },
      product_dues: { type: INTEGER, allowNull: false },
      img_front: { type: STRING, allowNull: true },
      img_back: { type: STRING, allowNull: true },
      /*       create_me: { type: STRING, allowNull: false }, */
      category_id: { type: INTEGER, allowNull: false },
      licence_id: { type: INTEGER, allowNull: false },
    };

    this.connection = this.createConnection();

    this.config = {
      sequelize: this.connection.sequelize,
      modelName: "product",
      timestamps: false,
    };
  }

  createConnection = () => {
    if (process.argv[2] === "mysql") return new MySQL();

    if (process.argv[2] === "postgres") return new Postgres();
  };
}
