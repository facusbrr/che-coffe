import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { ordersValidator } from "../validations/orders.validations.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", validateJwt, getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", ordersValidator, validateJwt, createOrderCtrl);

export { ordersRouter };
