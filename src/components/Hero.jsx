import React from "react";
import GlobeCanvas from "./GlobeCanvas";

export default function Hero() {
  return (
    <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 lg:pt-20 pb-8 hero-section-padding">

      <div className="animate-fade-in order-2 lg:order-1">
        <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
          <span className="gradient-text block">AI marketing platform.</span>
          <span className="text-white block">
            Scale revenue with automated ads.
          </span>
        </h1>

        <div
          className="flex flex-col items-start space-y-8 sm:space-y-10 max-w-xl"
          style={{ paddingTop: 30 }}
        >
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            Ryze automates creative generation, campaign launch, and continuous
            optimization across channels—so brands can acquire customers at
            profitable scale using real‑time AI insights.
          </p>


          <div
            className="under-hr mb-8"
            aria-hidden="true"
            style={{ marginTop: 20, marginBottom: 20 }}
          ></div>


          <button className="btn-gradient-border group gap-2">
            <span>Request a demo</span>
            <svg
              className="w-4 h-4 ml-3 sm:ml-4 md:ml-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>


      <div className="flex justify-center lg:justify-end order-1 lg:order-2">
        <div
          className="w-full max-w-lg aspect-square relative"
          aria-label="Illustration of a connected global network"
          role="img"
        >
          <GlobeCanvas />
        </div>
      </div>
    </section>
  );
}
