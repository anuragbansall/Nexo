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
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <header className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Get the Nexo App
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Optimized for realtime performance, low battery impact, and
            accessible motion design. Install on your preferred platform.
          </p>
        </header>

        <div className="grid sm:grid-cols-3 gap-8 mb-24">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 flex flex-col items-center text-center group overflow-hidden"
            >
              <div
                className={`h-16 w-16 rounded-2xl mb-4 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-black/30`}
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
                className={`mt-5 text-[11px] uppercase tracking-wider font-medium px-4 h-9 rounded-full bg-gradient-to-r ${p.gradient} text-white shadow-lg shadow-black/30 hover:shadow-black/50 transition-all`}
              >
                {p.badge}
              </button>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/0 via-white/5 to-white/10" />
            </div>
          ))}
        </div>

        <section className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">Why native?</h2>
          <p className="text-sm text-white/60 leading-relaxed">
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
