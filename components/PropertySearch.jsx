'use client';

import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PropertySearch() {
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('All Central Florida');
  const [propertyType, setPropertyType] = useState('All Properties');
  const [priceRange, setPriceRange] = useState('Any Price');

  const locations = [
    'All Central Florida',
    'Winter Garden & Horizon West',
    'Winter Park',
    'Windermere & Butler Chain',
    'Lake Nona & Medical City',
    'Downtown Orlando',
    'Dr. Phillips & Bay Hill',
    'Baldwin Park',
    'Kissimmee & Celebration',
    'Plant City & Tampa Environs',
    'South Florida & Coastal',
  ];

  const propertyTypes = [
    'All Properties',
    'Luxury Single Family Home',
    'Waterfront & Lakefront Estate',
    'Golf & Country Club Residence',
    'Executive Rental / Lease',
    'Vacant Land & Acreage',
    'Investment & Development Parcel',
  ];

  const priceRanges = [
    'Any Price',
    '$350,000 - $600,000',
    '$600,000 - $1,000,000',
    '$1,000,000 - $2,500,000',
    '$2,500,000 - $5,000,000+',
    'Rentals: $2,000 - $6,000/mo',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#121110]/95 backdrop-blur-xl border border-brand-bronze/30 rounded-sm shadow-2xl p-4 sm:p-6 lg:p-8">
      {/* Search Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
          {[
            { id: 'buy', label: 'Buy A Home' },
            { id: 'rent', label: 'For Rent' },
            { id: 'land', label: 'Land & Investment' },
            { id: 'sell', label: 'Home Valuation' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-200 text-center cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-bronze to-brand-gold text-white font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 bg-[#171513]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-brand-gold/80 font-mono pt-1 sm:pt-0">
          <ShieldCheck size={14} className="text-brand-gold flex-shrink-0" />
          <span className="text-[11px]">MLS Verified Live Inventory</span>
        </div>
      </div>

      {/* Search Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Location Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium flex items-center gap-1">
            <MapPin size={13} className="text-brand-gold" />
            Location
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#1c1a17] text-zinc-100 text-xs sm:text-sm rounded-sm border border-brand-bronze/30 px-3 py-3 focus:outline-none focus:border-brand-gold appearance-none cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#181614] text-white">
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium flex items-center gap-1">
            <Home size={13} className="text-brand-gold" />
            Property Type
          </label>
          <div className="relative">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-[#1c1a17] text-zinc-100 text-xs sm:text-sm rounded-sm border border-brand-bronze/30 px-3 py-3 focus:outline-none focus:border-brand-gold appearance-none cursor-pointer"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type} className="bg-[#181614] text-white">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium flex items-center gap-1">
            <DollarSign size={13} className="text-brand-gold" />
            Price Range
          </label>
          <div className="relative">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-[#1c1a17] text-zinc-100 text-xs sm:text-sm rounded-sm border border-brand-bronze/30 px-3 py-3 focus:outline-none focus:border-brand-gold appearance-none cursor-pointer"
            >
              {priceRanges.map((price) => (
                <option key={price} value={price} className="bg-[#181614] text-white">
                  {price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search CTA Button */}
        <div className="flex flex-col justify-end pt-1 md:pt-5">
          <a
            href="https://www.orlandosalesclub.com/homes-for-sale-search/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze text-white text-xs sm:text-sm font-semibold uppercase tracking-widest py-3 px-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
          >
            <Search size={16} />
            <span>Search MLS</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Honest MLS Disclosure */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 gap-2">
        <span>
          <strong className="text-brand-gold">Interactive Preview:</strong> Live queries route securely to Florida Real Estate & Land Co.&apos;s official IDX MLS search engine.
        </span>
        <a
          href="https://www.orlandosalesclub.com/homes-for-sale-search/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-gold hover:underline flex items-center gap-1"
        >
          <span>Open Full MLS Search Engine</span>
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

