import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const company = [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Press", to: "/press" },
    { label: "Blog", to: "/blog" },
  ];
  const support = [
    { label: "Help Center", to: "/help" },
    { label: "Safety", to: "/safety" },
    { label: "Accessibility", to: "/accessibility" },
  ];
  const legal = [
    { label: "Terms", to: "/terms" },
    { label: "Privacy", to: "/privacy" },
    { label: "Licenses", to: "/licenses" },
    { label: "Cookies", to: "/cookies" },
  ];

  const sectionClass =
    "text-xs font-semibold uppercase tracking-wider text-white/60";
  const linkClass = ({ isActive }) =>
    `hover:text-white transition-colors ${
      isActive ? "text-white" : "text-white/50"
    }`;

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid md:grid-cols-4 gap-12 text-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
              <span className="text-white font-black tracking-tight">N</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight select-none">
              exo
            </span>
          </div>
          <p className="text-white/40 leading-relaxed text-xs max-w-xs">
            Next generation mobility platform delivering safer, smarter &
            greener rides.
          </p>
          <div className="flex gap-3 pt-2">
            {["twitter", "instagram", "linkedin"].map((s) => (
              <a
                key={s}
                href={`https://${s}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors text-xs uppercase tracking-wider"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-10">
          <div className="space-y-3">
            <h3 className={sectionClass}>Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className={sectionClass}>Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className={sectionClass}>Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} Nexo Mobility. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
