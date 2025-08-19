import React from "react";
import { Link } from "react-router-dom";

function AuthForm({ role = "user", mode = "login" }) {
  return (
    <form className="flex w-full flex-col items-center gap-4">
      {mode === "register" && (
        <div className="input-group">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
        </div>
      )}
      <input type="text" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      {mode === "register" && role === "captain" && (
        <div className="flex w-full flex-col gap-4">
          <div className="input-group">
            <input type="text" placeholder="Vehicle Color" className="input" />
            <input type="text" placeholder="Vehicle Model" className="input" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Vehicle Plate" className="input" />
            <input
              type="number"
              placeholder="Vehicle Capacity"
              className="input"
            />
          </div>

          <select className="input">
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
