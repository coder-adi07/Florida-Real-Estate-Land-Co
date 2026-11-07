import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
});

export const metadata = {
  title: 'Florida Real Estate & Land Co. | Orlando Sales Club — Luxury Real Estate & Land Brokerage',
  description: 'Premier Central Florida real estate brokerage with over 100 years of combined Realtor experience. Specializing in luxury homes, waterfront estates, vacant land, and high-yield investments across Orlando, Winter Park, Windermere, and Lake Nona.',
  keywords: [
    'Florida Real Estate & Land Co.',
    'Orlando Sales Club',
    'Daniel Coombs Broker',
    'Orlando luxury real estate',
    'Winter Park homes for sale',
    'Lake Nona luxury estates',
    'Windermere waterfront real estate',
    'Florida vacant land investment',
    'Orlando real estate broker',
  ],
  authors: [{ name: 'Florida Real Estate & Land Co.' }],
  creator: 'Florida Real Estate & Land Co.',
  metadataBase: new URL('https://www.orlandosalesclub.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.orlandosalesclub.com/',
    siteName: 'Florida Real Estate & Land Co.',
    title: 'Florida Real Estate & Land Co. | Orlando Sales Club',
    description: 'Find luxury homes, waterfront estates, and land opportunities across Central Florida with our team of veteran Realtors with over 100 years of combined experience.',
    images: [
      {
        url: '/assets/brand/logo/logo.png',
        width: 800,
        height: 400,
        alt: 'Florida Real Estate & Land Co. Logo',
      },
      {
        url: '/assets/properties/featured/9572-waterway-passage.jpg',
        width: 1200,
        height: 800,
        alt: 'Luxury Residence in Winter Garden, FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Real Estate & Land Co. | Orlando Sales Club',
    description: 'Over 100 years of combined real estate expertise in Orlando and Central Florida.',
    images: ['/assets/properties/featured/9572-waterway-passage.jpg'],
  },
  icons: {
    icon: '/assets/brand/brand-icons/favicon.png',
    shortcut: '/assets/brand/brand-icons/favicon.png',
    apple: '/assets/brand/brand-icons/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090909',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-brand-black text-brand-cream font-sans antialiased selection:bg-brand-bronze selection:text-white">
        {children}
      </body>
    </html>
  );
}

