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
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            About Nexo
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            We are building the next generation urban mobility layer—fast, safe,
            transparent and sustainably optimized. Nexo blends realtime
            geospatial intelligence with human-first design to move people
            efficiently.
          </p>
        </header>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-xl"
            >
              <div className="text-2xl font-semibold tracking-tight text-white">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-white/40 font-medium mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-24">
          <h2 className="text-xl font-semibold tracking-tight mb-8">
            Our Journey
          </h2>
          <ol className="relative border-s border-white/10 ml-2">
            {timeline.map((item) => (
              <li key={item.year} className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 ring-2 ring-neutral-950 text-[10px] font-semibold text-white">
                  {item.year.split(" ")[0]}
                </span>
                <h3 className="font-semibold text-white text-sm tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 mt-1 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            What drives us
          </h2>
          <p className="text-white/60 leading-relaxed text-sm">
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
