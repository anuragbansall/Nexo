import React from "react";

const Privacy = () => (
  <div className="py-24 px-4 sm:px-8 max-w-3xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Privacy Policy
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-sm">
      We collect only essential operational data to provide safe and efficient
      rides. This document explains what, why and how.
    </p>
    <h2 className="mt-10 text-sm font-semibold text-white tracking-wide">
      Data Categories
    </h2>
    <ul className="mt-2 space-y-2 text-xs text-white/60 list-disc list-inside">
      <li>Account & identity</li>
      <li>Geolocation & telemetry (trip scoped)</li>
      <li>Payment metadata (tokenized)</li>
    </ul>
    <h2 className="mt-6 text-sm font-semibold text-white tracking-wide">
      Retention
    </h2>
    <p className="mt-2 text-xs text-white/60 leading-relaxed">
      Trip & location data is minimized and aggregated after operational need.
    </p>
  </div>
);

export default Privacy;
