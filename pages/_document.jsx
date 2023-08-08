import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { colors } from "../src/foundations/colors";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import ExternalFonts from "../fonts/ExternalFonts";
import React from "react";
import Analytics from "../configuration/Analytics";
import { site } from "../constants/site";
import { testimonialsData } from "../constants/testimonialsData";
import { googleSiteVerification } from "../lib/googleSiteVerification";

const themeColor = colors.primary[100];
export default class MyDocument extends Document {
  render() {
    const { langValue } = this.props;
    return (
      <Html lang={langValue || site.lang} prefix="og: http://ogp.me/ns#">
        <Head>
          {/*
 <link rel="canonical" href={site.baseUrl} />
             */}

          <meta charSet="utf-8" />

          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="language" content="Turkish" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />

          <link
            rel="alternate"
            hreflang="x-default"
            href={`${site.baseUrl}/tr`}
          />
          <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/tr`} />
          <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en`} />
          <link
            rel="alternate"
            type="application/rss+xml"
            href="/rss.xml"
            title="Appizsoft Blog RSS Feed"
          />

          <meta name="copyright" content="Appizsoft" />

          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />
          <link rel="manifest" href="/manifest.json" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="3 days" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <meta name="theme-color" content={themeColor} />

          <ExternalFonts />
          <Analytics />

          <link href="/styles/globals.css" />
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
