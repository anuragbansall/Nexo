import BlacklistToken from "../models/blacklistToken.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized access." });
  }

  const isBlacklisted = await BlacklistToken.findOne({ token });

  if (isBlacklisted) {
    return res.status(401).json({ error: "Token is blacklisted." });
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
