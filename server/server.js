import app from "./app.js";
import http from "http";
import connectDB from "./config/connectDB.js";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
