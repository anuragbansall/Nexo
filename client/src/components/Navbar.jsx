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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg ring-1 shadow-indigo-500/30 ring-white/20">
            <span className="font-black tracking-tight text-white">N</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white select-none">
            exo
          </span>
        </Link>
        <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-white/70 transition-colors hover:text-white ${
                    isActive ? "font-semibold text-white" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="relative flex items-center gap-3">
          {!isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className="hidden h-9 items-center rounded-full border border-white/20 px-4 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:text-white sm:inline-flex"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50"
              >
                Get the App
              </NavLink>
            </>
          )}
          {isAuthenticated && (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 focus:ring-2 focus:ring-indigo-400/60 focus:outline-none"
              >
                {initials}
              </button>
              {menuOpen && (
                <div className="absolute right-0 z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-neutral-900/95 p-3 shadow-xl shadow-black/50 backdrop-blur-xl">
                  <div className="px-2 py-2 text-xs tracking-wider text-white/50 uppercase">
                    Account
                  </div>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setMenuOpen(false);
                    }}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    Profile
                  </button>
                  <div className="my-2 h-px bg-white/10" />
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm text-rose-300 hover:bg-rose-500/10 hover:text-white"
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
