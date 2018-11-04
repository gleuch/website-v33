import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class PageDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    return {
      ...renderPage(),
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default PageDocument;
