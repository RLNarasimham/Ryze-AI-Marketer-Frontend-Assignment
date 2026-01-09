import { useState, useEffect, useRef } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
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
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
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

  const plans = [
    {
      id: "basic",
      name: "Starter",
      description: "Perfect for small teams and agencies",
      monthlyPrice: 99,
      annualPrice: 990,
      badge: null,
      color: "purple",
      features: [
        "Up to 5 ad accounts",
        "Basic optimization",
        "24/7 campaign monitoring",
        "Email support",
        "Monthly reports",
        "Mobile app access",
      ],
      buttonText: "Get Started",
      buttonStyle: "bordered",
    },
    {
      id: "pro",
      name: "Professional",
      description: "For growing agencies and brands",
      monthlyPrice: 299,
      annualPrice: 2990,
      badge: "Most Popular",
      color: "gradient",
      features: [
        "Unlimited ad accounts",
        "Advanced AI optimization",
        "Real-time optimization",
        "Priority support",
        "Custom reports & dashboards",
        "Mobile app access",
        "API access",
        "Multi-user collaboration",
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "gradient",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large-scale operations",
      monthlyPrice: 999,
      annualPrice: 9990,
      badge: null,
      color: "cyan",
      features: [
        "Unlimited everything",
        "Custom AI models",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantee",
        "On-premise deployment",
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bordered",
    },
  ];

  const displayPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan) => {
    if (!isAnnual) return 0;
    const savings = plan.monthlyPrice * 12 - plan.annualPrice;
    return Math.round((savings / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-48 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gradient-to-b from-black via-purple-900/5 to-black overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 xs:-top-40 sm:-top-48 -left-32 xs:-left-40 sm:-left-48 w-64 xs:w-80 sm:w-96 md:w-[500px] lg:w-[600px] h-64 xs:h-80 sm:h-96 md:h-[500px] lg:h-[600px] bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 xs:-bottom-40 sm:-bottom-48 -right-32 xs:-right-40 sm:-right-48 w-72 xs:w-96 sm:w-[500px] md:w-[550px] lg:w-[700px] h-72 xs:h-96 sm:h-[500px] md:h-[550px] lg:h-[700px] bg-cyan-500 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => (elementsRef.current.header = el)}
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 transform transition-all duration-1000 px-1 xs:px-2 ${isVisible.header ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl hero-section-padding md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 leading-tight xs:leading-tight">
            <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text break-words">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-400 text-xs hero-section-padding xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-4 md:px-6">
            Choose the perfect plan for your advertising needs. Scale as you
            grow.
          </p>
        </div>

        {/* Billing Toggle */}
        <div
          ref={(el) => (elementsRef.current.toggle = el)}
          style={{ paddingTop: "25px", paddingBottom: "25px" }}
          className={`flex justify-center mb-10 xs:mb-12 sm:mb-14 md:mb-18 lg:mb-20 xl:mb-24 transform transition-all duration-1000 delay-200 px-1 ${isVisible.toggle ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div style={{ padding: "10px" }} className="inline-flex rounded-lg xs:rounded-xl border border-purple-500/30 bg-purple-900/20 p-0.5 xs:p-1 sm:p-1.5 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <button
              onClick={() => setIsAnnual(false)}
              style={{ padding: "10px" }}
              className={`px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-1.5 xs:py-2 sm:py-2.5 rounded-md xs:rounded-lg font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${!isAnnual
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50"
                : "text-gray-400 hover:text-gray-300"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{ padding: "10px" }}
              className={`px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-1.5 xs:py-2 sm:py-2.5 rounded-md xs:rounded-lg font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 flex items-center gap-1 xs:gap-1.5 sm:gap-2 whitespace-nowrap ${isAnnual
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50"
                : "text-gray-400 hover:text-gray-300"
                }`}
            >
              Annual
              <span className="text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 bg-cyan-500/30 rounded text-cyan-300 font-bold">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 hero-section-padding sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 px-1 xs:px-2 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              ref={(el) => (elementsRef.current[plan.id] = el)}
              className={`group relative transform transition-all duration-1000 ${isVisible[plan.id]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 xs:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div style={{ padding: "8px" }} className="px-2.5 xs:px-3 sm:px-4 py-0.5 xs:py-1 sm:py-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[10px] xs:text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-purple-500/50 whitespace-nowrap">
                    ⭐ {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                style={{ padding: "15px" }}
                className={`relative h-full rounded-lg xs:rounded-xl sm:rounded-2xl border transition-all duration-500 overflow-hidden ${plan.color === "gradient"
                  ? "border-purple-500/50 bg-gradient-to-br from-purple-900/40 to-cyan-900/40"
                  : plan.color === "cyan"
                    ? "border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"
                    : "border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-purple-800/10"
                  } hover:border-purple-500/80 hover:shadow-2xl hover:shadow-purple-500/30 group-hover:scale-105 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-2xl ${plan.color === "gradient"
                      ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                      : "bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
                      }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 xs:space-y-4 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  {/* Plan Name & Description */}
                  <div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-1 xs:mb-2 leading-tight">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-3 xs:py-4 sm:py-5 border-y border-purple-500/20">
                    <div className="flex items-baseline gap-0.5 xs:gap-1 sm:gap-2 flex-wrap">
                      <span className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        ${displayPrice(plan)}
                      </span>
                      <span className="text-gray-400 text-xs xs:text-sm sm:text-base">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                    {isAnnual && getSavings(plan) > 0 && (
                      <p className="text-cyan-400 text-[10px] xs:text-xs sm:text-sm font-semibold mt-1 xs:mt-2">
                        💰 Save {getSavings(plan)}% annually
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    style={{ padding: "10px" }}
                    className={`w-[200px] py-2.5 xs:py-3 sm:py-3 md:py-3.5 lg:py-4 px-3 xs:px-4 sm:px-6 rounded-md xs:rounded-lg sm:rounded-lg font-bold text-xs xs:text-sm sm:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 ${plan.buttonStyle === "gradient"
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/50"
                      : "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                      }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Features List */}
                  <div className="pt-1 xs:pt-2 sm:pt-3 space-y-2 xs:space-y-2.5 sm:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 transform transition-all duration-500 hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <span className="text-cyan-400 font-bold text-base xs:text-lg sm:text-xl flex-shrink-0 mt-0 xs:mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Support CTA */}
        <div
          ref={(el) => (elementsRef.current.support = el)}
          className={`mt-12 xs:mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 text-center transform transition-all duration-1000 px-1 xs:px-2 ${isVisible.support ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <p style={{ padding: "20px" }} className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Not sure which plan is right for you ?
          </p>
          <a
            href="mailto:hello@get-ryze.ai"
            style={{ padding: "8px" }}
            className="inline-flex rounded-full items-center gap-1 xs:gap-2 px-5 xs:px-6 sm:px-8 md:px-9 lg:px-10 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-md xs:rounded-lg sm:rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs xs:text-sm sm:text-base md:text-lg whitespace-nowrap"
          >
            Talk to Sales
            <span className="text-base xs:text-lg">→</span>
          </a>
        </div>

        {/* Trust Footer */}
        <div
          ref={(el) => (elementsRef.current.trust = el)}
          className={`mt-10 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-16 border-t border-purple-500/20 text-center transform transition-all duration-1000 px-1 xs:px-2 ${isVisible.trust
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-4 sm:mb-5">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 justify-center items-center text-[10px] xs:text-xs sm:text-sm text-gray-600">
            <span>✅ 99.9% Uptime</span>
            <span className="hidden xs:inline">•</span>
            <span>🔒 Enterprise Security</span>
            <span className="hidden xs:inline">•</span>
            <span>💬 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
