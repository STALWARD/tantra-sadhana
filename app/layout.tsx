import { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from 'react';
import Alert from '@/components/Alert';
import { Inter, Raleway, Grey_Qo, Dancing_Script, Pacifico } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter',// Optimization for Core Web Vitals 2025
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-raleway',// Optimization for Core Web Vitals 2025
});

export const greyQo = Grey_Qo({
  subsets: ["latin"],
  display: 'swap',
  weight: '400',
  variable: '--font-grey-qo',// Optimization for Core Web Vitals 2025
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tantrasadhana.org'),
  title: {
    default: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    template: '%s | KAUL TANTRA SADHANA' // Better for SEO on sub-pages
  },
  description: 'An Organization dedicated to spreading knowledge of real TANTRA & ASTROLOGY',
  category: 'education', // Changed from 'technology' to match content

  verification: {
    google: 'your-actual-google-code',
    yandex: 'yandex-code',
  },

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    description: 'An Organization dedicated to spreading knowledge of real TANTRA & ASTROLOGY',
    images: ['/og.png'],
  },
  
  openGraph: {
    title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    description: 'An Organization dedicated to spreading knowledge of real TANTRA & ASTROLOGY',
    url: 'https://www.tantrasadhana.org',
    siteName: 'KAUL TANTRA SADHANA',
    images: [
      {
        url: '/og.png',
        width: 1200, // Updated to 1200x630 for 2025 OG standards
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 1. Added inter.className to apply the font */}
      <body className={`${inter.variable} antialiased ${dancing.variable} ${pacifico.variable} ${raleway.variable} ${greyQo.variable}`}>
        {/* 2. Moved Analytics inside Suspense for better hydration */}
        <Suspense fallback={null}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          )}
        </Suspense>
        
        <SiteHeader />
        <Alert />
        
        {/* 3. Main wrapper */}
        <main className="relative overflow-hidden">
          {children}
        </main>
        
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
