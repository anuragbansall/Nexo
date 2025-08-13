import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 font-[system-ui] text-white selection:bg-indigo-500/60 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.08),transparent_55%)]"></div>
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
      </div>
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
