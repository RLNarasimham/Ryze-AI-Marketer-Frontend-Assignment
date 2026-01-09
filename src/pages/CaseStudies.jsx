import React, { useState } from "react";
import SectionAlt from "../components/SectionAlt";

const CaseCard = ({ image, client, subtitle, challenge, solution, result }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      //   className="relative w-full h-80 sm:h-96 cursor-pointer perspective"
      className="relative w-full h-80 sm:h-96 cursor-pointer perspective group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front - Image */}
        <div
          //   className="absolute w-full h-full rounded-2xl overflow-hidden glow-card p-6 sm:p-8 flex flex-col justify-between bg-[#050507]"
          className="absolute w-full h-full rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between bg-[#050507] border border-white/10 group-hover:border-white/30 transition-colors duration-300"
          //   style={{ backfaceVisibility: "hidden" }}
          style={{
            backfaceVisibility: "hidden",
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)",
          }}
        >
          <div className="w-full h-48 sm:h-56 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center">
            <img
              src={image}
              alt={`Case study ${client}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
              {client}
            </h4>
            <p className="text-white/70 text-sm">{subtitle}</p>
          </div>
          <div className="text-md text-center text-white/60 mt-4 ">
            Click to see details
          </div>
        </div>

        {/* Back - Content */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between bg-[#050507] border border-white/10 group-hover:border-white/30 transition-colors duration-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(59, 130, 246, 0.1)",
          }}
        >
          <div className="flex-1 overflow-y-auto space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold gradient-text uppercase tracking-wide">
                Challenge
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {challenge}
              </p>
            </div>

            <div className="h-px bg-linear-to-r from-purple-500/20 to-blue-500/20"></div>

            <div className="space-y-2">
              <h3 className="text-sm sm:text-base font-semibold gradient-text uppercase tracking-wide">
                Solution
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {solution}
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 space-y-3 border-t border-white/10 pt-6">
            <div className="flex justify-center">
              <div>
                <div className="text-4xl items-center sm:text-5xl font-bold gradient-text leading-tight">
                  {result}
                </div>
              </div>
            </div>
            <div className="text-sm text-white/60">Click to go back</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function CaseStudies() {
  const items = [
    {
      client: "Motif",
      subtitle: "AI-powered luxury fashion brand scaling creative velocity",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=60",
      challenge:
        "Manual creative production bottleneck slowing campaign launches and limiting testing velocity across Meta and Google channels.",
      solution:
        "Implemented Ryze's automated creative generation to produce on-brand ad variants at scale, enabling rapid multivariate testing and AI-driven budget reallocation to winning creatives.",
      result: "8x Creative Velocity",
    },
    {
      client: "Sanar AI",
      subtitle:
        "Healthcare AI platform accelerating profitable customer acquisition",
      image: "https://microlaunch.net/p/sanerai/opengraph-image",
      challenge:
        "High customer acquisition costs and inconsistent creative performance across paid channels, with fragmented testing and optimization workflows.",
      solution:
        "Connected ad accounts and implemented cross-channel experimentation with real-time signal-driven optimization and automated budget allocation to top-performing variants.",
      result: "3.5x ROAS",
    },
    {
      client: "Ashley Furniture",
      subtitle:
        "Enterprise furniture retailer scaling omnichannel paid acquisition",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60",
      challenge:
        "Managing inconsistent creative performance across multiple brands and regions with manual optimization and fragmented reporting across enterprise teams.",
      solution:
        "Deployed multi-currency reporting, localized creative variants, RBAC for enterprise governance, and real-time spend controls with centralized budget optimization.",
      result: "5.2x Revenue Growth",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <header className="w-full px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 header-section-padding">
        <div className="w-full mx-auto">
          <p className="text-5xl gradient-text font-semibold uppercase mb-4 sm:mb-6">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6 sm:mb-8">
            How brands scaled profitable growth with Ryze
          </h1>
          <p className="text-3xl sm:text-md text-white/70 leading-relaxed" style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            Selected outcomes from customers who used AI-driven creative
            generation, experimentation, and automated budget allocation to
            scale paid acquisition and improve ROAS.
          </p>
        </div>
      </header>

      <main className="w-full mx-auto px-6 sm:px-10 header-section-padding lg:px-16 mt-20 sm:mt-28 lg:mt-36 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {items.map((it, idx) => (
          <CaseCard key={idx} {...it} />
        ))}
      </main>

      <section className="section-gap w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto">
          <SectionAlt
            titleTop="Ready to scale"
            titleMain="Bring Ryze into your marketing stack"
            text="Connect ad accounts and commerce platforms, run high-velocity experiments, and let AI drive budget toward profitable growth — global support and enterprise controls included."
            imageLeft={false}
            imageSrc={
              "https://plus.unsplash.com/premium_photo-1664476850603-5523cdbce02b?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAwNTIyNTY4fA&ixlib=rb-4.0.3"
            }
            imageAlt="Team dashboard"
          />
        </div>
      </section>
    </div>
  );
}
