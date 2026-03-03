import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Check, Zap, Shield, BarChart3, Clock, TrendingUp, Target, AlertTriangle, ChevronDown, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most pilots go live within 4 weeks. Our team handles the heavy lifting—API integration, data mapping, and testing—so your developers can focus on their core work."
  },
  {
    question: "What data do you need access to?",
    answer: "We integrate with your existing loan origination system and pull business credit data from D&B, Experian Business, and Equifax Commercial. All data is processed in compliance with FCRA and GLBA regulations."
  },
  {
    question: "How does pricing work?",
    answer: "We offer usage-based pricing with no upfront costs during the pilot. After the 90-day pilot, pricing scales with your portfolio size and API call volume."
  },
  {
    question: "Is LumiqAI compliant with banking regulations?",
    answer: "Yes. We're SOC 2 Type II ready (observation window active), FCRA-aligned, and built with GLBA compliance in mind. Our explainable AI provides full audit trails for every decision."
  },
  {
    question: "Can we customize the risk models?",
    answer: "Absolutely. Our models are configurable to your risk appetite, industry focus, and portfolio characteristics. You maintain full control over approval thresholds and decision logic."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Clients typically see 15-25% improvement in approval rates with no increase in default risk, plus 40% faster decision times. We'll project your specific ROI during the demo."
  }
];
// Product features with large screenshot areas - ModernFi style
const productFeatures = [
  {
    id: 1,
    tag: "Underwriting",
    title: "AI-powered decisioning with full explainability",
    description: "Real-time risk assessment and automated approval workflows. See application queues, confidence scores, and AI recommendations at a glance.",
    image: "/screenshots/risk-dashboard.jpg",
    bullets: [
      "FCRA-compliant audit trails",
      "Override tracking & model confidence",
      "Real-time application queue management"
    ]
  },
  {
    id: 2,
    tag: "Risk Intelligence",
    title: "Portfolio risk monitoring and early warning system",
    description: "Monitor portfolio health with comprehensive risk scores, stress testing, and concentration analysis. Get ahead of defaults before they happen.",
    image: "/screenshots/engagement-dashboard.jpg",
    bullets: [
      "Portfolio risk scoring & VaR confidence",
      "Active risk triggers monitoring",
      "Default prediction & early warning"
    ]
  },
  {
    id: 3,
    tag: "Analytics Dashboard",
    title: "Real-time API performance and conversion metrics",
    description: "Track every decision, measure conversion lift, and understand revenue impact. Built for scale with sub-200ms response times.",
    image: "/screenshots/conversion-dashboard.jpg",
    bullets: [
      "Live scoring counter & latency tracking",
      "Conversion lift analytics with/without AI",
      "Revenue impact visualization"
    ]
  }
];

const pilotBenefits = [
  { icon: Clock, label: "Pilot live in 4 weeks", description: "From contract to production-ready" },
  { icon: BarChart3, label: "ROI proven in 90 days", description: "Measure real impact on your portfolio" },
  { icon: Shield, label: "Full decision control", description: "You own every approval and decline" }
];

