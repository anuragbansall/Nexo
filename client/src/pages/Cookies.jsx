import React from "react";

const Cookies = () => (
  <div className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Cookies
    </h1>
    <p className="mt-6 text-sm leading-relaxed text-white/60">
      We use minimal essential cookies for session continuity and analytics
      necessary to improve reliability. No third-party advertising trackers.
    </p>
    <h2 className="mt-10 text-sm font-semibold tracking-wide text-white">
      Types
    </h2>
    <ul className="mt-2 list-inside list-disc space-y-2 text-xs text-white/60">
      <li>Auth session tokens</li>
      <li>Performance telemetry aggregation</li>
      <li>Feature flag persistence</li>
    </ul>
  </div>
);

export default Cookies;
