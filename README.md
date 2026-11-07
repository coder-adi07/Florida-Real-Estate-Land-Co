# Florida Real Estate & Land Co. — Premium Redesign Proposal
### Brand: Orlando Sales Club | Website: [orlandosalesclub.com](https://www.orlandosalesclub.com/)

A modern luxury real estate digital experience engineered with **Next.js**, **JavaScript**, **Tailwind CSS**, and **Framer Motion**. Designed as a senior creative director proposal for the company's owner and leadership team to elevate their digital brand while maintaining authentic identity, genuine credentials, and verified listings.

---

## 1. Executive Summary & Design Direction

- **Design Philosophy**: *Luxury Real Estate Editorial + Asymmetric Property Showcase*
- **Primary Objective**: Transform an outdated WordPress theme into a sophisticated, high-performance, contemporary web experience worthy of a brokerage with **over 100 years of combined Realtor experience**.
- **Authentic Brand Preservation**:
  - **Company Logo**: Original crest and wordmark preserved directly from official assets.
  - **Color Palette**: Signature Deep Obsidian (`#090909`), Florida Bronze (`#996633`), Soft Warm Gold (`#DAA674`), and Warm Cream (`#FBF9F5`).
  - **Authentic Information**: Real address (618 E South St, Ste 500, Orlando, FL 32801), real phone (`+1 407-425-3553`), real email (`info@danielcoombsPA.com`), real agents, and verified Stellar MLS properties.

---

## 2. 12 Editorial Homepage Sections

1. **Section 01: Premium Navigation** — Sticky header with original company logo, advisory strip highlighting 100+ years of experience, direct contact actions, and mobile drawer.
2. **Section 02: Hero & Property Experience** — Asymmetric composition featuring the verified Winter Garden showcase ($840,000), HD video tour preview, and authentic company tagline.
3. **Section 03: Property Search Console** — Interactive multi-tab demo interface (Buy, Rent, Land & Investment, Home Valuation) with direct links to the official Stellar MLS search engine.
4. **Section 04: Introduction / Company Experience** — Spotlight on Broker Daniel Coombs (P.A.), Florida heritage, 24+ years serving Central Florida, and core client-first pillars.
5. **Section 05: Asymmetric Featured Properties** — Editorial portfolio showcasing verified listings with exact prices, addresses, beds, baths, and square footage:
   - *9572 Waterway Passage Drive, Winter Garden, FL 34787* — **$840,000**
   - *1305 E Baker Street, Plant City, FL 33563* — **$675,000**
   - *10520 Belfry Cir, Orlando, FL 32832 (Lake Nona)* — **$495,000**
   - *3880 Mt Vernon Way, Kissimmee, FL 34741* — **$525,000**
   - *10224 Matchlock Drive, Orlando, FL 32821* — **$2,100 / mo** (Executive Lease)
6. **Section 06: Explore Central Florida Communities** — Geographic specialization across Winter Park, Windermere, Lake Nona, Baldwin Park, Downtown Orlando, Dr. Phillips, Bella Collina, and Coastal Florida.
7. **Section 07: Buy, Sell, Rent & Invest** — Four distinct brokerage divisions: Purchasing Luxury Homes, Selling with HD Video, Executive Rentals (OrlandoRentals.cc), and Vacant Land Acquisitions.
8. **Section 08: Meet Our Real Estate Team** — Professional directory featuring verified full-time associates with genuine photos, designations, and backgrounds (Daniel Coombs, Colin Wallace, Audrey Barber, Temika Kindred, Olympic Gold Medalist Dwight Thomas, Jessica Baines, Ginny Bissonnette, Shelly Johnson, Ady Santiago, Sean Kelley, Lucy Doyan, Daryl & Chris Noonan, Lawonza Thomas, Margarete Grespan, Jessica Bell).
9. **Section 09: Why Work With Us** — Editorial grid of 6 core differentiators focusing on full-time commitment, deep Florida roots, and video marketing.
10. **Section 10: Client Testimonials** — Authentic client reviews extracted verbatim from official records with reviewer names, agent representation credits, and 5-star validation.
11. **Section 11: Property Marketing Arsenal** — High-definition video walkthroughs, drone cinematography, and web syndication reaching thousands of unique monthly visitors.
12. **Section 12: Final Conversion & Footer** — Direct broker hotline (`+1 407-425-3553`), confidential consultation intake, Equal Housing Opportunity, Realtor®, and Stellar MLS legal notices.

---

## 3. Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript Only (`.js` & `.jsx` exclusively — No TypeScript)
- **Styling**: Tailwind CSS with custom editorial typography and luxury palette
- **Typography**: Next/Font Google (`Playfair Display` + `Lato`)
- **Icons**: Lucide React
- **Performance**: 100% Static Pre-rendering (`○ (Static) prerendered`), optimized images

---

## 4. Local Development & Production Build

### Running Locally
```bash
# Start development server
npm run dev

# Or start directly with node
node ./node_modules/next/dist/bin/next dev
```

### Production Build & Local Preview
```bash
# Compile optimized static production build
npm run build

# Start production server on port 3000
npm run start
```

---

## 5. Vercel Deployment Instructions

This project is fully optimized and configured for zero-configuration deployment to **Vercel**:

1. **Via Vercel Web Dashboard**:
   - Push this repository to GitHub / GitLab / Bitbucket.
   - Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
   - Import the repository.
   - Framework Preset: **Next.js** (automatically detected).
   - Click **"Deploy"**.

2. **Via Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Select default options and deploy to production:
   ```bash
   vercel --prod
   ```
