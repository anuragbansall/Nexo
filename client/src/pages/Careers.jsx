import React from "react";

const Careers = () => (
  <div className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Careers
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-lg">
      Join a mission-driven mobility team building sustainable, intelligent
      transportation infrastructure. We value craft, curiosity, and pragmatic
      innovation.
    </p>
    <div className="mt-12 grid sm:grid-cols-2 gap-6">
      {[
        "Senior Frontend Engineer",
        "Platform Engineer",
        "Product Designer",
        "City Ops Manager",
      ].map((role) => (
        <div
          key={role}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <h2 className="text-sm font-semibold text-white tracking-wide">
            {role}
          </h2>
          <p className="mt-2 text-xs text-white/50">
            Remote / Hybrid • Full-time
          </p>
          <button className="mt-4 text-[11px] uppercase tracking-wider font-medium px-4 h-9 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            Apply
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Careers;
