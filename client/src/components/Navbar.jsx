import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="absolute top-0 flex w-full items-center justify-center bg-white/50 px-6 py-4 shadow-sm backdrop-blur-md">
      <h1 className="text-2xl font-semibold text-neutral-800">Nexo</h1>

      <nav className="ml-auto flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            href={link.to}
            className="text-gray-600 hover:text-gray-900"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
