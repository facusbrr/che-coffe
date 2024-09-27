import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", validateJwt, getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", validateJwt, createOrderCtrl);

export { ordersRouter };
