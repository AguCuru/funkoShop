import express from "express";
import { ShopControllers } from "./../controllers/shopControllers.js";

export class ShopRoutes {
  constructor() {
    this.router = express.Router();
    this.controllers = new ShopControllers();
    this.router
      .get(`/`, this.controllers.getProducts)
      .get(`/item/:id`, this.controllers.getProductById)
      .post(`/item/:id/add`, this.controllers.itemPost)
      .get(`/cart`, this.controllers.cartGet)
      .post(`/cart`, this.controllers.cartPost);
  }
}

/* Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart */
