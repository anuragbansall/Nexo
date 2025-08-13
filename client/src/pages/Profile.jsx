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
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-8">
      <div className="mb-10 flex items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-2xl font-bold text-white shadow-lg shadow-indigo-500/30">
          {initials}
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            {user.fullName?.first} {user.fullName?.last}
          </h1>
          <p className="mt-1 text-sm text-white/50">{user.email}</p>
          <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] tracking-wider text-white/60 uppercase">
            {user.role}
          </span>
        </div>
      </div>

      {user.role === "captain" && user.vehicle && (
        <section className="mb-14">
          <h2 className="mb-4 text-sm font-semibold tracking-wide text-white/70">
            Vehicle
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(user.vehicle).map(([key, val]) => (
              <div
                key={key}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm"
              >
                <div className="mb-1 text-[10px] font-semibold tracking-wider text-white/50 uppercase">
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
          className="h-11 rounded-xl border border-white/10 bg-white/10 px-6 text-sm font-medium text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
