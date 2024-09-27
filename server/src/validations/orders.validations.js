import { body } from "express-validator";

export const ordersValidator = [
  body("coffee")
    .isString()
    .withMessage("El campo coffee debe ser un string")
    .isIn(["Expreso", "Capuccino", "Americano"])
    .withMessage("El coffee debe ser Expresso, Capuccino o Americano"),
];
