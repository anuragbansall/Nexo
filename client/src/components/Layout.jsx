import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[system-ui] selection:bg-indigo-500/60 selection:text-white relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(236,72,153,0.08),transparent_55%)]"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full" />
      </div>
      <Navbar />
      <div className="pt-16 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
