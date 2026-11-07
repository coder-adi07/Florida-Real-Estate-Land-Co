'use client';

import Image from 'next/image';
import { Video, Camera, Globe2, Share2, Play, Users, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Marketing() {
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-bronze/20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <Sparkles size={14} className="text-brand-gold" />
              <span>Signature Marketing Division</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Pioneering Real Estate Marketing <span className="italic text-brand-gold">Since 2000</span>
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
        </div>

        {/* Showcase Grid: Video Hero Stage + 4 Capability Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video Poster Showcase (7 cols) */}
          <div className="lg:col-span-7 relative group">
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
                  Signature Video Production
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
          </div>

          {/* Right Column: 4 Marketing Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {marketingPillars.map((pillar, i) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-sm bg-[#141210] border border-brand-bronze/25 hover:border-brand-gold/50 transition-colors duration-200"
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
