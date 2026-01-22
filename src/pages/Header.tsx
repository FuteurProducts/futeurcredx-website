import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronRight, ChevronDown } from "lucide-react";
import QRCodeModal from "@/components/QrCode";

// Menu data structure - simplified for new dropdown style
const menuData = {
  products: {
    title: "Products",
    overview: {
      title: "Product Overview",
      description: "Discover what makes FuteurCredX the leading credit intelligence platform for consumers and enterprises.",
    },
    items: [
      {
        name: "FuteurCredX App",
        description: "Consumer credit visibility and readiness intelligence platform with real-time monitoring.",
        link: "/futeurcredx-app",
      },
      {
        name: "LumiqAI",
        description: "Enterprise-grade credit intelligence APIs powering banks, fintechs, and platforms.",
        link: "/lumiq-ai",
      },
    ],
  },
  solutions: {
    title: "Solutions",
    overview: {
      title: "Solutions Overview",
      description: "Tailored credit intelligence solutions designed for every audience in the financial ecosystem.",
    },
    items: [
      {
        name: "For Consumers",
        description: "Actionable credit visibility, readiness insights, and pathways to qualification.",
        link: "/solutions/consumers",
      },
      {
        name: "For Institutions",
        description: "Enhanced credit intelligence for engagement, retention, and compliant lending.",
        link: "/solutions/institutions",
      },
      {
        name: "For Fintechs",
        description: "API-first infrastructure for embedding credit decisioning into modern products.",
        link: "/solutions/fintechs",
      },
    ],
  },
  partners: {
    title: "Partners",
    overview: {
      title: "Partner Overview",
      description: "Join our growing network of partners driving credit intelligence innovation worldwide.",
    },
    items: [
      {
        name: "Partner Ecosystem",
        description: "Join our network of resellers, referral partners, and strategic channel partners.",
        link: "/partners/ecosystem",
      },
      {
        name: "Technology Partners",
        description: "Integrate LumiqAI into your platform with our developer-first APIs and SDKs.",
        link: "/partners/technology",
      },
    ],
  },
  company: {
    title: "Company",
    overview: {
      title: "Company Overview",
      description: "Learn about our mission to revolutionize credit intelligence for the modern economy.",
    },
    items: [
      {
        name: "About Us",
        description: "Our story, mission, and the philosophy driving credit intelligence innovation.",
        link: "/company/about",
      },
      {
        name: "Legal",
        description: "Privacy policy, terms of service, and compliance documentation.",
        link: "/legal",
      },
    ],
  },
};

type MenuKey = keyof typeof menuData;

export default function FuteurHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<MenuKey | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuEnter = (menu: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Header with brown theme */}
      <div className="bg-[#2D2424] shadow-[0_1px_0_0_#2D2424,0_2px_0_0_#2D2424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top utility row - hidden on mobile */}
          <div className="hidden md:flex items-center justify-end gap-0 py-2 border-b border-white/10">
            {/* Orange accent line */}
            <div className="w-0.5 h-4 bg-orange-500 mr-4" />
            <Link
              to="/contact-us"
              className="text-sm text-white/80 hover:text-white transition-colors px-4"
            >
              Contact Us
            </Link>
            <Link
              to="/request-demo"
              className="text-sm text-white/80 hover:text-white transition-colors px-4"
            >
              Request a Demo
            </Link>
            <Link
              to="/support"
              className="text-sm text-white/80 hover:text-white transition-colors px-4"
            >
              Support
            </Link>
          </div>

          {/* Main navigation row */}
          <div className="flex items-center justify-between h-14 md:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-white text-lg sm:text-xl font-black uppercase tracking-wide">
                FUTEURCREDX
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-10">
              {(Object.keys(menuData) as MenuKey[]).map((key) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(key)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide py-5 transition-colors ${
                      activeMenu === key
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {menuData[key].title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Underline indicator */}
                  {activeMenu === key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                  )}

                  {/* Floating Dropdown - Plaid Style */}
                  {activeMenu === key && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleMenuLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[320px] max-w-[480px]">
                        {/* Overview section - Non-clickable header */}
                        <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-b from-gray-200 via-gray-150 to-gray-100 cursor-default select-none">
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {menuData[key].overview.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                            {menuData[key].overview.description}
                          </p>
                        </div>
                        
                        {/* Menu items */}
                        <div className="py-2">
                          {menuData[key].items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#0066FF] transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0066FF] mt-0.5 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact-sales"
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Sales
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] md:top-[96px] bg-black z-40 overflow-y-auto">
          <div className="p-6">
            {mobileSubmenu === null ? (
              <nav className="space-y-2">
                {(Object.keys(menuData) as MenuKey[]).map((key) => (
                  <button
                    key={key}
                    className="w-full flex items-center justify-between py-4 text-lg font-medium text-white border-b border-white/10"
                    onClick={() => setMobileSubmenu(key)}
                  >
                    {menuData[key].title}
                    <ChevronRight className="w-5 h-5 text-white/60" />
                  </button>
                ))}
                <div className="pt-6 space-y-3">
                  <Link
                    to="/contact-us"
                    className="block text-white/80 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/request-demo"
                    className="block text-white/80 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Request a Demo
                  </Link>
                  <Link
                    to="/support"
                    className="block text-white/80 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Support
                  </Link>
                </div>
              </nav>
            ) : (
              <div>
                <button
                  className="flex items-center gap-2 text-[#0066FF] font-medium mb-6"
                  onClick={() => setMobileSubmenu(null)}
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back
                </button>
                <h3 className="text-xl font-bold text-white mb-2">
                  {menuData[mobileSubmenu].overview.title}
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  {menuData[mobileSubmenu].overview.description}
                </p>
                <div className="space-y-5">
                  {menuData[mobileSubmenu].items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="block"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileSubmenu(null);
                      }}
                    >
                      <h4 className="text-white font-medium mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-white/50">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
