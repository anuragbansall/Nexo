import React, { useState, useEffect, useCallback } from "react";

// Shape: { role: 'user'|'captain', fullName: { first, last }, email, vehicle? }
import { AuthContext } from "./authContextCore.js";
import { userApi, captainApi } from "../lib/api.js";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nexo_auth_user")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem("nexo_auth_user", JSON.stringify(user));
    else localStorage.removeItem("nexo_auth_user");
  }, [user]);

  const login = useCallback(async ({ role, email, password }) => {
    const api = role === "captain" ? captainApi : userApi;
    const res = await api.login({ email, password });
    const entity = res.user || res.captain;
    setUser({ role, ...entity });
    return entity;
  }, []);

  const register = useCallback(async (payload) => {
    const api = payload.role === "captain" ? captainApi : userApi;
    const body = { ...payload };
    if (payload.role === "user") {
      body.fullName = payload.fullName;
    }
    const res = await api.register(body);
    const entity = res.user || res.captain;
    setUser({ role: payload.role, ...entity });
    return entity;
  }, []);

  const fetchProfile = useCallback(async (role) => {
    const api = role === "captain" ? captainApi : userApi;
    const res = await api.profile();
    const entity = res.user || res.captain;
    setUser((u) => ({ ...(u || {}), role, ...entity }));
    return entity;
  }, []);

  const logout = useCallback(
    async (roleHint) => {
      try {
        const role = roleHint || user?.role;
        const api = role === "captain" ? captainApi : userApi;
        await api.logout();
      } catch (err) {
        // swallow logout network errors silently but keep for debug
        console.warn("Logout request failed (ignored):", err?.message);
      }
      setUser(null);
    },
    [user],
  );

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    fetchProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook moved to hooks/useAuth.js to satisfy fast-refresh heuristic.
