import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Mail, Phone, MapPin, Youtube, Linkedin, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// FAQ data for Contact Us page
const faqData = [
  {
    question: "How long does it take to get a response?",
    answer: "Our team typically responds within 24-48 business hours. For urgent inquiries, we prioritize enterprise and partnership requests."
  },
  {
    question: "Can I schedule a live demo?",
    answer: "Absolutely! Use the demo request section below or visit our Request a Demo page to schedule a personalized walkthrough of our platform."
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "Please include your company name, role, and a brief description of your needs. This helps us route your inquiry to the right specialist."
  },
  {
    question: "Do you offer phone support?",
    answer: "Phone support is available for enterprise customers. For general inquiries, we recommend using the contact form for the fastest response."
  },
  {
    question: "How do I become a partner?",
    answer: "Visit our Partner Ecosystem page or mention partnership interest in your message. Our partnerships team will reach out with next steps."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-base font-medium transition-colors ${isOpen ? 'text-orange-400' : 'text-white/90 group-hover:text-orange-400'}`}>
          {question}
        </span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all flex-shrink-0 ml-4 ${isOpen ? 'bg-orange-500' : 'bg-white/10'}`}>
          <ChevronDown className={`w-4 h-4 transition-all ${isOpen ? 'text-white rotate-180' : 'text-white/60'}`} />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-white/60 leading-relaxed text-sm">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function ContactUs() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
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
      phone_number: formData.phone || 'Not provided',
      business_name: formData.company,
      message: formData.message || 'No message provided',
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
        phone: '',
        company: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly at sales@futeurcredx.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2D2424]">
      {/* Hero Section with Contact Form */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#3A2F2F] to-[#2D2424]" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative image */}
              <div className="hidden lg:block mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-12 h-12 text-white/40" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                General{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                  Inquiries
                </span>
              </h1>
              
              <p className="text-lg text-white/70 mb-10 max-w-lg">
                Whether you're interested in partnerships, enterprise solutions, or simply have a question about FuteurCredX, we'd love to hear from you.
              </p>

            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#3A2F2F] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        First Name<span className="text-orange-400">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Last Name<span className="text-orange-400">*</span>
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Email<span className="text-orange-400">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Phone (Optional)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Company Name<span className="text-orange-400">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Message (Optional)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#2D2424] border-white/20 text-white placeholder:text-white/40 focus:border-orange-400 focus:ring-orange-400 min-h-[120px]"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-300 px-4 py-4 rounded-lg flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Thank you for reaching out!</p>
                        <p className="text-sm text-green-300/70">Our team will get back to you within 24-48 business hours.</p>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1515] to-[#2D2424]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                See It In Action
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Looking for a Demo?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-lg">
                See how FuteurCredX can transform your credit intelligence capabilities with a personalized demonstration.
              </p>
              <Link
                to="/request-demo"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-xl overflow-hidden">
                  {/* Mock dashboard */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-center py-8">
                      <span className="text-white/40 text-sm font-medium">LumiqAI Dashboard</span>
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white">695</div>
                          <div className="text-xs text-white/40">Composite Score</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-400">+12%</div>
                          <div className="text-xs text-white/40">Pull-Through</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-400">340+</div>
                          <div className="text-xs text-white/40">Signals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#2D2424]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Quick answers to common questions about contacting us and our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
