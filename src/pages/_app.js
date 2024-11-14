import Script from "next/script";
import Layout from "../components/layout";
import "../styles/style.scss";
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="/js/script.js"
        strategy="beforeInteractive"
        type="text/javascript"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
