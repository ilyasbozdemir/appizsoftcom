import React, { useEffect } from "react";
import { services } from "../../../constants/services";
import MetaHead from "../../../components/shared/MetaHead";

function DOurServiceDetail({ service }) {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.appizsoft.com"
      : "http://localhost:3000";

  const [site, setSite] = React.useState({
    publisher: `Appizsoft`,
    title: `${service.title} • Appizsoft `,
    url: baseUrl,
    image: baseUrl + "/logo.svg",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
    isRobotIndex: true,
  });
  
  useEffect(() => {
    setSite((prevSite) => ({
      ...prevSite,
      title: `${service.title} • Appizsoft `,
    }));
  }, [service]);

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

      <main>
        <>{service.title}</>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = services.map((service) => {
    return {
      params: {
        id: service.href,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const service = services.find((service) => service.href === id);

  return {
    props: {
      service: service || null,
    },
  };
}

export default DOurServiceDetail;
