import { Products } from "../models/product.model.js";

export class ProductsServices {
  constructor() {
    this.model = new Products();
  }

  getProducts = async () => {
    const result = await this.model.getProducts();
    return result;
  };

  getProductById = async (product_id) => {
    const result = await this.model.getProductById(product_id);
    return result;
  };

  getProductByName = async (name) => {
    const result = await this.model.getProductByName(name);
    return result;
  };

  delProduct = async (id) => await this.model.delProduct(parseInt(id));

  createProduct = async (productData) => {
    const result = await this.model.createProduct(productData);
    return result;
  };

  updProduct = async (product_id, productData) => {
    const result = await this.model.updProduct(product_id, productData);
    return result;
  };

  getLicenceNameById(licenceId) {
    // Lógica para obtener el nombre de la categoría basándote en el categoryId
    // Puedes obtener esta información de tu base de datos u otro origen de datos
    switch (licenceId) {
      case "1":
        return "pokemon"; // Ejemplo, ajusta según tus categorías
      case "2":
        return "star-wars";
      case "3":
        return "harry-potter";
      default:
        return "otra_categoria";
    }
  }
}
