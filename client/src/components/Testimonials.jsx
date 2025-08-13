import React from "react";

const testimonials = [
  {
    quote:
      "Nexo has transformed my daily commute. Ultra fast pickups and the interface feels premium.",
    name: "Aria N.",
    role: "Product Designer",
  },
  {
    quote:
      "Transparent pricing & reliable drivers — I switched from other apps and never looked back.",
    name: "Rahul S.",
    role: "Startup Founder",
  },
  {
    quote:
      "Safety features are top-notch. Sharing trips with my family gives me comfort.",
    name: "Lina W.",
    role: "Data Analyst",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-28" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(90,80,200,0.15),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-white mb-14"
        >
          Riders love Nexo
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative h-full flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:border-white/25 transition-colors"
            >
              <p className="text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </p>
              <figcaption className="mt-auto">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-[11px] uppercase tracking-wider font-medium text-white/40">
                  {t.role}
                </div>
              </figcaption>
              <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/0 via-violet-500/5 to-fuchsia-500/20"></div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
