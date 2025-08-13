import BlacklistToken from "../models/blacklistToken.model.js";
import User from "../models/user.model.js";
import Captain from "../models/captain.model.js";
import jwt from "jsonwebtoken";

// Helper function to check if token is blacklisted
const checkBlacklistToken = async (token) => {
  if (!token) {
    return { error: "Unauthorized access." };
  }

  const isBlacklisted = await BlacklistToken.findOne({ token });

  if (isBlacklisted) {
    return { error: "Token is blacklisted." };
  }

  return null;
};

export const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  const blacklistError = await checkBlacklistToken(token);

  if (blacklistError) {
    return res.status(401).json(blacklistError);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized access." });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token." });
  }
};

export const authenticateCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  const blacklistError = await checkBlacklistToken(token);

  if (blacklistError) {
    return res.status(401).json(blacklistError);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const captain = await Captain.findById(decoded._id);

    if (!captain) {
      return res.status(401).json({ error: "Unauthorized access." });
    }

    req.captain = captain;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token." });
  }
};
