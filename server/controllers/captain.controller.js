import Captain from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";

import { validationResult } from "express-validator";

// Route-level validators (in captain.routes.js) already validate:
// fullName.first, fullName.last, email, password, vehicle.*
// Removed outdated 'name' field validation that caused the mismatch.
export const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const captain = await createCaptain(req.body);
    const token = captain.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(201).json({ captain, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;

    const captain = await Captain.findOne({ email });

    if (!captain) {
      return res.status(404).json({ error: "Captain not found" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ captain, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
