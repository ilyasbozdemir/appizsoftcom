import React from "react";
import { site } from "../constants/site";

function Meta({
  pageTitle = site.title,
  description = site.description,
  keywords,
  author,
  isRobotIndex = true,
  themeColor,
  jsonLdData,
  image,
}) {
  const logo = site.baseUrl + "/logo.svg";

  const publisher = `Appizsoft`;

  const googleSiteVerification = ``;

  const _jsonLdData = jsonLdData || {
    context: "https://schema.org",
    type: "Organization",
    name: publisher,
    alternateName: site.baseUrl,
    url: site.baseUrl,
    logo: logo,
    contactPoint: {
      type: "ContactPoint",
      telephone: "",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
    sameAs: site.sosyalMediaLinks,
  };

  return (
    <>
    <base href={site.baseUrl} />
    <title>{pageTitle}</title>
    <link rel="icon" type="image/x-icon" href="/favicon.png" />
    <link rel="canonical" href={site.baseUrl} />

 
    <meta itemprop="name" content={pageTitle} />
    <meta itemprop="description" content={description} />
    <meta name="description" content={description} />
    <meta
      name="robots"
      content={isRobotIndex === true ? "index, follow" : "noindex"}
    />
    <meta
      name="google-site-verification"
      content={googleSiteVerification}
    />
    
    <meta name="keywords" content={keywords || ``} />
    <meta name="author" content={author} />
    <meta name="publisher" content={publisher} />
    <meta name="theme-color" content={themeColor} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@appizsoftcom" />
    <meta name="twitter:image" content={image} />

    <meta name="og:title" content={pageTitle} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content="website" />
    <meta property="og:site_name" content={pageTitle} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="60" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(_jsonLdData),
      }}
    />
  </>
  );
}

export default Meta;
