import Head from 'next/head';
import '@/app/globals.css'; 
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add any global scripts or initialization here
  }, [])

  return (
    <>
      <Head>
        <script src="/videoAutoplay.js" defer></script>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Playfair+Display&family=Cormorant&family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
