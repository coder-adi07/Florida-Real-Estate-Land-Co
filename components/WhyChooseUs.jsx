'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Eye, FileText, Compass, Clock, Check, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      num: '01',
      title: 'Over 100 Years of Collective Experience',
      highlight: 'Centuries of Wisdom',
      desc: 'Real estate contracts and market cycles are complex. When negotiating high-stakes acquisitions or sales, having over a century of collective brokerage mastery on your side prevents costly errors and delivers maximum value.',
    },
    {
      num: '02',
      title: '100% Full-Time Dedicated Realtors',
      highlight: 'No Part-Time Hobbyists',
      desc: 'Every associate at Florida Real Estate & Land Co. is an active, full-time career professional. We do not employ part-time agents. We are fully committed to answering your calls, tracking market shifts, and closing on schedule.',
    },
    {
      num: '03',
      title: 'Florida Natives & Deep Local Lineage',
      highlight: 'Indigenous Market Insight',
      desc: 'Led by Florida native Daniel Coombs and associates who have lived in Orlando for 30+ years, our team understands which school zones are growing, how water rights affect waterfront estates, and where infrastructure is expanding.',
    },
    {
      num: '04',
      title: 'Pioneering Cinematic Video & Digital Reach',
      highlight: 'Thousands of Monthly Buyers',
      desc: 'We recognized the power of online video tours and high-definition photography back in 2000. Our proprietary web network attracts thousands of qualified buyers every month seeking Central Florida properties.',
    },
    {
      num: '05',
      title: 'Cross-Disciplinary Land & Residential Prowess',
      highlight: 'From Penthouses to Acreage',
      desc: 'Few brokerages can fluidly represent a $2M lakefront estate one day and negotiate a 50-acre commercial development tract the next. Our dual expertise in both luxury homes and vacant land provides unmatched versatility.',
    },
    {
      num: '06',
      title: 'Unwavering Client-First Ethics',
      highlight: 'Trust & Transparency',
      desc: 'We prioritize long-term relationships over short-term transaction volume. Over 70% of our business is built upon returning clients and direct referrals who trust our honest counsel implicitly.',
    },
  ];

  return (
    <section className="py-24 bg-[#0c0b0a] border-t border-brand-bronze/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-brand-bronze/20"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <Sparkles size={14} className="text-brand-gold" />
              <span>Authentic Distinction</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Why Central Florida Homeowners &amp; <span className="italic text-brand-gold">Investors Choose Us</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Founded in 2000 with a steadfast commitment to high-touch advocacy, unmatched market longevity, and authentic Florida roots.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, i) => (
            <motion.div
              key={diff.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(218, 166, 116, 0.6)' }}
              className="bg-[#121110] border border-brand-bronze/25 rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              {/* Giant numeral watermark */}
              <div className="absolute top-2 right-4 font-editorial text-6xl text-white/[0.03] select-none group-hover:text-brand-gold/[0.08] transition-colors">
                {diff.num}
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold font-mono mb-2">
                  {diff.highlight}
                </div>
                <h3 className="font-editorial text-xl text-white font-medium mb-3 group-hover:text-brand-gold transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-bronze/15 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="font-mono text-brand-gold/80">Pillar {diff.num}</span>
                <span className="text-zinc-500">Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
