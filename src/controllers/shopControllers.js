import productsData from "../../data/products.js";
import products from "../../data/products.js";

const shopControllers = {
  shop: (req, res) => res.render(`shop`, { products: productsData.products }),
  itemGet: (req, res) => res.render(`item`),
  itemPost: (req, res) =>
    res.render(
      `Route for add the current item to the shop cart from controller`
    ),
  cartGet: (req, res) => res.render(`cart`),
  cartPost: (req, res) => res.render(`cart`),
};

export default shopControllers;
