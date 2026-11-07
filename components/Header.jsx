'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, ArrowUpRight, Home, Building2, MapPin, Users, Video, Compass, Sparkles } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, structured luxury navigation taxonomy
  const navStructure = [
    {
      name: 'Home',
      href: '#',
      hasDropdown: false,
    },
    {
      name: 'Properties',
      href: '#properties',
      hasDropdown: true,
      badge: 'Live MLS',
      subSections: [
        {
          title: 'Featured Portfolio',
          desc: 'Curated luxury homes & estates',
          href: '#properties',
          icon: Sparkles,
        },
        {
          title: 'Homes For Sale',
          desc: 'Central Florida residential listings',
          href: 'https://www.orlandosalesclub.com/category/featured-properties/',
          isExternal: true,
          icon: Home,
        },
        {
          title: 'Properties For Rent',
          desc: 'Executive leasing via OrlandoRentals.cc',
          href: 'http://orlandorentals.cc/',
          isExternal: true,
          icon: Building2,
        },
        {
          title: 'Land & Investment',
          desc: 'Acreage & development parcels',
          href: '#services',
          icon: Compass,
        },
        {
          title: 'Stellar MLS Search',
          desc: 'Direct access to live MLS inventory',
          href: 'https://www.orlandosalesclub.com/homes-for-sale-search/',
          isExternal: true,
          icon: ArrowUpRight,
        },
      ],
    },
    {
      name: 'Communities',
      href: '#communities',
      hasDropdown: true,
      badge: '8 Enclaves',
      subSections: [
        { title: 'Winter Park', desc: 'Brick streets & chain of lakes', href: '#communities', icon: MapPin },
        { title: 'Windermere', desc: 'Butler Chain of Lakes prestige', href: '#communities', icon: MapPin },
        { title: 'Lake Nona & Laureate Park', desc: 'Medical City innovation hub', href: '#communities', icon: MapPin },
        { title: 'Baldwin Park', desc: 'Traditional town center living', href: '#communities', icon: MapPin },
        { title: 'Downtown Orlando', desc: 'Skyline penthouses & culture', href: '#communities', icon: MapPin },
        { title: 'Dr. Phillips & Bay Hill', desc: 'Restaurant Row & golf sanctuaries', href: '#communities', icon: MapPin },
        { title: 'Bella Collina', desc: 'Tuscan hillside country club', href: '#communities', icon: MapPin },
        { title: 'Coastal Florida', desc: 'Miami Beach, Sarasota & St. Pete', href: '#communities', icon: MapPin },
      ],
    },
    {
      name: 'Our Company',
      href: '#about',
      hasDropdown: true,
      subSections: [
        {
          title: 'Brokerage Heritage',
          desc: 'Serving Florida since 2000',
          href: '#about',
          icon: Building2,
        },
        {
          title: 'Our Real Estate Associates',
          desc: 'Meet our 15 full-time Realtors',
          href: '#team',
          icon: Users,
        },
        {
          title: 'Why Work With Us',
          desc: 'Over 100 years combined acumen',
          href: '#about',
          icon: Sparkles,
        },
        {
          title: 'Client Testimonials',
          desc: 'Verbatim client reviews & feedback',
          href: '#contact',
          icon: ArrowUpRight,
        },
      ],
    },
    {
      name: 'Our Marketing',
      href: '#marketing',
      hasDropdown: false,
    },
    {
      name: 'Contact',
      href: '#contact',
      hasDropdown: false,
    },
  ];

  const toggleAccordion = (index) => {
    setMobileAccordion(mobileAccordion === index ? null : index);
  };

  return (
    <>
      {/* Top Advisory Strip - Visible on Desktop */}
      <div className="bg-[#080706] border-b border-brand-bronze/20 text-xs py-2 px-4 sm:px-6 lg:px-8 text-brand-gold/90 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider text-[11px]">
          <div className="flex items-center gap-4 xl:gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <strong className="text-white font-medium">Florida Real Estate &amp; Land Co.</strong>
              <span className="text-zinc-500">•</span>
              <span>100+ Years Combined Realtor Acumen</span>
            </span>
            <span className="text-zinc-700 hidden xl:inline">|</span>
            <span className="text-zinc-400 hidden xl:inline">Downtown Orlando Headquarters • Stellar MLS Certified</span>
          </div>
          <div className="flex items-center gap-5 font-medium">
            <a
              href="tel:+14074253553"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-gold transition-colors duration-200"
            >
              <Phone size={11} className="text-brand-gold" />
              <span>+1 407-425-3553</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="mailto:info@danielcoombsPA.com"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-gold transition-colors duration-200"
            >
              <Mail size={11} className="text-brand-gold" />
              <span>info@danielcoombsPA.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0908]/95 backdrop-blur-md border-b border-brand-bronze/30 py-2 shadow-2xl'
            : 'bg-[#090909]/90 backdrop-blur-sm border-b border-white/5 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between min-h-[48px]">
            {/* Official Company Logo - Sleek, Crisp & Slim Navbar Proportions */}
            <div className="flex-shrink-0 z-10">
              <Link href="#" className="flex items-center group py-0.5">
                <div className="relative h-10 w-32 sm:h-11 sm:w-36 md:h-12 md:w-40 lg:h-12 lg:w-40 xl:h-13 xl:w-44 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/assets/brand/logo/official-logo.png"
                    alt="Florida Real Estate & Land Co."
                    fill
                    priority
                    quality={100}
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links - Centered EXACTLY in the middle (Majh Borabor) */}
            <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 xl:gap-2 pointer-events-auto">
              {navStructure.map((item, idx) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 flex items-center gap-1 whitespace-nowrap rounded-sm ${
                      activeDropdown === idx
                        ? 'text-brand-gold bg-white/5'
                        : 'text-zinc-300 hover:text-brand-gold hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={12}
                        className={`text-brand-gold/70 transition-transform duration-200 ${
                          activeDropdown === idx ? 'rotate-180 text-brand-gold' : ''
                        }`}
                      />
                    )}
                  </a>

                  {/* Desktop Dropdown Mega-Menu */}
                  {item.hasDropdown && activeDropdown === idx && (
                    <div
                      className={`absolute top-full pt-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 z-50 ${
                        item.name === 'Communities' ? 'left-1/2 -translate-x-1/2 w-[520px]' : 'left-0 w-72'
                      }`}
                    >
                      <div className="bg-[#121110] border border-brand-bronze/40 rounded-sm p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                        <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-brand-gold/90 px-2 pb-2 border-b border-brand-bronze/20 mb-2">
                          <span>{item.name} Directory</span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded bg-brand-bronze/30 text-[9px] text-white">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <div className={item.name === 'Communities' ? 'grid grid-cols-2 gap-1.5' : 'space-y-1'}>
                          {item.subSections.map((sub, sIdx) => {
                            const IconCmp = sub.icon;
                            return (
                              <a
                                key={sIdx}
                                href={sub.href}
                                target={sub.isExternal ? '_blank' : undefined}
                                rel={sub.isExternal ? 'noopener noreferrer' : undefined}
                                className="group/item flex items-start gap-2.5 p-2 rounded-sm hover:bg-brand-bronze/20 transition-colors"
                              >
                                <div className="p-1.5 rounded-sm bg-[#1c1a17] text-brand-gold group-hover/item:text-white group-hover/item:bg-brand-bronze transition-colors flex-shrink-0 mt-0.5">
                                  <IconCmp size={13} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-medium text-zinc-200 group-hover/item:text-brand-gold flex items-center gap-1 transition-colors">
                                    <span className="truncate">{sub.title}</span>
                                    {sub.isExternal && <ArrowUpRight size={10} className="opacity-70" />}
                                  </div>
                                  <div className="text-[10px] text-zinc-400 font-light truncate">
                                    {sub.desc}
                                  </div>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden lg:flex items-center justify-end flex-shrink-0 z-10">
              <a
                href="#properties"
                className="relative inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 rounded-sm bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze shadow-lg hover:shadow-brand-gold/25 whitespace-nowrap"
              >
                <span>Explore Properties</span>
                <ArrowUpRight size={13} className="ml-1.5" />
              </a>
            </div>

            {/* Mobile Header Controls: Clean, Compact, Never Cut Off */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Responsive Phone Header Explore Button */}
              <a
                href="#properties"
                className="px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-brand-bronze to-brand-gold rounded-sm shadow-md flex items-center gap-1 whitespace-nowrap"
              >
                <span>Explore</span>
                <ArrowUpRight size={12} />
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:+14074253553"
                className="p-1.5 sm:p-2 text-brand-gold hover:text-white transition-colors bg-[#181614] border border-brand-bronze/30 rounded-sm"
                aria-label="Call Broker"
              >
                <Phone size={15} />
              </a>

              {/* Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-zinc-200 hover:text-white bg-[#181614] border border-brand-bronze/30 rounded-sm focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[52px] sm:top-[60px] bottom-0 z-50 bg-[#0c0b0a]/98 backdrop-blur-2xl border-t border-brand-bronze/30 overflow-y-auto animate-in fade-in duration-200">
            <div className="px-4 sm:px-6 py-5 flex flex-col justify-between min-h-full max-w-md mx-auto">
              {/* Drawer Top Branding */}
              <div className="space-y-3">
                <div className="relative h-9 w-60 mb-2">
                  <Image
                    src="/assets/brand/logo/official-logo.png"
                    alt="Florida Real Estate & Land Co."
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold/70 pb-1 border-b border-white/10">
                  Navigation Menu
                </div>

                {navStructure.map((item, idx) => (
                  <div key={item.name} className="border-b border-white/5 pb-2">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleAccordion(idx)}
                          className="w-full flex items-center justify-between py-2 text-sm uppercase tracking-wider font-medium text-zinc-200 hover:text-brand-gold text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span>{item.name}</span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 rounded bg-brand-bronze/30 text-[9px] text-brand-gold font-mono">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-brand-gold transition-transform duration-200 ${
                              mobileAccordion === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Accordion Content */}
                        {mobileAccordion === idx && (
                          <div className="pl-3 pt-2 pb-1 space-y-2 border-l border-brand-bronze/30 my-1">
                            {item.subSections.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-xs text-zinc-300 hover:text-brand-gold"
                              >
                                <div className="font-medium flex items-center gap-1">
                                  <span>{sub.title}</span>
                                  {sub.isExternal && <ArrowUpRight size={10} />}
                                </div>
                                <div className="text-[10px] text-zinc-500 font-light">
                                  {sub.desc}
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm uppercase tracking-wider font-medium text-zinc-200 hover:text-brand-gold"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Drawer Bottom Actions - 100% Contained, Never Cut Off */}
              <div className="pt-6 mt-6 border-t border-brand-bronze/30 space-y-3">
                <a
                  href="#properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze text-white text-xs uppercase tracking-widest font-semibold rounded-sm shadow-xl flex items-center justify-center gap-2 text-center box-border"
                >
                  <span>Explore All Featured Properties</span>
                  <ArrowUpRight size={14} />
                </a>

                {/* Direct Broker Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="tel:+14074253553"
                    className="p-2.5 rounded-sm bg-[#161412] border border-brand-bronze/30 text-zinc-200 hover:text-white text-xs flex items-center justify-center gap-1.5"
                  >
                    <Phone size={13} className="text-brand-gold" />
                    <span>Call Broker</span>
                  </a>
                  <a
                    href="mailto:info@danielcoombsPA.com"
                    className="p-2.5 rounded-sm bg-[#161412] border border-brand-bronze/30 text-zinc-200 hover:text-white text-xs flex items-center justify-center gap-1.5"
                  >
                    <Mail size={13} className="text-brand-gold" />
                    <span>Email Team</span>
                  </a>
                </div>

                <div className="text-center text-[10px] text-zinc-500 pt-2 font-mono">
                  Florida Real Estate &amp; Land Co. • Orlando, FL
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
