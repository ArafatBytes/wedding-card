import Head from 'next/head';
import '@/app/globals.css'; 
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Add any global scripts or initialization here
  }, [])

  return (
    <>
      <Head>
        <script src="/videoAutoplay.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
