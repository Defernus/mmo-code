import React from "react";
import Document, {
  DocumentContext, Head, Html, Main, NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface Props {
    styleTags: Array<React.ReactElement<unknown>>;
}

class MyDocument extends Document<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    // eslint-disable-next-line react/jsx-props-no-spreading
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
