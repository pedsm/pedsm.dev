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
      <Html>
        <Head>
          <meta name="Description" content="Hi I am Pedro and this is my personal page, a home for all my work"/>
          {projects.map((proj, i) => (
            <link key={i} rel="preload" href={proj.img} as="image" />
          ))}
          <meta name="theme-color" content="#000000"/>
          <meta charSet="utf-8" />
          <link href="styles/main.css" rel="stylesheet" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}
