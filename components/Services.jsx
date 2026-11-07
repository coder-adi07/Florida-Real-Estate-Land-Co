'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { KeyRound, TrendingUp, Home, Landmark, ArrowRight, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0e0d0c] border-t border-brand-bronze/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
            <Sparkles size={14} className="text-brand-gold" />
            <span>Brokerage Capabilities</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Buy, Sell, Rent &amp; <span className="italic text-brand-gold">Invest with Authority</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-3">
            Four specialized real estate divisions engineered to guide private buyers, property sellers, corporate tenants, and institutional land investors.
          </p>
        </motion.div>

        {/* 4 Distinct Visually Engaging Service Blocks */}
        <div className="space-y-12">
          {/* Service 1: Buy a Home */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-brand-bronze/30 rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-mono mb-2">
                  <KeyRound size={14} className="text-brand-gold" />
                  <span>Division 01 • Buyer Representation</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3">
                  Find &amp; Secure Your Dream Florida Residence
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Navigating Florida’s competitive luxury markets requires relentless advocacy, discrete negotiations, and insider knowledge of off-market pocket listings. We counsel first-time buyers, relocating executives, and international second-home purchasers through every contingency, appraisal, and closing protocol.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Targeted MLS &amp; Off-Market Sourcing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Contract &amp; Contingency Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Florida Homestead Exemption Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Lender &amp; Escrow Coordination</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-bronze/20">
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-brand-bronze to-brand-gold text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:from-brand-gold hover:to-brand-bronze transition-all shadow-md"
                >
                  Start Home Search
                </a>
                <a
                  href="https://www.orlandosalesclub.com/homes-for-sale-search/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-gold hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Search All Current MLS</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-sm overflow-hidden border border-brand-bronze/40 shadow-xl group">
              <Image
                src="/assets/marketing/dream-home.jpg"
                alt="Find My Dream Home Florida Real Estate"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs uppercase tracking-wider text-white font-medium bg-black/60 px-3 py-1 rounded-sm border border-brand-gold/30">
                  Curated Residential Portfolios
                </span>
              </div>
            </div>
          </motion.div>

          {/* Service 2: Sell a Property */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141311] border border-brand-bronze/30 rounded-sm p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-sm overflow-hidden border border-brand-bronze/40 shadow-xl group order-2 lg:order-1">
              <Image
                src="/assets/marketing/home-worth.jpg"
                alt="What Is My Home Worth Valuation Florida"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs uppercase tracking-wider text-white font-medium bg-black/60 px-3 py-1 rounded-sm border border-brand-gold/30">
                  Accurate Comparative Market Analysis
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-mono mb-2">
                  <TrendingUp size={14} className="text-brand-gold" />
                  <span>Division 02 • Seller Representation &amp; Marketing</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3">
                  Sell at Peak Value with Signature Video Production
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  We don’t just place a sign in the yard. We pioneer cinematic HD video tours, architectural photography, targeted digital advertising across thousands of unique monthly web visitors, and worldwide syndication to Realtor.com, Zillow, and international buyer networks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>HD Video Tours &amp; Drone Aerials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Dedicated Property Showcase Page</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Pricing Strategy Advisor (PSA) Precision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Stellar MLS Global Distribution</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-brand-bronze/20">
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-gradient-to-r from-brand-bronze to-brand-gold text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:from-brand-gold hover:to-brand-bronze transition-all shadow-md"
                >
                  Request Valuation
                </a>
                <a
                  href="#marketing"
                  className="text-xs text-brand-gold hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Explore Our Marketing Arsenal</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Service 3 & 4: Two Column Grid for Rentals & Land Investment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Find a Rental */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(218, 166, 116, 0.6)' }}
              className="bg-[#141311] border border-brand-bronze/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-mono mb-2">
                  <Home size={14} className="text-brand-gold" />
                  <span>Division 03 • Executive Rentals &amp; Leasing</span>
                </div>
                <h3 className="font-editorial text-2xl text-white font-medium mb-3">
                  Orlando Rentals &amp; Lease Management
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Operating through our long-established OrlandoRentals.cc portal, we assist property owners in finding qualified, screened tenants in record time while offering high-end residences for lease across Metro Orlando and surrounding counties.
                </p>
                <div className="p-3 bg-[#1a1815] border border-brand-bronze/20 rounded-sm text-xs text-zinc-300 space-y-1 mb-6">
                  <div>• Thorough background &amp; credit verification</div>
                  <div>• Fair market rent analysis &amp; lease drafting</div>
                  <div>• Fast turnaround: frequently leased within 14 days</div>
                </div>
              </div>

              <a
                href="http://orlandorentals.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors"
              >
                <span>Visit OrlandoRentals.cc Portal</span>
                <ArrowRight size={13} />
              </a>
            </motion.div>

            {/* Land & Investment Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'rgba(218, 166, 116, 0.6)' }}
              className="bg-[#141311] border border-brand-bronze/30 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-mono mb-2">
                  <Landmark size={14} className="text-brand-gold" />
                  <span>Division 04 • Land &amp; Investment</span>
                </div>
                <h3 className="font-editorial text-2xl text-white font-medium mb-3">
                  Florida Land Acquisitions &amp; Parcels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Florida’s growth is fundamentally driven by land. Our specialized land associates navigate zoning, environmental assessments, agricultural transitions, and commercial development parcels throughout Central Florida and coastal corridors.
                </p>
                <div className="p-3 bg-[#1a1815] border border-brand-bronze/20 rounded-sm text-xs text-zinc-300 space-y-1 mb-6">
                  <div>• Vacant acreage, residential lots &amp; assemblage</div>
                  <div>• Commercial zoning &amp; land-banking opportunities</div>
                  <div>• Proven closing track record on complex parcels</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors"
              >
                <span>Consult With Our Land Brokers</span>
                <ArrowRight size={13} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
