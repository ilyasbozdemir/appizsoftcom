import React from "react";

function PinterestAnalytics({ code }) {
  return (
    <>
      <meta name="p:domain_verify" content={code} />
    </>
  );
}

export default PinterestAnalytics;
