import express from "express";
import {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { authenticateCaptain } from "../middlewares/auth.middleware.js";

const captainRouter = express.Router();

captainRouter.post(
  "/register",
  [
    body("fullName.first").notEmpty().withMessage("First name is required."),
    body("fullName.last").notEmpty().withMessage("Last name is required."),
    body("email").isEmail().withMessage("Invalid email address."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
    body("vehicle.type").notEmpty().withMessage("Vehicle type is required."),
    body("vehicle.plate").notEmpty().withMessage("Vehicle plate is required."),
    body("vehicle.model").notEmpty().withMessage("Vehicle model is required."),
    body("vehicle.color").notEmpty().withMessage("Vehicle color is required."),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be a positive integer."),
  ],
  registerCaptain
);

captainRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
  ],
  loginCaptain
);

captainRouter.post("/logout", authenticateCaptain, logoutCaptain);

captainRouter.get("/profile", authenticateCaptain, getCaptainProfile);

export default captainRouter;
