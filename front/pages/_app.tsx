import { AppProps, AppContext } from "next/app";
import Head from "next/head";
import React from "react";

import { appWithTranslation } from "@i18n";

import "./styles.css";
import "./root.css";

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>MMOcode</title>
      </Head>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  console.log(pageProps);
  return { pageProps };
};

export default appWithTranslation(App);
