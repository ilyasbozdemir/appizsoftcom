import Head from "next/head";
import React from "react";

function JsonLd({ data }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      </Head>
    </>
  );
}

export default JsonLd;
