import React from "react";

const pillars = [
  {
    title: "Verified Captains",
    text: "Multi-layer KYC, document verification & periodic re-screening ensure identity trust.",
  },
  {
    title: "Realtime Monitoring",
    text: "Anomaly detection flags route deviation, harsh braking & unusual stops.",
  },
  {
    title: "Privacy Layer",
    text: "Number masking and ephemeral trip tokens reduce exposure of personal info.",
  },
  {
    title: "Trip Sharing",
    text: "Live shareable links with dynamic location updates for friends & family.",
  },
  {
    title: "Emergency Connect",
    text: "One-tap SOS linking to local authorities & internal safety response center.",
  },
  {
    title: "Driver Wellness",
    text: "Fatigue & overdrive alerts promote rest cycles and reduce risk.",
  },
];

const Safety = () => {
  return (
    <div className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Safety & Trust
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            Safety is engineered into every layer—identity, routing, comms, and
            realtime oversight. Our hybrid AI + human console keeps every trip
            accountable.
          </p>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6"
            >
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                {p.text}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/0 via-violet-500/5 to-fuchsia-500/20 pointer-events-none" />
            </div>
          ))}
        </section>

        <section className="max-w-3xl space-y-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Incident Response
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Every SOS event fans out to a triage pipeline: realtime location
            lock, live audio snapshot option, driver status check, and
            escalation routing to regional responders. We continuously simulate
            scenarios to improve MTTR (mean time to resolution).
          </p>
          <h2 className="text-xl font-semibold tracking-tight pt-4">
            Data Ethics
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            We minimize retention windows and anonymize telemetry for model
            training. Personally identifiable fragments never leave our secured
            boundary without strict purpose binding.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Safety;
