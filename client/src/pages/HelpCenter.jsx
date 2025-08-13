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
  <div className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Help Center
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-lg">
      Quick answers to common questions.
    </p>
    <div className="mt-12 space-y-6">
      {faqs.map((item) => (
        <div
          key={item.q}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <h2 className="text-sm font-semibold text-white">{item.q}</h2>
          <p className="mt-2 text-xs text-white/60 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HelpCenter;
