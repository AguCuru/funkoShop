import express from "express";
import shopControllers from "../controllers/shopControllers.js";

const router = express.Router();

router.get(`/`, shopControllers.shop);

router.get(`/item/:id`, shopControllers.itemGet);

router.post(`/item/:id/add`, shopControllers.itemPost);

router.get(`/cart`, shopControllers.cartGet);

router.post(`/cart`, shopControllers.cartPost);

export default router;

/* Shop Routes:
- GET -> /shop
- GET -> /shop/item/:id
- POST -> /shop/item/:id/add
- GET -> /shop/cart
- POST -> /shop/cart */
