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
  <div className="mx-auto max-w-5xl px-4 py-24 sm:px-8">
    <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-black tracking-tight text-transparent">
      Blog
    </h1>
    <p className="mt-6 text-lg leading-relaxed text-white/60">
      Insights from engineering, product and operations.
    </p>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {posts.map((p) => (
        <article
          key={p.title}
          className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
        >
          <span className="text-[11px] font-semibold tracking-wider text-indigo-300 uppercase">
            {p.tag}
          </span>
          <h2 className="mt-3 flex-1 text-sm leading-snug font-semibold text-white">
            {p.title}
          </h2>
          <div className="mt-4 text-[11px] text-white/40">{p.reading} read</div>
        </article>
      ))}
    </div>
  </div>
);

export default Blog;
