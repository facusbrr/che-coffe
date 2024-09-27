import { body } from "express-validator";

export const ordersValidator = [
  body("coffee").isString("La orden debe ser Capuccino, Espresso o Americano"),
];
