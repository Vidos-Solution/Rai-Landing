"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const navRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Search suggestions data
  const searchOptions = [
    { keyword: "home", target: "home", label: "Home" },
    { keyword: "standards", target: "standards", label: "Standards & Professional Alignment" },
    { keyword: "practice", target: "practice", label: "What Responsible AI Means in Practice" },
    { keyword: "framework", target: "framework", label: "The Responsible AI Governance Framework" },
    { keyword: "raigf", target: "framework", label: "RAIGF Framework" },
    { keyword: "platform", target: "unified", label: "One System, Two Experiences" },
    { keyword: "unified", target: "unified", label: "Unified Platform" },
    { keyword: "social", target: "social-proof", label: "Real Results, Real Impact" },
    { keyword: "proof", target: "social-proof", label: "Social Proof" },
    { keyword: "results", target: "social-proof", label: "Real Results" },
    { keyword: "cta", target: "cta", label: "Get Started" },
    { keyword: "get started", target: "cta", label: "Start Your Journey" },
    { keyword: "privacy", target: "/privacy", label: "Privacy Policy" },
    { keyword: "terms", target: "/terms", label: "Terms of Service" },
    { keyword: "cookies", target: "/cookies", label: "Cookie Policy" },
  ];

  useEffect(() => {
    // Reset active section when on non-home pages
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update active section on homepage
      if (pathname !== "/") return;

      // Update active section based on scroll position
      const sections = ["home", "standards", "practice", "framework", "unified", "social-proof", "cta"];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section on homepage
    if (pathname === "/") {
      setActiveSection("home");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Focus search input when search opens
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Update search suggestions based on query
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matches = searchOptions
        .filter(option => 
          option.keyword.includes(query) || 
          option.label.toLowerCase().includes(query)
        )
        .slice(0, 5) // Limit to 5 suggestions
        .map(option => option.label);
      setSearchSuggestions(matches);
    } else {
      setSearchSuggestions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      
      // Find exact matching option
      const matchedOption = searchOptions.find(
        option => option.keyword === query || option.label.toLowerCase() === query
      );

      if (matchedOption) {
        // Exact match found - navigate to it
        if (matchedOption.target.startsWith("/")) {
          window.location.href = matchedOption.target;
        } else {
          if (pathname !== "/") {
            window.location.href = `/#${matchedOption.target}`;
          } else {
            const element = document.getElementById(matchedOption.target);
            if (element) {
              const offset = 64;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
              setActiveSection(matchedOption.target);
            }
          }
        }
        setSearchOpen(false);
        setSearchQuery("");
        setSearchSuggestions([]);
      } else if (searchSuggestions.length > 0) {
        // No exact match but we have suggestions - navigate to first suggestion
        const firstSuggestion = searchOptions.find(opt => opt.label === searchSuggestions[0]);
        if (firstSuggestion) {
          if (firstSuggestion.target.startsWith("/")) {
            window.location.href = firstSuggestion.target;
          } else {
            if (pathname !== "/") {
              window.location.href = `/#${firstSuggestion.target}`;
            } else {
              const element = document.getElementById(firstSuggestion.target);
              if (element) {
                const offset = 64;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
                setActiveSection(firstSuggestion.target);
              }
            }
          }
          setSearchOpen(false);
          setSearchQuery("");
          setSearchSuggestions([]);
        }
      } else {
        // No match and no suggestions - search in page content or show popular suggestions
        const searchableText = document.body.innerText.toLowerCase();
        if (searchableText.includes(query)) {
          // Found in content, scroll to first occurrence
          const elements = Array.from(document.querySelectorAll('h1, h2, h3, p, li'));
          for (const el of elements) {
            if (el.textContent?.toLowerCase().includes(query)) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              break;
            }
          }
          setSearchOpen(false);
          setSearchQuery("");
          setSearchSuggestions([]);
        } else {
          // Show popular suggestions when no match found
          const popularSuggestions = [
            "Home",
            "Standards & Professional Alignment",
            "What Responsible AI Means in Practice",
            "The Responsible AI Governance Framework",
            "Get Started"
          ];
          setSearchSuggestions(popularSuggestions);
        }
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If not on homepage, navigate to homepage first
    if (pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 64; // Navbar height (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "standards", label: "Standards", href: "#standards" },
    { id: "practice", label: "Practice", href: "#practice" },
    { id: "framework", label: "Framework", href: "#framework" },
    { id: "unified", label: "Platform", href: "#unified" },
    { id: "cta", label: "Get Started", href: "#cta" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-dark-overlay via-dark-overlay/90 to-dark-overlay border-b border-white/10 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-gradient-to-r from-dark-overlay/80 via-dark-overlay/70 to-dark-overlay/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (pathname !== "/") {
                e.preventDefault();
                window.location.href = "/";
              } else {
                handleNavClick(e, "home");
              }
            }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden p-1.5">
              <img
                src="/images/iconwhite.png"
                alt="Vidos RAI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">
              Vidos RAI
            </span>
          </a>

          {/* Search Bar - Desktop */}
          {searchOpen && (
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-4 relative">
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 pr-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-light-gray600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-gray600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                    setSearchSuggestions([]);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/10 transition-colors"
                  aria-label="Close search"
                >
                  <svg
                    className="w-4 h-4 text-light-gray600"
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
                
                {/* Search Suggestions Dropdown */}
                {searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white/95 dark:bg-dark-medium/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl z-50 max-h-64 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => {
                      const option = searchOptions.find(opt => opt.label === suggestion);
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            if (option) {
                              if (option.target.startsWith("/")) {
                                window.location.href = option.target;
                              } else {
                                if (pathname !== "/") {
                                  window.location.href = `/#${option.target}`;
                                } else {
                                  const element = document.getElementById(option.target);
                                  if (element) {
                                    const offset = 64;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: "smooth",
                                    });
                                    setActiveSection(option.target);
                                  }
                                }
                              }
                              setSearchOpen(false);
                              setSearchQuery("");
                              setSearchSuggestions([]);
                            }
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-white/10 dark:hover:bg-white/5 transition-colors border-b border-white/10 dark:border-white/5 last:border-b-0"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{suggestion}</div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </form>
            </div>
          )}

          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-1 ${searchOpen ? "hidden" : ""}`}>
            {navLinks.map((link) => {
              // For "Home" link, always go to homepage
              const href = link.id === "home" ? "/" : (pathname === "/" ? link.href : `/${link.href}`);
              
              return (
                <a
                  key={link.id}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    
                    if (pathname !== "/") {
                      // Navigate to homepage with anchor (or just homepage for "home")
                      if (link.id === "home") {
                        window.location.href = "/";
                      } else {
                        window.location.href = `/${link.href}`;
                      }
                    } else {
                      handleNavClick(e, link.id);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative nav-link ${
                    activeSection === link.id
                      ? "text-white bg-white/10"
                      : "text-light-gray200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Theme Toggle & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Search Toggle Button */}
            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors relative"
                aria-label="Search"
                title="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors relative"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            
            <a
              href="https://course.responsibleai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              For Professionals
            </a>
            <a
              href="https://vidos.responsibleai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              For Businesses
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/10 mt-2">
            {/* Mobile Search */}
            <div className="px-4 mb-4 relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 pr-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-light-gray600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-gray600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                
                {/* Mobile Search Suggestions */}
                {searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white/95 dark:bg-dark-medium/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl z-50 max-h-48 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => {
                      const option = searchOptions.find(opt => opt.label === suggestion);
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            if (option) {
                              if (option.target.startsWith("/")) {
                                window.location.href = option.target;
                              } else {
                                if (pathname !== "/") {
                                  window.location.href = `/#${option.target}`;
                                } else {
                                  const element = document.getElementById(option.target);
                                  if (element) {
                                    const offset = 64;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: "smooth",
                                    });
                                    setActiveSection(option.target);
                                  }
                                }
                              }
                              setMobileMenuOpen(false);
                              setSearchQuery("");
                              setSearchSuggestions([]);
                            }
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-white/10 dark:hover:bg-white/5 transition-colors border-b border-white/10 dark:border-white/5 last:border-b-0"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{suggestion}</div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </form>
            </div>
            {navLinks.map((link) => {
              // For "Home" link, always go to homepage
              const href = link.id === "home" ? "/" : (pathname === "/" ? link.href : `/${link.href}`);
              
              return (
                <a
                  key={link.id}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    
                    if (pathname !== "/") {
                      // Navigate to homepage with anchor (or just homepage for "home")
                      if (link.id === "home") {
                        window.location.href = "/";
                      } else {
                        window.location.href = `/${link.href}`;
                      }
                    } else {
                      handleNavClick(e, link.id);
                    }
                  }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 nav-link ${
                      activeSection === link.id
                        ? "text-white bg-white/10"
                        : "text-light-gray200 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-white/10 space-y-2">
              {/* Theme Toggle Button - Mobile */}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
              
              <a
                href="https://course.responsibleai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors text-center"
              >
                For Professionals
              </a>
              <a
                href="https://vidos.responsibleai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 transition-all text-center"
              >
                For Businesses
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
