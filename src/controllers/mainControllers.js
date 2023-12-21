const title = "FunkoShop";

import { ProductsServices } from "../services/productsServices.js";

export class MainControllers {
  constructor() {
    this.services = new ProductsServices();
  }
  getProducts = async (req, res) => {
    try {
      const products = await this.services.getProducts();
      res.render(`index`, { title, products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  contact = (req, res) => res.render(`contact`, { title: "Funko | Contacto" });
  about = (req, res) => res.render(`about`, { title: "Funko | About" });
  faqs = (req, res) => res.render(`faqs`, { title: "Funko | Faqs" });
}

/*   contact: (req, res) => res.render(`contact`, { title: "Funko | Contacto" }),
  about: (req, res) => res.render(`about`, { title: "Funko | About" }),
  faqs: (req, res) => res.render(`faqs`, { title: "Funko | Faqs" }), */
