import { useReducer } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Fragment } from 'react'

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
        <link href="styles/main.css" rel="stylesheet" />
        <title>pedsm.dev</title>
      </Head>
      <body data-theme={theme}>
        <header className="section">
          <a onClick={() => {
            if (theme == 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }} href="#">Flip</a>
          <Navbar />
        </header>
        <Component {...pageProps} />
        <Footer />
      </body>
    </Fragment>
  )
}
