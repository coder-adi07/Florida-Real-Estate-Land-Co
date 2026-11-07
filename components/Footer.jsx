'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navColumns = [
    {
      title: 'Properties & Portfolio',
      links: [
        { name: 'Featured Properties', href: '#properties' },
        { name: 'Homes for Sale', href: '#properties' },
        { name: 'Properties for Rent', href: '#services' },
        { name: 'Vacant Land & Acreage', href: '#services' },
        { name: 'Stellar MLS Search', href: 'https://www.orlandosalesclub.com/homes-for-sale-search/' },
      ],
    },
    {
      title: 'Featured Communities',
      links: [
        { name: 'Winter Park Real Estate', href: '#communities' },
        { name: 'Windermere & Butler Chain', href: '#communities' },
        { name: 'Lake Nona & Laureate Park', href: '#communities' },
        { name: 'Baldwin Park Enclave', href: '#communities' },
        { name: 'Downtown Orlando High-Rises', href: '#communities' },
        { name: 'Bella Collina & Celebration', href: '#communities' },
      ],
    },
    {
      title: 'Company & Associates',
      links: [
        { name: 'Our Full-Time Team', href: '#team' },
        { name: 'Broker Daniel Coombs', href: '#about' },
        { name: 'Our Marketing Arsenal', href: '#marketing' },
        { name: 'Verified Testimonials', href: 'https://www.orlandosalesclub.com/category/testimonials/' },
        { name: 'Original Company Portal', href: 'https://www.orlandosalesclub.com/' },
      ],
    },
  ];

  return (
    <footer className="bg-[#070606] border-t border-brand-bronze/30 text-zinc-400 text-xs">
      {/* Upper Footer: Logo, Brand Statement, Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="#" className="inline-block">
              <div className="relative h-14 w-52">
                <Image
                  src="/assets/brand/logo/logo.png"
                  alt="Florida Real Estate & Land Co. - Orlando Sales Club"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-zinc-300 font-light leading-relaxed max-w-sm">
              Dedicated full-time licensed Florida Realtors providing personalized client advocacy, luxury residential representation, and strategic land investments across Central Florida since 2000.
            </p>

            <div className="space-y-2 text-zinc-300">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-gold flex-shrink-0" />
                <span>618 E South St, Ste 500, Orlando, FL 32801</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-gold flex-shrink-0" />
                <a href="tel:+14074253553" className="hover:text-brand-gold transition-colors">
                  +1 407-425-3553
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-gold flex-shrink-0" />
                <a href="mailto:info@danielcoombsPA.com" className="hover:text-brand-gold transition-colors">
                  info@danielcoombsPA.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/OrlandoSalesClubcom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#161412] border border-brand-bronze/30 text-zinc-300 hover:text-white hover:bg-brand-bronze/30 flex items-center justify-center transition-colors"
                aria-label="Official Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.orlandosalesclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#161412] border border-brand-bronze/30 text-zinc-300 hover:text-white hover:bg-brand-bronze/30 flex items-center justify-center transition-colors"
                aria-label="Official Website"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.orlandosalesclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-[#161412] border border-brand-bronze/30 text-zinc-300 hover:text-white hover:bg-brand-bronze/30 flex items-center justify-center transition-colors"
                aria-label="Official Twitter"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {navColumns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-white border-b border-brand-bronze/20 pb-2">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-zinc-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        {link.href.startsWith('http') && (
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Compliance & Badges Bar */}
      <div className="border-t border-brand-bronze/20 bg-[#0a0909] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative h-12 w-44">
              <Image
                src="/assets/brand/brand-icons/realtor-mls-equal-housing.png"
                alt="Realtor, Stellar MLS, Equal Housing Opportunity"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="relative h-10 w-10">
              <Image
                src="/assets/brand/logo/floridalogo.png"
                alt="State of Florida Real Estate Emblem"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-[11px] text-zinc-400 text-center md:text-right font-light leading-relaxed max-w-xl">
            Equal Housing Opportunity. Brokerage licensed in Florida. Member of National Association of Realtors® (NAR), Florida Realtors®, and Stellar MLS.
          </div>
        </div>
      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-white/5 bg-[#050404] py-6 text-[10px] text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="leading-relaxed">
            <strong>Stellar MLS Disclaimer:</strong> All real estate property information deemed reliable but not guaranteed and should be independently verified. All properties are subject to prior sale, change, or withdrawal. Neither listing broker(s) nor Florida Real Estate &amp; Land Co. shall be responsible for any typographical errors, misinformation, or misprints and shall be held totally harmless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-white/5 text-zinc-500">
            <div>
              © {currentYear} Florida Real Estate &amp; Land Co. / Orlando Sales Club. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.orlandosalesclub.com/privacy-policy/" className="hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="https://www.orlandosalesclub.com/terms-of-use/" className="hover:underline">Terms of Use</a>
              <span>•</span>
              <a href="https://www.orlandosalesclub.com/sitemap/" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

