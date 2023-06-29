import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleAnalytics from "../plugins/GoogleAnalytics";
import FacebookPixel from "../plugins/FacebookPixel";
import GoogleTagManager from "../plugins/GoogleTagManager";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import TiktokPixel from "../plugins/TiktokPixel";

export default class MyDocument extends Document {
  render() {
    const googleSiteVerification = ``;
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://www.appizsoft.com"
        : "http://localhost:3000";

    const googleAnalyticsCode = ``;
    const facebookPixelCode = ``;
    const gtmCode = ``;
    const ttCode = `CIEJ1LJC77U441D19LNG`;

    return (
      <Html lang={`tr`}>
        <Head>
          <base href={baseUrl} />
          <meta name="language" content="Turkish" />
          <link rel="icon" href="/favicon.ico" />

          <link rel="canonical" href={baseUrl} />
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <meta name="theme-color" content={"#54bec3"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />
          <meta name="keywords" content={""} />
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
          <link
            href="https://www.dafontfree.net/embed/bW9udHNlcnJhdC1leHRyYS1ib2xkJmRhdGEvMTYvbS83ODYzMy9Nb250c2VycmF0LUV4dHJhQm9sZC5vdGY"
            rel="stylesheet"
            type="text/css"
          />

          <GoogleAnalytics code={googleAnalyticsCode} />
          <FacebookPixel code={facebookPixelCode} />
          <GoogleTagManager code={gtmCode} />
          <TiktokPixel code={ttCode} />
          
        </Head>
        <body>
          <GoogleTagManagerBody code={gtmCode} />
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
