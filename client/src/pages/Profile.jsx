import React from "react";
import { useAuth } from "../hooks/useAuth.js";

const Profile = () => {
  const { user, logout } = useAuth();
  if (!user) return null;
  const initials =
    [user.fullName?.first?.[0], user.fullName?.last?.[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() || user.email[0].toUpperCase();

  return (
    <div className="py-24 px-4 sm:px-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-6 mb-10">
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/30">
          {initials}
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            {user.fullName?.first} {user.fullName?.last}
          </h1>
          <p className="text-white/50 text-sm mt-1">{user.email}</p>
          <span className="inline-flex mt-3 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-wider text-white/60">
            {user.role}
          </span>
        </div>
      </div>

      {user.role === "captain" && user.vehicle && (
        <section className="mb-14">
          <h2 className="text-sm font-semibold tracking-wide text-white/70 mb-4">
            Vehicle
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(user.vehicle).map(([key, val]) => (
              <div
                key={key}
                className="rounded-xl bg-white/[0.04] border border-white/10 p-4 text-sm"
              >
                <div className="text-white/50 uppercase tracking-wider text-[10px] font-semibold mb-1">
                  {key}
                </div>
                <div className="text-white/80">{val}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-4">
        <button
          onClick={logout}
          className="h-11 px-6 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
