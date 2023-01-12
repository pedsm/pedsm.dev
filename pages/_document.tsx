import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="#FFFFFF"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="#000000"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
