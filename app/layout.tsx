import { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from 'react';
import Alert from '@/components/Alert';
import { Inter } from 'next/font/google';
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter',// Optimization for Core Web Vitals 2025
   weight: ['100', '200', '400', '600', '700'],
});

export const viewport = {
  viewport: 'width=device-width, initial-scale=1',
}

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

  robots: { 
    index: true, follow: true 
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
      <body className={`${inter.className} antialiased`}>
        {/* 2. Moved Analytics inside Suspense for better hydration */}
        <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          )}
        </Suspense>
        
        <SiteHeader />
        <Alert />
        
        {/* 3. Main wrapper */}
        <main className="relative overflow-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
