import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  BookOpen,
  Code,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Mail,
  Clock,
  Shield,
  Server,
  Database,
  Terminal,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  Rocket,
  Settings,
  CreditCard,
  Building2,
  Send,
  Star,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const quickLinks = [
  { title: "API Documentation", description: "Complete API reference with examples", icon: Code, link: "https://docs.futeurcredx.com/", external: true },
  { title: "LUMIQ Quickstart", description: "Get started with credit APIs", icon: Rocket, link: "https://docs.futeurcredx.com/lumiq/quickstart", external: true },
  { title: "Launch Checklist", description: "Pre-launch requirements", icon: CheckCircle, link: "/support/launch-checklist" },
  { title: "Dashboard Guide", description: "Navigate your dashboard", icon: Settings, link: "/support/dashboard-guide" },
];

const resourceCategories = [
  { title: "Integration Guides", icon: Server, items: [
    { name: "Web SDK Integration", link: "/support/web-sdk" },
    { name: "API Authentication", link: "/support/api-authentication" },
    { name: "Webhooks Setup", link: "/support/webhooks-setup" },
    { name: "Error Handling", link: "/support/error-handling" },
  ]},
  { title: "Credit Data", icon: CreditCard, items: [
    { name: "FSR Score Overview", link: "/support/fsr-score" },
    { name: "Intelliscore Plus", link: "/support/intelliscore-plus" },
    { name: "Tradeline Analysis", link: "/support/tradeline-analysis" },
    { name: "Payment Insights", link: "/support/payment-insights" },
  ]},
  { title: "Security & Compliance", icon: Shield, items: [
    { name: "SOC 2 Compliance", link: "/legal/glba-compliance" },
    { name: "Data Encryption", link: "/legal/privacy-policy" },
    { name: "GLBA Requirements", link: "/legal/glba-compliance" },
    { name: "FCRA Guidelines", link: "/legal/data-processing" },
  ]},
];

