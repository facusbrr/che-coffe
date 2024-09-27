import { Router } from "express";
import {
  createOrderCtrl,
  getOrderByIdCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { ordersValidator } from "../validations/orders.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const ordersRouter = Router();

ordersRouter.get("/", applyValidations, validateJwt, getOrdersCtrl);

ordersRouter.post(
  "/",
  ordersValidator,
  applyValidations,
  validateJwt,
  createOrderCtrl
);

ordersRouter.get("/:id", getOrderByIdCtrl);

export { ordersRouter };
