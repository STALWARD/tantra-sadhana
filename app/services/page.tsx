import Service from '@/components/Service';
import Faq from '@/components/Faq';
import Latest from "@/components/LatestPost";
import Newsletter from "@/components/Subscribe";
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Spiritual Services | Astrology, Tantra & Sri Vidya', // Fixed casing
  description: 'Explore professional spiritual services by Kaulbhaskar: Vedic Astrology consultations, authentic Tantric rituals, and Sri Vidya Upasana guidance.',
  keywords: 'Astrology consultation Patna, Tantric rituals, Sri Vidya guidance, Spiritual healing, Kaulbhaskar services',
  alternates: {
    canonical: '/services',
  }
};

const services = () => {
  // Service Schema for Google
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Spiritual and Astrology Services",
    "provider": {
      "@type": "Organization",
      "name": "Tantra Sadhana",
      "url": "https://www.tantrasadhana.org"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spiritual Consultations",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Astrology Consultation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tantric Rituals" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sri Vidya Guidance" } }
      ]
    }
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Service />
      <Faq />
      <Latest />
      <Newsletter />
    </>
  )
}

export default services


