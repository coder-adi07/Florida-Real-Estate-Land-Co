'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Award,
  Compass,
  Mouse,
  Phone,
  Layers,
} from 'lucide-react';
import PropertySearch from './PropertySearch';

// 5 Authentic properties directly from Florida Real Estate & Land Co. / Stellar MLS
const HERO_PROPERTIES = [
  {
    id: 1,
    title: 'Waterway Passage Luxury Residence',
    address: '9572 Waterway Passage Drive, Winter Garden, FL 34787',
    subdivision: 'Waterway Passage Enclave',
    price: '$840,000',
    type: 'Single Family Luxury',
    beds: '4 Beds',
    baths: '3.5 Baths',
    sqft: '3,240 Sq Ft',
    image: '/assets/properties/featured/9572-waterway-passage.jpg',
    tag: 'Signature Listing',
    mlsId: 'MFR800521571',
    description: 'Contemporary architectural elegance in sought-after Winter Garden near Hamlin and Horizon West.',
  },
  {
    id: 2,
    title: 'Historic Character Estate & Grounds',
    address: '1305 E Baker Street, Plant City, FL 33563',
    subdivision: 'Historic Heritage Acreage',
    price: '$675,000',
    type: 'Estate / Character Property',
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2,980 Sq Ft',
    image: '/assets/properties/featured/1305-e-baker-st.jpg',
    tag: 'Prime Heritage',
    mlsId: 'MFR782168898',
    description: 'Rare architectural stature with expansive private grounds, vintage craftsmanship, and I-4 corridor connectivity.',
  },
  {
    id: 3,
    title: 'Lake Nona Golf Enclave Residence',
    address: '10520 Belfry Cir, Orlando, FL 32832',
    subdivision: 'Fairway Glen at North Shore',
    price: '$495,000',
    type: 'Golf & Country Enclave',
    beds: '3 Beds',
    baths: '2.5 Baths',
    sqft: '2,150 Sq Ft',
    image: '/assets/properties/featured/10520-belfry-cir.jpg',
    tag: 'Lake Nona Corridor',
    mlsId: 'MFR813891695',
    description: 'Prime golf course community minutes from Lake Nona Medical City, USTA Campus, and airport expressways.',
  },
  {
    id: 4,
    title: 'Mt. Vernon Suburban Sanctuary',
    address: '3880 Mt Vernon Way, Kissimmee, FL 34741',
    subdivision: 'Mt. Vernon Estates',
    price: '$525,000',
    type: 'Residential Single Family',
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2,420 Sq Ft',
    image: '/assets/properties/featured/3880-mt-vernon-way.jpg',
    tag: 'Private Pool Lanai',
    mlsId: 'MFR812590484',
    description: 'Immaculately maintained pool home with screened outdoor Florida lanai and low HOA convenience.',
  },
  {
    id: 5,
    title: 'Matchlock Executive Lease Residence',
    address: '10224 Matchlock Drive, Orlando, FL 32821',
    subdivision: 'Prime Orlando Corridor',
    price: '$2,100 / mo',
    type: 'Executive Rental',
    beds: '3 Beds',
    baths: '2 Baths',
    sqft: '1,840 Sq Ft',
    image: '/assets/properties/featured/10224-matchlock-dr.jpg',
    tag: 'Orlando Rentals Division',
    mlsId: 'MFR814356001',
    description: 'Professional property management representation by Florida Real Estate & Land Co. with turnkey comfort.',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isWheelLocked, setIsWheelLocked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const total = HERO_PROPERTIES.length;
  const current = HERO_PROPERTIES[currentIndex];

  // Navigate to next or previous property
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const selectIndex = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Mouse wheel scroll handler:
  // When scrolling down inside the hero area, advance slide; when scrolling up, go back!
  const handleWheel = useCallback(
    (e) => {
      // Only capture if delta is significant and not in a cooldown
      if (Math.abs(e.deltaY) < 30 || isWheelLocked) return;

      // Lock wheel for 550ms to prevent rapid over-cycling
      setIsWheelLocked(true);
      setTimeout(() => setIsWheelLocked(false), 550);

      if (e.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    },
    [isWheelLocked, goToNext, goToPrev]
  );

  // Subtle auto-advance when user is not actively hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered, goToNext]);

  return (
    <section
      ref={heroRef}
      onWheel={handleWheel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[94vh] flex flex-col justify-between pt-4 pb-12 overflow-hidden bg-[#090807] select-none"
    >
      {/* Background Architectural Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-bronze/15 rounded-full blur-[150px] pointer-events-none -mr-40 -mt-40 z-0" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none -ml-40 z-0" />

      {/* Top Advisory Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-bronze/20 pb-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bronze/20 border border-brand-bronze/40 text-[11px] uppercase tracking-widest text-brand-gold font-medium">
              <Sparkles size={12} className="text-brand-gold" />
              Florida Real Estate &amp; Land Co.
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              Orlando Sales Club | Est. 2000
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Award size={14} className="text-brand-gold" />
              <span>100+ Years Combined Acumen</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Compass size={14} className="text-brand-gold" />
              <span>Stellar MLS &amp; MFRMLS Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage: Full Panoramic Visual with Editorial Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex flex-col justify-between">
        {/* Stage Wrapper */}
        <div className="relative w-full rounded-md overflow-hidden border border-brand-bronze/30 shadow-[0_30px_90px_rgba(0,0,0,0.95)] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] group">
          {/* Active Background Photo with Crossfade Transition */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                quality={95}
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </motion.div>
          </AnimatePresence>

          {/* Luxury Multi-Layer Dark Vignette & Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/50 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-brand-bronze/30 pointer-events-none" />

          {/* Overlaid Editorial Content: Left Side */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between z-10">
            {/* Top Sub-tag & Mouse Scroll Indicator */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-sm bg-brand-bronze/80 backdrop-blur-md text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white border border-brand-gold/40 shadow-md">
                  {current.tag}
                </span>
                <span className="text-xs text-brand-gold/90 font-mono hidden sm:inline">
                  MLS #{current.mlsId}
                </span>
              </div>

              {/* Mouse Scroll Tooltip Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-brand-bronze/40 text-[11px] text-zinc-300">
                <Mouse size={13} className="text-brand-gold animate-bounce" />
                <span>Scroll wheel or click to change</span>
                <span className="text-brand-gold font-mono font-bold ml-1">
                  0{currentIndex + 1} / 0{total}
                </span>
              </div>
            </div>

            {/* Middle Main Editorial Headline */}
            <div className="max-w-2xl my-auto py-4">
              <span className="text-xs uppercase tracking-[0.28em] text-brand-gold font-semibold block mb-2 sm:mb-3">
                Central Florida &amp; Coastal Luxury Brokerage
              </span>

              <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white mb-4 sm:mb-5 drop-shadow-md">
                Find Your Place in{' '}
                <span className="italic font-light text-brand-gold">Central Florida</span>.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-light leading-relaxed max-w-xl mb-6 line-clamp-3 sm:line-clamp-none drop-shadow">
                {current.description}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#properties"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs uppercase tracking-widest font-semibold text-white bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze rounded-sm shadow-xl flex items-center gap-2 transition-all duration-300"
                >
                  <span>Explore All Properties</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="tel:+14074253553"
                  className="px-4 sm:px-5 py-2.5 sm:py-3 text-xs uppercase tracking-wider font-medium text-zinc-200 hover:text-white bg-black/50 hover:bg-black/70 border border-brand-bronze/40 rounded-sm backdrop-blur-md flex items-center gap-2 transition-colors"
                >
                  <Phone size={13} className="text-brand-gold" />
                  <span>Call Broker: +1 407-425-3553</span>
                </a>
              </div>
            </div>

            {/* Bottom HUD: Active Property Details Bar */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-white/10">
              {/* Active Property Metadata */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-gold">
                    {current.price}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono hidden md:inline">
                    • {current.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                  <MapPin size={13} className="text-brand-gold flex-shrink-0" />
                  <span className="truncate max-w-md">{current.address}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] sm:text-xs text-zinc-300 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Bed size={12} className="text-brand-gold" />
                    <span>{current.beds}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Bath size={12} className="text-brand-gold" />
                    <span>{current.baths}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Square size={12} className="text-brand-gold" />
                    <span>{current.sqft}</span>
                  </span>
                </div>
              </div>

              {/* Prev / Next Chevrons & Slide Counter */}
              <div className="flex items-center gap-2 sm:self-end">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-black/60 hover:bg-brand-bronze border border-brand-bronze/40 hover:border-brand-gold text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
                  aria-label="Previous Property"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="px-3 py-1.5 rounded-sm bg-black/60 border border-brand-bronze/40 text-xs text-brand-gold font-mono">
                  0{currentIndex + 1} / 0{total}
                </div>

                <button
                  type="button"
                  onClick={goToNext}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-black/60 hover:bg-brand-bronze border border-brand-bronze/40 hover:border-brand-gold text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
                  aria-label="Next Property"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Image Interactive Filmstrip Strip (Mouse Scroll / Click to Switch) */}
        <div className="mt-4 pt-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 font-medium">
              <Layers size={13} className="text-brand-gold" />
              <span>Florida Real Estate &amp; Land Co. Portfolio Showcase</span>
            </div>
            <span className="text-[11px] text-zinc-500 hidden sm:inline font-mono">
              Use mouse wheel anywhere on hero to flip images
            </span>
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {HERO_PROPERTIES.map((prop, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={prop.id}
                  onClick={() => selectIndex(idx)}
                  className={`relative rounded-sm overflow-hidden p-2 transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#181613] border-2 border-brand-gold shadow-[0_0_20px_rgba(218,166,116,0.35)] scale-[1.02]'
                      : 'bg-[#110f0d] border border-brand-bronze/25 hover:border-brand-bronze/60 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Thumbnail Image */}
                    <div className="relative w-14 h-12 rounded-sm overflow-hidden flex-shrink-0 border border-white/10">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-brand-gold/15" />
                      )}
                    </div>

                    {/* Meta */}
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-white truncate">
                        {prop.price}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate">
                        {prop.subdivision}
                      </div>
                      <div className="text-[9px] text-brand-gold/80 font-mono truncate">
                        {prop.beds} • {prop.baths}
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-bronze via-brand-gold to-brand-bronze"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Integrated Live MLS Search Console */}
        <div className="mt-6 pt-4">
          <PropertySearch />
        </div>
      </div>
    </section>
  );
}
