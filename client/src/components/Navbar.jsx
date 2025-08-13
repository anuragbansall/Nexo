import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Safety", to: "/safety" },
    { label: "Download", to: "/download" },
    { label: "About", to: "/about" },
  ];

  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const initials = isAuthenticated
    ? (
        [user.fullName?.first?.[0], user.fullName?.last?.[0]]
          .filter(Boolean)
          .join("") || user.email[0]
      ).toUpperCase()
    : "";

  function handleLogout() {
    logout();
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
            <span className="text-white font-black tracking-tight">N</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight select-none">
            exo
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-white/70 hover:text-white transition-colors ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 relative">
          {!isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className="hidden sm:inline-flex items-center text-sm font-medium px-4 h-9 rounded-full text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition-colors"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                className="inline-flex items-center text-sm font-semibold px-5 h-10 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
              >
                Get the App
              </NavLink>
            </>
          )}
          {isAuthenticated && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                {initials}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-3 shadow-xl shadow-black/50 z-50">
                  <div className="px-2 py-2 text-xs text-white/50 uppercase tracking-wider">
                    Account
                  </div>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/5"
                  >
                    Profile
                  </button>
                  <div className="h-px my-2 bg-white/10" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-xl text-sm text-rose-300 hover:text-white hover:bg-rose-500/10"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
