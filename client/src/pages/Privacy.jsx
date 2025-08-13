import React from "react";

const Privacy = () => (
  <div className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Privacy Policy
    </h1>
    <p className="mt-6 text-sm leading-relaxed text-white/60">
      We collect only essential operational data to provide safe and efficient
      rides. This document explains what, why and how.
    </p>
    <h2 className="mt-10 text-sm font-semibold tracking-wide text-white">
      Data Categories
    </h2>
    <ul className="mt-2 list-inside list-disc space-y-2 text-xs text-white/60">
      <li>Account & identity</li>
      <li>Geolocation & telemetry (trip scoped)</li>
      <li>Payment metadata (tokenized)</li>
    </ul>
    <h2 className="mt-6 text-sm font-semibold tracking-wide text-white">
      Retention
    </h2>
    <p className="mt-2 text-xs leading-relaxed text-white/60">
      Trip & location data is minimized and aggregated after operational need.
    </p>
  </div>
);

export default Privacy;