const faqCategories = [
  { name: "The Basics", faqs: [
    { question: "What is FuteurCredX?", answer: "FuteurCredX is Credit Karma for business owners—but better. We show you both your personal AND business credit scores, let you apply for business loans and credit cards, and guide you with AI-powered insights." },
    { question: "How is this different from Credit Karma?", answer: "Credit Karma only shows your personal credit score. But if you're a business owner, you have two credit profiles—personal and business. Lenders look at both. FuteurCredX unifies them in one dashboard." },
    { question: "Is it really free to check my scores?", answer: "Yes! Checking your credit scores on FuteurCredX is completely free and does not affect your credit—it's a soft pull." },
    { question: "What credit bureaus do you pull from?", answer: "We aggregate data from all major business bureaus: Experian Business, Dun & Bradstreet, and Equifax Business. For personal credit, we use Experian consumer data." },
    { question: "Do I need an EIN to use FuteurCredX?", answer: "No EIN required to get started. You can monitor your personal credit immediately. Once you have an EIN, you can add your business profile to track business credit too." },
  ]},
  { name: "Credit Building", faqs: [
    { question: "How long does it take to build business credit?", answer: "Most businesses can establish a business credit profile in 60-90 days by opening tradelines with Net-30 vendors that report to business credit bureaus." },
    { question: "Does checking my credit score lower it?", answer: "No. FuteurCredX uses soft inquiries to check your credit, which do not impact your score." },
    { question: "What's the fastest way to build business credit?", answer: "Open 3-5 Net-30 vendor accounts that report to bureaus, pay early, and keep utilization under 30%. Popular starter vendors include Uline, Grainger, and Quill." },
    { question: "How do I dispute errors on my business credit report?", answer: "Navigate to your credit report in the dashboard, click on the tradeline with the error, and select 'Dispute'. We'll guide you through filing disputes with each bureau." },
    { question: "What is a good business credit score?", answer: "For Dun & Bradstreet PAYDEX, 80+ is excellent. For Experian Intelliscore Plus, 76-100 is low risk. Our FSR Score considers both—aim for 70+ for best loan terms." },
  ]},
  { name: "Products & Features", faqs: [
    { question: "What is LUMIQ AI?", answer: "LUMIQ is our proprietary AI engine that analyzes your credit data, predicts approval odds, recommends actions, and provides personalized insights to optimize your credit profile." },
    { question: "What is the FSR Score?", answer: "The Financial Stability Risk Score is our proprietary metric that combines personal and business credit data to give lenders a comprehensive view of creditworthiness. Range is 1-100." },
    { question: "Can I apply for business loans through FuteurCredX?", answer: "Yes! We match you with lending partners based on your credit profile. Apply directly through our platform with pre-qualified offers tailored to your business." },
    { question: "Do you offer credit monitoring alerts?", answer: "Yes, we provide real-time alerts for score changes, new inquiries, new tradelines, derogatory marks, and significant balance changes across all monitored bureaus." },
  ]},
  { name: "Technical & API", faqs: [
    { question: "What is your API latency?", answer: "P50 latency is 180ms, P99 is under 800ms for standard credit pulls. We recommend 30-second timeouts for comprehensive reports." },
    { question: "Do you support webhooks?", answer: "Yes, webhooks notify you of credit score changes, new tradeline activity, alert triggers, and report generation completion. Configure endpoints in your dashboard." },
    { question: "What authentication methods do you support?", answer: "We support API key authentication for server-to-server calls, OAuth 2.0 for user-delegated access, and JWT bearer tokens for session-based authentication." },
    { question: "Is there a sandbox environment?", answer: "Yes, we provide a full sandbox with test API keys (prefixed test_). Test data simulates real bureau responses without hitting production systems." },
    { question: "What's the rate limit?", answer: "Standard plans: 100 requests/minute. Business plans: 500 requests/minute. Enterprise: Custom limits. Rate limit headers are included in all responses." },
  ]},
  { name: "Security & Compliance", faqs: [
    { question: "Is my data secure?", answer: "Absolutely. FuteurCredX uses AES-256 encryption at rest and in transit, zero-knowledge architecture for sensitive data, and SOC 2 Type II ready infrastructure." },
    { question: "Is FuteurCredX SOC 2 compliant?", answer: "Yes, we are SOC 2 Type II ready with our observation window active and annual third-party security assessments ongoing. Reports available for enterprise customers under NDA." },
    { question: "Are you GLBA compliant?", answer: "Yes, as a provider of financial data services, we fully comply with the Gramm-Leach-Bliley Act requirements for data protection and privacy." },
    { question: "How do you handle FCRA requirements?", answer: "We operate as a consumer reporting agency and comply with all FCRA requirements including permissible purpose verification, dispute handling, and adverse action notices." },
    { question: "Can I delete my data?", answer: "Yes, you can request complete data deletion from Settings > Privacy. We'll remove your data within 30 days per CCPA/GDPR requirements." },
  ]},
  { name: "Billing & Plans", faqs: [
    { question: "What plans do you offer?", answer: "Free tier for basic credit monitoring, Pro ($29/mo) for advanced insights and alerts, Business ($99/mo) for API access, and Enterprise for custom solutions." },
    { question: "Can I cancel anytime?", answer: "Yes, all plans are month-to-month with no long-term contracts. Cancel anytime from your account settings—no fees or penalties." },
    { question: "Do you offer annual billing?", answer: "Yes, annual billing saves 20% compared to monthly. Available for Pro and Business plans." },
    { question: "Is there a free trial?", answer: "Yes, Business plan includes a 14-day free trial with full API access. No credit card required to start." },
  ]},
];

