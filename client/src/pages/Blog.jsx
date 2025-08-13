import React from "react";

const posts = [
  {
    title: "Designing low-latency geolocation",
    tag: "Engineering",
    reading: "5 min",
  },
  {
    title: "Balancing dynamic pricing ethics",
    tag: "Product",
    reading: "4 min",
  },
  { title: "Scaling realtime websockets", tag: "Infra", reading: "6 min" },
];

const Blog = () => (
  <div className="py-24 px-4 sm:px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
      Blog
    </h1>
    <p className="mt-6 text-white/60 leading-relaxed text-lg">
      Insights from engineering, product and operations.
    </p>
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {posts.map((p) => (
        <article
          key={p.title}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl flex flex-col"
        >
          <span className="text-[11px] uppercase tracking-wider text-indigo-300 font-semibold">
            {p.tag}
          </span>
          <h2 className="text-sm font-semibold text-white mt-3 flex-1 leading-snug">
            {p.title}
          </h2>
          <div className="mt-4 text-[11px] text-white/40">{p.reading} read</div>
        </article>
      ))}
    </div>
  </div>
);

export default Blog;
