import React, { useState } from "react";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [rideType, setRideType] = useState("car");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Fake submit delay
    setTimeout(() => setLoading(false), 1200);
  }

  return (
    <div
      id="ride"
      className="w-full max-w-xl rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl ring-1 shadow-black/40 ring-black/50 backdrop-blur-xl sm:p-8"
    >
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-white">
        Book your ride
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">
          <div className="group relative">
            <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
              Pickup
            </label>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="mt-1 h-12 w-full rounded-xl border border-white/15 bg-white/7 px-4 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-indigo-500/70 focus:outline-none"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-end pb-2 text-white/30 group-focus-within:text-indigo-400">
              📍
            </div>
          </div>
          <div className="group relative">
            <label className="text-xs font-semibold tracking-wider text-white/60 uppercase">
              Dropoff
            </label>
            <input
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter destination"
              className="mt-1 h-12 w-full rounded-xl border border-white/15 bg-white/7 px-4 text-sm text-white placeholder-white/35 focus:ring-2 focus:ring-indigo-500/70 focus:outline-none"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-end pb-2 text-white/30 group-focus-within:text-indigo-400">
              🎯
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {["bike", "car", "suv"].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setRideType(type)}
              className={`h-11 flex-1 rounded-xl border text-sm font-medium capitalize backdrop-blur-md transition-all ${
                rideType === type
                  ? "border-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-white/35 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !pickup || !dropoff}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
          )}
          {loading ? "Finding nearby drivers..." : "Request Ride"}
        </button>
        <p className="text-[11px] leading-relaxed text-white/40">
          By requesting a ride, you agree to Nexo's Terms & Conditions and
          acknowledge the Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
