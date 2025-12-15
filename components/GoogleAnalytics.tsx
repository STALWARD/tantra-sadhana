import Script from "next/script";

const GoogleAnalytics = ({ ga_id }: { ga_id: string }) => (
  <>
   <script async src="www.googletagmanager.com"></script>
  </>
);

export default GoogleAnalytics;
