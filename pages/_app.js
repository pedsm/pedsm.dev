import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
import '../sass/main.scss'

export default function app({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
          <meta name="Description" content="Hi I am Pedro and this is my personal page, a home for all my work"/>
          <meta name="theme-color" content="#000000"/>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>pedsm.dev</title>
      </Head>
      <header className="section">
        <Navbar />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
