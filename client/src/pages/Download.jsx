import React from "react";

const platforms = [
  {
    name: "iOS",
    badge: "App Store",
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
  {
    name: "Android",
    badge: "Google Play",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    name: "Web",
    badge: "PWA Access",
    gradient: "from-sky-500 via-cyan-500 to-teal-400",
  },
];

const Download = () => {
  return (
    <div className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
            Get the Nexo App
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Optimized for realtime performance, low battery impact, and
            accessible motion design. Install on your preferred platform.
          </p>
        </header>

        <div className="mb-24 grid gap-8 sm:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
            >
              <div
                className={`mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-black/30`}
              >
                {p.name[0]}
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {p.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                High fidelity experience tailored for {p.name} users.
              </p>
              <button
                className={`mt-5 h-9 rounded-full bg-gradient-to-r px-4 text-[11px] font-medium tracking-wider uppercase ${p.gradient} text-white shadow-lg shadow-black/30 transition-all hover:shadow-black/50`}
              >
                {p.badge}
              </button>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <section className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-xl font-semibold tracking-tight">Why native?</h2>
          <p className="text-sm leading-relaxed text-white/60">
            We leverage platform-specific APIs for haptics, low-latency
            geolocation, background activity efficiency, and secure credential
            storage. Our web progressive app offers parity for lightweight
            access while native channels deliver the richest sensory feedback.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Download;
