import React from "react";

import { site } from "../constants/site";
import PinterestAnalytics from "../plugins/PinterestAnalytics";
import GoogleAnalytics from "../plugins/GoogleAnalytics";
import FacebookPixel from "../plugins/FacebookPixel";
import GoogleTagManager from "../plugins/GoogleTagManager";
import TiktokPixel from "../plugins/TiktokPixel";

function Analytics() {
  return (
    <>
      <PinterestAnalytics code={site.analyticsCodes.pinterestAnalyticsCode} />
      <GoogleAnalytics code={site.analyticsCodes.googleAnalyticsCode} />
      <FacebookPixel code={site.analyticsCodes.facebookPixelCode} />
      <GoogleTagManager code={site.analyticsCodes.gtmCode} />
      <TiktokPixel code={site.analyticsCodes.ttCode} />
      
    </>
  );
}

export default Analytics;
