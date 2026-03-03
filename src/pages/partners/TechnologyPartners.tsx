import { useState } from "react";
import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, CheckCircle2, Database, Code, Building2, Zap, Shield, Link2, Server, BarChart3, Clock, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const TechnologyPartners = () => {
  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/futeur-tech.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2424] via-[#2D2424]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2D2424] z-10" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden z-5">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] border border-amber-500/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] border border-amber-500/5 rounded-full"
          />
        </div>
        
        <div className="container mx-auto px-[6%] py-28 relative z-20">
          <div className="max-w-[600px]">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              <motion.span 
                variants={fadeUp}
                className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-6 uppercase tracking-wider border border-amber-500/20"
              >
                Technology Partners
              </motion.span>
              
              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.1] tracking-[-0.02em] mb-6"
              >
                Build Smarter Credit
                <br />
                <span className="text-amber-400">Experiences Together</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-base text-white/60 leading-relaxed mb-10"
              >
                Every platform is different, but one thing remains the same—integrating credit intelligence into your product workflow is key to user success. LumiqAI provides the APIs you need to enrich, score, and decisioning any credit-related experience.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button asChild className="bg-amber-500 text-black hover:bg-amber-400 rounded-md px-6 py-6 text-base font-medium shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all">
                  <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                    Explore API Docs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-md px-6 py-6 text-base bg-transparent hover:scale-105 transition-all">
                  <Link to="/contact-sales">
                    Contact Integration Team
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTEGRATION TYPES */}
      <section className="py-20 bg-[#352A2A]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20"
            >
              Integration Options
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-4"
            >
              Flexible API Integration Options
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/60 max-w-[600px] mx-auto"
            >
              Our technology enables event-driven credit intelligence, advanced decisioning, and seamless data integration across your existing infrastructure.
            </motion.p>
          </motion.div>

          {/* Partner type cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-6"
          >
            {[
              {
                icon: Database,
                title: "Data Partners",
                subtitle: "Credit bureaus, alternative data providers, banking data aggregators",
                desc: "Integrate your data feeds with our LUMIQ AI™ engine. We normalize, score, and enrich signals from multiple sources to power smarter decisioning.",
                partners: ["Experian", "Equifax", "Plaid", "MX", "Yodlee"]
              },
              {
                icon: Code,
                title: "Platform Partners",
                subtitle: "Loan origination, core banking, CRM, and financial platforms",
                desc: "Embed credit intelligence directly into your workflows. Pre-built connectors and webhooks make integration fast and maintenance-free.",
                partners: ["Blend", "Finastra", "Salesforce", "nCino", "Temenos"]
              },
              {
                icon: Building2,
                title: "Infrastructure Partners",
                subtitle: "Cloud providers, identity verification, compliance platforms",
                desc: "Build on top of LumiqAI with our trusted infrastructure partnerships. SOC 2 ready, FCRA-aligned, and security-first from day one.",
                partners: ["AWS", "Alloy", "Persona", "Socure", "Trulioo"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-8 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all group"
              >
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                      <item.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="md:w-2/3 md:border-l border-white/10 md:pl-8">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Works with</p>
                  <div className="flex flex-wrap items-center gap-3">
                    {item.partners.map((partner, j) => (
                      <motion.span 
                        key={j}
                        whileHover={{ scale: 1.05 }}
                        className="text-white/70 hover:text-white font-semibold text-sm px-4 py-2 bg-white/5 hover:bg-amber-500/10 rounded-full transition-all cursor-default border border-white/5 hover:border-amber-500/20"
                      >
                        {partner}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-20 bg-[#2D2424]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20"
            >
              Benefits
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-3xl font-semibold tracking-[-0.02em] mb-4"
            >
              Benefits of LumiqAI Integration
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-lg text-white/60"
            >
              Enterprise-grade credit intelligence with developer-first design.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, title: "Quick Integration", desc: "RESTful APIs with SDKs for Python, Node, Go, and more. Most integrations go live in under 2 weeks.", color: "from-amber-400 to-orange-500" },
              { icon: Clock, title: "Real-Time Decisioning", desc: "Sub-second response times for credit checks, pre-qualification, and risk assessment.", color: "from-blue-400 to-cyan-500" },
              { icon: Shield, title: "Compliance-Ready", desc: "SOC 2 Type II ready, FCRA-aligned, and built with explainable AI for audit trails.", color: "from-emerald-400 to-green-500" },
              { icon: Link2, title: "Webhook Notifications", desc: "Event-driven architecture with webhooks for score changes, alerts, and lifecycle events.", color: "from-purple-400 to-violet-500" },
              { icon: Server, title: "Sandbox Environment", desc: "Full-featured sandbox with test data for development and QA before going live.", color: "from-pink-400 to-rose-500" },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Monitor API usage, success rates, and performance metrics in real-time.", color: "from-cyan-400 to-teal-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-amber-500/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* API PREVIEW */}
      <section className="py-20 bg-[#352A2A]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <motion.span 
                variants={fadeUp}
                className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20"
              >
                Developer Experience
              </motion.span>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6">
                Developer-First Design
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                LumiqAI is built with an open API architecture for seamless platform integration. Whether you're building a lending product, enriching your CRM, or embedding credit visibility into a mobile app—we've made it simple.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Comprehensive API documentation",
                  "Pre-built SDKs for major languages",
                  "Postman collections for rapid testing",
                  "Dedicated integration support"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button asChild className="bg-amber-500 text-black hover:bg-amber-400 rounded-md px-6 py-5 text-base font-medium shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-105 transition-all">
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <FileCode className="mr-2 h-4 w-4" />
                  View API Documentation
                </a>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-[#1A1207] rounded-xl p-6 font-mono text-sm border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-4 text-white/40">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                <span className="ml-2 text-xs">POST /v1/credit/assess</span>
              </div>
              <pre className="text-white/70 overflow-x-auto text-xs">
{`curl -X POST https://api.lumiqai.com/v1/credit/assess \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "business_id": "biz_8xK2mN",
    "signals": ["identity", "registry", "banking"],
    "products": ["loc", "card", "term_loan"]
  }'

// Response
{
  "assessment_id": "asmt_9yL3nP",
  "readiness_score": 78,
  "eligible_products": [
    { "type": "card", "limit": 25000, "confidence": 0.89 },
    { "type": "loc", "limit": 50000, "confidence": 0.72 }
  ],
  "improvement_actions": [
    "Add 1 reporting tradeline",
    "6 more months banking history"
  ]
}`}
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#2D2424]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[800px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full mb-4 uppercase tracking-wider border border-amber-500/20">
                FAQ
              </span>
              <h2 className="text-3xl font-semibold tracking-[-0.02em]">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "How long does integration typically take?", a: "Most partners go live within 1-2 weeks. We provide comprehensive documentation, sandbox environments, and dedicated integration support to accelerate your timeline." },
                  { q: "What data formats do you support?", a: "LumiqAI accepts JSON via REST API. We also support webhook callbacks for event-driven architectures. Batch processing available for high-volume partners." },
                  { q: "How does pricing work for technology partners?", a: "Pricing is based on API call volume with tiered discounts. Technology partners also receive preferential rates and revenue share opportunities for customer referrals." },
                  { q: "Is there a sandbox for testing?", a: "Yes, all technology partners get access to a full-featured sandbox environment with synthetic test data. No live bureau pulls during development." },
                  { q: "What compliance certifications do you have?", a: "LumiqAI is SOC 2 Type II ready (observation window active) and FCRA-aligned. Our infrastructure runs on AWS with HSM-backed encryption. Full audit trails for every decision." },
                  { q: "How will LumiqAI integrate with my existing platform?", a: "We provide RESTful APIs with pre-built SDKs, webhook integrations, and embeddable UI components. Our team works directly with your engineers to ensure seamless integration." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white/[0.03] border border-white/10 rounded-xl px-6 overflow-hidden hover:border-amber-500/20 transition-colors">
                    <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-sm hover:text-amber-400 transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 pb-5 text-sm">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-[#352A2A] border-t border-white/5">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[700px] mx-auto text-center"
          >
            <motion.div 
              variants={fadeUp}
              className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Code className="w-8 h-8 text-black" />
            </motion.div>
            
            <motion.h2 
              variants={fadeUp}
              className="text-3xl font-semibold mb-4"
            >
              Ready to Integrate?
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-white/60 mb-6"
            >
              We get it, your platform has specific requirements. Reach out to us today to learn more about how LumiqAI can integrate with your operations.
            </motion.p>
            
            <motion.p 
              variants={fadeUp}
              className="text-white/80 mb-8"
            >
              <span className="text-amber-400">partnerships@futeurcredx.com</span>
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <Button asChild className="bg-amber-500 text-black hover:bg-amber-400 rounded-md px-8 py-6 text-base font-medium shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-105 transition-all">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPartners;
