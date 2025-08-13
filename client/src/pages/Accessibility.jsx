import React from "react";

const Accessibility = () => (
  <div className="mx-auto max-w-4xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Accessibility
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-white/60">
      Inclusive mobility means removing barriers and designing for all riders &
      captains.
    </p>
    <ul className="mt-10 list-inside list-disc space-y-4 text-sm text-white/70">
      <li>High contrast & reduced motion modes (coming soon).</li>
      <li>Screen reader friendly semantic components.</li>
      <li>Color-blind safe palette with non-color status indicators.</li>
      <li>Continuous WCAG audits during feature rollouts.</li>
    </ul>
  </div>
);

export default Accessibility;
