import express from "express";
import authControllers from "../controllers/authControllers.js";

const router = express.Router();

router.get(`/login`, authControllers.login);
router.post(`/login`, authControllers.loginPost);
router.get(`/register`, authControllers.register);
router.post(`/register`, authControllers.registerPost);

export default router;