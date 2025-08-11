import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { body } from "express-validator";

const userRouter = express.Router();

userRouter.post(
  "/register",
  [
    body("fullName.first").notEmpty().withMessage("First name is required."),
    body("fullName.last").notEmpty().withMessage("Last name is required."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
  ],
  registerUser
);

userRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email format."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
  ],
  loginUser
);

export default userRouter;
