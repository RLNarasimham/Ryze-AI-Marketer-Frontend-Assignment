import React from "react";

const Feature = ({ title, desc }) => (
  <div className="feature-card">
    <div className="feature-icon">AI</div>
    <h4 className="mt-5 font-semibold text-white text-lg">{title}</h4>
    <p className="mt-2 text-white/50 text-sm leading-relaxed">{desc}</p>
  </div>
);

// export default function Features() {
//     const items = [
//         { title: 'Real-time Insights', desc: 'Signals and suggestions in real time.' },
//         { title: 'Audience Targeting', desc: 'Scale to the right audience segments.' },
//         { title: 'Creative Optimization', desc: 'Improve messaging and creative assets.' }
//     ]

//     return (
//         <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
//             <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
//                 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//                     {items.map((item, idx) => (
//                         <Feature key={idx} {...item} />
//                     ))}
//                 </div> */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full hero-section-padding">
//                     {items.map((item, idx) => (
//                         <Feature key={idx} {...item} />
//                     ))}
//                 </div>
//             </section>
//         </div>
//     )
// }

export default function Features() {
  const items = [
    {
      title: "Automated Creative Generation",
      desc: "AI-driven ad creative produced at scale to match audiences and channels.",
    },
    {
      title: "Automated Campaign Launch",
      desc: "End-to-end campaign setup and deployment across channels with automated targeting and budget allocation.",
    },
    {
      title: "Real-time Optimization & Insights",
      desc: "Continuous performance optimization using real-time signals, testing, and analytics to maximize profitable growth.",
    },
  ];

  return (
    <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full hero-section-padding" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          {items.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
