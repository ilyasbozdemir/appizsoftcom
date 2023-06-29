import React from "react";
import MetaHead from "../../configuration//MetaHead";
import Meta from "../../configuration//MetaHead";


const AboutUsCTA = () => {
  return <>AboutUsCTA</>;
};
const AboutUsContent = () => {
  return <>AboutUsContent</>;
};

function AboutUsPage() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.appizsoft.com"
      : "http://localhost:3000";

  const [site, setSite] = React.useState({
    publisher: `Appizsoft`,
    title: `Hakkımızda • Appizsoft `,
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
      <Meta>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
          author={site.author}
          publisher={site.publisher}
          isRobotIndex={site.isRobotIndex}
          image={site.image}
        />
      </Meta>

      <main>
        <AboutUsCTA />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
