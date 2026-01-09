import React from "react";

export default function TestimonialCard({ image }) {
  return (
    <div className="p-8 sm:p-10 md:p-14 rounded-3xl glow-card text-white relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl gradient-bg/10 border border-white/12 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt="Testimonial Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl bg-white/6 flex items-center justify-center ${image ? "hidden" : "flex"
              }`}
          >
            <svg
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/85"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="relative max-w-3xl mx-auto md:mx-0">


            <p className="text-white/95 text-2xl sm:text-lg md:text-xl leading-relaxed tracking-wide text-center md:text-left">

              <span className="text-5xl sm:text-3xl md:text-4xl gradient-text">
                “
              </span>
              It's all about getting your message in front of the right audience
              and creating those valuable relationships. Ryze helps teams ship
              creative, test at scale, and automatically allocate budget to
              winners.
              <span className="text-5xl sm:text-3xl md:text-4xl gradient-text">
                ”
              </span>
            </p>


          </div>

          <div className="mt-6 md:mt-8">
            <div className="font-semibold text-white text-lg md:text-xl tracking-tight gradient-text">
              Amaka Micheal
            </div>
            <div className="text-sm md:text-base text-white/70 mt-1">
              Media Executive, Buying & Control
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
