import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/captains", captainRouter);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

export default app;
