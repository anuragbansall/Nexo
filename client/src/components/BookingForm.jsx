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
      className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40 ring-1 ring-black/50"
    >
      <h2 className="text-white text-xl font-semibold mb-4 tracking-tight">
        Book your ride
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-4">
          <div className="group relative">
            <label className="text-xs uppercase tracking-wider font-semibold text-white/60">
              Pickup
            </label>
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="mt-1 w-full h-12 px-4 rounded-xl bg-white/7 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 text-white placeholder-white/35 text-sm"
            />
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-end pb-2 text-white/30 group-focus-within:text-indigo-400">
              📍
            </div>
          </div>
          <div className="group relative">
            <label className="text-xs uppercase tracking-wider font-semibold text-white/60">
              Dropoff
            </label>
            <input
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter destination"
              className="mt-1 w-full h-12 px-4 rounded-xl bg-white/7 border border-white/15 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 text-white placeholder-white/35 text-sm"
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
              className={`flex-1 h-11 rounded-xl text-sm font-medium capitalize border transition-all backdrop-blur-md ${
                rideType === type
                  ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white border-transparent shadow-lg shadow-indigo-500/30"
                  : "bg-white/5 border-white/15 text-white/70 hover:text-white hover:border-white/35"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !pickup || !dropoff}
          className="w-full h-12 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white animate-spin rounded-full"></span>
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
