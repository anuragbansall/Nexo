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
    <div className="mx-auto max-w-md px-4 py-24 sm:px-0">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-white/50">
          Access your {role === "user" ? "rider" : "captain"} account
        </p>
      </div>
      <div className="mb-8 flex w-full overflow-hidden rounded-xl border border-white/10">
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
        className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
      >
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••"
            className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
          />
        </div>
        {error && (
          <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-400">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Continue"}
        </button>
        <p className="text-[11px] leading-relaxed text-white/40">
          By continuing you agree to our Terms & Privacy Policy.
        </p>
        <p className="pt-2 text-xs text-white/60">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
