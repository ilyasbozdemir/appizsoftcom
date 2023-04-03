import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
export default class MyDocument extends Document {
  render() {
    const canonicalUrl = '';
    const googleSiteVerification = ``
    return (
      <Html lang="tr">
        <Head>

          <link rel="canonical" href={canonicalUrl} />
          <meta name="theme-color" content={"#fff"} />
          <meta
            name="google-site-verification"
            content={googleSiteVerification}
          />

          <link rel="icon" href="/favicon.ico" />

          <meta name="emotion-insertion-point" content="" />


          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{ "@context": "http://schema.org", "@type": "Organization", "name": "Güven Otel", "telephone": [ "+905435403160", "+05312486322" ] "address": { "@type": "PostalAddress", "streetAddress": "Oda Mahallesi Belediye Sokak Güneyyurt Belediyesi Yanı, 70400, 70450 Ermenek/Karaman", "addressLocality": "Ermenek", "postalCode": "70450", "addressCountry": "TR" }, "email": "info@guvenotell.com", "url": "https://www.guvenotell.com/", "logo": "https://www.guvenotell.com/images/logo.png", "description": "Güven Otel, otel konaklama hizmeti veren bir şirket.", "contactPoint": { "@type": "ContactPoint", "telephone": [ "+905435403160", "+05312486322" ] "contactType": "Müşteri Hizmetleri" }, "openingHours": "Mo-Fr 09:00-22:00" }`
            }}
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
