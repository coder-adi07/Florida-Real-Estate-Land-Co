'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowUpRight, Sparkles, ExternalLink, X, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: 'Waterway Passage Luxury Residence',
      address: '9572 Waterway Passage Drive',
      city: 'Winter Garden, FL 34787',
      price: '$840,000',
      type: 'Single Family Luxury',
      category: 'sale',
      beds: '4 Beds',
      baths: '3.5 Baths',
      sqft: '3,240 Sq Ft',
      image: '/assets/properties/featured/9572-waterway-passage.jpg',
      badge: 'Featured Showcase',
      description: 'Sophisticated contemporary living in sought-after Winter Garden. Elegant architectural lines, seamless indoor-outdoor living, and close proximity to Hamlin and Horizon West.',
      features: ['Hamlin Town Center proximity', 'Gourmet Chef Kitchen', 'Screened Outdoor Lanai', 'Custom Primary Suite', 'Stellar MLS Verified'],
      mlsId: 'MFR800521571',
    },
    {
      id: 2,
      title: 'Historic Character Estate',
      address: '1305 E Baker Street',
      city: 'Plant City, FL 33563',
      price: '$675,000',
      type: 'Estate / Character Property',
      category: 'sale',
      beds: '4 Beds',
      baths: '3 Baths',
      sqft: '2,980 Sq Ft',
      image: '/assets/properties/featured/1305-e-baker-st.jpg',
      badge: 'Prime Investment',
      description: 'Rare architectural stature with expansive grounds, vintage detailing, and exceptional value for investors or discerning private owners seeking distinction.',
      features: ['Expansive Private Grounds', 'Architectural Stature', 'High-Yield Investment Potential', 'Convenient I-4 Corridor Access'],
      mlsId: 'MFR782168898',
    },
    {
      id: 3,
      title: 'Lake Nona Golf Enclave Residence',
      address: '10520 Belfry Cir',
      city: 'Orlando, FL 32832',
      price: '$495,000',
      type: 'Golf & Country Enclave',
      category: 'sale',
      beds: '3 Beds',
      baths: '2.5 Baths',
      sqft: '2,150 Sq Ft',
      image: '/assets/properties/featured/10520-belfry-cir.jpg',
      badge: 'Lake Nona Corridor',
      description: 'Nestled in the high-growth Lake Nona corridor minutes from Medical City, USTA National Campus, and premier championship golf amenities.',
      features: ['Minutes to Medical City', 'Championship Golf Access', 'Open Concept Architecture', 'High Rental Demand Area'],
      mlsId: 'MFR813891695',
    },
    {
      id: 4,
      title: 'Mt. Vernon Suburban Sanctuary',
      address: '3880 Mt Vernon Way',
      city: 'Kissimmee, FL 34741',
      price: '$525,000',
      type: 'Residential Single Family',
      category: 'sale',
      beds: '4 Beds',
      baths: '3 Baths',
      sqft: '2,420 Sq Ft',
      image: '/assets/properties/featured/3880-mt-vernon-way.jpg',
      badge: 'Verified MLS',
      description: 'Spacious floor plan with immaculate appointments, private screened lanai, and prime access to Orlando theme corridors and major expressways.',
      features: ['Private Screened Swimming Lanai', 'Split Floor Plan', 'Low HOA Community', 'Turnkey Condition'],
      mlsId: 'MFR812590484',
    },
    {
      id: 5,
      title: 'Matchlock Executive Lease Residence',
      address: '10224 Matchlock Drive',
      city: 'Orlando, FL 32821',
      price: '$2,100 / mo',
      type: 'Executive Rental',
      category: 'rent',
      beds: '3 Beds',
      baths: '2 Baths',
      sqft: '1,840 Sq Ft',
      image: '/assets/properties/featured/10224-matchlock-dr.jpg',
      badge: 'Executive Rental',
      description: 'Managed under the Orlando Rentals division of Florida Real Estate & Land Co. Impeccable finishes, convenient central positioning, and turnkey comfort.',
      features: ['Orlando Rentals Exclusive', 'Vetted Professional Management', 'Central Location near I-Drive', 'Lawn Maintenance Included'],
      mlsId: 'MFR814356001',
    },
  ];

  const mainFeatured = properties[0];
  const secondaryProperties = properties.slice(1, 3);
  const bottomProperties = properties.slice(3, 5);

  return (
    <section id="properties" className="py-24 bg-brand-black relative">
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
              <Sparkles size={13} className="text-brand-gold" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Featured Properties &amp; <span className="text-brand-gold font-medium">Verified Listings</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Authentic properties actively marketed by Florida Real Estate &amp; Land Co. across Central Florida MLS databases.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {[
              { id: 'all', label: 'All Portfolio' },
              { id: 'sale', label: 'For Sale' },
              { id: 'rent', label: 'Executive Rentals' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-200 ${
                  activeFilter === f.id
                    ? 'bg-gradient-to-r from-brand-bronze to-brand-gold text-white font-semibold shadow-md'
                    : 'bg-[#181614] text-zinc-400 hover:text-white border border-brand-bronze/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetric Luxury Editorial Grid Layout */}
        <div className="space-y-8">
          {/* Top Asymmetric Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Major Feature (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 group relative bg-[#131210] border border-brand-bronze/30 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl hover:border-brand-gold/60 transition-all duration-300"
            >
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => setSelectedProperty(mainFeatured)}
              >
                <Image
                  src={mainFeatured.image}
                  alt={mainFeatured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-brand-bronze/90 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-white rounded-sm">
                    {mainFeatured.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md text-[10px] text-zinc-300 font-mono rounded-sm">
                    MLS: {mainFeatured.mlsId}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-medium">
                      {mainFeatured.type}
                    </span>
                    <div className="font-editorial text-3xl sm:text-4xl text-white font-normal mt-0.5">
                      {mainFeatured.price}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium mb-1">
                    {mainFeatured.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-light mb-3">
                    <MapPin size={13} className="text-brand-gold" />
                    <span>{mainFeatured.address}, {mainFeatured.city}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-4">
                    {mainFeatured.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-bronze/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6 text-xs text-zinc-300">
                    <div className="flex items-center gap-1.5">
                      <Bed size={15} className="text-brand-gold" />
                      <span>{mainFeatured.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={15} className="text-brand-gold" />
                      <span>{mainFeatured.baths}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square size={15} className="text-brand-gold" />
                      <span>{mainFeatured.sqft}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProperty(mainFeatured)}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Property Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 2 Stacked Supporting Property Cards (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryProperties.map((prop) => (
                <motion.div
                  key={prop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group bg-[#131210] border border-brand-bronze/30 rounded-sm overflow-hidden flex flex-col sm:flex-row hover:border-brand-gold/60 transition-all duration-300 shadow-xl"
                >
                  <div
                    className="relative aspect-[4/3] sm:w-2/5 overflow-hidden flex-shrink-0 bg-zinc-900 cursor-pointer"
                    onClick={() => setSelectedProperty(prop)}
                  >
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 bg-black/80 text-[9px] uppercase tracking-wider text-brand-gold rounded-sm">
                        {prop.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-gold font-mono">
                        {prop.type}
                      </div>
                      <div className="font-editorial text-xl sm:text-2xl text-white font-normal mt-0.5">
                        {prop.price}
                      </div>
                      <h4 className="font-editorial text-base text-zinc-100 font-medium mt-1">
                        {prop.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">
                        {prop.address}, {prop.city}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-brand-bronze/20 flex items-center justify-between text-xs text-zinc-400">
                      <span>{prop.beds} • {prop.baths}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedProperty(prop)}
                        className="text-brand-gold hover:text-white flex items-center gap-0.5 text-[11px] font-medium cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottomProperties.map((prop) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group bg-[#131210] border border-brand-bronze/30 rounded-sm overflow-hidden flex flex-col hover:border-brand-gold/60 transition-all duration-300 shadow-xl"
              >
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => setSelectedProperty(prop)}
                >
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-brand-bronze/90 text-[10px] uppercase font-semibold text-white tracking-wider rounded-sm">
                      {prop.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-gold font-mono">
                        {prop.type}
                      </span>
                      <div className="font-editorial text-2xl text-white font-normal">
                        {prop.price}
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-300 font-mono">
                      MLS: {prop.mlsId}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-editorial text-lg text-white font-medium mb-1">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mb-3">
                      {prop.address}, {prop.city}
                    </p>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed mb-4">
                      {prop.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-bronze/20 flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-3">
                      <span>{prop.beds}</span>
                      <span>•</span>
                      <span>{prop.baths}</span>
                      <span>•</span>
                      <span>{prop.sqft}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProperty(prop)}
                      className="text-brand-gold hover:text-white flex items-center gap-1 font-medium text-xs cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA Strip */}
        <div className="mt-12 p-8 rounded-sm bg-gradient-to-r from-[#171513] via-[#1c1916] to-[#171513] border border-brand-bronze/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-editorial text-xl text-white font-normal">
              Looking for something specific across the Central Florida MLS?
            </h4>
            <p className="text-xs text-zinc-400 font-light mt-1">
              Access real-time inventory spanning Orange, Seminole, Osceola, Lake, and coastal counties.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://www.orlandosalesclub.com/homes-for-sale-featured/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-brand-bronze to-brand-gold hover:from-brand-gold hover:to-brand-bronze text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <span>View All Company Listings</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#141210] border border-brand-bronze/50 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-brand-bronze transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 flex-shrink-0">
                <Image
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-2.5 py-1 bg-brand-bronze text-[10px] uppercase font-bold tracking-widest text-white rounded-sm">
                    {selectedProperty.badge}
                  </span>
                  <div className="font-editorial text-3xl sm:text-4xl text-white font-normal mt-1">
                    {selectedProperty.price}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="font-editorial text-2xl text-white font-medium">
                    {selectedProperty.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-light mt-1">
                    <MapPin size={13} className="text-brand-gold" />
                    <span>{selectedProperty.address}, {selectedProperty.city}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 p-4 bg-[#1a1815] border border-brand-bronze/20 rounded-sm text-center">
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500">MLS ID</div>
                    <div className="text-xs font-mono text-brand-gold font-medium mt-0.5">{selectedProperty.mlsId}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500">Beds</div>
                    <div className="text-xs text-white font-medium mt-0.5">{selectedProperty.beds}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500">Baths</div>
                    <div className="text-xs text-white font-medium mt-0.5">{selectedProperty.baths}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500">Living Area</div>
                    <div className="text-xs text-white font-medium mt-0.5">{selectedProperty.sqft}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-gold mb-2">
                    Property Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                {selectedProperty.features && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-gold mb-2">
                      Key Highlights &amp; Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProperty.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 size={13} className="text-brand-gold flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Action CTA */}
                <div className="pt-4 border-t border-brand-bronze/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <a
                      href="tel:+14074253553"
                      className="px-5 py-2.5 bg-gradient-to-r from-brand-bronze to-brand-gold text-white text-xs uppercase tracking-widest font-semibold rounded-sm flex items-center gap-2 hover:opacity-95"
                    >
                      <Phone size={13} />
                      <span>Speak with Broker</span>
                    </a>
                    <a
                      href={`mailto:info@danielcoombsPA.com?subject=Inquiry on ${selectedProperty.title} (${selectedProperty.mlsId})`}
                      className="px-5 py-2.5 bg-[#1f1d1a] border border-brand-bronze/40 text-brand-cream text-xs uppercase tracking-widest font-semibold rounded-sm hover:border-brand-gold flex items-center gap-2"
                    >
                      <Mail size={13} />
                      <span>Email Inquiry</span>
                    </a>
                  </div>

                  <a
                    href="https://www.orlandosalesclub.com/category/featured-properties/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-gold hover:underline flex items-center gap-1 font-mono"
                  >
                    <span>View on MLS Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
