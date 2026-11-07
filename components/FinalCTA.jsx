'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('buy');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-brand-black border-t border-brand-bronze/30 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-bronze/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Company Outreach (6 cols) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <Sparkles size={14} className="text-brand-gold" />
              <span>Direct Broker Consultation</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              Ready to Experience Central Florida Real Estate at{' '}
              <span className="text-brand-gold font-medium">Its Highest Level</span>?
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              Whether you are acquiring a luxury primary home, selling a prominent estate, exploring high-yield land opportunities, or seeking executive tenant placement, our seasoned brokers are ready to advise you.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+14074253553"
                className="flex items-center gap-4 p-4 rounded-sm bg-[#141210] border border-brand-bronze/30 hover:border-brand-gold transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-sm bg-brand-bronze/20 text-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    Direct Broker Office Line
                  </div>
                  <div className="text-base sm:text-lg font-editorial text-white font-medium">
                    +1 407-425-3553
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Immediate assistance with a licensed full-time Realtor
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@danielcoombsPA.com"
                className="flex items-center gap-4 p-4 rounded-sm bg-[#141210] border border-brand-bronze/30 hover:border-brand-gold transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-sm bg-brand-bronze/20 text-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    Confidential Email Correspondence
                  </div>
                  <div className="text-base sm:text-lg font-editorial text-white font-medium">
                    info@danielcoombsPA.com
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Direct transmission to Broker Daniel Coombs &amp; associates
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-sm bg-[#141210] border border-brand-bronze/30">
                <div className="w-12 h-12 rounded-sm bg-brand-bronze/20 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    Central Florida Headquarters
                  </div>
                  <div className="text-sm font-medium text-white">
                    618 E South St, Ste 500, Orlando, FL 32801, USA
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Downtown Orlando Executive Suites
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Box (6 cols) */}
          <div className="lg:col-span-6 bg-[#13110f] border border-brand-bronze/40 rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            <h3 className="font-editorial text-2xl text-white font-medium mb-1">
              Initiate a Private Consultation
            </h3>
            <p className="text-xs text-zinc-400 font-light mb-6">
              Connect directly with our veteran brokerage team. All inquiries are handled with absolute discretion.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center bg-[#1a1815] border border-brand-gold/40 rounded-sm animate-in fade-in">
                <CheckCircle2 size={42} className="text-brand-gold mx-auto mb-3" />
                <h4 className="font-editorial text-xl text-white font-medium mb-2">
                  Inquiry Transmitted Successfully
                </h4>
                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                  Thank you for reaching out to Florida Real Estate &amp; Land Co. A licensed associate will review your requirements and respond within 24 hours.
                </p>
                <div className="text-xs text-brand-gold font-mono">
                  For urgent inquiries, call +1 407-425-3553
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type Radio / Pill Tabs */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-2">
                    How Can We Assist You?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'buy', label: 'Buy' },
                      { id: 'sell', label: 'Sell' },
                      { id: 'rent', label: 'Rent' },
                      { id: 'land', label: 'Land' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setInquiryType(type.id)}
                        className={`py-2 text-xs uppercase tracking-wider font-medium rounded-sm border transition-all ${
                          inquiryType === type.id
                            ? 'bg-brand-bronze text-white border-brand-gold font-semibold'
                            : 'bg-[#1a1815] text-zinc-400 border-brand-bronze/20 hover:text-white'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#1b1916] border border-brand-bronze/30 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (407) 000-0000"
                      className="w-full bg-[#1b1916] border border-brand-bronze/30 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    className="w-full bg-[#1b1916] border border-brand-bronze/30 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                {/* Specific Requirements / Notes */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 font-medium mb-1">
                    Property or Investment Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your preferred location (Winter Park, Windermere, Lake Nona, etc.), timeline, or property details..."
                    className="w-full bg-[#1b1916] border border-brand-bronze/30 text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-sm focus:outline-none focus:border-brand-gold resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Submit Confidential Request</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 pt-1">
                  <ShieldCheck size={13} className="text-brand-gold" />
                  <span>Privacy Assured • Direct to Licensed Brokers</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

