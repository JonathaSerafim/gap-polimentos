import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Devolvendo o brilho do seu lar"
        />
        <title>Gap Polimentos</title>
        <noscript><img height="1" width="1" style={{display: 'none'}}
        src="../../public/gap-logo-cream.png"
        /></noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;