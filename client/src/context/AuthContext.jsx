import { createContext, useEffect, useState } from "react";
import API from "../api/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const registerUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post("/users/register", userData);
      setUser(response.data.user);
      setRole("user");
      setIsAuthenticated(true);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "An error occurred during user registration.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const registerCaptain = async (captainData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post("/captains/register", captainData);
      setUser(response.data.user);
      setRole("captain");
      setIsAuthenticated(true);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "An error occurred during captain registration.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post("/users/login", userData);
      setUser(response.data.user);
      setRole("user");
      setIsAuthenticated(true);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "An error occurred during user login.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const loginCaptain = async (captainData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post("/captains/login", captainData);
      setUser(response.data.user);
      setRole("captain");
      setIsAuthenticated(true);
    } catch (err) {
      const apiMessage = err?.response?.data?.message;
      setError(
        apiMessage ||
          "Failed to log in as captain. Please check your credentials and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const getUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.get("/users/profile");
      setUser(response.data.user);
      setRole("user");
      setIsAuthenticated(true);
    } catch (err) {
      setError("Unable to fetch user profile.");
    } finally {
      setLoading(false);
    }
  };

  const getCaptainProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.get("/captains/profile");
      setUser(response.data.user);
      setRole("captain");
      setIsAuthenticated(true);
    } catch (err) {
      setError("Unable to fetch captain profile.");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    setError(null);
    try {
      await API.post("/users/logout");
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
    } catch (err) {
      setError("Unable to log out user.");
    } finally {
      setLoading(false);
    }
  };

  const logoutCaptain = async () => {
    setLoading(true);
    setError(null);
    try {
      await API.post("/captains/logout");
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
    } catch (err) {
      setError("Unable to log out captain.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const userResponse = await API.get("/users/profile");
        setUser(userResponse.data.user);
        setRole("user");
        setIsAuthenticated(true);
      } catch (err) {
        try {
          const captainResponse = await API.get("/captains/profile");
          setUser(captainResponse.data.user);
          setRole("captain");
          setIsAuthenticated(true);
        } catch (error) {
          setError("Unable to fetch profile.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        loading,
        error,
        registerUser,
        registerCaptain,
        loginUser,
        loginCaptain,
        getUserProfile,
        getCaptainProfile,
        logoutUser,
        logoutCaptain,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
