import Script from 'next/script';
import "../styles/style.scss";

export default function Layout({ children }) {
  return (
    <>
      <Script
        src="/js/script.js"
        strategy="beforeInteractive"
        type="text/javascript"
        ></Script>
      <main>{children}</main>
    </>
  )
}