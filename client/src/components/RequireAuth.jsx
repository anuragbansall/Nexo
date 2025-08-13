import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const RequireAuth = ({ children }) => {
  const location = useLocation(); // hooks first
  const { isAuthenticated, authLoading } = useAuth();
  if (authLoading)
    return <div className="pt-24 text-center text-white/60">Loading...</div>;
  if (!isAuthenticated)
    return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
};

export default RequireAuth;
