import { Link } from "react-router-dom";
import { FileCode, RefreshCw, Settings } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    products: {
      title: "Products",
      items: [
        { name: "FuteurCredX App", link: "https://futeurcredx.com/app" },
        { name: "LumiqAI", link: "https://futeurcredx.com/lumiq-build" },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { name: "For Consumers", link: "https://futeurcredx.com/business" },
        { name: "For Institutions", link: "https://futeurcredx.com/enterprise" },
        { name: "For Fintechs", link: "https://futeurcredx.com/fintech" },
      ],
    },
    partners: {
      title: "Partners",
      items: [
        { name: "Partner Ecosystem", link: "https://futeurcredx.com/enterprise" },
        { name: "Technology Partners", link: "https://futeurcredx.com/enterprise" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { name: "About Us", link: "https://futeurcredx.com/about" },
        { name: "Legal", link: "https://futeurcredx.com/privacy-policy" },
        { name: "Support", link: "https://futeurcredx.com/contact-us" },
        { name: "Contact", link: "https://futeurcredx.com/contact-us" },
      ],
    },
  };

  const developerResources = [
    {
      icon: FileCode,
      title: "API Docs",
      description: "Integrate with LumiqAI's APIs and SDKs",
      href: "https://futeurcredx.com/api-docs",
      external: true,
    },
    {
      icon: RefreshCw,
      title: "Changelog",
      description: "Latest updates to our API and SDK",
      href: "https://futeurcredx.com/changelog",
      external: true,
    },
    {
      icon: Settings,
      title: "API Reference",
      description: "Manage your integration",
      href: "https://futeurcredx.com/api-reference",
      external: true,
    },
  ];

  return (
    <footer className="bg-[#1A1207] text-white">
      {/* Main Footer Content */}
      <div className="px-6 lg:px-[6%] py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
              {footerLinks.products.title}
            </h4>
            <div className="space-y-3">
              {footerLinks.products.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
              {footerLinks.solutions.title}
            </h4>
            <div className="space-y-3">
              {footerLinks.solutions.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
              {footerLinks.partners.title}
            </h4>
            <div className="space-y-3">
              {footerLinks.partners.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
              {footerLinks.company.title}
            </h4>
            <div className="space-y-3">
              {footerLinks.company.items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* For Developers Section - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-wider">
              For Developers
            </h4>
            <div className="bg-[#0F0A04] rounded-xl p-5 space-y-4">
              {developerResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                    <resource.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                      {resource.title}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-white/10 px-6 lg:px-[6%] py-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <span className="text-white text-xl font-black uppercase tracking-wide">
              FUTEURCREDX
            </span>
          </div>

          {/* Legal Links Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50 mb-6">
            <a href="https://futeurcredx.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://futeurcredx.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="https://futeurcredx.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a href="https://futeurcredx.com/legal/data-processing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Data Processing
            </a>
            <a href="https://futeurcredx.com/legal/glba-compliance" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GLBA Compliance
            </a>
          </div>

          {/* Legal Text */}
          <div className="text-xs text-white/40 space-y-4 mb-8 leading-relaxed">
            <p>
              <strong className="text-white/60">Business Credit Services:</strong>{" "}
              FuteurCredX is a business credit technology platform and program manager. Our LUMIQ™ platform provides business credit monitoring, building, and intelligence services to help businesses establish and grow their credit profiles without personal guarantees.
            </p>

            <p>
              <strong className="text-white/60">Enterprise Solutions:</strong>{" "}
              Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
            </p>

            <p>
              <strong className="text-white/60">Data Security:</strong>{" "}
              FuteurCredX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/5">
            <div className="text-xs text-white/40">
              © 2026 FuteurCredX. LUMIQ™ and FuteurCredX® are registered trademarks. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
