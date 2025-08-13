import React from "react";
import BookingForm from "../components/BookingForm";
import FeatureGrid from "../components/FeatureGrid";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 font-[system-ui] text-white selection:bg-indigo-500/60 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.08),transparent_55%)]"></div>
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>

      <main className="pt-32">
        <section className="relative">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 pb-8 sm:px-8 lg:flex-row">
            <div className="max-w-2xl flex-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wider text-white/60 uppercase backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />
                Live in 120+ cities
              </div>
              <h1 className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl leading-tight font-black tracking-tight text-transparent sm:text-6xl">
                Move smarter. Ride premium.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                Nexo delivers lightning-fast pickups, transparent pricing, and
                safety-first rides across bikes, cars & SUVs. Designed for
                modern urban mobility.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="h-12 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50">
                  Request a Ride
                </button>
                <button className="h-12 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white">
                  Become a Driver
                </button>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-center">
                {[
                  { label: "Avg ETA", value: "2.8 min" },
                  { label: "Cities", value: "120+" },
                  { label: "Rating", value: "4.94/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="text-sm font-semibold tracking-tight text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-medium tracking-wider text-white/40 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-1 justify-center lg:justify-end">
              <BookingForm />
            </div>
          </div>
        </section>
        <FeatureGrid />
        <Testimonials />
      </main>
    </main>
  );
}

export default Home;
