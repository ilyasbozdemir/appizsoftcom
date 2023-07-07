import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import ExternalFonts from "../fonts/ExternalFonts";

import React from "react";
import Analytics from "../configuration/Analytics";
import { site } from "../constants/site";

export default class MyDocument extends Document {
  render() {
    const { langValue } = this.props;

    return (
      <Html lang={langValue || site.lang}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.png" type="image/png" />

          <ExternalFonts />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

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

  // URL'den dil bölümünü alın
  const { asPath } = ctx;
  const language = asPath.split("/")[1]; // İlk bölüm dil bölümü olacak
  let langValue = "tr";

  if (language === "tr" || language === "en") {
    langValue = language;
  }

  return {
    ...initialProps,
    langValue,
  };
};
