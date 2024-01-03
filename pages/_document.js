import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script async src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
