import { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef({});

  useEffect(() => {
    const observers = new Map();

    const createObserver = (id) => {
      return new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
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

  const faqs = [
    {
      id: "faq1",
      icon: "🤖",
      question: "How does Ryze's AI optimization work?",
      answer:
        "Ryze uses advanced machine learning algorithms to analyze your campaign performance in real-time. Our AI watches for underperforming ads, identifies optimization opportunities, and automatically adjusts bids, budgets, and creatives. It learns from your account's historical data and industry benchmarks to make intelligent decisions 24/7 without manual intervention. The system continuously improves as it gathers more data.",
    },
    {
      id: "faq2",
      icon: "🔌",
      question: "Which platforms does Ryze integrate with?",
      answer:
        "Ryze connects with all major advertising platforms including Google Ads, Meta (Facebook & Instagram), Amazon Ads, TikTok Ads, and LinkedIn Ads. On the analytics side, we integrate with Google Analytics 4, Shopify, WooCommerce, and various CRM systems. We also offer API access for custom integrations. Simply authenticate your account and we'll handle the rest.",
    },
    {
      id: "faq3",
      icon: "🔐",
      question: "How secure is my data with Ryze?",
      answer:
        "Security is our top priority. Ryze is SOC 2 Type II certified, GDPR compliant, and uses enterprise-grade encryption for all data in transit and at rest. We never store your ad account credentials—we use OAuth authentication for secure access. Your data is backed up regularly, and we maintain 99.9% uptime with redundant infrastructure. We also offer data residency options for enterprise clients.",
    },
    {
      id: "faq4",
      icon: "💰",
      question: "What kind of results can I expect?",
      answer:
        "Most of our clients see results within the first 30 days. On average, customers achieve 2-4x improvement in ROAS (Return on Ad Spend), 30-50% reduction in CPA (Cost Per Acquisition), and 20-40% increase in conversion rates. Results vary based on your starting point, industry, and campaign setup. We provide detailed reporting and transparent metrics so you can track every optimization.",
    },
    {
      id: "faq5",
      icon: "🎯",
      question: "Can I use Ryze if I'm new to digital advertising?",
      answer:
        "Absolutely! Ryze is designed for both beginners and experts. We provide an intuitive dashboard with guided onboarding, educational resources, and a library of templates. Our support team is available 24/7 to help you set up campaigns. Plus, we have detailed documentation and video tutorials. Even if you're completely new, our AI will learn from your goals and guide you through best practices.",
    },
    {
      id: "faq6",
      icon: "📊",
      question: "How often should I check on my campaigns?",
      answer:
        "One of Ryze's key benefits is that you don't need to constantly monitor your campaigns. Our AI optimization runs 24/7, detecting issues and opportunities automatically. We recommend checking in weekly to review performance reports and adjust strategies if needed. With Ryze, you can focus on creative strategy and business growth while our AI handles the optimization.",
    },
    {
      id: "faq7",
      icon: "🚀",
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial gives you full access to all Ryze features with no credit card required. You get unlimited ad accounts, access to our AI optimization engine, real-time analytics, custom dashboards, API access, and priority email support. The free trial doesn't have any limitations—it's the complete Ryze experience so you can see exactly how it works for your business.",
    },
    {
      id: "faq8",
      icon: "💬",
      question: "What support options are available?",
      answer:
        "Ryze offers 24/7 customer support through email, live chat, and phone (for Professional and Enterprise plans). We also have an extensive knowledge base, video tutorials, and monthly webinars. Enterprise customers get a dedicated account manager. Our support team is based in multiple time zones, so you'll always have help when you need it.",
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 bg-linear-to-b from-black via-purple-900/5 to-black overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="hero-section-padding mx-auto relative z-10">
        {/* Header */}
        <div
          ref={(el) => (elementsRef.current.header = el)}
          className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transform transition-all duration-1000 ${isVisible.header ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-5">
            <span className="gradient-text bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              FAQs
            </span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Everything you need to know about Ryze.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (elementsRef.current[faq.id] = el)}
              className={`transform transition-all duration-1000 ${isVisible[faq.id]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                onClick={() => toggleExpanded(faq.id)}
                className={`group relative m-0 rounded-xl sm:rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${expandedId === faq.id
                  ? "border-purple-500/60 bg-linear-to-br from-purple-900/40 to-cyan-900/40 shadow-xl shadow-purple-500/30"
                  : "border-purple-500/30 bg-linear-to-br from-purple-900/20 to-purple-800/10 hover:border-purple-500/50"
                  }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${expandedId === faq.id
                    ? "opacity-100"
                    : "group-hover:opacity-50"
                    }`}
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-br from-purple-500/20 to-cyan-500/20"></div>
                </div>

                {/* Question Content */}
                <div className="relative z-10 p-5 sm:p-6 md:p-7 lg:p-8 flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                  {/* Icon */}
                  <div className="shrink-0 text-3xl xs:text-4xl sm:text-5xl md:text-6xl mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>

                  {/* Question & Toggle */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white pr-8 sm:pr-10 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className="shrink-0 mt-1 sm:mt-2">
                    <div
                      className={`w-6 xs:w-7 sm:w-8 md:w-9 h-6 xs:h-7 sm:h-8 md:h-9 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 flex items-center justify-center transition-all duration-500 ${expandedId === faq.id
                        ? "rotate-180 shadow-lg shadow-purple-500/50"
                        : ""
                        }`}
                    >
                      <span className="text-white font-bold text-sm xs:text-base">
                        +
                      </span>
                    </div>
                  </div>
                </div>

                {/* Answer Content */}
                <div
                  className={`relative z-10 overflow-hidden transition-all duration-500 ${expandedId === faq.id ? "max-h-96 sm:max-h-125" : "max-h-0"
                    }`}
                >
                  <div className="px-5 sm:px-6 md:px-7 lg:px-8 pb-5 sm:pb-6 md:pb-7 lg:pb-8 border-t border-purple-500/20">
                    <p className="text-gray-300 text-sm xs:text-base sm:text-base md:text-lg leading-relaxed justify-center-safe animate-fadeIn">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          ref={(el) => (elementsRef.current.contact = el)}
          style={{ paddingBottom: "20px" }}
          className={`mt-20 sm:mt-24 md:mt-32 lg:mt-40 text-center transform transition-all duration-1000 ${isVisible.contact ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <p className="text-gray-400 text-xl xs:text-lg mb-4 sm:mb-5 md:mb-6" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            Didn't find what you're looking for?
          </p>
          <a
            href="mailto:hello@get-ryze.ai"
            className="inline-flex items-center gap-2 px-7 xs:px-8 sm:px-9 md:px-10 py-3 xs:py-3.5 sm:py-4 bg-linear-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
            style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "8px", paddingBottom: "8px" }}
          >
            Contact Support
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        /* Smooth max-height transitions */
        @media (prefers-reduced-motion: no-preference) {
          div {
            transition-property: max-height;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
