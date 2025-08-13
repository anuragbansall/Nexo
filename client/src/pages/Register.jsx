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
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-0">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
        <p className="mt-2 text-sm text-white/50">
          Join Nexo as a {role === "user" ? "rider" : "captain"}.
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
        className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
              First Name
            </label>
            <input
              required
              name="first"
              value={form.first}
              onChange={handleChange}
              placeholder="John"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
              Last Name
            </label>
            <input
              required
              name="last"
              value={form.last}
              onChange={handleChange}
              placeholder="Doe"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
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
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••"
              className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
            />
          </div>
        </div>

        {role === "captain" && (
          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-wide text-white/70">
              Vehicle Details
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                  Model
                </label>
                <input
                  required
                  name="vehicle.model"
                  value={form.vehicle.model}
                  onChange={handleChange}
                  placeholder="Tesla 3"
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                  Color
                </label>
                <input
                  required
                  name="vehicle.color"
                  value={form.vehicle.color}
                  onChange={handleChange}
                  placeholder="Black"
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                  Plate
                </label>
                <input
                  required
                  name="vehicle.plate"
                  value={form.vehicle.plate}
                  onChange={handleChange}
                  placeholder="AB12 XYZ"
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
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
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                  Type
                </label>
                <select
                  name="vehicle.type"
                  value={form.vehicle.type}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white focus:ring-2 focus:ring-indigo-500/60 focus:outline-none"
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
          <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs text-rose-400">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : `Create ${role === "user" ? "User" : "Captain"} Account`}
        </button>
        <p className="text-[11px] leading-relaxed text-white/40">
          By creating an account you agree to our Terms & Privacy Policy.
        </p>
        <p className="text-xs text-white/60">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-400 hover:text-indigo-300"
          >
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
