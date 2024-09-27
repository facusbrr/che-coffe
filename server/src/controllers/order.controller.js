import {
  createOrder,
  getOrders,
  getOrderById,
  deleteOrderById,
} from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  //Si no se obtiene coffee ocurre un error
  if (!coffee) {
    throw new Error("El campo de coffee es requerido");
  }

  try {
    const order = createOrder(coffee, userId);

    res.status(201).json({ order: order, user: userId });
  } catch (error) {
    console.error(`Ocurrió un error al crear el coffee: ${error.message}`);

    res
      .status(400)
      .json({ message: "Ocurrio un error al crear la orden", error });
  }
};

export const getOrderByIdCtrl = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const order = getOrderById(id, userId);

    if (!order) {
      throw new Error("No se encontro la order");
    }

    res.status(200).json({ order, user: userId });
  } catch (error) {
    res.status(500).json({ message: "No se pudo encontrar la orden" });
  }
};

export const getOrdersCtrl = (req, res) => {
  const userId = req.user.id;
  try {
    const orders = getOrders(userId);

    if (!orders) {
      throw new Error("No se encontro la order");
    }

    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: `No se pudo obtener las tareas: ${error.message}` });
  }
};

export const deleteOrderByIdCtrl = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const order = deleteOrderById(id, userId);

    if (!order) {
      throw new Error("No se encontro la orden a eliminar");
    }

    res.status(200).json({ message: "La order se eliminó correctamente" });
  } catch (error) {
    res.status(500).json({
      message: `Ocurrio un problema al eliminar la order: ${error.message}`,
    });
  }
};
