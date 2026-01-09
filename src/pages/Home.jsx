import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import SectionAlt from "../components/SectionAlt";
import TestimonialCard from "../components/TestimonialCard";
import img1 from "../assets/images/First Image.png";

// CDN fallback placeholders for the other sections (replace with local images for production)
const img2 =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80";
const img3 =
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 lg:pt-40 pb-8">
        <div className="w-full">
          <Features />
        </div>
      </section>

      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24">
        <SectionAlt
          titleTop="Acquire Customers Profitably"
          titleMain="Scale paid acquisition with AI — from creative to conversions"
          text={
            "Ryze automates creative production, audience discovery and campaign optimization across Meta, Google, TikTok and programmatic channels. Connect ad and commerce accounts, run multivariate tests, and let real-time AI scale winning ads — enterprise-ready with multi-currency reporting, SSO and privacy controls."
          }
          imageLeft={false}
          imageSrc={img1}
          imageAlt="Ad performance dashboard"
        />
      </section>

      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 section-gap hero-section-padding" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <SectionAlt
          titleTop="Launch • Test • Scale"
          titleMain="Run high-performing ad programs across all channels"
          text={
            "Centralize creative production, testing and budget allocation to launch variants fast, measure results, and auto-scale winners. Includes API/webhooks, RBAC & audit logs, data-residency options, spend controls and localized reporting for global teams."
          }
          imageLeft={true}
          imageSrc={img2}
          imageAlt="Creative testing and analytics"
        />
      </section>

      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24 hero-section-padding" style={{ paddingBottom: "30px" }}>
        <SectionAlt
          titleTop="AI Marketing"
          titleMain="Optimized Reach"
          text="Ryze uses AI to create and optimize ad experiences that scale profitable customer acquisition across channels."
          imageLeft={false}
          imageSrc={img3}
          imageAlt="Global ad network visualization"
        />
      </section >

      <section className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-16 sm:mt-24 hero-section-padding" style={{ paddingBottom: "30px" }}>
        <TestimonialCard />
      </section>

      <FAQ />

      <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-48 sm:mt-64 md:mt-80 lg:mt-96 hero-section-padding my-20 sm:my-32 md:my-40 flex flex-col items-center w-full">
        <div className="rounded-2xl overflow-hidden testimonial-gradient p-6 my-20 sm:p-8 md:p-12 py-10 sm:py-14 md:py-16 mx-auto items-center text-center w-full">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-xl text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Get exponential reach via{" "}
                <span className="text-black/70">AI Marketing</span>
              </h3>
              <p className="mt-4 text-white/85 text-base leading-relaxed" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                Enter your work email and we'll get back to you with a custom
                plan to scale.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-4 justify-center items-center w-full">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  style={{ paddingTop: "3px", paddingBottom: "3px" }}
                  className="rounded-full px-5 py-3 w-70 sm:w-72 bg-white/15 placeholder-white/50 text-white outline-none border border-white/20 focus:border-white/50 transition-colors text-sm text-center"
                  aria-label="Work email"
                  autoComplete="email"
                />
                <button
                  type="button"
                  style={{ paddingLeft: 10, paddingRight: 10 }}
                  className="rounded-full cursor-pointer px-5 sm:px-6 md:px-7 py-3 bg-white hover:bg-black/70 hover:text-white border border-white/10 transition-all duration-200 font-medium text-black text-sm whitespace-nowrap focus-ring min-touch w-35 sm:w-auto"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
