import express from "express";
import adminControllers from "../controllers/adminControllers.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get(`/`, adminControllers.admin);
router.get(`/create`, adminControllers.createGet);
router.post(
  `/create`,
  uploadMiddleware.single("imagen"),
  adminControllers.createPost
);
router.get(`/edit`, adminControllers.editGet);
router.put(`/edit`, adminControllers.editPost);
router.delete(`/delete/:id`, adminControllers.deleteItem);

export default router;

/* - GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id */
