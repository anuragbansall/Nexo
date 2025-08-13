import React from "react";

const features = [
  {
    title: "Real-time Tracking",
    desc: "Accurate live GPS tracking so you always know your driver’s position and ETA.",
    icon: "🛰️",
  },
  {
    title: "Upfront Pricing",
    desc: "Transparent fares powered by smart demand modeling—no surprises.",
    icon: "💱",
  },
  {
    title: "Safety First",
    desc: "24/7 safety support, number masking, and trip sharing for peace of mind.",
    icon: "🛡️",
  },
  {
    title: "Multi-mode Rides",
    desc: "Choose bike, car, or SUV—optimized for speed, comfort, or group travel.",
    icon: "🧬",
  },
  {
    title: "Eco Smart",
    desc: "Carbon insights & greener route suggestions reduce environmental impact.",
    icon: "🌿",
  },
  {
    title: "Priority Support",
    desc: "Premium riders get faster resolutions via AI + human hybrid support.",
    icon: "⚡",
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text pb-14 text-center text-3xl font-bold text-transparent sm:text-4xl">
          Designed for elevated journeys
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors hover:border-white/25"
            >
              <div className="text-3xl drop-shadow-sm">{f.icon}</div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/5 to-fuchsia-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
