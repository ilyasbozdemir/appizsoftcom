import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
export default class MyDocument extends Document {
  render() {
    const canonicalUrl = "https://www.appizsoft.com";
    const googleSiteVerification = ``;
    return (
      <Html lang="tr">
        <Head>

          <link rel="canonical" href={canonicalUrl} />
          <meta name="theme-color" content={"#54bec3"} />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />

          <link rel="icon" href="/favicon.ico" />

          <meta name="emotion-insertion-point" content="" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Raleway:ital,wght@0,200;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Raleway:ital,wght@0,200;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
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
