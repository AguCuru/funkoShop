import productsData from "../../data/products.js";

import products from "../models/products.js";

const shopControllers = {
  shop: async (req, res) => {
    try {
      const verProducto = await products.getProducts();
      res.render(`shop`, { products: verProducto });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  },
  itemGet: (req, res) => res.render(`item`),
  itemPost: (req, res) =>
    res.render(
      `Route for add the current item to the shop cart from controller`
    ),
  cartGet: (req, res) => res.render(`cart`),
  cartPost: (req, res) => res.render(`cart`),
};

export default shopControllers;
