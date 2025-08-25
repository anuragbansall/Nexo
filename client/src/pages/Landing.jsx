import React from "react";
import heroBgImage from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="relative h-screen w-screen">
      <img
        src={heroBgImage}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 flex-col items-center gap-3 bg-white p-6 md:w-2xl md:rounded-t-2xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Welcome to Nexo
        </h1>
        <Link to="/login/user" className="dark-btn w-lg">
          Continue as User
        </Link>
        <Link to="/login/captain" className="light-btn w-lg">
          Continue as Captain
        </Link>
      </div>
    </main>
  );
}

export default Landing;
