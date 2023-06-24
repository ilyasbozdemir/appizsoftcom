import React from "react";
import { technologies } from "../../constants/technologies";

import MetaHead from "../../components/shared/MetaHead";

const OurTechnologiesCTA = () => {
  return <>OurTechnologiesCTA</>;
};
const OurTechnologiesContent = () => {
  return <>OurTechnologiesContent</>;
};

function OurTechnologiesPage() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.appizsoft.com"
      : "http://localhost:3000";

  const [site, setSite] = React.useState({
    publisher: `Appizsoft`,
    title: `Teknolojilerimiz • Appizsoft `,
    url: baseUrl,
    image: baseUrl + "/logo.svg",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
    isRobotIndex: true,
  });

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
          author={site.author}
          publisher={site.publisher}
          isRobotIndex={site.isRobotIndex}
          image={site.image}
        />
      </>

      <OurTechnologiesCTA />
      <OurTechnologiesContent />
    </>
  );
}

export default OurTechnologiesPage;
