import { getUserById } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// Validate JWT middleware
export const validateJwt = async (req, res, next) => {
  // Se obtiene el token de las cookies
  const token = req.cookies.token;

  // Si no hay token, se responde con un mensaje de error
  if (!token) {
    return res.status(401).json({ message: "Session is required" });
  }

  // Se verifica el token
  try {
    // Se obtiene el id del usuario del token
    const { userId } = jwt.verify(token, "secret");

    // Se obtiene el usuario por su id
    const user = await getUserById(userId);

    // Si no se encuentra el usuario, se responde con un mensaje de error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Se añade el usuario a la solicitud
    req.user = user;

    // Se llama al siguiente middleware
    next();
  } catch (err) {
    // Si hay un error al verificar el token, se responde con un mensaje de error
    return res.status(401).json({ message: "Invalid session" });
  }
};
