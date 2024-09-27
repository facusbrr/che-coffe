import { body } from "express-validator";

export const signUpValidation = [
  body("username").isString(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
];

export const signInValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
];
