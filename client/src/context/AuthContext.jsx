import React, { useState, useEffect, useCallback } from "react";

// Shape: { role: 'user'|'captain', fullName: { first, last }, email, vehicle? }
import { AuthContext } from "./authContextCore.js";
import { userApi, captainApi } from "../lib/api.js";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // bootstrap + in-flight profile fetch
  const [authError, setAuthError] = useState(null);

  // Bootstrap: attempt to discover existing session via cookies (user first, then captain)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setAuthLoading(true);
      setAuthError(null);
      try {
        // Try user profile
        try {
          const resUser = await userApi.profile();
          if (!cancelled) {
            const entity = resUser.user;
            if (entity) {
              setUser({ role: "user", ...entity });
              return; // success
            }
          }
        } catch (eUser) {
          // Only proceed to captain if unauthorized / not found
        }
        // Try captain profile
        try {
          const resCap = await captainApi.profile();
          if (!cancelled) {
            const entity = resCap.captain;
            if (entity) {
              setUser({ role: "captain", ...entity });
              return;
            }
          }
        } catch (eCap) {
          // No active session
        }
      } catch (err) {
        if (!cancelled) setAuthError(err?.message || "Auth bootstrap failed");
      } finally {
        if (!cancelled) setAuthLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
        console.warn("Logout request failed (ignored):", err?.message);
      }
      setUser(null);
    },
    [user],
  );

  const value = {
    user,
    isAuthenticated: !!user,
    authLoading,
    authError,
    login,
    register,
    logout,
    fetchProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook moved to hooks/useAuth.js to satisfy fast-refresh heuristic.
