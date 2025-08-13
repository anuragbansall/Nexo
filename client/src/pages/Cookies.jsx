import React from "react";

const Cookies = () => (
  <div className="py-24 px-4 sm:px-8 max-w-3xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Cookies
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-sm">
      We use minimal essential cookies for session continuity and analytics
      necessary to improve reliability. No third-party advertising trackers.
    </p>
    <h2 className="mt-10 text-sm font-semibold text-white tracking-wide">
      Types
    </h2>
    <ul className="mt-2 space-y-2 text-xs text-white/60 list-disc list-inside">
      <li>Auth session tokens</li>
      <li>Performance telemetry aggregation</li>
      <li>Feature flag persistence</li>
    </ul>
  </div>
);

export default Cookies;
