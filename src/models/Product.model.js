import { Model, Op } from "sequelize";
import { ProductsSchema } from "./schemas/ProductsSchema.js";

class ProductsModel extends Model {}

export class Products extends ProductsSchema {
  constructor() {
    super();
    this.products = ProductsModel;
    this.products.init(this.schema, {
      ...this.config,
      primaryKey: "product_id",
    });
  }

  getProducts = async () => {
    const data = await this.products.findAll();
    const result = data.map((item) => item.dataValues);
    return result;
  };

  getProductById = async (product_id) => {
    const result = await this.products.findOne({ where: { product_id } });
    return result;
  };

  getLicenceNameById = async (licence_id) => {
    const result = await this.products.findOne({ where: { licence_id } });
    return result;
  };

  getProductByName = async (nombre) => {
    const result = await this.products.findOne({ where: { nombre } });
    return result;
  };

  getProductsByMinPrice = async (price) => {
    const result = await this.products.findAll({
      where: { precio: { [Op.gt]: price } },
    });
    return result;
  };

  createProduct = async (product) => {
    const result = await this.products.create(product);
    return result;
  };

  updProduct = async (product_id, data) => {
    const result = await this.products.update(data, { where: { product_id } });

    return result[0];
  };

  delProduct = async (product_id) =>
    await this.products.destroy({ where: { product_id } });

  /*   async getAllCategories() {
    const categories = await this.products.findAll();
    return categories;
  }

  async getAllLicences() {
    const licences = await this.products.findAll();
    return licences;
  }*/
}
