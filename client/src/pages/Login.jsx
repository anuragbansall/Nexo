import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Login = () => {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/profile";

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      console.log("[LOGIN SUBMIT]", { role, ...form });
      await login({ role, ...form });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err?.data?.error || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-0 py-24">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
        <p className="text-white/50 text-sm mt-2">
          Access your {role === "user" ? "rider" : "captain"} account
        </p>
      </div>
      <div className="flex mb-8 rounded-xl overflow-hidden border border-white/10 w-full">
        {["user", "captain"].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`flex-1 py-3 text-sm font-medium transition-all ${
              role === r
                ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {r === "user" ? "User" : "Captain"}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-md"
      >
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••"
            className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
          />
        </div>
        {error && (
          <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-lg px-3 py-2">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Continue"}
        </button>
        <p className="text-[11px] text-white/40 leading-relaxed">
          By continuing you agree to our Terms & Privacy Policy.
        </p>
        <p className="text-xs text-white/60 pt-2">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
