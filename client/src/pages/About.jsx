import React from "react";

const stats = [
  { label: "Cities Live", value: "120+" },
  { label: "Active Captains", value: "18k+" },
  { label: "Avg Rider Rating", value: "4.94" },
  { label: "Monthly Trips", value: "2.3M+" },
];

const timeline = [
  {
    year: "2024",
    title: "Founding",
    text: "Nexo concept validated & core team formed.",
  },
  {
    year: "2025 Q1",
    title: "Alpha",
    text: "Launched closed beta in 3 cities with 500 captains.",
  },
  {
    year: "2025 Q2",
    title: "Scale",
    text: "Expanded to 25 cities, rolled out dynamic pricing & safety layer.",
  },
  {
    year: "2025 Q3",
    title: "Intelligence",
    text: "Introduced predictive routing & eco route suggestions.",
  },
];

const About = () => {
  return (
    <div className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <header className="mb-16 max-w-3xl">
          <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
            About Nexo
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            We are building the next generation urban mobility layer—fast, safe,
            transparent and sustainably optimized. Nexo blends realtime
            geospatial intelligence with human-first design to move people
            efficiently.
          </p>
        </header>

        <section className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="text-2xl font-semibold tracking-tight text-white">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] font-medium tracking-wider text-white/40 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-24">
          <h2 className="mb-8 text-xl font-semibold tracking-tight">
            Our Journey
          </h2>
          <ol className="relative ml-2 border-s border-white/10">
            {timeline.map((item) => (
              <li key={item.year} className="ms-6 mb-10">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-[10px] font-semibold text-white ring-2 ring-neutral-950">
                  {item.year.split(" ")[0]}
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl">
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            What drives us
          </h2>
          <p className="text-sm leading-relaxed text-white/60">
            Millions of urban trips are still inefficient—wasting time, fuel,
            and human energy. Nexo orchestrates demand & supply in real time,
            rewarding availability, safety, and eco-efficiency. Our long-term
            thesis: mobility should feel ambient and trustworthy—an invisible
            utility that empowers the city, not congests it.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
