'use client';

import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote: "DANIEL COOMBS is Exemplary! He is the BEST Licensed Real Estate Broker. He guided us through the sale process and made sure everything was done correctly! We appreciate him so much. We would give him 100 stars if we could! Thank you Daniel! We are forever grateful!",
      author: "Verified Property Seller",
      context: "Luxury Home Sale • Central Florida",
      agentMentioned: "Broker Daniel Coombs",
      rating: 5,
    },
    {
      quote: "One of the best around!! We thank you so much for the help, support, and informative instruction and guidance with this process. Lawonza Thomas was our realtor and she hands down made this the best experience with being first time home buyers. Just an amazing team!",
      author: "First-Time Home Buyers",
      context: "Residential Home Purchase • Orlando, FL",
      agentMentioned: "Lawonza Thomas, Realtor",
      rating: 5,
    },
    {
      quote: "Daniel Coombs and Ady Santiago provided amazing service and support with our vacant land property sale. They were upfront about the process and worked with our needs to make the closing process work around our needs. Communication was impeccable.",
      author: "Mike Desimone",
      context: "Vacant Land Property Owner",
      agentMentioned: "Daniel Coombs & Ady Santiago",
      rating: 5,
    },
    {
      quote: "Ady Santiago was a guiding hand that we didn’t know we needed. She helped us out from the beginning of the process to the end, answering my questions with zero hesitation. I highly recommend anyone purchasing a home to let her help you find what you are searching for!",
      author: "Alexander Montero",
      context: "Residential Buyer • Orlando",
      agentMentioned: "Ady Santiago, Realtor",
      rating: 5,
    },
    {
      quote: "My husband and I worked with Temika Kindred as a first-time home buyer. It has been a great experience. We've been at ease thanks to her expertise. We both highly recommend working with Temika!",
      author: "Homeowner Review",
      context: "First-Time Home Buyer • Central Florida",
      agentMentioned: "Temika Kindred, Realtor",
      rating: 5,
    },
    {
      quote: "Thank you for making the process with my house a stress free adventure. Your video advertising is so professional that it made my house irresistible to visit. Your guidance throughout the process was greatly appreciated. I will gladly use your services again.",
      author: "Chantal Belanger",
      context: "Property Investor",
      agentMentioned: "Florida Real Estate & Land Co.",
      rating: 5,
    },
    {
      quote: "Daniel, Just wanted to say that I've seen the website, and what a superb job you've done. Talk about 'showcase'! House looks amazing, especially on the video. Great job. Thank you!",
      author: "Steve Dennis",
      context: "Property Investor • HD Video Client",
      agentMentioned: "Broker Daniel Coombs",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-24 bg-[#0a0908] border-t border-brand-bronze/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
            <Quote size={13} className="text-brand-gold" />
            <span>Verifiable Client Testimonials</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Trusted by Central Florida <span className="italic text-brand-gold">Homeowners &amp; Investors</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3 font-light">
            Genuine words from clients who have bought, sold, leased, and invested alongside our brokerage since 2000.
          </p>
        </div>

        {/* Featured Testimonial Hero Stage */}
        <div className="max-w-4xl mx-auto bg-[#141210] border border-brand-bronze/40 rounded-sm p-8 sm:p-12 shadow-2xl relative">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand-bronze/20">
            <div className="flex items-center gap-1 text-brand-gold">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
              ))}
              <span className="text-xs font-mono text-zinc-400 ml-2">5.0 / 5.0 Verified Review</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-2.5 rounded-sm bg-[#1e1c19] text-zinc-300 hover:text-white hover:bg-brand-bronze/30 border border-brand-bronze/30 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs font-mono text-zinc-400 px-2">
                {currentIndex + 1} / {reviews.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-2.5 rounded-sm bg-[#1e1c19] text-zinc-300 hover:text-white hover:bg-brand-bronze/30 border border-brand-bronze/30 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="min-h-[160px] flex flex-col justify-center mb-8">
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 leading-snug italic">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

          {/* Author Details */}
          <div className="pt-6 border-t border-brand-bronze/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-medium text-white flex items-center gap-2">
                <span>{current.author}</span>
                <CheckCircle size={14} className="text-brand-gold" />
              </div>
              <div className="text-xs text-zinc-400 font-light mt-0.5">
                {current.context}
              </div>
            </div>

            <div className="inline-flex items-center px-3 py-1.5 rounded-sm bg-[#1c1a17] border border-brand-bronze/30 text-xs text-brand-gold font-mono">
              <span>Represented by: {current.agentMentioned}</span>
            </div>
          </div>
        </div>

        {/* Small Review Strip */}
        <div className="mt-12 text-center">
          <a
            href="https://www.orlandosalesclub.com/category/testimonials/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors"
          >
            <span>Read All Verified Client Reviews on Original Website</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
