import React from "react";
import BookingForm from "../components/BookingForm";
import FeatureGrid from "../components/FeatureGrid";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-[system-ui] selection:bg-indigo-500/60 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.08),transparent_55%)]"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="pt-32">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase text-white/60 mb-6">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse" />
                Live in 120+ cities
              </div>
              <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight bg-gradient-to-br from-white via-white to-white/60 text-transparent bg-clip-text">
                Move smarter. Ride premium.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-xl">
                Nexo delivers lightning-fast pickups, transparent pricing, and
                safety-first rides across bikes, cars & SUVs. Designed for
                modern urban mobility.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="h-12 px-7 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all">
                  Request a Ride
                </button>
                <button className="h-12 px-6 rounded-full border border-white/20 bg-white/5 text-sm font-medium text-white/80 hover:text-white hover:border-white/40 transition-colors">
                  Become a Driver
                </button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md text-center">
                {[
                  { label: "Avg ETA", value: "2.8 min" },
                  { label: "Cities", value: "120+" },
                  { label: "Rating", value: "4.94/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-4"
                  >
                    <div className="text-sm font-semibold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
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
