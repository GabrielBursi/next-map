import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import GlobalStyles from 'styles/global'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Map's Next</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin="" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="mapas com next"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress color="#e20e8d" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  )
}

export default App
