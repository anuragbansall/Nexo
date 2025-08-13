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
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 text-sm sm:px-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg ring-1 shadow-indigo-500/30 ring-white/20">
              <span className="font-black tracking-tight text-white">N</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white select-none">
              exo
            </span>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-white/40">
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
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs tracking-wider text-white/50 uppercase transition-colors hover:bg-white/10 hover:text-white"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:col-span-3 md:grid-cols-3">
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
