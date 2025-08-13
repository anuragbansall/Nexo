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
  <div className="mx-auto max-w-4xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Press
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-white/60">
      Media resources and recent coverage.
    </p>
    <div className="mt-12 space-y-6">
      {articles.map((a) => (
        <div
          key={a.title}
          className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:flex-row sm:items-center"
        >
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-300 uppercase">
              {a.source}
            </div>
            <h2 className="mt-1 text-sm font-semibold text-white">{a.title}</h2>
          </div>
          <span className="text-[11px] text-white/40">{a.date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Press;
