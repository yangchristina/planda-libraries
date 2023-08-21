import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Get the css and reset the internal css representation.
 * This is very *IMPORTANT* to do as the server might handle multiple requests
 * and we don't want to have the css accumulated from previous requests
 */

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
