import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const navItems = useMemo(
    () => [
      { label: "About Us", hasDropdown: false, href: "/about" },
      { label: "Pricing", hasDropdown: false, href: "/pricing" },
      { label: "Case Studies", hasDropdown: false, href: "/case-studies" },
    ],
    []
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full py-4 sticky top-0 z-50 header-blur border-b border-white/5 header-section-padding" style={{ background: "rgba(230, 235, 240, 0.15)" }}>
      <div className="mx-auto flex items-center justify-between gap-4" style={{ padding: "15px 5px" }}>
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0 focus-ring rounded-md"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gradient-bg flex items-center justify-center text-black font-bold text-3xl sm:text-lg">
            R
          </div>
          <span className="font-bold text-2xl lg:text-4xl xl:text-5xl text-white text-lg sm:text-xl">
            Ryze
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm md:text-base lg:text-lg xl:text-xl text-white/80">
          {navItems.map((item, idx) =>
            item.href && item.href !== "#" ? (
              <Link
                key={idx}
                to={item.href}
                className="hover:text-white transition-colors duration-200 flex items-center gap-1 focus-ring rounded-md px-1 py-2 text-base sm:text-md lg:text-lg xl:text-xl"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ) : (
              <a
                key={idx}
                href="#"
                className="hover:text-white transition-colors duration-200 flex items-center gap-1 focus-ring rounded-md px-1 py-2"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            )
          )}
        </nav>
        {/* Right side: Search, Sign in, Sign up */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          {/* Search bar */}
          <button
            type="button"
            style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}
            className="flex items-center rounded-2xl text-md sm:text-sm lg:text-base xl:text-lg gap-2 px-5 bg-white/10 border border-black/30 text-gray/20 hover:border-black/60 transition-colors cursor-pointer focus-ring"
            aria-label="Search Ryze"
          >
            <span>Search Ryze....</span>
          </button>

          {/* Sign in button */}
          <button
            type="button"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
            className="text-md cursor-pointer sm:text-md lg:text-lg xl:text-xl rounded-4xl transition-colors duration-200 hidden lg:inline-block gradient-bg text-black border-none font-semibold hover:opacity-90 transition-all duration-200 focus-ring px-2 py-2 min-touch"
          >
            Login
          </button>

          {/* Sign up button */}
          <button
            type="button"
            className="text-md sm:text-md cursor-pointer lg:text-lg xl:text-xl px-5 sm:px-6 rounded-4xl lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 gradient-bg border-none text-black font-semibold hover:opacity-90 transition-all duration-200 focus-ring min-touch hidden lg:inline-block"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            Sign Up
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            style={{
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingRight: "10px",
              paddingLeft: "10px"
            }}
            className="lg:hidden px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-ring min-touch"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 bg-black/60"
            aria-label="Close menu overlay"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            id="mobile-nav-drawer"
            ref={drawerRef}
            className="fixed top-0 right-0 h-full w-[min(78vw,290px)] p-5 sm:p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            style={{
              paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
              paddingRight: "max(1.25rem, env(safe-area-inset-right))",
              // background: "linear-gradient(135deg, rgba(15, 15, 25, 0.98) 0%, rgba(30, 20, 50, 0.95) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              // boxShadow: "0 0 40px rgba(124, 58, 237, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 w-[200px]">
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className="font-bold text-white text-lg">Ryze</span>
                </Link>
              </div>
              <button
                type="button"
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  paddingRight: "10px",
                  paddingLeft: "10px"
                }}
                className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-ring min-touch"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1 w-[200px]" style={{ background: "rgba(4, 130, 255, 1)", paddingTop: "9px", paddingBottom: "9px", borderRadius: "12px" }}>
              {navItems.map((item, idx) =>
                item.href && item.href !== "#" ? (
                  <Link
                    key={idx}
                    to={item.href}
                    className="flex items-center justify-center text-center px-3 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors focus-ring min-touch"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? (
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : null}
                  </Link>
                ) : (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors focus-ring min-touch"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? (
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : null}
                  </a>
                )
              )}
            </nav>

            <div className="mt-6 flex flex-col gap-3 w-[200px]" style={{ background: "rgba(4, 130, 255, 1)", borderRadius: "12px" }}>
              <button type="button" className="rounded-3xl gradient-bg btn-secondary min-touch text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-ring" style={{ padding: "0px" }}>
                Login
              </button>
              <button
                type="button"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-3xl text-white text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200 focus-ring min-touch"
              >
                Sign Up
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
