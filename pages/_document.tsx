import projects from '../projects'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/navbar'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <Main />
        <NextScript />
      </Html>
    )
  }
}
