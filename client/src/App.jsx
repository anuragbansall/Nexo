import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

// Placeholder simple pages (can be replaced later)
const About = () => (
  <div className="py-40 text-center text-white">About Nexo (placeholder)</div>
);
const Safety = () => (
  <div className="py-40 text-center text-white">
    Safety & Trust (placeholder)
  </div>
);
const Download = () => (
  <div className="py-40 text-center text-white">Download App (placeholder)</div>
);
const NotFound = () => (
  <div className="py-40 text-center text-white">404 • Page not found</div>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/download" element={<Download />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
