import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../sass/main.scss'

export default function app({ Component, pageProps }) {
  return (
    <body>
      <header className="section">
        <Navbar />
      </header>
      <Component {...pageProps} />
      <Footer />
    </body>
  )
}
