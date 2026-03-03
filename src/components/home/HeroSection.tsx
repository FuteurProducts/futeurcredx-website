import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Sparkles, Zap, Shield, CheckCircle, Activity, Building, FileCheck, Lock, Cpu } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const floatingTiles = [
  { label: "SMB Readiness Signal", chip: "New", icon: Sparkles },
  { label: "Pre-Qualification Engine", chip: "Real-time", icon: Zap },
  { label: "Decision Trace + Audit", chip: "Compliant", icon: Shield },
  { label: "Portfolio Monitoring", chip: "Continuous", icon: Activity },
  { label: "Consumer Visibility Layer", chip: "App", icon: CheckCircle },
];

const credibilityCards = [
  {
    label: "Bank-grade governance",
    icon: Building,
    kpi: "SOC 2",
    kpiLabel: "Ready"
  },
  { 
    label: "API-first integration", 
    icon: Cpu,
    kpi: "<200ms",
    kpiLabel: "Response"
  },
  { 
    label: "Explainable outputs", 
    icon: FileCheck,
    kpi: "100%",
    kpiLabel: "Traceable"
  },
  { 
    label: "Built for regulated environments", 
    icon: Lock,
    kpi: "GLBA",
    kpiLabel: "Compliant"
  },
];

function CountUpNumber({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    
    // Parse the value - handle numbers and special cases
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseInt(numericMatch[1]);
    const prefix = value.slice(0, value.indexOf(numericMatch[1]));
    const postfix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 30;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(targetNum * easeOut);
        setDisplayValue(`${prefix}${currentValue}${postfix}`);
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayValue(value);
        }
      }, stepDuration);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-px">
      {/* Brown theme background - solid color to match header exactly */}
      <div className="absolute inset-0 bg-[#2D2424]">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border border-white/20 rounded-full" />
          <div className="absolute inset-16 border border-white/15 rounded-full" />
          <div className="absolute inset-32 border border-white/10 rounded-full" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Credit Intelligence for the{" "}
              <span className="text-white/90">Modern Economy</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Connect to real-time credit insights on the FuteurCredX platform
              to power responsible financial decisions across consumers,
              institutions, and embedded finance ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/lumiq-ai">
                <Button className="bg-[#C9B896] text-[#2D2424] hover:bg-[#D4C5A9] btn-pill text-base shadow-lg font-semibold">
                  Explore LumiqAI
                </Button>
              </Link>
              <Link to="/futeurcredx-app">
                <Button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-[#2D2424] btn-pill text-base font-semibold transition-all duration-200">
                  Explore FuteurCredX
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Floating Tiles Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative h-[500px]">
              {floatingTiles.map((tile, index) => (
                <motion.div
                  key={tile.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="absolute bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 card-hover"
                  style={{
                    top: `${index * 85}px`,
                    left: index % 2 === 0 ? "0" : "40px",
                    right: index % 2 === 0 ? "40px" : "0",
                  }}
                >
                  <div className="p-2 bg-gradient-to-br from-[#C9B896] to-[#A89B7A] rounded-lg">
                    <tile.icon className="w-5 h-5 text-[#2D2424]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {tile.label}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-[#C9B896]/20 text-[#2D2424] text-xs font-medium rounded-full">
                    {tile.chip}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credibility Cards - Horizontal at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {credibilityCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 cursor-pointer group transition-all duration-300 hover:bg-white/15 hover:border-[#C9B896]/50"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-[#C9B896]/20 rounded-lg group-hover:bg-[#C9B896]/30 transition-colors">
                  <card.icon className="w-4 h-4 text-[#C9B896]" />
                </div>
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-white">
                  <CountUpNumber value={card.kpi} delay={1000 + index * 150} />
                </span>
                <span className="text-xs text-white/60 ml-1">{card.kpiLabel}</span>
              </div>
              <p className="text-sm text-white/80 font-medium leading-tight">
                {card.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
