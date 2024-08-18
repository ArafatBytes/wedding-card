import Head from 'next/head';
import '../app/globals.css'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
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