export default function SupportHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });

  const filteredResources = searchQuery ? resourceCategories.flatMap(cat => 
    cat.items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  ) : [];

  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-16 border border-white/15 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Support & <span className="text-white/60">Resources</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              Everything you need to integrate, troubleshoot, and scale with FuteurCredX.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search documentation, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl"
              />
              {searchQuery && filteredResources.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#3A2F2F] border border-white/10 rounded-xl p-2 z-50">
                  {filteredResources.map((item) => (
                    <Link key={item.name} to={item.link} className="block px-4 py-3 hover:bg-white/5 rounded-lg text-left">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.external ? "#" : link.link} onClick={link.external ? () => window.open(link.link, '_blank') : undefined}
                className="group p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all text-left">
                <link.icon className="w-8 h-8 text-amber-400 mb-3" />
                <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                  {link.title} {link.external && <ExternalLink className="w-3 h-3" />}
                </h3>
                <p className="text-sm text-white/50">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-[#352A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Developer Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resourceCategories.map((cat) => (
              <Card key={cat.title} className="bg-white/[0.03] border-white/10">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="w-6 h-6 text-amber-400" />
                    <h3 className="font-semibold text-white">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link} className="text-sm text-white/60 hover:text-amber-400 flex items-center gap-2">
                          <ChevronRight className="w-3 h-3" /> {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems / Troubleshooting */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Common Problems & Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* API Issues */}
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h3 className="font-semibold text-white">API Issues</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">401 Unauthorized</strong> - Check API key is valid and not expired</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">429 Rate Limited</strong> - Implement exponential backoff</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">500 Server Error</strong> - Retry with backoff, contact support if persists</span>
                  </li>
                </ul>
                <Link to="/support/error-handling" className="inline-flex items-center gap-1 text-amber-400 text-sm mt-4 hover:underline">
                  View all error codes <ChevronRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* Data Issues */}
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-400" />
                  <h3 className="font-semibold text-white">Data Issues</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Missing tradelines</strong> - Allow 24-48h for bureau sync</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Score discrepancy</strong> - Scores update every 30 days</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Stale data</strong> - Request fresh pull via API</span>
                  </li>
                </ul>
                <Link to="/support/data-freshness" className="inline-flex items-center gap-1 text-amber-400 text-sm mt-4 hover:underline">
                  Learn about data freshness <ChevronRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            {/* Integration Issues */}
            <Card className="bg-white/[0.03] border-white/10">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold text-white">Integration Issues</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Webhook not firing</strong> - Verify endpoint is HTTPS and publicly accessible</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">SDK init fails</strong> - Check API key environment variable</span>
                  </li>
                  <li className="flex items-start gap-2 text-white/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">CORS errors</strong> - Use server-side SDK, not browser</span>
                  </li>
                </ul>
                <Link to="/support/webhooks-setup" className="inline-flex items-center gap-1 text-amber-400 text-sm mt-4 hover:underline">
                  Webhook troubleshooting <ChevronRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Response Time SLAs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Support Response Times</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-white">General Support</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">&lt; 24 hours</p>
              <p className="text-sm text-white/50">Standard response time for general inquiries</p>
            </div>
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-white">Priority Support</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">&lt; 4 hours</p>
              <p className="text-sm text-white/50">Business plan customers get faster response</p>
            </div>
            <div className="p-5 bg-white/[0.03] border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-white">Enterprise Support</span>
              </div>
              <p className="text-2xl font-bold text-white mb-1">&lt; 1 hour</p>
              <p className="text-sm text-white/50">Dedicated support with SLA guarantees</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid lg:grid-cols-[280px,1fr] gap-12">
            <div className="space-y-2">
              {faqCategories.map((cat, idx) => (
                <button key={idx} onClick={() => { setActiveCategory(idx); setOpenFAQ(0); }}
                  className={`w-full text-left px-5 py-4 rounded-xl font-medium transition-all ${activeCategory === idx ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`}>
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/10">
              {faqCategories[activeCategory].faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 last:border-0">
                  <button onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)} className="w-full py-5 flex items-center justify-between text-left">
                    <span className={`font-medium ${openFAQ === idx ? 'text-amber-400' : 'text-white'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === idx ? 'rotate-180 text-amber-400' : 'text-white/40'}`} />
                  </button>
                  {openFAQ === idx && <p className="pb-5 text-white/60 text-sm">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#352A2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
            <div className="space-y-4">
              <a href="mailto:support@futeurcredx.com" className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] group">
                <Mail className="w-6 h-6 text-amber-400" />
                <div><p className="font-medium text-white">support@futeurcredx.com</p><p className="text-sm text-white/50">General Support</p></div>
              </a>
              <a href="mailto:enterprise@futeurcredx.com" className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] group">
                <Building2 className="w-6 h-6 text-amber-400" />
                <div><p className="font-medium text-white">enterprise@futeurcredx.com</p><p className="text-sm text-white/50">Enterprise Support</p></div>
              </a>
              <a href="mailto:institution@futeurcredx.com" className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] group">
                <Building2 className="w-6 h-6 text-amber-400" />
                <div><p className="font-medium text-white">institution@futeurcredx.com</p><p className="text-sm text-white/50">Institution Support</p></div>
              </a>
            </div>
          </div>
          <Card className="bg-white/[0.03] border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Send a Message</h3>
              <form className="space-y-4">
                <Input placeholder="Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                <Input placeholder="Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                <Textarea placeholder="How can we help?" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[100px]" />
                <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white"><Send className="w-4 h-4 mr-2" /> Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
