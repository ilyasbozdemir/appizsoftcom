import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";
import { ColorModeScript } from "@chakra-ui/react";
import GoogleTagManagerBody from "../plugins/GoogleTagManagerBody";
import ExternalFonts from "../fonts/ExternalFonts";

import React from "react";
import Analytics from "../configuration/Analytics";
import { site } from "../constants/site";

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      name: "Ürünler",
      url: "/tr/products",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Kurumsal",
      url: null,
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          name: "Hakkımızda",
          url: "/tr/about-appizsoft",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Kariyer",
          url: "/tr/careers",
        },
      ],
    },
    {
      "@type": "SiteNavigationElement",
      name: "Hizmetler",
      url: "/tr/services",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Blog",
      url: "/tr/blog",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Bize Ulaşın",
      url: "/tr/contact",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Teklif İste",
      url: "/tr/get-a-quote",
    },
  ],
  "inLanguage": "tr" 
};

const jsonLdSchema2 = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Appizsoft",
  "url": site.baseUrl,
  "logo": site.image,
  "description": site.description,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": site.address.streetAddress,
    "addressLocality": site.address.addressLocality,
    "addressRegion": site.address.addressRegion,
    "postalCode": site.address.postalCode,
    "addressCountry": site.address.addressCountry,
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": site.telephone,
      "contactType": "customer support",
      "availableLanguage": "Turkish",
    },
  ],
  "sameAs": site.sosyalMediaLinks.map((link) => link.link),
};

export default class MyDocument extends Document {
  render() {
    const { langValue } = this.props;

    return (
      <Html lang={langValue || site.lang}>
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="language" content="Turkish" />

          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=no"
          />

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="3 days" />
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

          <link rel="stylesheet" href="/styles/globals.css" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
          />
             <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema2) }}
          />
        </Head>

        <body style={{ bg: "#111" }}>
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
