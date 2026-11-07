'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Camera, Globe2, Share2, Play, Users, Eye, ArrowUpRight, Sparkles, X, Volume2, ShieldCheck } from 'lucide-react';

export default function Marketing() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const marketingPillars = [
    {
      icon: Video,
      title: 'High-Definition HD Video Walkthroughs',
      desc: 'Cinematic video production that captures the true flow, natural light, and architectural stature of every property—making listings irresistible to remote buyers.',
    },
    {
      icon: Globe2,
      title: 'Thousands of Unique Monthly Web Visitors',
      desc: 'Florida Real Estate & Land Co.’s proprietary digital network attracts thousands of targeted, qualified luxury home buyers and tenants each month.',
    },
    {
      icon: Share2,
      title: 'Strategic Social & Omnichannel Syndication',
      desc: 'Aggressive distribution across Facebook, YouTube, Google, and the Stellar MLS network ensures immediate global exposure to active buyers.',
    },
    {
      icon: Camera,
      title: 'Professional Architectural Photography',
      desc: 'High dynamic range daylight and twilight architectural shoots highlighting premium exterior finishes, curated landscaping, and interior appointments.',
    },
  ];

  return (
    <section id="marketing" className="py-24 bg-[#0e0d0c] border-t border-brand-bronze/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-bronze/20 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <Sparkles size={14} className="text-brand-gold" />
              <span>Signature Marketing Division</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Pioneering Real Estate Marketing <span className="text-brand-gold font-medium">Since 2000</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl font-light">
              We create compelling print, video, and online advertising campaigns designed to command attention and achieve maximum market valuation.
            </p>
          </div>

          <a
            href="https://www.orlandosalesclub.com/our-marketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors flex-shrink-0"
          >
            <span>Read Original Marketing Blueprint</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Showcase Grid: Video Hero Stage + 4 Capability Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video Poster Showcase (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative group cursor-pointer"
            onClick={() => setVideoModalOpen(true)}
          >
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-brand-bronze/40 shadow-2xl bg-black">
              <Image
                src="/assets/marketing/video-poster.jpg"
                alt="Florida Real Estate HD Video Tour Production"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-bronze/90 border-2 border-brand-gold text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4">
                  <Play size={28} className="ml-1 fill-white text-white" />
                </div>
                <div className="px-3 py-1 bg-black/75 backdrop-blur-md rounded-sm border border-brand-gold/40 text-xs uppercase font-bold tracking-widest text-brand-gold mb-1">
                  Click To Experience Tour
                </div>
                <div className="font-editorial text-xl sm:text-2xl text-white font-normal drop-shadow-md">
                  Architectural Cinematography Walkthroughs
                </div>
              </div>

              {/* Bottom Stat Strip */}
              <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-xs text-zinc-300 bg-black/70 backdrop-blur-md p-3 rounded-sm border border-white/10">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Eye size={13} className="text-brand-gold" />
                  Thousands of Monthly Views
                </span>
                <span className="text-brand-gold text-[11px] font-mono">
                  Full 1080p HD Production
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Marketing Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {marketingPillars.map((pillar, i) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: 'rgba(218, 166, 116, 0.5)' }}
                  className="p-5 rounded-sm bg-[#141210] border border-brand-bronze/25 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-sm bg-brand-bronze/20 text-brand-gold flex-shrink-0 mt-0.5">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h3 className="font-editorial text-lg text-white font-medium mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Video Tour Lightbox Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#11100e] border border-brand-bronze/50 rounded-sm shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-brand-bronze transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/marketing/video-poster.jpg"
                  alt="Video Showcase Preview"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-bronze/90 border-2 border-brand-gold flex items-center justify-center shadow-2xl mb-4 animate-pulse">
                    <Play size={32} className="ml-1 fill-white text-white" />
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-2">
                    Signature Florida HD Video Production
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-light">
                    Every luxury listing represented by Florida Real Estate &amp; Land Co. receives cinematic 1080p walkthrough cinematography, drone aerials, and dedicated web showcase syndication.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#161412] flex flex-wrap items-center justify-between gap-4 border-t border-brand-bronze/30">
                <div className="flex items-center gap-2 text-xs text-brand-gold font-mono">
                  <ShieldCheck size={16} />
                  <span>Produced Exclusively by Florida Real Estate &amp; Land Co.</span>
                </div>

                <a
                  href="https://www.orlandosalesclub.com/our-marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-brand-bronze to-brand-gold text-white text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-95 transition-opacity"
                >
                  View Marketing Details
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
