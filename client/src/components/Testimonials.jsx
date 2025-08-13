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
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2
          id="testimonials-heading"
          className="mb-14 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Riders love Nexo
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors hover:border-white/25"
            >
              <p className="text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </p>
              <figcaption className="mt-auto">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-[11px] font-medium tracking-wider text-white/40 uppercase">
                  {t.role}
                </div>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/5 to-fuchsia-500/20 opacity-0 transition-opacity hover:opacity-100"></div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
