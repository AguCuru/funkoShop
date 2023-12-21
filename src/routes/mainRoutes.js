import express from "express";
import { MainControllers } from "./../controllers/mainControllers.js";

export class MainRoutes {
  constructor() {
    this.router = express.Router();
    this.controller = new MainControllers();
    this.router
      .get(`/`, this.controller.getProducts)
      .get(`/contact`, this.controller.contact)
      .get(`/about`, this.controller.about)
      .get(`/faqs`, this.controller.faqs);
  }
}

/* router.get(`/`, mainControllers.getProducts); */
/* router.get(`/contact`, mainControllers.contact);
router.get(`/about`, mainControllers.about);
router.get(`/faqs`, mainControllers.faqs); */

/* Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs */
