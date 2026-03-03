import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileCheck, CheckCircle2, Fingerprint, ShieldCheck, Scan, Database, Key } from "lucide-react";
import { useState } from "react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "SOC 2 compliant infrastructure with enterprise-grade encryption at rest and in transit.",
    size: "normal",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Every decision pathway is transparent, logged, and defensible for audit scrutiny.",
    size: "normal",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Lock,
    title: "Zero Trust Architecture",
    description: "Granular permissions and role-based access controls protect sensitive data.",
    size: "normal",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: FileCheck,
    title: "FCRA Aligned",
    description: "Built from the ground up for regulated environments with compliance-native design.",
    size: "normal",
    color: "from-amber-500 to-orange-600",
  },
];

const certifications = [
  { label: "SOC 2 Type II Ready", icon: ShieldCheck },
  { label: "FCRA Compliant", icon: FileCheck },
  { label: "GDPR Ready", icon: Database },
  { label: "ISO 27001 Roadmap", icon: Key },
];

// Animated security visualization component
function SecurityAnimation() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto h-[320px] flex items-center justify-center">
      {/* Decorative circles - outer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] border border-dashed border-white/10 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-50px] border border-dashed border-white/10 rounded-full pointer-events-none"
      />
      
      {/* Orbiting icons container - positioned outside the main card */}
      <div className="absolute inset-[-30px] pointer-events-none">
        {/* Top icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-gray-800/90 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Fingerprint className="w-5 h-5 text-violet-400" />
          </motion.div>
        </motion.div>
        
        {/* Bottom icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-gray-800/90 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Scan className="w-5 h-5 text-teal-400" />
          </motion.div>
        </motion.div>
        
        {/* Left icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-gray-800/90 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Key className="w-5 h-5 text-amber-400" />
          </motion.div>
        </motion.div>
        
        {/* Right icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.95, duration: 0.4 }}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={{ x: [3, -3, 3] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 bg-gray-800/90 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Database className="w-5 h-5 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Central shield */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-teal-500/20 rounded-full blur-xl"
        />
        
        {/* Main shield container */}
        <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden">
          {/* Scanning line animation */}
          <motion.div
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60"
          />
          
          {/* Center icon */}
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-violet-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Status text */}
            <div className="mt-6 text-center">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 justify-center mb-2"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-emerald-400 text-sm font-medium">Protected</span>
              </motion.div>
              <p className="text-white/60 text-xs">256-bit encryption active</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Interactive tile component
function FeatureTile({ feature, index }: { feature: typeof trustFeatures[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.15 : 0, 
          scale: isHovered ? 1.2 : 0.8 
        }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} blur-2xl`}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with animated ring */}
        <div className="relative w-14 h-14 mb-5">
          <motion.div
            animate={{ 
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 blur-lg`}
          />
          <div className={`relative w-full h-full bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <feature.icon className="w-7 h-7 text-white" />
          </div>
        </div>
        
        {/* Title with hover arrow */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-bold text-white">
            {feature.title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </motion.div>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
        
        {/* Bottom indicator line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.color} origin-left`}
        />
      </div>
    </motion.div>
  );
}

export default function TrustGovernance() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#2D2424] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9B896]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9B896]/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] opacity-10">
        <div className="absolute inset-0 border border-white/20 rounded-full" />
        <div className="absolute inset-12 border border-white/15 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Two Column Layout: Content Left, Animation Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Header Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#C9B896]/20 text-[#C9B896] rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm border border-[#C9B896]/30">
              <Shield className="w-4 h-4" />
              Security & Compliance
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Built for Regulated<br />Environments
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Auditability, transparency, and governance are designed in — not bolted on.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "256-bit", label: "Encryption" },
                { value: "99.99%", label: "Uptime SLA" },
                { value: "<50ms", label: "Auth Latency" },
                { value: "24/7", label: "Monitoring" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right: Security Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <SecurityAnimation />
          </motion.div>
        </div>

        {/* Trust Features Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustFeatures.map((feature, index) => (
            <FeatureTile key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Certifications Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <cert.icon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-medium">{cert.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-semibold text-white">
            Trust is not a feature.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
              It is the foundation.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
