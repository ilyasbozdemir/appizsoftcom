import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import MetaHead from "../components/MetaHead";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: `ilyas Bozdemir,bozdemir.ib70@gmail.com`,
    title: `Anasayfa | appizsoftcom`,
    url: currentUrl,
    image: "",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
  });

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
        />
      </>
      <>
       
      </>
    </>
  );
}
