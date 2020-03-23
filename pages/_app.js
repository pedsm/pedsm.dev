import Head from 'next/head'
import Navbar from '../components/navbar'
import { Fragment } from 'react'

export default function app({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>pedsm.dev</title>
      </Head>
      <section className="section">
        <Navbar />
        <Component {...pageProps} />
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>pedsm.dev</strong> is built by <a href="https://github.com/pedsm">Pedro Mendonça</a>, using <a href="https://nextjs.org/">Next.js</a> and deployed with <a href="https://zeit.co/home">Now</a>
          </p>
        </div>
      </footer>
    </Fragment>
  )
}
