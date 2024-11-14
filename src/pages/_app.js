import { useEffect, useState } from 'react';
import Layout from "../components/layout";
import { DM_Sans } from 'next/font/google'
import "../styles/style.scss";

const dmSans = DM_Sans({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const detectSystemTheme = () => {
      const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(userTheme);
    };

    detectSystemTheme();

    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    themeMediaQuery.addEventListener('change', detectSystemTheme);

    return () => {
      themeMediaQuery.removeEventListener('change', detectSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <Layout className={dmSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
