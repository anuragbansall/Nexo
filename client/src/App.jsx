import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Safety from "./pages/Safety";
import Download from "./pages/Download";
import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
import HelpCenter from './pages/HelpCenter';
import Accessibility from './pages/Accessibility';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Licenses from './pages/Licenses';
import Cookies from './pages/Cookies';

const NotFound = () => (
  <div className="py-40 text-center text-white">404 • Page not found</div>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/press" element={<Press />} />
  <Route path="/blog" element={<Blog />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/download" element={<Download />} />
  <Route path="/help" element={<HelpCenter />} />
  <Route path="/accessibility" element={<Accessibility />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/licenses" element={<Licenses />} />
  <Route path="/cookies" element={<Cookies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
