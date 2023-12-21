import { ProductsServices } from "../services/productsServices.js";

const title = "Shop";

export class ShopControllers {
  constructor() {
    this.services = new ProductsServices();
  }
  getProducts = async (req, res) => {
    try {
      const products = await this.services.getProducts();
      res.render(`shop`, { title, products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  getProductById = async (req, res) => {
    try {
      const products = await this.services.getProducts();
      const product = await this.services.getProductById(req.params.id);
      console.log(product);
      res.render(`item`, { title: "Funko | Item", product, products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  itemPost = (req, res) =>
    res.render(
      `Route for add the current item to the shop cart from controller`,
      { title }
    );
  cartGet = (req, res) => res.render(`cart`, { title });
  cartPost = (req, res) => res.render(`cart`, { title });
}
