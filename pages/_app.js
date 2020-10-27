import { useReducer } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Fragment } from 'react'
import '../sass/main.scss'

function reducer(_, theme) {
  document.body.classList.toggle('dark-theme')
  document.cookie = `theme=${theme}`
  return theme
}

export default function app({ Component, pageProps }) {
  const [theme, setTheme] = useReducer(reducer, 'light')
  return (
    <Fragment>
      <Head>
          <meta name="Description" content="Hi I am Pedro and this is my personal page, a home for all my work"/>
          <meta name="theme-color" content="#000000"/>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>pedsm.dev</title>
      </Head>
      <body data-theme={theme}>
        <header className="section">
          {/* <a onClick={() => {
            if (theme == 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }} href="#">Flip</a> */}
          <Navbar />
        </header>
        <Component {...pageProps} />
        <Footer />
      </body>
    </Fragment>
  )
}
