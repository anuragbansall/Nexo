import React from "react";

const articles = [
  {
    source: "TechDaily",
    title: "Nexo launches predictive routing engine",
    date: "2025-06-12",
  },
  {
    source: "UrbanWire",
    title: "How Nexo optimizes multi-modal fleets",
    date: "2025-05-28",
  },
  {
    source: "FutureMobility",
    title: "Safety analytics redefining ride trust",
    date: "2025-05-10",
  },
];

const Press = () => (
  <div className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Press
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-lg">
      Media resources and recent coverage.
    </p>
    <div className="mt-12 space-y-6">
      {articles.map((a) => (
        <div
          key={a.title}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <div>
            <div className="text-xs uppercase tracking-wider text-indigo-300 font-semibold">
              {a.source}
            </div>
            <h2 className="text-sm font-semibold text-white mt-1">{a.title}</h2>
          </div>
          <span className="text-[11px] text-white/40">{a.date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Press;
