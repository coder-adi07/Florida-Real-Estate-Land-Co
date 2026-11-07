'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Compass, Play, Sparkles } from 'lucide-react';
import PropertySearch from './PropertySearch';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-16 overflow-hidden bg-brand-black">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-bronze/10 rounded-full blur-[140px] pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none -ml-40" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Top Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-bronze/20 pb-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-bronze/15 border border-brand-bronze/30 text-[11px] uppercase tracking-widest text-brand-gold font-medium">
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
              <span>100+ Years Combined Experience</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Compass size={14} className="text-brand-gold" />
              <span>Stellar MLS &amp; MFRMLS Certified</span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.span variants={itemVariants} className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              Central Florida &amp; Coastal Luxury Brokerage
            </motion.span>

            <motion.h1 variants={itemVariants} className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white mb-6">
              Find Your Place in{' '}
              <span className="italic font-light text-brand-gold">Central Florida</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mb-8">
              A seasoned collective of dedicated, full-time Realtors with over a century of combined experience. 
              We curate extraordinary residential retreats, waterfront sanctuaries, and strategic Florida land investments with tailored personal representation.
            </motion.p>

            {/* CTAs and Direct Credentials */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full max-w-xl">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#properties"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-xl hover:shadow-brand-gold/20 flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Properties</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#team"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-[#171513] hover:bg-[#221f1c] text-brand-cream border border-brand-bronze/40 hover:border-brand-gold text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-200 text-center justify-center"
              >
                Meet Our Realtors
              </motion.a>

              <a
                href="tel:+14074253553"
                className="text-xs text-brand-gold/90 hover:text-white uppercase tracking-wider font-medium flex items-center justify-center sm:justify-start gap-1.5 py-1 sm:py-0 sm:ml-2"
              >
                <span>Call Broker: +1 407-425-3553</span>
              </a>
            </motion.div>

            {/* Credibility Stats Strip */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-bronze/20 max-w-lg">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl text-brand-gold font-normal">100+</div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Years Combined Team Exp.</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="font-editorial text-2xl sm:text-3xl text-white font-normal">2000</div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Serving FL Since</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="font-editorial text-2xl sm:text-3xl text-brand-gold font-normal">100%</div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 mt-0.5">Full-Time Realtors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Asymmetric Architectural Photo Showcase (5 cols) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Primary Architectural Showcase Card */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-brand-bronze/30 shadow-2xl group">
                <Image
                  src="/assets/properties/featured/9572-waterway-passage.jpg"
                  alt="9572 Waterway Passage Drive, Winter Garden, FL"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Overlaid Editorial Property Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left">
                  <div className="inline-block px-2.5 py-1 bg-brand-bronze/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-white rounded-sm mb-2">
                    Active Featured Listing
                  </div>
                  <div className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                    $840,000
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 font-light mt-0.5">
                    9572 Waterway Passage Drive, Winter Garden, FL 34787
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-brand-gold font-mono mt-2">
                    <span>Waterway Passage Enclave</span>
                    <span>•</span>
                    <span>Single Family Luxury</span>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Supporting Visual: Video Tour Showcase */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 aspect-[4/3] rounded-sm overflow-hidden border-2 border-brand-gold/60 shadow-2xl hidden sm:block bg-black group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById('marketing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Image
                  src="/assets/marketing/video-poster.jpg"
                  alt="High Definition Florida Real Estate Video Tour"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                  sizes="220px"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-9 h-9 rounded-full bg-brand-bronze/90 border border-brand-gold text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Play size={14} className="ml-0.5 fill-white text-white" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white drop-shadow">
                    HD Video Tours
                  </span>
                  <span className="text-[9px] text-brand-gold drop-shadow">
                    Signature Marketing
                  </span>
                </div>
              </motion.div>

              {/* Floating Florida Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#161412] border border-brand-bronze/40 rounded-full p-2.5 shadow-xl hidden sm:flex items-center justify-center"
              >
                <Image
                  src="/assets/brand/logo/floridalogo.png"
                  alt="Florida State Real Estate Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Integrated Live MLS Search Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 pt-6"
        >
          <PropertySearch />
        </motion.div>
      </div>
    </section>
  );
}
