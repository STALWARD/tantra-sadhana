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
  variable: '--font-inter',
  weight: ['100', '200', '400', '600', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tantrasadhana.org'),
  title: {
    default: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    template: '%s | KAUL TANTRA SADHANA'
  },
  description: 'An Organization dedicated to spreading knowledge of real TANTRA & ASTROLOGY',
  category: 'education',
  verification: {
    google: '5tYRdplDPwWDy3P-eL_LKSjatRo6LvoC_qD-bkG_UHY',
    yandex: 'yandex-code',
  },
  alternates: {
    canonical: 'https://www.tantrasadhana.org',
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
        width: 1200,
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

const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tantra Sadhana",
    url: "https://www.tantrasadhana.org",
    logo: "https://www.tantrasadhana.org", // Ensure this URL is correct
    sameAs: [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* 1. Preload the Hero Video to shorten the Critical Request Chain */}
        <link 
          rel="preload" 
          href="/hero-bg2.mp4" 
          as="video" 
          type="video/mp4" 
        />
        
        {/* 2. Preconnect to external domains (e.g., Google Analytics or Fonts) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* 3. Inject SEO Schema in Head for faster indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={null}>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          )}
        </Suspense>
        
        <SiteHeader />
        <Alert />
        
        <main className="relative overflow-hidden min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
