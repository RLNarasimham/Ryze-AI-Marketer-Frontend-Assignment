import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050507] overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus-ring"
        style={{ position: "absolute", left: 8, top: 8, zIndex: 1000 }}
      >
        Skip to content
      </a>
      <Header />

      <main id="main" className="w-full py-8 sm:py-12 lg:py-16" style={{ paddingBottom: "25px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
