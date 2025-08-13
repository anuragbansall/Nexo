import React from "react";

const libs = [
  { name: "React", license: "MIT" },
  { name: "Vite", license: "MIT" },
  { name: "TailwindCSS", license: "MIT" },
  { name: "react-router-dom", license: "MIT" },
];

const Licenses = () => (
  <div className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Open Source Licenses
    </h1>
    <p className="mt-6 text-sm leading-relaxed text-white/60">
      We rely on and contribute to open ecosystems. Below are core libraries and
      their respective licenses.
    </p>
    <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
      {libs.map((l) => (
        <div
          key={l.name}
          className="flex items-center justify-between p-4 text-sm"
        >
          <span className="text-white/80">{l.name}</span>
          <span className="text-[11px] font-medium tracking-wider text-white/40 uppercase">
            {l.license}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Licenses;