const trustedLogos = [
  { name: "Chase", src: "/logos/banks/chase.png" },
  { name: "Wells Fargo", src: "/logos/banks/wellsfargo.png" },
  { name: "Capital One", src: "/logos/banks/capitalone.png" }
];

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      business_email: formData.email,
      business_name: formData.company,
      message: `Demo Request\nJob Title: ${formData.jobTitle}\nPhone: ${formData.phone || 'Not provided'}`,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_zo3597t',
        'template_xmda9in',
        templateParams,
        'ROloA61OoR2iNley2'
      );
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
      });
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at sales@futeurcredx.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* Hero Section - ModernFi Style with large dashboard screenshot */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        {/* Decorative circles - subtle */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-24 border border-white/15 rounded-full" />
          <div className="absolute inset-48 border border-white/10 rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 md:px-[8%] py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-6 block">
                90-DAY PILOT PROGRAM
              </span>

              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] mb-8">
                Credit Intelligence{" "}
                <span className="text-[#C9B896]">
                  on Demand
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
                Use LumiqAI's Credit Intelligence Platform to source better decisions, reduce risk, and grow your portfolio. Real-time scoring with full explainability.
              </p>

              <Button 
                onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#C9B896] text-[#2D2424] hover:bg-[#D4C5A9] rounded-full px-8 py-6 text-base font-semibold group"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Right - Large Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative connecting lines - ModernFi style */}
              <svg className="absolute -left-24 top-1/2 -translate-y-1/2 w-32 h-64 hidden lg:block" viewBox="0 0 128 256">
                <path 
                  d="M 0 128 Q 40 128 64 80 T 128 40" 
                  fill="none" 
                  stroke="#C9B896" 
                  strokeWidth="1" 
                  strokeDasharray="4 4" 
                  opacity="0.3"
                />
                <path 
                  d="M 0 128 Q 40 128 64 176 T 128 216" 
                  fill="none" 
                  stroke="#C9B896" 
                  strokeWidth="1" 
                  strokeDasharray="4 4" 
                  opacity="0.3"
                />
                <circle cx="0" cy="128" r="4" fill="#C9B896" opacity="0.5" />
                <circle cx="128" cy="40" r="4" fill="#C9B896" opacity="0.5" />
                <circle cx="128" cy="216" r="4" fill="#C9B896" opacity="0.5" />
              </svg>
              
              {/* Dashboard screenshot with subtle styling */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#C9B896]/10 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-white/5 rounded-2xl p-3 backdrop-blur-sm border border-white/10 shadow-2xl">
                  <img
                    src="/screenshots/risk-dashboard.jpg"
                    alt="LumiqAI Underwriting Dashboard"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilot Benefits Cards */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-4 block">
              90-DAY PILOT PROGRAM
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-white">
              What to Expect
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {pilotBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative flex-1 min-w-[280px] max-w-[340px]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#C9B896]/40 to-[#C9B896]/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-[#3A2F2F] to-[#2D2424] rounded-2xl p-8 border border-white/10 group-hover:border-[#C9B896]/30 transition-all duration-300 overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C9B896]/10 to-transparent rounded-bl-full" />
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9B896]/20 to-[#C9B896]/5 flex items-center justify-center group-hover:from-[#C9B896]/30 group-hover:to-[#C9B896]/10 transition-all duration-300">
                      <benefit.icon className="w-8 h-8 text-[#C9B896] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#C9B896] transition-colors duration-300">
                    {benefit.label}
                  </h3>
                  <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#C9B896]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections with Large Screenshots - ModernFi style */}
      {productFeatures.map((feature, index) => (
        <section 
          key={feature.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-[#FAFBFC]' : 'bg-white'}`}
        >
          <div className="container mx-auto px-6 md:px-[8%]">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <span className="inline-block px-3 py-1 bg-[#2D2424]/10 text-[#2D2424] rounded-full text-xs font-medium uppercase tracking-wider mb-6">
                  {feature.tag}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] mb-6 leading-tight text-[#1A1515]">
                  {feature.title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#C9B896]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#2D2424]" />
                      </div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Large Screenshot */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#2D2424]/5 to-transparent rounded-3xl" />
                  
                  {/* Screenshot container */}
                  <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  
                  {/* Decorative dots - ModernFi style */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {[0, 1, 2, 3, 4].map(row => (
                        [0, 1, 2, 3, 4].map(col => (
                          <circle
                            key={`${row}-${col}`}
                            cx={col * 20 + 10}
                            cy={row * 20 + 10}
                            r="2"
                            fill="#C9B896"
                          />
                        ))
                      ))}
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Demo Form Section */}
      <section id="demo-form" className="py-24 bg-[#2D2424]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-6 block">
                GET STARTED
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-8 leading-tight">
                Start Growing with LumiqAI Today
              </h2>
              
              <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                One of our solutions experts will schedule a private demonstration tailored specifically to your environment, risk appetite, and compliance requirements.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, text: "Custom demo tailored to your use case" },
                  { icon: Shield, text: "SOC 2 Type II ready & GLBA compliant" },
                  { icon: TrendingUp, text: "See projected ROI for your portfolio" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9B896]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#C9B896]" />
                    </div>
                    <span className="text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-[#3A2F2F] rounded-2xl p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">First Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Last Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Work Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Company *</label>
                    <Input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Job Title *</label>
                    <Input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/30 focus:border-[#C9B896] focus:ring-[#C9B896]"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-300 px-4 py-4 rounded-xl flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Demo request received!</p>
                        <p className="text-sm text-green-300/70">A solutions expert will be in touch within 1-2 business days.</p>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C9B896] text-[#2D2424] hover:bg-[#D4C5A9] py-6 rounded-xl font-semibold text-base disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  )}

                  <p className="text-xs text-white/40 text-center pt-2">
                    Someone will be in touch within 1-2 business days.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-6 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-[#3A2F2F] border border-white/10 rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#C9B896] hover:no-underline py-5 text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
