/**
 * custom document
 * https://nextjs.org/docs/pages/building-your-application/routing/custom-document
 */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <h1>ahihihihihih</h1> */}
      </body>
    </Html>
  );
}
