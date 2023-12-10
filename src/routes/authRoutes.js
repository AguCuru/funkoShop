import express from "express";
import authControllers from "../controllers/authControllers.js";

import { registerValidation } from "../middlewares/validationMiddleware.js";
import { loginValidation } from "../middlewares/validationMiddleware.js";
import { validatorMiddleware } from "../middlewares/validatonResultMiddleware.js";

const router = express.Router();

router.get(`/login`, authControllers.login);
router.post(
  `/login`,
  loginValidation,
  validatorMiddleware,
  authControllers.loginPost
);
router.get(`/register`, authControllers.register);
router.post(
  `/register`,
  registerValidation,
  validatorMiddleware,
  authControllers.registerPost
);
router.get(`/logout`, authControllers.logout);

export default router;
