import React from "react";
import MetaHead from "../../configuration//MetaHead";
import Head from "next/head";

const OurServicesCTA = () => {
  return <>OurServicesCTA</>;
};
const OurServicesContent = () => {
  return <>OurServicesContent</>;
};


function OurServicesPage() {
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
      <Head>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
          author={site.author}
          publisher={site.publisher}
          isRobotIndex={site.isRobotIndex}
          image={site.image}
        />
      </Head>

      <main>
        <OurServicesCTA />
        <OurServicesContent />
      </main>
    </>
  )
}

export default OurServicesPage
