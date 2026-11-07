'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communitiesOpen, setCommunitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'For Sale', href: '#properties' },
    { name: 'For Rent', href: '#services' },
    { name: 'Featured Properties', href: '#properties' },
    {
      name: 'Communities',
      href: '#communities',
      hasDropdown: true,
      subItems: [
        { name: 'Winter Park', href: '#communities' },
        { name: 'Windermere', href: '#communities' },
        { name: 'Lake Nona & Laureate Park', href: '#communities' },
        { name: 'Baldwin Park', href: '#communities' },
        { name: 'Downtown Orlando', href: '#communities' },
        { name: 'Dr. Phillips', href: '#communities' },
        { name: 'Bella Collina', href: '#communities' },
        { name: 'Reunion & Celebration', href: '#communities' },
      ],
    },
    { name: 'Associates', href: '#team' },
    { name: 'Our Company', href: '#about' },
    { name: 'Our Marketing', href: '#marketing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#0b0a09] border-b border-brand-bronze/20 text-xs py-2 px-4 sm:px-8 text-brand-gold/90 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              Over 100 Years of Combined Central Florida Real Estate Experience
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Serving Orlando, Winter Park, Windermere & Coastal Florida</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <a
              href="tel:+14074253553"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Phone size={12} className="text-brand-gold" />
              +1 407-425-3553
            </a>
            <a
              href="mailto:info@danielcoombsPA.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Mail size={12} className="text-brand-gold" />
              info@danielcoombsPA.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-bronze/30 py-3 shadow-2xl'
            : 'bg-brand-black/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Authentic Company Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/assets/brand/logo/logo.png"
                alt="Florida Real Estate & Land Co. - Orlando Sales Club"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setCommunitiesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setCommunitiesOpen(false)}
              >
                <a
                  href={item.href}
                  className="px-3 py-2 text-xs uppercase tracking-wider text-zinc-300 hover:text-brand-gold font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={13} className="text-brand-gold/70 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>

                {/* Dropdown Menu for Communities */}
                {item.hasDropdown && communitiesOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="bg-[#121110] border border-brand-bronze/30 rounded-sm p-3 backdrop-blur-lg">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-brand-gold/80 px-3 py-1 border-b border-brand-bronze/20 mb-1">
                        Featured Locations
                      </div>
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 text-xs text-zinc-300 hover:text-white hover:bg-brand-bronze/20 rounded-sm transition-colors duration-150"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#properties"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 rounded-sm bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze shadow-md hover:shadow-brand-gold/20"
            >
              <span>Explore Properties</span>
              <ArrowUpRight size={14} className="ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href="tel:+14074253553"
              className="p-2 text-brand-gold hover:text-white transition-colors"
              aria-label="Call Broker"
            >
              <Phone size={18} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-brand-black/98 border-b border-brand-bronze/30 px-6 py-6 transition-all duration-300 animate-in fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <div key={item.name} className="border-b border-zinc-800/80 pb-2">
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-wider text-zinc-200 hover:text-brand-gold font-medium block"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <div className="pl-4 pt-2 grid grid-cols-2 gap-1.5">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs text-zinc-400 hover:text-brand-gold py-1"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#properties"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 text-xs uppercase tracking-widest font-semibold text-white bg-gradient-to-r from-brand-bronze to-brand-gold rounded-sm shadow-md"
                >
                  Explore Properties
                </a>
                <div className="text-center text-xs text-zinc-400 pt-2 flex flex-col gap-1">
                  <span>Direct: +1 407-425-3553</span>
                  <span>info@danielcoombsPA.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
