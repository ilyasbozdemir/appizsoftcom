import Head from "next/head";
import React from "react";

function JsonLd({ data }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data),
        }}
      />
    </>
  );
}

export default JsonLd;
