// validationMiddleware.js
import { body } from "express-validator";

export const registerValidation = [
  body("nombre")
    .isLength({ min: 1, max: 50 })
    .withMessage(
      "Nombre no puede estar vacío y debe tener menos de 50 caracteres"
    ),
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];
