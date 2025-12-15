import Script from "next/script";

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
  <>
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js? 
      id=${ga_id}`}
    ></Script>
   <Script id="google-analytics">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'MEASUREMENT-ID');`
                }
            </Script>
  </>
);
export default GoogleAnalytics;
