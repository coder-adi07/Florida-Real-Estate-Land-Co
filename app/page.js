import Header from '../components/Header';
import Hero from '../components/Hero';
import CompanyIntro from '../components/CompanyIntro';
import FeaturedProperties from '../components/FeaturedProperties';
import Communities from '../components/Communities';
import Services from '../components/Services';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Marketing from '../components/Marketing';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-cream selection:bg-brand-bronze selection:text-white flex flex-col justify-between">
      {/* 01: Premium Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 02: Hero & Search Console */}
        <Hero />

        {/* 03: Company Experience & Leadership */}
        <CompanyIntro />

        {/* 04: Asymmetric Featured Property Showcase */}
        <FeaturedProperties />

        {/* 05: Central Florida & Coastal Communities */}
        <Communities />

        {/* 06: Buy, Sell, Rent & Invest Capabilities */}
        <Services />

        {/* 07: Team & Associates Directory */}
        <Team />

        {/* 08: Why Choose Us */}
        <WhyChooseUs />

        {/* 09: Verified Client Testimonials */}
        <Testimonials />

        {/* 10: Property Marketing Experience */}
        <Marketing />

        {/* 11: Direct Conversion CTA */}
        <FinalCTA />
      </main>

      {/* 12: Comprehensive Luxury Footer */}
      <Footer />
    </div>
  );
}

