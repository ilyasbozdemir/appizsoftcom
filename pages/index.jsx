import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../lib/detectBrowserLanguage";
import Head from "next/head";
import { site } from "../constants/site";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Tarayıcı dilini al
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) {
      router.push(`/tr`);
    }
    if (browserLanguage.startsWith("en")) {
      router.push(`/en`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{site.title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/tr`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/tr`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en`} />

        <meta itemprop="description" content={site.description} />
        <meta name="description" content={site.description} />
        <meta name="publisher" content={"AppizSoft"} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={site.title} />
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/appizsoftcom/"
        />
        <meta
          property="article:modified_time"
          content="2023-08-10T19:18:34+00:00"
        />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
        <meta name="twitter:data1" content="1 dakika" />
      </Head>
    </>
  );
}
