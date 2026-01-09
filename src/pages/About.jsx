import { useEffect, useState, useRef } from "react";
import SectionAlt from "../components/SectionAlt";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef({});

  useEffect(() => {
    const observers = new Map();

    const createObserver = (id) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
            observers.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
    };

    Object.keys(elementsRef.current).forEach((id) => {
      const observer = createObserver(id);
      const element = elementsRef.current[id];
      if (element) observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section style={{ padding: "10px" }} className="hero-section-padding relative flex flex-col justify-center items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7 sm:space-y-9 md:space-y-11 lg:space-y-12 px-2 sm:px-4">
          <div
            ref={(el) => (elementsRef.current.hero = el)}
            className={`transform transition-all duration-1000 ${isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight gradient-text mb-5 sm:mb-7 md:mb-8 animate-[gradient_8s_ease_infinite] bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              We Built The Ads Manager We Always Wanted
            </h1>
          </div>

          <div
            ref={(el) => (elementsRef.current.subtitle = el)}
            style={{ padding: "10px" }}
            className={`transform transition-all duration-1000 delay-200 ${isVisible.subtitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Late nights. Tight budgets. Impossible targets. We know how it
              feels to run ads that lose money—not because you're bad at
              marketing, but because the work is too manual, too slow, and too
              scattered.
            </p>
          </div>

          <div
            ref={(el) => (elementsRef.current.cta = el)}
            className={`transform transition-all duration-1000 delay-400 flex gap-3 sm:gap-4 md:gap-5 justify-center flex-wrap px-2 sm:px-4 ${isVisible.cta ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <a
              href="#story"
              style={{ padding: "8px" }}
              className="px-6 xs:px-7 sm:px-8 rounded-2xl md:px-9 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
            >
              Read Our Story
            </a>
            <a
              href="https://get-ryze.ai"
              target="_blank"
              style={{ padding: "8px" }}
              rel="noopener noreferrer"
              className="px-6 xs:px-7 sm:px-8 md:px-9 py-2.5 xs:py-3 sm:py-3.5 md:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
            >
              Visit Platform
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="hero-section-padding grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center">
            {/* Text Column */}
            <div className="space-y-6 sm:space-y-8 md:space-y-9 lg:space-y-10">
              <div
                ref={(el) => (elementsRef.current.story1 = el)}
                className={`transform transition-all duration-1000 ${isVisible.story1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
              >
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  Our Journey Begins
                </h2>
                <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg text-gray-400 leading-relaxed">
                  We've run ads at Google, DTC brands, big companies, and small
                  agencies. We've worked through late nights with tight budgets
                  and impossible targets. We lived the pain.
                </p>
              </div>

              <div
                ref={(el) => (elementsRef.current.story2 = el)}
                className={`transform transition-all duration-1000 delay-200 ${isVisible.story2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-3 text-purple-400">
                  The Problem We Saw
                </h3>
                <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg text-gray-400 leading-relaxed">
                  Most ads lose money. Not because people are bad at marketing.
                  Because the work is too manual, too slow, too scattered across
                  too many platforms.
                </p>
              </div>

              <div
                ref={(el) => (elementsRef.current.story3 = el)}
                className={`transform transition-all duration-1000 delay-300 ${isVisible.story3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 sm:mb-3 text-cyan-400">
                  Our Solution
                </h3>
                <p className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg text-gray-400 leading-relaxed">
                  So we moved to San Francisco and built Ryze. We worked with
                  the best agencies, learned what actually moves the needle, and
                  then built AI to do exactly that. Not magic. Just the boring
                  stuff done faster and better than any human can.
                </p>
              </div>
            </div>

            {/* Image Column */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-8">
              <div
                ref={(el) => (elementsRef.current.img1 = el)}
                className={`transform transition-all duration-1000 delay-400 rounded-lg overflow-hidden glow-card hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 ${isVisible.img1
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
                  }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="San Francisco office"
                  className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Ryze Works Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent w-full">
        <div className="max-w-6xl mx-auto">
          <div
            ref={(el) => (elementsRef.current.how = el)}
            className={`hero-section-padding text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${isVisible.how ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              How Ryze Works
            </h2>
            <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg">
              Autonomous ad management that watches, fixes, and scales—every
              day, without you.
            </p>
          </div>

          <div className="hero-section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: "feature1",
                title: "Watches Your Campaigns",
                description:
                  "Real-time monitoring across all your ad accounts and platforms.",
                icon: "👁️",
              },
              {
                id: "feature2",
                title: "Fixes What's Broken",
                description:
                  "Identifies underperforming ads and automatically optimizes them.",
                icon: "⚙️",
              },
              {
                id: "feature3",
                title: "Scales What's Working",
                description:
                  "Intelligently increases budgets on high-performing campaigns.",
                icon: "📈",
              },
              {
                id: "feature4",
                title: "24/7 Optimization",
                description:
                  "Never sleeps. Always improving your ROAS and reducing CPA.",
                icon: "🌙",
              },
              {
                id: "feature5",
                title: "Unified Dashboard",
                description:
                  "Manage all your accounts in one beautiful, intuitive interface.",
                icon: "📊",
              },
              {
                id: "feature6",
                title: "Data-Driven Insights",
                description:
                  "Clear reporting and actionable recommendations for growth.",
                icon: "💡",
              },
            ].map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (elementsRef.current[feature.id] = el)}
                className={`p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform ${isVisible[feature.id]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  } hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl xs:text-4xl sm:text-5xl mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div
            ref={(el) => (elementsRef.current.integrations = el)}
            className={`hero-section-padding text-center mb-12 hero-section-padding sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${isVisible.integrations
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              Works With Your Stack
            </h2>
            <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg">
              Connect all your advertising and analytics platforms seamlessly.
            </p>
          </div>

          <div className="hero-section-padding grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-6">
            {[
              { name: "Google Ads", emoji: "🔍" },
              { name: "Meta Ads", emoji: "f" },
              { name: "Amazon Ads", emoji: "🛒" },
              { name: "Shopify", emoji: "🏪" },
              { name: "Google Analytics", emoji: "📈" },
            ].map((platform, index) => (
              <div
                key={platform.name}
                ref={(el) => (elementsRef.current[`platform-${index}`] = el)}
                className={`p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg border border-purple-500/30 bg-purple-900/20 hover:bg-purple-800/30 text-center transform transition-all duration-500 ${isVisible[`platform-${index}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  } hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-110`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 sm:mb-3">
                  {platform.emoji}
                </div>
                <p className="font-semibold text-xs xs:text-sm sm:text-base text-gray-200">
                  {platform.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 w-full">
        <div className="max-w-6xl mx-auto">
          <div
            ref={(el) => (elementsRef.current.results = el)}
            className={`hero-section-padding text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${isVisible.results ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              Real Results
            </h2>
            <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg">
              Proven impact across hundreds of campaigns.
            </p>
          </div>

          <div className="hero-section-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 lg:gap-8">
            {[
              {
                id: "stat1",
                metric: "+$11,300/mo",
                description: "Average Monthly Impact",
                delay: 0,
              },
              {
                id: "stat2",
                metric: "3.2x",
                description: "Average ROAS Improvement",
                delay: 100,
              },
              {
                id: "stat3",
                metric: "-45%",
                description: "Average CPA Reduction",
                delay: 200,
              },
              {
                id: "stat4",
                metric: "24/7",
                description: "Optimization Frequency",
                delay: 300,
              },
              {
                id: "stat5",
                metric: "100+",
                description: "Integrations Connected",
                delay: 400,
              },
              {
                id: "stat6",
                metric: "99.9%",
                description: "Uptime Guarantee",
                delay: 500,
              },
            ].map((stat) => (
              <div
                key={stat.id}
                ref={(el) => (elementsRef.current[stat.id] = el)}
                className={`p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 transform text-center ${isVisible[stat.id]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
                  } hover:scale-105`}
              >
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.metric}
                </h3>
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ryze Is Different */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div
            ref={(el) => (elementsRef.current.why = el)}
            className={`hero-section-padding text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${isVisible.why ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              Why Choose Ryze?
            </h2>
            <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg">
              Built by marketers, for marketers.
            </p>
          </div>

          <div className="hero-section-padding space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
            {[
              {
                id: "reason1",
                title: "Born from Real Pain",
                description:
                  "We didn't build Ryze in a vacuum. Every feature solves a problem we actually faced running ads.",
              },
              {
                id: "reason2",
                title: "AI That Works for You",
                description:
                  "Our AI doesn't replace you—it gives you superpowers. More time for strategy, less time on manual work.",
              },
              {
                id: "reason3",
                title: "Transparent & Trustworthy",
                description:
                  "You see exactly what Ryze is doing and why. No black box. Every recommendation is explainable.",
              },
              {
                id: "reason4",
                title: "Deployed at Scale",
                description:
                  "Managing billions in ad spend. Trusted by agencies and brands worldwide. Battle-tested infrastructure.",
              },
            ].map((reason, index) => (
              <div
                key={reason.id}
                ref={(el) => (elementsRef.current[reason.id] = el)}
                className={`p-5 sm:p-6 md:p-7 lg:p-8 rounded-lg border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/20 to-transparent hover:from-purple-900/40 transition-all duration-500 transform ${isVisible[reason.id]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 text-purple-300">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent w-full">
        <div className="max-w-4xl mx-auto">
          <div
            ref={(el) => (elementsRef.current.timeline = el)}
            className={`hero-section-padding text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${isVisible.timeline
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              Our Timeline
            </h2>
            <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg">
              From problem to product in the fastest way possible.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {[
              {
                year: "2022",
                event:
                  "Founded in San Francisco by ad operators who felt the pain",
              },
              {
                year: "2023",
                event: "Beta launch with first enterprise customers",
              },
              {
                year: "2024",
                event: "Public launch and rapid scaling across industries",
              },
              {
                year: "2025",
                event: "Trusted by 500+ agencies and brands worldwide",
              },
              {
                year: "2026",
                event:
                  "Future-ready: Advanced AI, Expanded integrations, Global Scale",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                ref={(el) => (elementsRef.current[`timeline-${index}`] = el)}
                className={`hero-section-padding flex gap-6 sm:gap-8 transform transition-all duration-1000 ${isVisible[`timeline-${index}`]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-xs xs:text-sm sm:text-base md:text-lg">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="w-1 h-10 xs:h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-purple-500 to-transparent mt-1 sm:mt-2"></div>
                  )}
                </div>
                <div className="pt-1 sm:pt-2 md:pt-3 pb-3 sm:pb-4">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-bold text-purple-400 mb-1 sm:mb-2">
                    {item.year}
                  </h3>
                  <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 border-t border-purple-500/20 w-full">
        <div className="mx-auto text-center">
          <div
            ref={(el) => (elementsRef.current.contact = el)}
            style={{ paddingTop: "10px" }}
            className={`hero-section-padding transform transition-all duration-1000 ${isVisible.contact ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text">
              Get in Touch
            </h2>
            <p style={{ padding: "10px" }} className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-lg mb-7 sm:mb-8 md:mb-9 lg:mb-10">
              Have questions? Our team would love to chat about how Ryze can
              help your business grow.
            </p>

            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center flex-wrap">
              <a
                href="mailto:hello@get-ryze.ai"
                style={{ padding: "10px" }}
                className="px-6 xs:px-7 sm:px-8 md:px-9 py-2.5 xs:py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
              >
                Email Us
              </a>
              <a
                href="https://linkedin.com/company/get-ryze-ai"
                target="_blank"
                style={{ padding: "10px" }}
                rel="noopener noreferrer"
                className="px-6 xs:px-7 sm:px-8 md:px-9 py-2.5 xs:py-3 sm:py-3.5 md:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
