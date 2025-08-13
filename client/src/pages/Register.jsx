import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

// Determine fields from server models:
// User: firstName, lastName, email, password
// Captain: firstName, lastName, email, password, vehicle: color, model, plate, capacity, type

const vehicleTypes = [
  { value: "car", label: "Car" },
  { value: "bike", label: "Bike" },
  { value: "auto", label: "Auto" },
];

const Register = () => {
  const [role, setRole] = useState("user");
  const [userForm, setUserForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });
  const [captainForm, setCaptainForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    vehicle: { color: "", model: "", plate: "", capacity: "", type: "car" },
  });

  function handleUserChange(e) {
    const { name, value } = e.target;
    setUserForm((f) => ({ ...f, [name]: value }));
  }

  function handleCaptainChange(e) {
    const { name, value } = e.target;
    if (name.startsWith("vehicle.")) {
      const key = name.split(".")[1];
      setCaptainForm((f) => ({
        ...f,
        vehicle: { ...f.vehicle, [key]: value },
      }));
    } else {
      setCaptainForm((f) => ({ ...f, [name]: value }));
    }
  }

  const { register: registerAuth } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (role === "user") {
        const payload = {
          role,
          fullName: { first: userForm.first, last: userForm.last },
          email: userForm.email,
          password: userForm.password,
        };
        console.log("[REGISTER SUBMIT]", payload);
        await registerAuth(payload);
      } else {
        const payload = {
          role,
          fullName: { first: captainForm.first, last: captainForm.last },
          email: captainForm.email,
          password: captainForm.password,
          vehicle: {
            ...captainForm.vehicle,
            capacity: captainForm.vehicle.capacity
              ? Number(captainForm.vehicle.capacity)
              : undefined,
          },
        };
        console.log("[REGISTER SUBMIT]", payload);
        await registerAuth(payload);
      }
      navigate("/profile");
    } catch (err) {
      setError(err?.data?.error || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  const form = role === "user" ? userForm : captainForm;
  const handleChange = role === "user" ? handleUserChange : handleCaptainChange;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0 py-24">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
        <p className="text-white/50 text-sm mt-2">
          Join Nexo as a {role === "user" ? "rider" : "captain"}.
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
        className="space-y-8 bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-md"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
              First Name
            </label>
            <input
              required
              name="first"
              value={form.first}
              onChange={handleChange}
              placeholder="John"
              className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Last Name
            </label>
            <input
              required
              name="last"
              value={form.last}
              onChange={handleChange}
              placeholder="Doe"
              className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
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
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••"
              className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
            />
          </div>
        </div>

        {role === "captain" && (
          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-wide text-white/70">
              Vehicle Details
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Model
                </label>
                <input
                  required
                  name="vehicle.model"
                  value={form.vehicle.model}
                  onChange={handleChange}
                  placeholder="Tesla 3"
                  className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Color
                </label>
                <input
                  required
                  name="vehicle.color"
                  value={form.vehicle.color}
                  onChange={handleChange}
                  placeholder="Black"
                  className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Plate
                </label>
                <input
                  required
                  name="vehicle.plate"
                  value={form.vehicle.plate}
                  onChange={handleChange}
                  placeholder="AB12 XYZ"
                  className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Capacity
                </label>
                <input
                  required
                  min={1}
                  name="vehicle.capacity"
                  value={form.vehicle.capacity}
                  onChange={handleChange}
                  placeholder="4"
                  type="number"
                  className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white placeholder-white/40 text-sm"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Type
                </label>
                <select
                  name="vehicle.type"
                  value={form.vehicle.type}
                  onChange={handleChange}
                  className="h-12 w-full px-4 rounded-xl bg-white/10 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 text-white text-sm"
                >
                  {vehicleTypes.map((v) => (
                    <option key={v.value} value={v.value}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

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
          {loading
            ? "Creating..."
            : `Create ${role === "user" ? "User" : "Captain"} Account`}
        </button>
        <p className="text-[11px] text-white/40 leading-relaxed">
          By creating an account you agree to our Terms & Privacy Policy.
        </p>
        <p className="text-xs text-white/60">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
