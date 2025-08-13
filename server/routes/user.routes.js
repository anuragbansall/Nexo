import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { body } from "express-validator";
import { authenticateUser } from "../middlewares/auth.middleware.js";

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

userRouter.get("/profile", authenticateUser, getUserProfile);

userRouter.post("/logout", authenticateUser, logoutUser);

export default userRouter;
