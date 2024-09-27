import { body } from "express-validator";

export const ordersValidator = [
  body("coffee")
    .isString()
    .withMessage("Debe ser Capuccino, Expresso o Americano"),
];
