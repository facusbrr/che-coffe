import jwt from "jsonwebtoken";

// Función para crear un JWT
export const createJwt = async (userId) => {
  return new Promise((res, rej) => {
    jwt.sign({ userId }, "secret", (err, token) => {
      if (err) {
        rej(err);
      }
      res(token);
    });
  });
};
