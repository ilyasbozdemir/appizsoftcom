import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { colors } from "../src/foundations/colors";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import ExternalFonts from "../fonts/ExternalFonts";
import React from "react";

import { site } from "../constants/site";

const themeColor = colors.primary[100];

/*
function AnalyticsIsVisible() {
  const [isAnalyticsVisible, setIsAnalyticsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsAnalyticsVisible(
      window.location.origin === appizsoftOfficialDomainName
    );
  }, []);

  return isAnalyticsVisible;
}
*/
export default class MyDocument extends Document {
  render() {
    const { langValue, pageContext } = this.props;
    const appizsoftOfficialDomainName = site.baseUrl;

    //const isAnalyticsVisible = AnalyticsIsVisible();

    return (
      <Html lang={langValue || site.lang} prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />

          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="language" content="Turkish" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="1 days" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <meta name="theme-color" content={themeColor} />

          <ExternalFonts />

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
