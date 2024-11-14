import Script from "next/script";
import Layout from "../components/layout";
import { DM_Sans } from 'next/font/google'
import "../styles/style.scss";

const dmSans = DM_Sans({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={dmSans.className}>
      <Script
        src="/js/script.js"
        strategy="beforeInteractive"
        type="text/javascript"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
