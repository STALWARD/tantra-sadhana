'use client';
import Script from 'next/script';

type GoogleAnalyticsProps = {
  ga_id: string;
};

const GoogleAnalytics = ({ ga_id }: GoogleAnalyticsProps) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      strategy="afterInteractive"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga_id}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
