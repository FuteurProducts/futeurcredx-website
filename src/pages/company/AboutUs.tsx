import { motion, type Variants, type Easing, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  ArrowRight,
  ArrowUpRight,
  Shield, 
  Zap, 
  Target, 
  Eye,
  Database,
  Lock,
  Users,
  TrendingUp,
  Globe,
  Award,
  Building2,
  CheckCircle2,
  Layers,
  AlertTriangle,
  BarChart3,
  FileCheck,
  ArrowDown,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

// Keeper-style rotating words for hero
const rotatingWords = ["innovating.", "growing.", "striving.", "leading.", "building."];

// Rotating words for final CTA
const ctaRotatingWords = ["Innovate", "Empower", "Sustain", "Reconstruct"];

export default function AboutUs() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [ctaWordIndex, setCtaWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCtaWordIndex((prev) => (prev + 1) % ctaRotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#2D2424] text-white">
      {/* HERO - Keeper style with rotating text */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        {/* Decorative line pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-16 border border-white/15 rounded-full" />
          <div className="absolute inset-32 border border-white/10 rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 md:px-[8%] py-32 relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
            {/* Left: Main content */}
            <div className="max-w-[700px]">
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={stagger}
              >
                {/* Large display text */}
                <motion.div variants={fadeUp} className="mb-8">
                  <h1 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                    <span className="text-white">Keep</span>
                    <br />
                    <div className="h-[1.1em] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentWordIndex}
                          initial={{ y: 60, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -60, opacity: 0 }}
                          transition={{ duration: 0.5, ease: easeOut }}
                          className="block text-[#C9B896]"
                        >
                          {rotatingWords[currentWordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </h1>
                </motion.div>
                
                {/* Subtext */}
                <motion.p 
                  variants={fadeUp}
                  className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[540px] mb-10"
                >
                  FuteurCredX is the intelligence layer the modern economy depends on. We're redefining how credit is understood, measured, and operationalized in the 21st century.
                </motion.p>
                
                {/* CTA Button */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
                  <Link to="/contact-us">
                    <Button className="bg-[#C9B896] text-[#2D2424] hover:bg-[#D4C5A9] rounded-full px-8 py-6 text-base font-semibold">
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
                
                {/* KPIs below CTA */}
                <motion.div 
                  variants={fadeUp}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
                >
                  {[
                    { value: "$12M+", label: "R&D Investment" },
                    { value: "36", label: "Months Development" },
                    { value: "47", label: "Engineers & Scientists" },
                    { value: "8", label: "Patents Pending" }
                  ].map((stat, i) => (
                    <div key={i} className="md:border-l md:border-white/20 md:first:border-l-0 md:pl-6 md:first:pl-0">
                      <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white block mb-2">
                        {stat.value}
                      </span>
                      <span className="text-white/50 text-xs uppercase tracking-[0.15em] block">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right: Rotating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <Link to="/contact-us" className="relative group cursor-pointer">
                {/* Rotating text circle */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="heroCirclePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="text-[11px] fill-white/60 uppercase tracking-[0.3em]">
                    <textPath href="#heroCirclePath">
                      • CREDIT INTELLIGENCE • CREDIT INTELLIGENCE • CREDIT INTELLIGENCE 
                    </textPath>
                  </text>
                </motion.svg>
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#C9B896] rounded-full flex items-center justify-center group-hover:bg-[#D4C5A9] group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-8 h-8 text-[#2D2424]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT US - Two column layout with image placeholder */}
      <section className="py-24 bg-[#FAFBFC]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="/images/nyc-futeur.jpg" 
                  alt="New York City skyline at night" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Right: Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.span 
                variants={fadeUp}
                className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-6 block"
              >
                ABOUT FUTEURCREDX INC.
              </motion.span>
              
              <motion.h2 
                variants={fadeUp}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-8 leading-tight text-[#1A1515]"
              >
                Credit Intelligence for the Next Financial Era
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-6">
                FuteurCredX exists because the world's financial systems are expanding faster than the infrastructure that supports them. Global commerce, digital finance, and embedded credit are no longer emerging — they are reality.
              </motion.p>
              
              <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-6">
                Yet, the foundational systems that determine access to capital remain static, opaque, fragmented, and slow. We saw an opportunity — not to build another tool — but to redefine how credit is understood, measured, and operationalized.
              </motion.p>
              
              <motion.div 
                variants={fadeUp}
                className="border-l-4 border-[#C9B896] pl-6 mt-8"
              >
                <p className="text-xl text-[#1A1515] font-semibold">
                  FuteurCredX was built to eliminate these barriers.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - Numbered list style like Keeper services */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                The Problem
              </span>
            </motion.div>
            
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/60 max-w-[600px] mb-12"
              >
                Today's credit ecosystem is built on legacy architecture that fails the modern economy.
              </motion.p>

              <div className="space-y-0">
                {[
                  {
                    num: "01",
                    title: "Batch-Based Decisioning",
                    desc: "Instead of real-time intelligence, decisions happen in delayed batches that fail to capture true financial behavior."
                  },
                  {
                    num: "02",
                    title: "Disconnected Signals",
                    desc: "Credit signals remain siloed across institutions and platforms, creating incomplete pictures of creditworthiness."
                  },
                  {
                    num: "03",
                    title: "Static Scores",
                    desc: "Traditional scores are snapshots in time that fail to reflect real signals of readiness, momentum, or stability."
                  },
                  {
                    num: "04",
                    title: "High Compliance Risk",
                    desc: "Limited transparency in decisioning creates audit vulnerabilities and regulatory exposure."
                  },
                  {
                    num: "05",
                    title: "Fragmented Experiences",
                    desc: "SMEs and consumers alike face disjointed credit experiences that hinder financial participation."
                  },
                  {
                    num: "06",
                    title: "Access Barriers",
                    desc: "Obsolete systems gate true financial participation, constraining opportunity for millions."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group border-t border-white/10 py-6 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-[#C9B896] font-mono text-sm mt-1">{item.num}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9B896] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-[500px]">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#C9B896] group-hover:translate-x-1 transition-all mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION - Large quote style with background image */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/futeur-one.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#2D2424]/85" />
        </div>
        
        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[900px] mx-auto text-center"
          >
            <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium mb-8 block">
              Our Mission
            </span>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-12 font-light">
              "Access to reliable, transparent, and actionable credit intelligence is a fundamental pillar of a just financial system."
            </p>
            <div className="w-16 h-px bg-[#C9B896] mx-auto mb-12" />
            <p className="text-lg text-white/60 max-w-[700px] mx-auto leading-relaxed">
              To revolutionize how credit is measured, shared, and used — enabling financial institutions, fintech innovators, and communities to make responsible, real-time decisions with confidence.
            </p>
            <p className="text-[#C9B896] font-semibold text-xl mt-10">
              We exist not to score people — but to empower economies.
            </p>
          </motion.div>
        </div>
      </section>


      {/* WHAT WE BUILD - Two column cards */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                What We Build
              </span>
            </motion.div>
            
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/60 max-w-[700px] mb-12"
              >
                Our platform is the convergence of Fortune 500 operational precision, programmable financial rails, modern intelligence networks, and global regulatory compliance.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* FuteurCredX App */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#2D2424] border border-white/10 rounded-2xl p-8 hover:border-[#C9B896]/30 transition-colors group flex flex-col"
                >
                  <span className="inline-block px-3 py-1 bg-[#C9B896]/10 text-[#C9B896] rounded-full text-xs font-medium mb-6">
                    Consumer Product
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#C9B896] transition-colors">FuteurCredX App</h3>
                  <p className="text-white/50 leading-relaxed mb-6 text-sm">
                    A consumer-facing experience that provides real-time visibility into credit readiness, financial posture, and actionable paths forward.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Real-time credit visibility",
                      "Financial posture analysis",
                      "Actionable qualification pathways",
                      "Personal & business credit unified"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9B896]" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <Link
                      to="/futeurcredx-app"
                      className="inline-flex items-center gap-2 text-[#C9B896] font-medium text-sm hover:gap-3 transition-all"
                    >
                      Explore the App
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>

                {/* LumiqAI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-[#C9B896]/10 to-[#2D2424] border border-[#C9B896]/20 rounded-2xl p-8 group flex flex-col"
                >
                  <span className="inline-block px-3 py-1 bg-[#C9B896]/20 text-[#C9B896] rounded-full text-xs font-medium mb-6">
                    Enterprise Infrastructure
                  </span>
                  <h3 className="text-2xl font-semibold mb-4">LumiqAI™</h3>
                  <p className="text-white/50 leading-relaxed mb-2 text-sm">
                    A programmable intelligence layer that powers banks, regulated institutions, fintech platforms, and SMB ecosystems.
                  </p>
                  <p className="text-white/40 italic text-xs mb-6">
                    LumiqAI is not a feature — it is infrastructure.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Banks & regulated institutions",
                      "Fintech embedded credit products",
                      "Marketplace risk evaluation",
                      "Compliant SMB ecosystems"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C9B896]" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <Link
                      to="/lumiq-ai"
                      className="inline-flex items-center gap-2 text-[#C9B896] font-medium text-sm hover:gap-3 transition-all"
                    >
                      Explore LumiqAI
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE VISUAL SECTION */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/futeur-electric.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2D2424]/80" />
        </div>
        
        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Enterprise Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/3] bg-gradient-to-br from-[#3A2F2F] to-[#1A1515] rounded-xl border border-white/10 p-4 overflow-hidden group hover:border-[#C9B896]/40 transition-all hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <span className="text-[#C9B896] text-[10px] uppercase tracking-wider font-medium mb-2">Enterprise Infrastructure</span>
                
                {/* Mini server nodes */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          opacity: [0.4, 1, 0.4],
                          scale: [0.95, 1, 0.95]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.3 
                        }}
                        className="w-6 h-8 bg-[#C9B896]/20 rounded border border-[#C9B896]/30 flex flex-col items-center justify-center gap-0.5"
                      >
                        <div className="w-3 h-0.5 bg-[#C9B896]/60 rounded-full" />
                        <div className="w-3 h-0.5 bg-[#C9B896]/40 rounded-full" />
                        <div className="w-3 h-0.5 bg-[#C9B896]/60 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    <motion.line 
                      x1="35%" y1="50%" x2="50%" y2="50%" 
                      stroke="#C9B896" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <motion.line 
                      x1="50%" y1="50%" x2="65%" y2="50%" 
                      stroke="#C9B896" strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
                
                {/* KPI */}
                <div className="mt-auto pt-2 border-t border-white/10">
                  <motion.span 
                    className="text-xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    99.99%
                  </motion.span>
                  <span className="text-[10px] text-white/50 block">Uptime SLA</span>
                </div>
              </div>
            </motion.div>
            
            {/* Real-Time Decisions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-gradient-to-br from-[#3A2F2F] to-[#1A1515] rounded-xl border border-white/10 p-4 overflow-hidden group hover:border-[#C9B896]/40 transition-all hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <span className="text-[#C9B896] text-[10px] uppercase tracking-wider font-medium mb-2">Real-Time Decisions</span>
                
                {/* Live pulse visualization */}
                <div className="flex-1 relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-12 h-12 rounded-full border-2 border-[#C9B896]/40"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute w-8 h-8 rounded-full bg-[#C9B896]/20"
                  />
                  <motion.div
                    animate={{ scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 rounded-full bg-[#C9B896]"
                  />
                </div>
                
                {/* Counter KPI */}
                <div className="mt-auto pt-2 border-t border-white/10">
                  <motion.span 
                    className="text-xl font-bold text-white"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    &lt;50ms
                  </motion.span>
                  <span className="text-[10px] text-white/50 block">Avg Response</span>
                </div>
              </div>
            </motion.div>
            
            {/* Compliant AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="aspect-square bg-gradient-to-br from-[#3A2F2F] to-[#1A1515] rounded-xl border border-white/10 p-4 overflow-hidden group hover:border-[#C9B896]/40 transition-all hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <span className="text-[#C9B896] text-[10px] uppercase tracking-wider font-medium mb-2">Compliant AI</span>
                
                {/* Shield with checkmarks */}
                <div className="flex-1 relative flex items-center justify-center">
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                  >
                    <Shield className="w-10 h-10 text-[#C9B896]/60" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#C9B896]" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Floating compliance badges */}
                  {['SOC2', 'GDPR'].map((badge, i) => (
                    <motion.span
                      key={badge}
                      animate={{ 
                        y: [0, -3, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                      className={`absolute ${i === 0 ? 'top-2 right-2' : 'bottom-2 left-2'} text-[8px] px-1.5 py-0.5 bg-[#C9B896]/20 text-[#C9B896] rounded font-medium`}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
                
                {/* KPI */}
                <div className="mt-auto pt-2 border-t border-white/10">
                  <motion.span className="text-xl font-bold text-white">100%</motion.span>
                  <span className="text-[10px] text-white/50 block">Audit Trail</span>
                </div>
              </div>
            </motion.div>
            
            {/* Financial Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="aspect-[4/3] bg-gradient-to-br from-[#3A2F2F] to-[#1A1515] rounded-xl border border-white/10 p-4 overflow-hidden group hover:border-[#C9B896]/40 transition-all hover:scale-[1.02]"
            >
              <div className="h-full flex flex-col">
                <span className="text-[#C9B896] text-[10px] uppercase tracking-wider font-medium mb-2">Financial Access</span>
                
                {/* Bar chart visualization */}
                <div className="flex-1 flex items-end justify-center gap-1.5 pb-2">
                  {[40, 60, 80, 95, 75, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="w-3 bg-gradient-to-t from-[#C9B896]/40 to-[#C9B896] rounded-t"
                      style={{ minHeight: 4 }}
                    />
                  ))}
                </div>
                
                {/* Trend indicator */}
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-3 h-3 text-[#C9B896]" />
                  <span className="text-[10px] text-[#C9B896]">+34% YoY</span>
                </div>
                
                {/* KPI */}
                <div className="mt-auto pt-2 border-t border-white/10">
                  <motion.span className="text-xl font-bold text-white">2.4M+</motion.span>
                  <span className="text-[10px] text-white/50 block">SMBs Enabled</span>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* HOW WE'RE DIFFERENT */}
      <section className="py-24 bg-[#1A1515]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                How We're Different
              </span>
            </motion.div>
            
            <div className="space-y-8 max-w-[700px]">
              {[
                {
                  icon: Eye,
                  title: "We Think Beyond Scores",
                  desc: "Traditional credit scores are snapshots in time. They fail to reflect real signals of readiness, momentum, or stability. Our intelligence architecture captures ongoing financial behavior, giving users and institutions a dynamic view of credit reality."
                },
                {
                  icon: Shield,
                  title: "We Built for Real Governance",
                  desc: "Compliance isn't an afterthought — it's the foundation. Our systems produce transparent, traceable, and explainable outputs designed to satisfy the most rigorous audit and regulatory environments."
                },
                {
                  icon: Users,
                  title: "We Serve All Audiences, Not Just One",
                  desc: "From everyday consumers seeking clarity to regulated financial institutions needing secure decision intelligence, our platform scales without compromise."
                },
                {
                  icon: Layers,
                  title: "We Don't Replace Systems. We Elevate Them.",
                  desc: "Banks keep their core ledgers. Fintechs keep their product flows. What we provide is a trusted intelligence layer that augments every decision with context, rigor, and compliance."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-[#C9B896]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9B896]/20 transition-colors">
                      <item.icon className="w-6 h-6 text-[#C9B896]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C9B896] transition-colors">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT - Grid cards */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                Our Impact
              </span>
            </motion.div>
            
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/60 mb-12"
              >
                FuteurCredX is redefining how credit intelligence powers the global economy.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                
                {/* Risk Underwriting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Mini gauge visualization */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <svg className="w-full h-full -rotate-90">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="#3A2F2F" strokeWidth="4" />
                        <motion.circle 
                          cx="32" cy="32" r="28" 
                          fill="none" 
                          stroke="#C9B896" 
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray="176"
                          initial={{ strokeDashoffset: 176 }}
                          whileInView={{ strokeDashoffset: 35 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#C9B896]" />
                      </div>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Risk Underwriting</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For regulated balance sheets</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <span className="text-lg font-bold text-white">$4.2B</span>
                      <span className="text-[10px] text-white/40 block">Assets Evaluated</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Credit Access */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Stacked bars visualization */}
                    <div className="flex items-end justify-center gap-1 h-16 mb-4">
                      {[30, 50, 70, 85, 60, 90, 75].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.08 }}
                          className="w-2 bg-gradient-to-t from-[#C9B896]/30 to-[#C9B896] rounded-t"
                        />
                      ))}
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Credit Access</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For small businesses nationwide</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#C9B896]" />
                        <span className="text-lg font-bold text-white">847K</span>
                      </div>
                      <span className="text-[10px] text-white/40 block">SMBs Approved</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Product Experiences */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Lightning bolt with pulse */}
                    <div className="relative flex items-center justify-center h-16 mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-12 h-12 rounded-full bg-[#C9B896]/20"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Zap className="w-8 h-8 text-[#C9B896]" />
                      </motion.div>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Product Experiences</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For fintech innovators</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <span className="text-lg font-bold text-white">127</span>
                      <span className="text-[10px] text-white/40 block">API Integrations</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Signal Transparency */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Eye with scanning lines */}
                    <div className="relative flex items-center justify-center h-16 mb-4">
                      <Eye className="w-8 h-8 text-[#C9B896]" />
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-10 h-0.5 bg-gradient-to-r from-transparent via-[#C9B896]/60 to-transparent"
                      />
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Signal Transparency</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For modern portfolios</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <span className="text-lg font-bold text-white">340+</span>
                      <span className="text-[10px] text-white/40 block">Data Signals</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Decision Legitimacy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Checkmark document animation */}
                    <div className="relative flex items-center justify-center h-16 mb-4">
                      <FileCheck className="w-8 h-8 text-[#C9B896]/60" />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                        className="absolute top-1 right-5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C9B896]" />
                      </motion.div>
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Decision Legitimacy</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For compliance officers</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <span className="text-lg font-bold text-white">100%</span>
                      <span className="text-[10px] text-white/40 block">Explainable</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Economic Participation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#2D2424] border border-white/10 rounded-xl p-5 hover:border-[#C9B896]/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex flex-col h-full">
                    {/* Globe with pulsing dots */}
                    <div className="relative flex items-center justify-center h-16 mb-4">
                      <Globe className="w-8 h-8 text-[#C9B896]/60" />
                      {[
                        { top: '20%', left: '25%', delay: 0 },
                        { top: '50%', left: '70%', delay: 0.5 },
                        { top: '70%', left: '35%', delay: 1 },
                      ].map((pos, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
                          className="absolute w-2 h-2 rounded-full bg-[#C9B896]"
                          style={{ top: pos.top, left: pos.left }}
                        />
                      ))}
                    </div>
                    <h3 className="text-base font-semibold mb-1 text-center group-hover:text-[#C9B896] transition-colors">Economic Participation</h3>
                    <p className="text-xs text-white/50 text-center mb-3">For underserved markets</p>
                    <div className="mt-auto pt-3 border-t border-white/10 text-center">
                      <span className="text-lg font-bold text-white">12M+</span>
                      <span className="text-[10px] text-white/40 block">Users Empowered</span>
                    </div>
                  </div>
                </motion.div>
                
              </div>

              {/* Impact statement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#C9B896]/5 via-[#2D2424] to-[#C9B896]/5 border border-[#C9B896]/10 rounded-2xl p-8"
              >
                <p className="text-center text-white/70 mb-6">
                  When credit intelligence is accessible, explainable, and responsibly deployed:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "More small businesses qualify for capital",
                    "More banks lend with confidence",
                    "More fintech platforms scale responsibly",
                    "More consumers take financial action"
                  ].map((outcome, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#241E1E] rounded-lg p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C9B896] flex-shrink-0" />
                      <span className="text-sm text-white/70">{outcome}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-[#C9B896] font-semibold text-lg mt-8">
                  That's not transformation. That's infrastructure.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY - Large numbered cards */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/futeur-y.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2D2424]/85" />
        </div>
        
        <div className="container mx-auto px-6 md:px-[8%] relative z-10">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                Our Philosophy
              </span>
            </motion.div>
            
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/60 max-w-[600px] mb-12"
              >
                At the intersection of technology, finance, and governance, FuteurCredX anchors its work in four principles.
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { number: "01", title: "Clarity", desc: "We reduce complexity without losing fidelity." },
                  { number: "02", title: "Accountability", desc: "Every output must be explainable, justifiable, and auditable." },
                  { number: "03", title: "Continuity", desc: "Financial insight is living — not static." },
                  { number: "04", title: "Accessibility", desc: "True financial participation can't be gated by obsolete systems." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#241E1E] border border-white/5 rounded-xl p-6 hover:border-[#C9B896]/30 transition-colors"
                  >
                    <span className="text-4xl font-bold text-[#C9B896]/20">{item.number}</span>
                    <h3 className="text-lg font-semibold mt-3 mb-2">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-white/40 mt-10 italic text-center"
              >
                This philosophy informs every line of code, every data model, and every interface.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE ARE GOING - Interactive Roadmap */}
      <section className="py-24 bg-[#241E1E]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="grid lg:grid-cols-[200px,1fr] gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <span className="text-xs text-[#C9B896] uppercase tracking-[0.2em] font-medium">
                Where We Are Going
              </span>
            </motion.div>
            
            <div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/60 max-w-[600px] mb-16"
              >
                Our strategic vision unfolds across a deliberate, phased roadmap — each milestone building toward the future of credit intelligence.
              </motion.p>

              {/* Interactive Roadmap Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9B896] via-[#C9B896]/50 to-transparent hidden md:block" />
                
                <div className="space-y-0">
                  {[
                    {
                      phase: "Phase 01",
                      title: "Foundation",
                      status: "Complete",
                      year: "2022-2024",
                      items: ["Core infrastructure deployment", "Multi-bureau data integration", "Compliance framework established"],
                      color: "bg-[#C9B896]"
                    },
                    {
                      phase: "Phase 02",
                      title: "Intelligence Layer",
                      status: "Complete",
                      year: "2025",
                      items: ["Real-time signal processing", "AI-powered decisioning engine", "Enterprise API suite"],
                      color: "bg-[#C9B896]"
                    },
                    {
                      phase: "Phase 03",
                      title: "Scale",
                      status: "In Progress",
                      year: "2026",
                      items: ["Global market expansion", "Cross-border credit networks", "Institutional partnerships at scale"],
                      color: "bg-[#C9B896]"
                    },
                    {
                      phase: "Phase 04",
                      title: "Ecosystem",
                      status: "Upcoming",
                      year: "2026+",
                      items: ["Open credit intelligence standard", "Embedded finance infrastructure", "Universal financial access"],
                      color: "bg-white/30"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-0 md:pl-16 pb-12 group"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-4 top-1 w-4 h-4 rounded-full ${item.color} hidden md:flex items-center justify-center`}>
                        <div className="w-2 h-2 rounded-full bg-[#241E1E]" />
                      </div>
                      
                      {/* Content card */}
                      <div className="bg-[#2D2424] border border-white/5 rounded-2xl p-8 hover:border-[#C9B896]/30 transition-all duration-300 group-hover:translate-x-2">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-[#C9B896] font-mono text-sm">{item.phase}</span>
                          <span className="px-3 py-1 rounded-full bg-[#C9B896]/10 text-[#C9B896] text-xs font-medium">
                            {item.status}
                          </span>
                          <span className="text-white/30 text-sm ml-auto">{item.year}</span>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#C9B896] transition-colors">
                          {item.title}
                        </h3>
                        
                        <div className="space-y-2">
                          {item.items.map((point, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C9B896]/50" />
                              <span className="text-white/50 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vision Statement - Interactive */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 pt-16 border-t border-white/10 relative overflow-hidden"
              >
                {/* Background glow effect */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-[#C9B896]/10 via-transparent to-transparent blur-3xl" />
                </motion.div>

                <div className="relative z-10">
                  {/* Animated headline */}
                  <div className="mb-10">
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-xl md:text-2xl text-white/40 mb-3 font-light tracking-wide"
                    >
                      FuteurCredX is not chasing that future —
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
                    >
                      we are{" "}
                      <span className="relative inline-block">
                        <span className="relative z-10 text-[#C9B896]">building</span>
                        <motion.span 
                          className="absolute bottom-1 left-0 right-0 h-3 bg-[#C9B896]/20 -z-0"
                          initial={{ scaleX: 0, originX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </span>
                      {" "}it.
                    </motion.p>
                  </div>

                  {/* Interactive principle cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { tag: "Real-time", icon: "⚡", description: "Instant signal processing" },
                      { tag: "Signal-agnostic", icon: "🔗", description: "Any data, any source" },
                      { tag: "Compliance-first", icon: "🛡️", description: "Built-in regulatory adherence" },
                      { tag: "Economically inclusive", icon: "🌍", description: "Credit for everyone" },
                      { tag: "Infrastructure dominated", icon: "🏗️", description: "Enterprise-grade foundation" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                        whileHover={{ 
                          y: -8, 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 cursor-pointer overflow-hidden"
                      >
                        {/* Hover glow */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-[#C9B896]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <motion.span 
                            className="text-2xl mb-3 block"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.icon}
                          </motion.span>
                          <p className="text-white font-medium text-sm mb-1 group-hover:text-[#C9B896] transition-colors">
                            {item.tag}
                          </p>
                          <p className="text-white/40 text-xs group-hover:text-white/60 transition-colors">
                            {item.description}
                          </p>
                        </div>

                        {/* Corner accent */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#C9B896]/10 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Keeper Style Exact */}
      <section className="py-24 md:py-32 lg:py-40 bg-[#2D2424]">
        <div className="container mx-auto px-6 md:px-[8%]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* Large Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-[-0.03em] text-white leading-[1.05]">
                Let's{" "}
                <span className="inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ctaWordIndex}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -60, opacity: 0 }}
                      transition={{ duration: 0.5, ease: easeOut }}
                      className="inline-block text-white/50"
                    >
                      {ctaRotatingWords[ctaWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                <span className="text-white">together</span>
              </h2>
            </motion.div>

            {/* Spinning Contact Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link to="/enterprise" className="block group">
                <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                  {/* Spinning Text Circle */}
                  <svg 
                    className="absolute inset-0 w-full h-full animate-spin-slow"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path 
                        id="circlePath" 
                        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                      />
                    </defs>
                    <text className="fill-[#2D2424] text-[14px] font-medium tracking-[0.15em] uppercase">
                      <textPath href="#circlePath">
                        GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • 
                      </textPath>
                    </text>
                  </svg>
                  
                  {/* Center Circle with Arrow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#C9B896] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <ArrowUpRight className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#2D2424] group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
