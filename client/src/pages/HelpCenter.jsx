import React from "react";

const faqs = [
  {
    q: "How do I become a captain?",
    a: "Register as captain, submit KYC & vehicle docs. We verify within 24-48h.",
  },
  {
    q: "Can I schedule rides?",
    a: "Scheduled rides are in pilot in select cities; feature rolling out soon.",
  },
  {
    q: "How is pricing calculated?",
    a: "Base fare + time + distance adjusted by realtime supply-demand and surge caps.",
  },
];

const HelpCenter = () => (
  <div className="mx-auto max-w-4xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Help Center
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-white/60">
      Quick answers to common questions.
    </p>
    <div className="mt-12 space-y-6">
      {faqs.map((item) => (
        <div
          key={item.q}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <h2 className="text-sm font-semibold text-white">{item.q}</h2>
          <p className="mt-2 text-xs leading-relaxed text-white/60">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HelpCenter;
