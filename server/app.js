import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";
import rideRouter from "./routes/ride.routes.js";

dotenv.config();

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/captains", captainRouter);
app.use("/api/rides", rideRouter);

// Test route to check authentication (only in development)
if (process.env.NODE_ENV !== "production") {
  app.get("/api/test-auth", (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    res.json({
      hasToken: !!token,
      tokenLength: token ? token.length : 0,
      cookies: req.cookies,
      authHeader: req.headers.authorization,
    });
  });
}

// Test route to create sample users (only in development)
app.post("/api/create-test-users", async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({ error: "Not available in production" });
  }

  try {
    const { default: User } = await import("./models/user.model.js");
    const { default: Captain } = await import("./models/captain.model.js");

    // Create test user
    const testUser = new User({
      fullName: { first: "John", last: "Doe" },
      email: "user@test.com",
      password: "password123",
    });
    await testUser.save();

    // Create test captain
    const testCaptain = new Captain({
      fullName: { first: "Jane", last: "Smith" },
      email: "captain@test.com",
      password: "password123",
      status: "active",
      vehicle: {
        color: "Blue",
        model: "Toyota Prius",
        plate: "ABC-123",
        capacity: 4,
        type: "car",
      },
      location: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    });
    await testCaptain.save();

    res.json({
      message: "Test users created successfully",
      user: { email: testUser.email, id: testUser._id },
      captain: { email: testCaptain.email, id: testCaptain._id },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

export default app;
