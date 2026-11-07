'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Users2, Award, Phone, Mail, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Team() {
  const [activeCategory, setActiveCategory] = useState('all');

  const agents = [
    {
      name: 'Daniel Coombs',
      role: 'Licensed Real Estate Broker & Principal',
      tag: 'Leadership',
      category: 'leadership',
      image: '/assets/team/agents/daniel-coombs.jpg',
      bio: 'Florida native and seasoned real estate broker with multiple professional designations. Leading Florida Real Estate & Land Co. since 2000 with a client-first perspective and pioneering HD marketing.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Brokerage Founder & FL Native',
    },
    {
      name: 'Colin Wallace',
      role: 'Licensed Realtor',
      tag: 'Luxury Specialist',
      category: 'luxury',
      image: '/assets/team/agents/colin-wallace.jpg',
      bio: 'Originally from Ontario, Canada; Colin has been a trusted Central Florida real estate professional since 2002. Living in Orlando since 1993, he brings deep local community roots and high-trust advisory.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Serving Orlando Since 2002',
    },
    {
      name: 'Dwight Thomas',
      role: 'Licensed Realtor',
      tag: 'Luxury Specialist',
      category: 'luxury',
      image: '/assets/team/agents/dwight-thomas.jpg',
      bio: 'Former professional Olympic Gold Medalist and World Champion track and field athlete, 7-time College All-American. Brings championship discipline, relentless drive, and focus to simplifying every client transaction.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Olympic Gold Medalist',
    },
    {
      name: 'Audrey Barber',
      role: 'Licensed Realtor',
      tag: 'Residential Specialist',
      category: 'residential',
      image: '/assets/team/agents/audrey-barber.jpg',
      bio: 'Proud longtime native of Orlando with over 33 years residing and raising her family in the metropolis. Deeply familiar with neighborhood dynamics, school districts, and community character.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Orlando Native 33+ Yrs',
    },
    {
      name: 'Temika Kindred',
      role: 'Licensed Realtor & Buyer Advocate',
      tag: 'Buyer Advocate',
      category: 'residential',
      image: '/assets/team/agents/temika-kindred.jpg',
      bio: 'Celebrated by clients for making complex purchase journeys smooth and empowering. A fierce client advocate dedicated to education, contract clarity, and strong competitive offer positioning.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Client Advocate Specialist',
    },
    {
      name: 'Jessica Baines',
      role: 'Licensed Real Estate Broker',
      tag: 'Leadership',
      category: 'leadership',
      image: '/assets/team/agents/jessica-baines.jpg',
      bio: 'Third-generation real estate broker licensed in Florida since 2007. Specializes in serving international real estate investors, luxury relocations, and high-net-worth buyers.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: '3rd-Gen Broker & International',
    },
    {
      name: 'Ginny Bissonnette',
      role: 'Licensed Realtor',
      tag: 'Luxury & Waterfront',
      category: 'luxury',
      image: '/assets/team/agents/ginny-bissonnette.jpg',
      bio: 'Born in England and Florida resident for over 33 years. Grew up walking multi-million dollar intracoastal and oceanfront construction sites, pairing construction acumen with client advocacy.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Waterfront & Construction Acumen',
    },
    {
      name: 'Shelly Johnson',
      role: 'Licensed Realtor (ABR®, PSA, GKC)',
      tag: 'Luxury Specialist',
      category: 'luxury',
      image: '/assets/team/agents/shelly-johnson.jpg',
      bio: 'South Florida native licensed since 2006. Holds prestigious Accredited Buyer’s Representative (ABR®), Pricing Strategy Advisor (PSA), and Gold Key Certification for professional excellence.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'ABR®, PSA, Gold Key Certified',
    },
    {
      name: 'Ady Santiago',
      role: 'Licensed Real Estate Agent',
      tag: 'Land & Residential',
      category: 'land',
      image: '/assets/team/agents/ady-santiago.jpg',
      bio: 'Widely praised for meticulous attention to detail, exceptional communication, and guidance through complex vacant land sales and residential acquisitions across Central Florida.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Vacant Land & Buyer Pro',
    },
    {
      name: 'Sean Kelley',
      role: 'Licensed Realtor',
      tag: 'Luxury Specialist',
      category: 'luxury',
      image: '/assets/team/agents/sean-kelley.jpg',
      bio: 'Relocated from New York and specialized in the luxury Florida residential market since the early 2000s. Renowned for discreet representation and going above and beyond for every client.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Luxury Enclaves Specialist',
    },
    {
      name: 'Lucy Doyan',
      role: 'Licensed Realtor',
      tag: 'Residential Specialist',
      category: 'residential',
      image: '/assets/team/agents/lucy-doyan.png',
      bio: 'Spent 25 years in the medical field before bringing her rigorous commitment to ethics, integrity, and client care to Central Florida residential property advisory.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: '25-Yr Ethics & Integrity',
    },
    {
      name: 'Daryl & Chris Noonan',
      role: 'Licensed Realtor Team',
      tag: 'Residential Specialist',
      category: 'residential',
      image: '/assets/team/agents/daryl-noonan.jpg',
      bio: 'Husband and wife real estate partnership dedicated to leaving every client situation better than they found it. Experts in lifestyle transitions and residential dreams.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Dedicated Husband-Wife Team',
    },
    {
      name: 'Lawonza Thomas',
      role: 'Licensed Realtor',
      tag: 'Buyer Advocate',
      category: 'residential',
      image: '/assets/team/agents/lawonza-thomas.png',
      bio: 'Highly commended by clients as making first-time home buying the most seamless and rewarding experience possible through patient guidance and complete transparency.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'First-Time Buyer Specialist',
    },
    {
      name: 'Margarete Grespan',
      role: 'Licensed Realtor',
      tag: 'Residential Specialist',
      category: 'residential',
      image: '/assets/team/agents/margarete-grespan.jpg',
      bio: 'Dedicated real estate associate delivering personalized advisory, multilingual client support, and comprehensive assistance across Central Florida neighborhoods.',
      phone: '+1 407-425-3553',
      email: 'info@danielcoombsPA.com',
      highlight: 'Multilingual Advisory',
    },
  ];

  const filtered = activeCategory === 'all'
    ? agents
    : agents.filter(a => a.category === activeCategory);

  return (
    <section id="team" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-bronze/20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <Users2 size={14} className="text-brand-gold" />
              <span>Full-Time Professional Directory</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Meet Our Real Estate Team &amp; <span className="italic text-brand-gold">Associates</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-light">
              Over 100 years of combined real estate experience. Dedicated full-time licensed Florida Realtors with verifiable track records and authentic passion for Central Florida.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Associates' },
              { id: 'leadership', label: 'Brokerage Leadership' },
              { id: 'luxury', label: 'Luxury Specialists' },
              { id: 'residential', label: 'Residential Advocates' },
              { id: 'land', label: 'Land Specialists' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveCategory(f.id)}
                className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 ${
                  activeCategory === f.id
                    ? 'bg-gradient-to-r from-brand-bronze to-brand-gold text-white font-semibold shadow-md'
                    : 'bg-[#151412] text-zinc-400 hover:text-white border border-brand-bronze/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((agent, i) => (
            <div
              key={i}
              className="group bg-[#131210] border border-brand-bronze/25 rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-gold/60 transition-all duration-300 shadow-xl"
            >
              {/* Agent Portrait Container */}
              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
                <Image
                  src={agent.image}
                  alt={`${agent.name} - ${agent.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-brand-black/85 backdrop-blur-md border border-brand-bronze/30 text-[10px] uppercase font-bold tracking-wider text-brand-gold rounded-sm">
                    {agent.highlight}
                  </span>
                </div>

                {/* Overlaid Name & Role */}
                <div className="absolute bottom-3 inset-x-3">
                  <h3 className="font-editorial text-xl text-white font-medium">
                    {agent.name}
                  </h3>
                  <div className="text-[11px] text-brand-gold font-light">
                    {agent.role}
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4 line-clamp-4">
                  {agent.bio}
                </p>

                <div className="pt-3 border-t border-brand-bronze/20 flex items-center justify-between">
                  <a
                    href={`tel:${agent.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Phone size={12} className="text-brand-gold" />
                    <span>Call Direct</span>
                  </a>

                  <a
                    href="https://www.orlandosalesclub.com/associates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-gold hover:text-white font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Full Profile</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collective Experience Footnote */}
        <div className="mt-12 text-center p-6 bg-[#161412] border border-brand-bronze/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <Award size={24} className="text-brand-gold flex-shrink-0" />
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-white">
                Unrivaled Central Florida Realtor Density
              </div>
              <div className="text-xs text-zinc-400">
                All associates operate full-time out of our Orlando headquarters with full MLS licensing and Realtor ethics compliance.
              </div>
            </div>
          </div>

          <a
            href="https://www.orlandosalesclub.com/associates/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white flex items-center gap-1.5 flex-shrink-0"
          >
            <span>View Associates Directory on Original Site</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

