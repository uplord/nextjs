import Script from "next/script";
import Layout from "../components/layout";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="/js/script.js"
        strategy="afterInteractive"
        type="text/javascript"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
