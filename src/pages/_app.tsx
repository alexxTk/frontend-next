import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

// own css files here
import "../styles/globals.scss";
import "bootstrap-daterangepicker/daterangepicker.css";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"
    />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <title>Decompression Calculator</title>
  </Head>;
  return <Component {...pageProps} />;
}
export default MyApp;
