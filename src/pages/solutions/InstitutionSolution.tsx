import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, Shield, Eye, TrendingDown, TrendingUp, CheckCircle2, AlertTriangle, Users, Building2, Smartphone, Bell, Target, BarChart3, Lock, Zap, ChartLine, CreditCard, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const easeOut: Easing = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const InstitutionSolution = () => {
  return (
    <div className="min-h-screen bg-[#1A1612] text-[#F5F0EB]">
      {/* HERO */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/institutions-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1612] via-[#1A1612]/95 to-[#1A1612]/70" />
        
        <div className="container mx-auto px-[6%] py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
            >
              <motion.div 
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-6"
              >
                <Building2 className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C] font-medium">AI-Powered SMB Intelligence Layer</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-[-0.02em] mb-6"
              >
                Credit Intelligence
                <br />
                <span className="text-[#C9A87C]">for Business Banking</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-lg text-[#B8AFA6] leading-relaxed max-w-[520px] mb-8"
              >
                LumiqAI combines credit intelligence and AI to help financial institutions control their SMB lending exposure and unlock growth.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact-sales">
                  <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-8 py-6 text-base font-semibold">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://institutions.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#3D362D] text-[#F5F0EB] hover:bg-[#252019] rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                {["SOC 2 Ready", "FCRA Aligned", "Explainable AI", "Zero Trust"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs text-[#8A8178]">
                    <CheckCircle2 className="w-3 h-3 text-[#C9A87C]" />
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Product Card Stack */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Credit Card */}
                <div className="bg-[#252019] border border-[#3D362D] rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <ChartLine className="w-5 h-5 text-[#C9A87C]" />
                      <span className="font-semibold">Credit Intelligence</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-5xl font-bold">742</span>
                    <div className="flex items-center gap-1 text-green-400 text-sm mb-2">
                      <TrendingUp className="w-4 h-4" />
                      +12 vs last month
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8A8178]">Payment History</span>
                      <span className="text-green-400">Excellent</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8A8178]">Credit Utilization</span>
                      <span className="text-[#C9A87C]">Good</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8A8178]">Business Age</span>
                      <span className="text-green-400">Strong</span>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-[#2D251D] border border-[#3D362D] rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#C9A87C]/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-[#C9A87C]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8178]">Eligible Products</p>
                      <p className="font-semibold">3 of 5</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-[#2D251D] border border-[#3D362D] rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8178]">Risk Assessment</p>
                      <p className="font-semibold text-green-400">Low Risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - Cascading Cards */}
      <section className="py-20 bg-[#141110]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C]">THE PROBLEM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                SMB customers are leaving because they
                <br />can't see the path to approval.
              </h2>
            </motion.div>

            {/* What Banks Perfected - Consumer */}
            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-[#C9A87C]">What banks perfected (consumer)</h3>
              <div className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6 mb-4">
                <p className="text-[#B8AFA6] mb-6">Consumer credit visibility that keeps customers engaged</p>
                
                {/* Cascading iPhone Mockups */}
                <div className="relative flex justify-center items-end gap-3 mb-8 py-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotate: -6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative z-10 transform -rotate-6"
                  >
                    <div className="bg-black rounded-[24px] p-1.5 shadow-2xl">
                      <img 
                        src="/mobile/capital-one-email.png" 
                        alt="Capital One Credit Alert" 
                        className="w-32 md:w-40 h-auto rounded-[20px]"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-20 transform -translate-y-4"
                  >
                    <div className="bg-black rounded-[24px] p-1.5 shadow-2xl">
                      <img 
                        src="/mobile/wells-fargo-app.png" 
                        alt="Wells Fargo Mobile App" 
                        className="w-36 md:w-44 h-auto rounded-[20px]"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative z-30 transform -translate-y-8"
                  >
                    <div className="bg-black rounded-[24px] p-1.5 shadow-2xl ring-2 ring-[#C9A87C]/30">
                      <img 
                        src="/mobile/chase-consumer.png" 
                        alt="Chase Credit Journey" 
                        className="w-40 md:w-48 h-auto rounded-[20px]"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative z-20 transform -translate-y-4"
                  >
                    <div className="bg-black rounded-[24px] p-1.5 shadow-2xl">
                      <img 
                        src="/mobile/wells-fargo-email.png" 
                        alt="Wells Fargo FICO Score Email" 
                        className="w-36 md:w-44 h-auto rounded-[20px]"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20, rotate: 6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative z-10 transform rotate-6"
                  >
                    <div className="bg-black rounded-[24px] p-1.5 shadow-2xl">
                      <img 
                        src="/mobile/chase-email.png" 
                        alt="Chase Credit Summary Email" 
                        className="w-32 md:w-40 h-auto rounded-[20px]"
                      />
                    </div>
                  </motion.div>
                </div>

                <h4 className="text-lg font-semibold text-center mb-2">
                  How Banks Perfected Consumer Credit.
                </h4>
                <p className="text-sm text-[#B8AFA6] text-center mb-6">
                  Free credit visibility, alerts, education, and instant pre-qualified offers kept customers logging in, improving scores, and applying for new products — all inside the banking app.
                </p>
                
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Eye, title: "Free Credit Visibility", desc: "Weekly FICO® updates" },
                    { icon: Bell, title: "Credit Alerts", desc: "Push alerts for changes" },
                    { icon: Target, title: "Score Education", desc: "Factor breakdowns" },
                    { icon: Zap, title: "Pre-Qualified Offers", desc: "One-click apply" }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#252019] border border-[#3D362D] rounded-xl p-4">
                      <item.icon className="w-5 h-5 text-[#C9A87C] mb-3" />
                      <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-xs text-[#8A8178]">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#252019]/50 rounded-xl p-4">
                  <p className="text-sm text-[#B8AFA6] text-center">
                    Result: Higher login frequency → stronger loyalty → increased conversion
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#C9A87C]">7%↑</p>
                      <p className="text-xs text-[#8A8178]">Week-1 Retention</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#C9A87C]">30 pts</p>
                      <p className="text-xs text-[#8A8178]">Avg Score Increase</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#C9A87C]">60M+</p>
                      <p className="text-xs text-[#8A8178]">CreditWise Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* THE GAP - SMBs */}
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-red-500/50" />
                <span className="text-sm text-red-400 font-medium">THE GAP</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">But SMBs Can't See Their Credit Health.</h3>
              <p className="text-sm text-[#B8AFA6] mb-6">Without visibility, education, or pre-qualification — SMBs leave to find answers elsewhere.</p>
              
              {/* SMB Gap Mockups - Cascading */}
              <div className="relative flex justify-center items-end gap-3 mb-8 py-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative z-10"
                >
                  <div className="bg-black rounded-[24px] p-1.5 shadow-2xl border border-red-500/20">
                    <img 
                      src="/mobile/chase-smb.png" 
                      alt="Chase SMB - No Credit Journey" 
                      className="w-32 md:w-40 h-auto rounded-[20px]"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
                    No credit visibility
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative z-20 -translate-y-4"
                >
                  <div className="bg-black rounded-[24px] p-1.5 shadow-2xl border border-red-500/20">
                    <img 
                      src="/mobile/citi-smb.png" 
                      alt="Citi SMB - Missing Credit Profile" 
                      className="w-36 md:w-44 h-auto rounded-[20px]"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
                    Missing insights
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: 4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative z-10"
                >
                  <div className="bg-black rounded-[24px] p-1.5 shadow-2xl border border-red-500/20">
                    <img 
                      src="/mobile/wells-smb.png" 
                      alt="Wells Fargo SMB - No Credit Features" 
                      className="w-32 md:w-40 h-auto rounded-[20px]"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
                    No pre-qualification
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                  <h4 className="text-sm font-medium text-red-400 mb-4">What SMBs experience today</h4>
                  <div className="space-y-3">
                    {[
                      "No credit score visibility",
                      "Denied with no explanation",
                      "No eligibility insights",
                      "Apply elsewhere"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#B8AFA6]">
                        <span className="text-red-400">✕</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6">
                  <h4 className="text-sm font-medium text-[#C9A87C] mb-4">Result: SMBs leave for fintechs</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold">67%</p>
                      <p className="text-xs text-[#8A8178]">Leave for fintechs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$2.1B</p>
                      <p className="text-xs text-[#8A8178]">Lost annually</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3.4x</p>
                      <p className="text-xs text-[#8A8178]">Higher churn</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE SOLUTION - LumiqAI Products */}
      <section className="py-20 bg-[#1A1612]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[1100px] mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-4">
                <Layers className="w-4 h-4 text-[#C9A87C]" />
                <span className="text-sm text-[#C9A87C]">THE SOLUTION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                LumiqAI brings the consumer credit
                <br />playbook to SMB banking.
              </h2>
              <p className="text-[#B8AFA6] max-w-[600px] mx-auto mb-8">
                Powerful features designed to help banks retain customers and increase lending conversion.
              </p>
              <p className="text-sm text-[#8A8178] mb-4">Click to see the future of SMB Customer Experience</p>
            </motion.div>

            {/* Before/After Toggle Mockups */}
            <motion.div variants={fadeUp} className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Without LumiqAI */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                    <span className="text-sm text-red-400 font-medium">Without LumiqAI</span>
                  </div>
                  <div className="relative flex justify-center items-end gap-2">
                    <motion.div 
                      initial={{ opacity: 0, x: -20, rotate: -4 }}
                      whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative z-10"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl border border-red-500/20">
                        <img 
                          src="/mobile/chase-smb-2.png" 
                          alt="Chase SMB Without LumiqAI" 
                          className="w-24 md:w-28 h-auto rounded-[16px] grayscale-[30%]"
                        />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative z-20 -translate-y-2"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl border border-red-500/20">
                        <img 
                          src="/mobile/citi-smb-2.png" 
                          alt="Citi SMB Without LumiqAI" 
                          className="w-28 md:w-32 h-auto rounded-[16px] grayscale-[30%]"
                        />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20, rotate: 4 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl border border-red-500/20">
                        <img 
                          src="/mobile/wells-smb-2.png" 
                          alt="Wells Fargo SMB Without LumiqAI" 
                          className="w-24 md:w-28 h-auto rounded-[16px] grayscale-[30%]"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* With LumiqAI */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-full px-4 py-2 mb-6">
                    <span className="text-sm text-[#C9A87C] font-medium">With LumiqAI</span>
                  </div>
                  <div className="relative flex justify-center items-end gap-2">
                    <motion.div 
                      initial={{ opacity: 0, x: -20, rotate: -4 }}
                      whileInView={{ opacity: 1, x: 0, rotate: -4 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative z-10"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl ring-2 ring-[#C9A87C]/30">
                        <img 
                          src="/mobile/chase-lumiq.png" 
                          alt="Chase with LumiqAI" 
                          className="w-24 md:w-28 h-auto rounded-[16px]"
                        />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative z-20 -translate-y-2"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl ring-2 ring-[#C9A87C]/50">
                        <img 
                          src="/mobile/citi-lumiq.png" 
                          alt="Citi with LumiqAI" 
                          className="w-28 md:w-32 h-auto rounded-[16px]"
                        />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20, rotate: 4 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 4 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="relative z-10"
                    >
                      <div className="bg-black rounded-[20px] p-1 shadow-xl ring-2 ring-[#C9A87C]/30">
                        <img 
                          src="/mobile/wells-lumiq.png" 
                          alt="Wells Fargo with LumiqAI" 
                          className="w-24 md:w-28 h-auto rounded-[16px]"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Cards - Cascading */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-4">
              {[
                {
                  num: "1",
                  title: "LumiqAI Intelligence™",
                  subtitle: "See the Full Picture",
                  features: ["Personal FICO® score tracking", "D&B PAYDEX® monitoring", "Experian Intelliscore Plus℠", "Multi-bureau business credit"]
                },
                {
                  num: "2",
                  title: "LumiqAI Engage™",
                  subtitle: "Stay Informed & Improve",
                  features: ["Real-time score change alerts", "Personalized improvement tips", "Payment reminder notifications", "Credit utilization coaching"]
                },
                {
                  num: "3",
                  title: "LumiqAI Convert™",
                  subtitle: "Pre-Qualify Instantly",
                  features: ["No-impact pre-qualification", "Approval likelihood scores", "Personalized offer matching", "One-click applications"]
                },
                {
                  num: "4",
                  title: "LumiqAI Retain™",
                  subtitle: "Grow With Your Bank",
                  features: ["Credit journey milestones", "Product upgrade pathways", "Relationship deepening", "Lifetime value optimization"]
                }
              ].map((product, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6 hover:border-[#C9A87C]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C9A87C]/10 border border-[#C9A87C]/30 rounded-xl flex items-center justify-center text-[#C9A87C] font-bold">
                      {product.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                      <p className="text-sm text-[#C9A87C] mb-4">{product.subtitle}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-[#B8AFA6]">
                            <CheckCircle2 className="w-3 h-3 text-[#C9A87C]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="py-16 bg-[#141110]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-2xl font-bold text-center mb-8"
            >
              What changes for your SMB business
            </motion.h2>
            
            <motion.div 
              variants={fadeUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { metric: "↑ 40%", label: "App engagement", color: "text-green-400" },
                { metric: "↓ 50%", label: "Decline-to-churn", color: "text-green-400" },
                { metric: "↑ 25%", label: "Lending conversion", color: "text-green-400" },
                { metric: "↑ 3x", label: "Products per SMB", color: "text-green-400" }
              ].map((item, i) => (
                <div key={i} className="bg-[#1F1A16] border border-[#2D261F] rounded-xl p-4 text-center">
                  <p className={`text-2xl font-bold ${item.color} mb-1`}>{item.metric}</p>
                  <p className="text-xs text-[#8A8178]">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 90-DAY PILOT + SECURITY */}
      <section className="py-16 bg-[#1A1612]">
        <div className="container mx-auto px-[6%]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-[900px] mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Implementation Timeline */}
              <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6">
                <div className="flex items-center gap-2 text-[#C9A87C] mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">90-DAY PILOT</span>
                </div>
                <h3 className="text-xl font-bold mb-6">From kickoff to live in 90 days.</h3>
                <div className="space-y-4">
                  {[
                    { week: "Week 1-2", title: "Discovery & Scoping" },
                    { week: "Week 3-4", title: "Sandbox Deployment" },
                    { week: "Week 5-8", title: "Integration & Testing" },
                    { week: "Week 9-12", title: "Pilot Launch" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#C9A87C]/10 rounded-lg flex items-center justify-center text-xs text-[#C9A87C] font-medium">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8178]">{item.week}</p>
                        <p className="text-sm font-medium">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Security */}
              <motion.div variants={fadeUp} className="bg-[#1F1A16] border border-[#2D261F] rounded-2xl p-6">
                <div className="flex items-center gap-2 text-[#C9A87C] mb-4">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">SECURITY & COMPLIANCE</span>
                </div>
                <h3 className="text-xl font-bold mb-6">Built for enterprise security.</h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "SOC 2 Type II Ready", desc: "Enterprise-grade controls" },
                    { icon: Eye, title: "FCRA Aligned", desc: "Compliant practices" },
                    { icon: Lock, title: "Zero Trust", desc: "AES-256, TLS 1.2+" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#C9A87C]/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#C9A87C]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-[#8A8178]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Explore Pilot Framework Button */}
                <a 
                  href="https://institutions.futeurcredx.com/platform/pilot-deployment" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 block"
                >
                  <Button className="w-full bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full py-5 text-sm font-semibold">
                    Explore Pilot Framework
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 border-t border-[#2D261F] relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/institutions-cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#141110]/85" />
        <div className="container mx-auto px-[6%] relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-[700px] mx-auto"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6"
            >
              Ready to transform your
              <br />SMB banking experience?
            </motion.h2>
            
            <motion.p 
              variants={fadeUp}
              className="text-lg text-[#B8AFA6] mb-8"
            >
              Join leading regional banks using LumiqAI to retain customers, increase conversions, and compete with fintechs.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/contact-sales">
                <Button className="bg-[#C9A87C] text-[#1A1612] hover:bg-[#D4B88A] rounded-full px-10 py-6 text-base font-semibold">
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
              {["SOC 2 Ready", "FCRA Aligned", "Zero Trust"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-[#8A8178]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A87C]" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InstitutionSolution;
