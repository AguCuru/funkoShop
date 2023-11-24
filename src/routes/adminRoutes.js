import express from "express";
import adminControllers from "../controllers/adminControllers.js";

const router = express.Router();

router.get(`/`, adminControllers.admin);
router.get(`/create`, adminControllers.createGet);
router.post(`/create`, adminControllers.createPost);
router.get(`/edit/:id`, adminControllers.editGet);
router.put(`/edit/:id`, adminControllers.editPost);
router.delete(`/delete/:id`, adminControllers.delete);

export default router;

/* - GET -> /admin
- GET -> /admin/create
- POST -> /admin/create
- GET -> /admin/edit/:id
- PUT -> /admin/edit/:id
- DELETE -> /admin/delete/:id */
