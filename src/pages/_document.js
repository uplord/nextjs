import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect, useState } from 'react';

export default function Document() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(systemTheme);
  }, []);

  return (
    <Html lang="en" className={theme}>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
