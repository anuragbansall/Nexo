import React from "react";

const Accessibility = () => (
  <div className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Accessibility
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-lg">
      Inclusive mobility means removing barriers and designing for all riders &
      captains.
    </p>
    <ul className="mt-10 space-y-4 text-sm text-white/70 list-disc list-inside">
      <li>High contrast & reduced motion modes (coming soon).</li>
      <li>Screen reader friendly semantic components.</li>
      <li>Color-blind safe palette with non-color status indicators.</li>
      <li>Continuous WCAG audits during feature rollouts.</li>
    </ul>
  </div>
);

export default Accessibility;
