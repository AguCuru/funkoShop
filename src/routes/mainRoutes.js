import express from "express";
import mainController from "../controllers/mainControllers.js";

const router = express.Router();

router.get(`/home`, mainController.home);
router.get(`/contact`, mainController.contact);
router.get(`/about`, mainController.about);
router.get(`/faqs`, mainController.faqs);

export default router;

/* Main Routes:
- GET -> /home
- GET -> /contact
- GET -> /about
- GET -> /faqs */
