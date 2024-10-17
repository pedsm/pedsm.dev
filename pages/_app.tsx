import Head from 'next/head'
import Navbar from '/components/navbar'
import Footer from '/components/footer'
import { useTheme } from '/hooks/theme'

import './taste/taste.scss'
import '../sass/main.scss'
import { AppProps } from 'next/app'

export default function app({ Component, pageProps, router }: AppProps) {
  const theme = useTheme()

  if(router.pathname.includes('/api')) {
    return <Component></Component>
  }

  return (
    <>
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href={`${theme}/apple-touch-icon.png`}/>
          <link rel="icon" type="image/png" sizes="32x32" href={`${theme}/favicon-32x32.png`}/>
          <link rel="icon" type="image/png" sizes="16x16" href={`${theme}/favicon-16x16.png`}/>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />


          <meta name="Description" content="Hi I am Pedro and this is my personal page, a home for all my work"/>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>pedsm.dev</title>
          {/* Social */}
          <meta name="description" content="Hi, I'm Pedro" />
          <meta property="og:title" content="pedsm.dev" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://pedsm.dev/" />
          <meta property="og:image" content="/card.png" />
          <meta property="og:description" content="Hi, I'm Pedro" />
          <meta name="twitter:title" content="pedsm.dev" />
          <meta name="twitter:description" content="Hi, I'm Pedro" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@pedsm" />
          <meta name="twitter:image" content="https://pedsm.dev/card.png" />
          <meta name="twitter:image:alt" content="Hi" />
          <script type="text/javascript" src="/startWorker.js"></script>
      </Head>
      <header className="section">
        <Navbar />
      </header>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
