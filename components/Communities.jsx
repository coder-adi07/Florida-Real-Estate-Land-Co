'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink, Compass, Sparkles } from 'lucide-react';

export default function Communities() {
  const [activeRegion, setActiveRegion] = useState('central');

  const communities = [
    {
      id: 'winter-park',
      name: 'Winter Park',
      tagline: 'Historic Brick Streets & Chain of Lakes',
      description: 'Renowned for Park Avenue’s European-style boutiques, Rollins College cultural heritage, and pristine navigable waterways connecting six deep-water lakes.',
      highlights: ['Park Avenue Boutiques', 'Scenic Boat Tours', 'Pristine Lakefront Enclaves'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/winter-park/',
    },
    {
      id: 'windermere',
      name: 'Windermere',
      tagline: 'The Butler Chain of Lakes Prestige',
      description: 'Central Florida’s premier enclave of ultra-luxury gated estates, world-renowned golf clubs, and protected freshwater boating sanctuaries.',
      highlights: ['Butler Chain Waterfront', 'Isleworth & Keenes Pointe', 'Private Gated Sanctuaries'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/windermere/',
    },
    {
      id: 'lake-nona',
      name: 'Lake Nona & Laureate Park',
      tagline: '7,000-Acre Master Planned Innovation City',
      description: 'Home to world-class Medical City, USTA National Campus, autonomous transit, and forward-thinking sustainable architectural design.',
      highlights: ['Medical City Innovation Hub', 'USTA National Campus', 'Autonomous Modern Enclaves'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/lake-nona/',
    },
    {
      id: 'baldwin-park',
      name: 'Baldwin Park',
      tagline: 'Traditional Neighborhood Town Center',
      description: 'A vibrant lakeside community patterned after early 20th-century Southern architecture with tree-lined pedestrian avenues and Lake Baldwin trail loops.',
      highlights: ['Lake Baldwin Loop Trail', 'Walkable Village Center', 'Neoclassical Architecture'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/baldwin-park/',
    },
    {
      id: 'downtown-orlando',
      name: 'Downtown Orlando',
      tagline: 'High-Rise Luxury & Cultural Core',
      description: 'The central business district featuring contemporary luxury penthouses, Dr. Phillips Center for the Performing Arts, and Lake Eola promenade.',
      highlights: ['Lake Eola Amphitheater', 'Skyline Penthouse Living', 'Arts & Dining District'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/downtown-orlando/',
    },
    {
      id: 'dr-phillips',
      name: 'Dr. Phillips & Bay Hill',
      tagline: 'Citrus Heritage & Restaurant Row',
      description: 'Celebrated for its legendary Restaurant Row culinary corridor, Arnold Palmer’s Bay Hill Club & Lodge, and prime proximity to Universal and Disney.',
      highlights: ['Restaurant Row Dining', 'Bay Hill Golf & Lodge', 'Top-Rated School Corridors'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/dr-phillips/',
    },
    {
      id: 'bella-collina',
      name: 'Bella Collina',
      tagline: 'Tuscan Hillside Country Club Living',
      description: 'Dramatic rolling hills and custom Italian-inspired villas overlooking Lake Apopka and Lake Siena with a Sir Nick Faldo championship golf course.',
      highlights: ['Sir Nick Faldo Golf Course', 'Dramatic Rolling Hills', 'Private Tuscan Clubhouse'],
      region: 'central',
      url: 'https://www.orlandosalesclub.com/featured-communities/bella-collina/',
    },
    {
      id: 'coastal',
      name: 'South Florida & Coastal Beaches',
      tagline: 'Miami Beach, Sarasota & St. Petersburg',
      description: 'Extending our brokerage capabilities to premier coastal destinations, luxury Atlantic oceanfront condos, and Gulf Coast barrier island retreats.',
      highlights: ['Miami Beach & South Beach', 'Sunny Isles Luxury Towers', 'Sarasota & St. Pete Beach'],
      region: 'coastal',
      url: 'https://www.orlandosalesclub.com/featured-communities/miami-beach/',
    },
  ];

  const filtered = activeRegion === 'all'
    ? communities
    : communities.filter(c => c.region === activeRegion);

  return (
    <section id="communities" className="py-24 bg-[#0a0a0a] border-t border-brand-bronze/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-bronze/20 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <Compass size={13} className="text-brand-gold" />
              <span>Geographic Specialization</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Explore Central Florida &amp; <span className="text-brand-gold font-medium">Coastal Communities</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl font-light">
              Authentic neighborhoods served by our veteran Realtors with deep local zoning, school district, and valuation expertise.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'central', label: 'Central Florida Enclaves' },
              { id: 'coastal', label: 'Coastal Florida' },
              { id: 'all', label: 'All Regions' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveRegion(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 cursor-pointer ${
                  activeRegion === tab.id
                    ? 'bg-gradient-to-r from-brand-bronze to-brand-gold text-white font-semibold shadow-md'
                    : 'bg-[#151412] text-zinc-400 hover:text-white border border-brand-bronze/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Communities Editorial Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filtered.map((comm) => (
              <motion.div
                layout
                key={comm.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4, borderColor: 'rgba(218, 166, 116, 0.6)' }}
                className="group bg-[#121110] border border-brand-bronze/25 rounded-sm p-6 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                {/* Subtle top gold accent bar on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-bronze to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between text-xs text-brand-gold font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-brand-gold" />
                      Florida Enclave
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {comm.region}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-white font-medium mb-1 group-hover:text-brand-gold transition-colors">
                    {comm.name}
                  </h3>
                  <div className="text-xs text-zinc-400 font-light mb-4">
                    {comm.tagline}
                  </div>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6">
                    {comm.description}
                  </p>

                  {/* Micro Highlights */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-brand-bronze/15">
                    {comm.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-brand-gold/80" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={comm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white pt-4 border-t border-brand-bronze/20 transition-colors group/link"
                >
                  <span>View Community Page</span>
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
