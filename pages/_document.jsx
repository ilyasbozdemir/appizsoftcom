import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import ExternalFonts from "../fonts/ExternalFonts";

import MetaHead from "../configuration//MetaHead";
import React from "react";
import Analytics from "../configuration/Analytics";
import { site } from "../constants/site";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={site.lang}>
        <Head>
          <MetaHead
            keywords={site.keywords}
            author={site.author}
            publisher={site.publisher}
            isRobotIndex={site.isRobotIndex}
            image={site.image}
            themeColor={site.themeColor}
          />

          <ExternalFonts />

          <Analytics />
        </Head>

        <body>
          <GoogleTagManagerBody code={site.analyticsCodes.gtmCode} />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App {...props} />;
        },
    });
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};
