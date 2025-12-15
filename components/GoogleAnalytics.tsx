import Script from "next/script";

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
  <>
    <script async src="www.googletagmanager.com"></script>
    <Script
      id="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
      }}
    ></Script>
  </>
);
export default GoogleAnalytics;
