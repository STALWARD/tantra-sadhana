import { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tantrasadhana.org'),
  title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
  description: 'An Organization dedicated for spreading knowledge of real TANTRA & ASTROLOGY',
  category: 'technology',

  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  itunes: {
    appId: 'myAppStoreID',
    appArgument: 'myAppArgument',
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },

  alternates: {
    canonical: 'https://www.tantrasadhana.org',
    languages: {
      'en-US': 'https://www.tantrasadhana.org/en-US',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://www.tantrasadhana.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://www.tantrasadhana.org/rss',
    },
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    description: 'An Organization dedicated for spreading knowledge of real TANTRA & ASTROLOGY',
    images: ['https://www.tantrasadhana.org/og.png'],
  },
  
  openGraph: {
    title: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    description: 'An Organization dedicated for spreading knowledge of real TANTRA & ASTROLOGY',
    url: 'https://www.tantrasadhana.org',
    siteName: 'KAUL TANTRA SADHANA # KAULBHASKAR',
    
    images: [
      {
        url: 'https://www.tantrasadhana.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.tantrasadhana.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Og custom alt',
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
      <body>
                  {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <SiteHeader />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  )
}
