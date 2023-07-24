import React from "react";
import { site } from "../constants/site";

function MetaHead({
  pageTitle = site.title,
  description = site.description,
  keywords,
  author,
  isRobotIndex = true,
  themeColor,
  image,
}) {
  const logo = site.baseUrl + "/logo.svg";

  const publisher = `Appizsoft`;

  return (
    <>
      <title>{pageTitle}</title>

      <meta itemprop="name" content={pageTitle} />
      <meta itemprop="description" content={description} />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={isRobotIndex === true ? "index, follow" : "noindex"}
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
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="348" />
      
    </>
  );
}

export default MetaHead;
