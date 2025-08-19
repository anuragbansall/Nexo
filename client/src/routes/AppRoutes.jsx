import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/:role" element={<Login />} />
      <Route path="/register/:role" element={<Register />} />
    </Routes>
  );
}
