import Head from "next/head";
import React from "react";
function Meta({
  pageTitle,
  description,
  keywords,
  author,
  publisher,
  isRobotIndex,
  image,
  url,
}) {
  return (
    <Head>
      <title>{pageTitle}</title>

      <meta charSet="utf-8" />

      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta itemprop="name" content={pageTitle} />
      <meta itemprop="description" content={description} />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={isRobotIndex === true ? "index, follow" : "noindex"}
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="3 days" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:image" content={image} />

      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="60" />
    </Head>
  );
}

export default Meta;
