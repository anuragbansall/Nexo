import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AuthForm({ role = "user", mode = "login", onSubmit = () => {} }) {
  const [formData, setFormData] = useState({
    fullName: {
      first: "",
      last: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      model: "",
      plate: "",
      capacity: "",
      type: "",
    },
    role: role,
    mode: mode,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("vehicle.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
          [key]: value,
        },
      }));
    } else if (name.startsWith("fullName.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        fullName: {
          ...prev.fullName,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { ...formData };

    // Remove vehicle info if not captain or not registering
    if (!(mode === "register" && role === "captain")) {
      delete data.vehicle;
    }

    // Remove fullName if not registering
    if (mode !== "register") {
      delete data.fullName;
    }

    onSubmit(data);
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      role: role,
      mode: mode,
    }));
  }, [role, mode]);

  return (
    <form
      className="flex w-full flex-col items-center gap-4"
      onSubmit={handleSubmit}
    >
      {mode === "register" && (
        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            name="fullName.first"
            value={formData.fullName.first}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            name="fullName.last"
            value={formData.fullName.last}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <input
        type="text"
        placeholder="Email"
        className="input"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {mode === "register" && role === "captain" && (
        <div className="flex w-full flex-col gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Vehicle Color"
              className="input"
              name="vehicle.color"
              value={formData.vehicle.color}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Vehicle Model"
              className="input"
              name="vehicle.model"
              value={formData.vehicle.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Vehicle Plate"
              className="input"
              name="vehicle.plate"
              value={formData.vehicle.plate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Vehicle Capacity"
              className="input"
              name="vehicle.capacity"
              value={formData.vehicle.capacity}
              onChange={handleChange}
              required
            />
          </div>

          <select
            className="input"
            name="vehicle.type"
            value={formData.vehicle.type}
            onChange={handleChange}
            required
          >
            <option disabled>Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>
        </div>
      )}

      <Link
        to={mode === "login" ? `/register/${role}` : `/login/${role}`}
        className="text-center text-lg text-neutral-500 hover:text-neutral-700"
      >
        {mode === "login" ? (
          <span>Don't have an account? Register</span>
        ) : (
          <span>Already have an account? Login</span>
        )}
      </Link>

      <button type="submit" className="dark-btn w-full">
        {mode === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default AuthForm;
