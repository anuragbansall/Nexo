import { useContext } from "react";
import { AuthContext } from "../context/authContextCore.js";
export const useAuth = () => useContext(AuthContext);
