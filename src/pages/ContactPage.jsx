import React, { useState } from 'react';
import { Send, MapPin, Mail, CheckCircle } from 'lucide-react';
import { GlassCard, PageHeader, Footer, GradientOrbs } from '../components/shared';

const interests = [
  "Brokerage Services",
  "Logistics & Traceability",
  "Hedging & Risk Management",
  "Market Data",
  "Partnership Opportunities",
  "General Inquiry"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] relative">
      <GradientOrbs />
      
      <div className="relative">
        <PageHeader 
          eyebrow="Get in Touch"
          title="Contact Our Team"
          subtitle="Whether you're looking to source critical materials, explore hedging solutions, or discuss partnership opportunities, we're here to help."
        />

        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-10">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <GlassCard className="p-6 sm:p-10" glow>
                  {submitted ? (
                    <div className="text-center py-10 sm:py-16">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Message Sent</h3>
                      <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto leading-relaxed px-2">
                        Thank you for reaching out. Our team will review your inquiry and respond within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
                      <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Send us a message</h3>
                        <p className="text-white/40 text-xs sm:text-sm">Fill out the form below and we'll get back to you</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">Full Name *</label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">Work Email *</label>
                          <input
                            type="email"
                            name="workEmail"
                            required
                            value={formData.workEmail}
                            onChange={handleChange}
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">Company *</label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                          placeholder="Company Name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">Area of Interest *</label>
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                        >
                          <option value="" className="bg-[#0a0a0a]">Select an option...</option>
                          {interests.map((interest) => (
                            <option key={interest} value={interest} className="bg-[#0a0a0a]">
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-white/60 mb-2 sm:mb-3">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm sm:text-base placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                          placeholder="Tell us about your needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white text-black rounded-xl text-sm sm:text-base font-semibold shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:bg-white/95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </GlassCard>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-8">
                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.1] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Headquarters</h3>
                      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                        Winter Park, Florida<br />
                        United States
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.1] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1 sm:mb-2">Email</h3>
                      <a href="mailto:contact@quanticapital.com" className="text-white/50 text-xs sm:text-sm hover:text-white/70 transition-colors">
                        contact@quanticapital.com
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 sm:p-8">
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-6 text-center">Response Times</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between py-2 sm:py-3 border-b border-white/[0.06]">
                      <span className="text-white/50 text-xs sm:text-sm">General Inquiries</span>
                      <span className="text-white/70 text-xs sm:text-sm font-medium">24-48 hours</span>
                    </div>
                    <div className="flex items-center justify-between py-2 sm:py-3 border-b border-white/[0.06]">
                      <span className="text-white/50 text-xs sm:text-sm">Partnership Requests</span>
                      <span className="text-white/70 text-xs sm:text-sm font-medium">1-3 business days</span>
                    </div>
                    <div className="flex items-center justify-between py-2 sm:py-3">
                      <span className="text-white/50 text-xs sm:text-sm">Urgent Matters</span>
                      <span className="text-emerald-400/80 text-xs sm:text-sm font-medium">Same day</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
