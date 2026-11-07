'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Users2, Building2, MapPin, ArrowRight } from 'lucide-react';

export default function CompanyIntro() {
  const pillars = [
    {
      title: 'Client-First Philosophy',
      desc: 'Founded on the principle of providing uncompromised service with the client’s perspective at the forefront of every transaction.',
    },
    {
      title: 'Over 100 Years Combined Acumen',
      desc: 'Our full-time licensed associates bring unmatched depth in Florida contract law, pricing strategies, and local municipal zoning.',
    },
    {
      title: 'Pioneering Video Marketing',
      desc: 'Since 2000, we have led Central Florida in high-definition video walkthroughs and dedicated digital showcases reaching thousands each month.',
    },
    {
      title: 'Specialized Land & Investment Division',
      desc: 'From prime acreage and vacant parcels to luxury waterfront retreats and executive leases, we serve both private buyers and institutional investors.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d0c0b] border-t border-brand-bronze/20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-bronze/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait of Broker Daniel Coombs & Florida Heritage (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Bronze Frame */}
              <div className="absolute -inset-2.5 border border-brand-bronze/30 rounded-sm transform -rotate-1 hidden sm:block pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative bg-[#161412] p-4 sm:p-5 border border-brand-bronze/40 rounded-sm shadow-2xl">
                <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-zinc-900">
                  <Image
                    src="/assets/team/agents/daniel-coombs-full.jpg"
                    alt="Daniel Coombs - Licensed Real Estate Broker, Florida Real Estate & Land Co."
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Identification Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 backdrop-blur-md p-3.5 border border-brand-bronze/30 rounded-sm">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                      Principal Broker &amp; Founder
                    </div>
                    <div className="font-editorial text-lg text-white font-medium">
                      Daniel Coombs, P.A.
                    </div>
                    <div className="text-xs text-zinc-400 font-light mt-0.5">
                      Florida Native • Licensed Real Estate Broker
                    </div>
                  </div>
                </div>

                {/* Sub-card: Florida Seal & Address */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src="/assets/brand/logo/floridalogo.png"
                        alt="Florida Seal"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-zinc-200">Downtown Orlando HQ</div>
                      <div className="text-[10px] text-zinc-400">618 E South St, Suite 500</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-brand-gold font-mono">License</div>
                    <div className="text-[11px] text-zinc-300">Florida Brokerage</div>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-brand-bronze to-brand-gold p-4 sm:p-5 rounded-sm shadow-2xl text-white max-w-[200px]"
              >
                <div className="font-editorial text-3xl sm:text-4xl font-normal leading-none">24+</div>
                <div className="text-[10px] uppercase tracking-wider font-semibold mt-1">
                  Years Continuous Service to Florida Homeowners
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <Building2 size={14} className="text-brand-gold" />
              <span>Our Heritage &amp; Experience</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              A Century of Combined Expertise.{' '}
              <span className="text-brand-gold font-medium">One Singular Focus</span>: Your Success.
            </h2>

            <div className="space-y-4 text-zinc-300 font-light leading-relaxed mb-8">
              <p>
                <strong className="text-white font-medium">Florida Real Estate &amp; Land Company</strong> has been dedicated to serving the real estate and investment needs of property owners, buyers, and tenants across Central Florida since <strong className="text-brand-gold font-medium">2000</strong>.
              </p>
              <p>
                Our mission has remained steadfast for nearly a quarter of a century: to deliver bespoke brokerage services with our clients’ perspective in mind, pioneer inventive real estate marketing approaches, and maintain an elite team of dedicated full-time Realtors representing over 100 years of collective wisdom.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, borderColor: 'rgba(218, 166, 116, 0.5)' }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-sm bg-[#141311] border border-brand-bronze/20 transition-colors duration-200"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-brand-bronze/20">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors group"
              >
                <span>Read Full Associate Credentials</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://www.orlandosalesclub.com/our-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 hover:text-brand-gold transition-colors"
              >
                View Original Company History →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
